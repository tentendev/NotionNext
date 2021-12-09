import BLOG from '@/blog.config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import BaseLayout from '@/theme/custom/layouts/BaseLayout'

export default function NotFoundLayout () {
  return <BaseLayout meta={{ title: `${BLOG.title} | 页面找不到啦` }}>
    <div
      className='text-black w-full h-screen text-center justify-center content-center items-center flex flex-col'>
      <div className='dark:text-gray-200'>
        <h2 className='inline-block border-r-2 border-gray-600 mr-2 px-3 py-2 align-top'><FontAwesomeIcon
          icon={faSpinner} spin={true} className='mr-2' />404</h2>
        <div className='inline-block text-left h-32 leading-10 align-middle'>
          <h2 className='m-0 p-0'>页面无法加载，即将返回首页</h2>
        </div>
      </div>
    </div>
  </BaseLayout>
}
