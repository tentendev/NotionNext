import { getAllCategories, getAllPosts, getAllTags } from '@/lib/notion'
import { getNotionData } from '@/lib/notion/getNotionData'
import React from 'react'
import ArchiveLayout from '@/theme/custom/layouts/archive/ArchiveLayout'

export async function getStaticProps() {
  const from = 'index'
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

const Index = ({ allPosts, tags, categories }) => {
  // 深拷贝
  const postsSortByDate = Object.create(allPosts)

  // 时间排序
  postsSortByDate.sort((a, b) => {
    const dateA = new Date(a?.date.start_date || a.createdTime)
    const dateB = new Date(b?.date.start_date || b.createdTime)
    return dateB - dateA
  })

  const archivePosts = {}

  postsSortByDate.forEach(post => {
    const date = post.date.start_date.slice(0, 7)
    if (archivePosts[date]) {
      archivePosts[date].push(post)
    } else {
      archivePosts[date] = [post]
    }
  })

  return <ArchiveLayout tags={tags} archivePosts={archivePosts} categories={} />
}

export default Index
