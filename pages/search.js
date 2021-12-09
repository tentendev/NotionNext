import { getAllCategories, getAllPosts, getAllTags } from '@/lib/notion'
import BLOG from '@/blog.config'
import { useRouter } from 'next/router'
import { getNotionData } from '@/lib/notion/getNotionData'
import { useGlobal } from '@/lib/global'
import { SearchLayout } from '@/theme'

const Search = ({ allPosts, tags, categories }) => {
  let filteredPosts = []
  const searchKey = getSearchKey()
  if (searchKey) {
    filteredPosts = allPosts.filter(post => {
      const tagContent = post.tags ? post.tags.join(' ') : ''
      const searchContent = post.title + post.summary + tagContent
      return searchContent.toLowerCase().includes(searchKey.toLowerCase())
    })
  }
  const { locale } = useGlobal()
  const meta = {
    title: `${BLOG.title} | ${locale.NAV.SEARCH} `,
    description: BLOG.description,
    type: 'website'
  }
  return <SearchLayout meta={meta} tags={tags} allPosts={allPosts} searchKey={searchKey} categories={categories}
                       filteredPosts={filteredPosts} />
}

export async function getStaticProps () {
  const from = 'search-props'
  const notionPageData = await getNotionData({ from })
  const allPosts = await getAllPosts({ notionPageData, from })
  const categories = await getAllCategories(allPosts)
  const tagOptions = notionPageData.tagOptions
  const tags = await getAllTags({ allPosts, tagOptions })

  return {
    props: {
      allPosts,
      tags,
      categories
    },
    revalidate: 1
  }
}

export function getSearchKey () {
  const router = useRouter()
  if (router.query && router.query.s) {
    return router.query.s
  }
  return null
}

export default Search
