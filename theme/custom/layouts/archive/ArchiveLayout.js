import BLOG from '@/blog.config'
import BaseLayout from '@/theme/custom/layouts/BaseLayout'
import StickyBar from '@/theme/custom/components/StickyBar'
import React from 'react'
import { useGlobal } from '@/lib/global'
import BlogPostArchive from '@/theme/custom/components/BlogPostArchive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive } from '@fortawesome/free-solid-svg-icons'

export default function ArchiveLayout ({ archivePosts, tags, categories }) {
  const { locale } = useGlobal()
  const meta = {
    title: `${BLOG.title} | ${locale.NAV.ARCHIVE} `,
    description: BLOG.description,
    type: 'website'
  }

  return (
    <BaseLayout meta={meta} tags={tags} categories={categories}>
      <div className=' pt-16 '>
        <StickyBar>
          <div className='py-2.5 text-lg lg:mx-14 dark:text-gray-200'><FontAwesomeIcon icon={faArchive}
                                                                                       className='mr-4' />{locale.NAV.ARCHIVE}
          </div>
        </StickyBar>
        <div className='mt-20 mx-2 lg:mx-20 bg-white p-12 dark:bg-gray-800'>
          {Object.keys(archivePosts).map(archiveTitle => (
            <BlogPostArchive key={archiveTitle} posts={archivePosts[archiveTitle]} archiveTitle={archiveTitle} />
          ))}
        </div>
      </div>
    </BaseLayout>
  )
}
