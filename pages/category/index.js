import { getAllCategories, getAllPosts, getAllTags } from '@/lib/notion'
import { getNotionPageData } from '@/lib/notion/getNotionData'
import React from 'react'
import CategoryIndexLayout from '@/theme/custom/layouts/category/CategoryIndexLayout'

export default function Category ({ tags, allPosts, categories }) {
  return <CategoryIndexLayout tags={tags} allPosts={allPosts} categories={categories} />
}

export async function getStaticProps () {
  const from = 'tag-index-props'
  const notionPageData = await getNotionPageData({ from })
  const allPosts = await getAllPosts({ notionPageData, from })
  const categories = await getAllCategories(allPosts)
  const tagOptions = notionPageData.tagOptions
  const tags = await getAllTags({ allPosts, sliceCount: 12, tagOptions })
  return {
    props: {
      tags,
      allPosts,
      categories
    },
    revalidate: 1
  }
}
