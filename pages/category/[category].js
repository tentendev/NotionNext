import { getAllCategories, getAllPosts, getAllTags } from '@/lib/notion'
import BLOG from '@/blog.config'
import React from 'react'
import { getNotionPageData } from '@/lib/notion/getNotionData'
import CategoryLayout from '@/theme/custom/layouts/category/CategoryLayout'

export default function Category ({ tags, allPosts, filteredPosts, category, categories }) {
  const meta = {
    title: `${BLOG.title} | ${category}`,
    description: BLOG.description,
    type: 'website'
  }
  return <CategoryLayout filteredPosts={filteredPosts} allPosts={allPosts} categories={categories} meta={meta}
                         tags={tags} category={categories} />
}

export async function getStaticProps ({ params }) {
  const from = 'category-props'
  const category = params.category
  const notionPageData = await getNotionPageData({ from })
  const allPosts = await getAllPosts({ notionPageData, from })
  const categories = await getAllCategories(allPosts)
  const tagOptions = notionPageData.tagOptions
  const tags = await getAllTags({ allPosts, tagOptions })
  const filteredPosts = allPosts.filter(
    post => post && post.category && post.category.includes(category)
  )
  return {
    props: {
      tags,
      allPosts,
      filteredPosts,
      category,
      categories
    },
    revalidate: 1
  }
}

export async function getStaticPaths () {
  let posts = []
  let categories = []
  if (BLOG.isProd) {
    posts = await getAllPosts({ from: 'category-path' })
    categories = await getAllCategories(posts)
  }
  return {
    paths: Object.keys(categories).map(category => ({ params: { category } })),
    fallback: true
  }
}
