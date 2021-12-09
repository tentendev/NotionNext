import { getAllCategories, getAllPosts, getAllTags, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import { getPageTableOfContents } from 'notion-utils'
import React from 'react'
import Custom404 from '@/pages/404'

import 'prismjs/themes/prism-okaidia.css'
import 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import { getNotionPageData } from '@/lib/notion/getNotionData'
import ArticleLayout from '@/theme/custom/layouts/article/ArticleLayout'

const ArticleDetail = ({ post, blockMap, tags, prev, next, allPosts, categories }) => {
  if (!post) {
    return <Custom404 />
  }
  return <ArticleLayout categories={categories} allPosts={allPosts} tags={tags} blockMap={blockMap} next={next}
                        post={post} prev={prev} />
}

export async function getStaticPaths () {
  let posts = []
  if (BLOG.isProd) {
    posts = await getAllPosts({ from: 'slug - paths', includePage: true })
  }
  return {
    paths: posts.map(row => `${BLOG.path}/article/${row.slug}`),
    fallback: true
  }
}

export async function getStaticProps ({ params: { slug } }) {
  const from = `slug-props-${slug}`
  const notionPageData = await getNotionPageData({ from })
  let allPosts = await getAllPosts({ notionPageData, from, includePage: true })
  const post = allPosts.find(p => p.slug === slug)

  if (!post) {
    return { props: {}, revalidate: 1 }
  }

  const blockMap = await getPostBlocks(post.id, 'slug')
  post.toc = []
  if (blockMap) {
    post.toc = getPageTableOfContents(post, blockMap)
  }

  allPosts = allPosts.filter(post => post.type[0] === 'Post')
  const tagOptions = notionPageData.tagOptions
  const tags = await getAllTags({ allPosts, tagOptions })
  const categories = await getAllCategories(allPosts)
  // 上一篇、下一篇文章关联
  const index = allPosts.indexOf(post)
  const prev = allPosts.slice(index - 1, index)[0] ?? allPosts.slice(-1)[0]
  const next = allPosts.slice(index + 1, index + 2)[0] ?? allPosts[0]

  return {
    props: { post, blockMap, tags, prev, next, allPosts, categories },
    revalidate: 1
  }
}

export default ArticleDetail
