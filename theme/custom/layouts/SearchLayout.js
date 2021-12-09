import BaseLayout from '@/theme/custom/layouts/BaseLayout'
import StickyBar from '@/theme/custom/components/StickyBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import BlogPostListScroll from '@/theme/custom/components/BlogPostListScroll'

const SearchLayout = ({ meta, tags, allPosts, searchKey, categories, filteredPosts }) => {
  return <BaseLayout meta={meta} tags={tags} totalPosts={allPosts} currentSearch={searchKey} categories={categories}>
    <div className=''>
      <StickyBar>
        <div className='p-4 dark:text-gray-200'><FontAwesomeIcon icon={faSearch} className='mr-1' /> 搜索词： {searchKey}
        </div>
      </StickyBar>
      <BlogPostListScroll posts={filteredPosts} tags={tags} currentSearch={searchKey} />
    </div>
  </BaseLayout>
}
export default SearchLayout
