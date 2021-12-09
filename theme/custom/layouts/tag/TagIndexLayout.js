import BaseLayout from '@/theme/custom/layouts/BaseLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import TagItem from '@/theme/custom/components/TagItem'
import React from 'react'
import { useGlobal } from '@/lib/global'

export default function TagIndexLayout ({ meta, tags, currentTag, categories, allPosts, filteredPosts }) {
  const { locale } = useGlobal()

  return <BaseLayout meta={meta} categories={categories} totalPosts={allPosts}>
    <div className=' p-2 lg:px-14'>
      <div className='bg-white dark:bg-gray-700 px-10 py-10 mt-20 lg:mt-16'>
        <div className='dark:text-gray-200 mb-5'><FontAwesomeIcon icon={faTags} className='mr-4' />{locale.COMMON.TAGS}:
        </div>
        <div id='tags-list' className='duration-200 flex flex-wrap'>
          {tags.map(tag => {
            return <div key={tag.name} className='p-2'><TagItem key={tag.name} tag={tag} /></div>
          })}
        </div>
      </div>
    </div>
  </BaseLayout>
}
