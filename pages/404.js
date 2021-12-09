import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NotFoundLayout from '@/theme/custom/layouts/NotFoundLayout'

/**
 * 自定义404
 * @returns {JSX.Element}
 * @constructor
 */
export default function Custom404 () {
  const router = useRouter()
  useEffect(() => {
    // 延时3秒如果加载失败就返回首页
    setTimeout(() => {
      if (window) {
        const article = document.getElementById('article-wrapper')
        if (!article) {
          router.push('/')
        }
      }
    }, 3000)
  })
  return <NotFoundLayout />
}
