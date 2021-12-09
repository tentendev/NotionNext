import StickyBar from '@/theme/custom/components/StickyBar'
import BaseLayout from '@/theme/custom/layouts/BaseLayout'
import BlogPostListScroll from '@/theme/custom/components/BlogPostListScroll'
import React from 'react'
import CategoryList from '@/theme/custom/components/CategoryList'

export default function CategoryLayout ({ meta, tags, allPosts, filteredPosts, category, categories }) {
  return <BaseLayout meta={meta} tags={tags} currentCategory={category} totalPosts={allPosts} categories={categories}>
    <div className=' pt-16'>
      <StickyBar>
        <CategoryList currentCategory={category} categories={categories} />
      </StickyBar>
      <BlogPostListScroll posts={filteredPosts} tags={tags} currentCategory={category} />
    </div>
  </BaseLayout>
}
