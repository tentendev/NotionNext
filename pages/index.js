import { getAllCategories, getAllPosts, getAllTags } from '@/lib/notion'
import BLOG from '@/blog.config'
import { getNotionData } from '@/lib/notion/getNotionData'
import { IndexLayout } from '@/theme'

export async function getStaticProps () {
  const from = 'index'
  const notionPageData = await getNotionData({ from })
  const allPosts = await getAllPosts({ notionPageData, from })
  const categories = await getAllCategories(allPosts)
  const tagOptions = notionPageData.tagOptions
  const tags = await getAllTags({ allPosts, tagOptions })
  const meta = {
    title: `${BLOG.title} | ${BLOG.description} `,
    description: BLOG.description,
    type: 'website'
  }
  return {
    props: {
      allPosts,
      tags,
      categories,
      meta
    },
    revalidate: 1
  }
}

const Index = ({ allPosts, tags, meta, categories }) => {
  return <IndexLayout allPosts={allPosts} tags={tags} meta={meta} categories={categories} />
}

export default Index
