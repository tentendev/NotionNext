import { getAllCategories, getAllPosts, getAllTags } from '@/lib/notion'
import BLOG from '@/blog.config'
import { getNotionPageData } from '@/lib/notion/getNotionData'
import { useGlobal } from '@/lib/global'
import React from 'react'
import TagIndexLayout from '@/theme/custom/layouts/tag/TagIndexLayout'

export default function Tag ({ tags, allPosts, categories }) {
  const { locale } = useGlobal()

  const meta = {
    title: `${BLOG.title} | ${locale.COMMON.TAGS}`,
    description: BLOG.description,
    type: 'website'
  }
  return <TagIndexLayout meta={meta} tags={tags} categories={categories} allPosts={allPosts} />
}

export async function getStaticProps () {
  const from = 'tag-index-props'
  const notionPageData = await getNotionPageData({ from })
  const allPosts = await getAllPosts({ notionPageData, from })
  const categories = await getAllCategories(allPosts)
  const tagOptions = notionPageData.tagOptions
  const tags = await getAllTags({ allPosts, sliceCount: 0, tagOptions })
  return {
    props: {
      tags,
      allPosts,
      categories
    },
    revalidate: 1
  }
}
