import BaseLayout from '@/theme/custom/layouts/BaseLayout'
import BlogPostListScroll from '@/theme/custom/components/BlogPostListScroll'

const IndexLayout = ({ meta, tags, allPosts, categories }) => {
  return <BaseLayout meta={meta} tags={tags} totalPosts={allPosts} categories={categories}>
    <div className=''>
      <BlogPostListScroll posts={allPosts} tags={tags} />
    </div>
  </BaseLayout>
}

export default IndexLayout
