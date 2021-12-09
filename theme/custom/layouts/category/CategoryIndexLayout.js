import BLOG from '@/blog.config'
import BaseLayout from '@/theme/custom/layouts/BaseLayout'
import { useGlobal } from '@/lib/global'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faThList } from '@fortawesome/free-solid-svg-icons'

export default function CategoryIndexLayout ({ tags, allPosts, categories }) {
  const { locale } = useGlobal()
  const meta = {
    title: `${BLOG.title} | ${locale.COMMON.CATEGORY}`,
    description: BLOG.description,
    type: 'website'
  }
  return <BaseLayout meta={meta} totalPosts={allPosts} tags={tags}>
    <div className=' p-2 lg:px-14'>
      <div className='bg-white dark:bg-gray-700 px-10 py-10 mt-20 lg:mt-16'>
        <div className='dark:text-gray-200 mb-5'><FontAwesomeIcon icon={faThList} className='mr-4' />{locale.COMMON.CATEGORY}:</div>
        <div id='category-list' className='duration-200 flex flex-wrap'>
          {Object.keys(categories).map(category => {
            return <Link key={category} href={`/category/${category}`} passHref>
              <div className={'hover:text-black dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 px-5 cursor-pointer py-2 hover:bg-gray-100'}>
                <FontAwesomeIcon icon={faFolder} className='mr-4' />{category}({categories[category]})</div>
            </Link>
          })}
        </div>
      </div>
    </div>
  </BaseLayout>
}
