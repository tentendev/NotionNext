import StickyBar from '@/theme/custom/components/StickyBar'
import TagList from '@/theme/custom/components/TagList'
import BlogPostListScroll from '@/theme/custom/components/BlogPostListScroll'
import BaseLayout from '@/theme/custom/layouts/BaseLayout'

export default function TagLayout ({ meta, tags, currentTag, categories, allPosts, filteredPosts }) {
  return <BaseLayout meta={meta} tags={tags} currentTag={currentTag} categories={categories} totalPosts={allPosts}>
    <div className=' pt-16'>
      <StickyBar>
        <TagList tags={tags} currentTag={currentTag} />
      </StickyBar>
      <BlogPostListScroll posts={filteredPosts} tags={tags} currentTag={currentTag} />
    </div>
  </BaseLayout>
}
