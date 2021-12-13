const BLOG = {
  title: 'Techsho',
  author: 'Tenten',
  email: 'dev@tenten.co',
  link: 'https://techsho.com',
  description: '欢迎访问塘里1024的博客，这里主要是关于编程技术与投资理财相关的思考。我的本职是一名程序员、写博客是我的业余爱好',
  lang: 'zh-CN', // ['zh-CN','en-US'] default lang => see /lib/lang.js for more.
  notionPageId: process.env.NOTION_PAGE_ID || 'ba852a9363554b928db9c14a819ed0bc', // Important page_id！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  defaultImgCover: 'https://avatars.githubusercontent.com/u/15920488', // default image cover
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'font-sans', // ['font-sans', 'font-serif', 'font-mono']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#111827', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy in a folder
  since: 2020, // if leave this empty, current year will be used.
  postsPerPage: 6, // post counts per page
  sortByDate: false,
  showAbout: true, // WIP
  showArchive: true, // WIP
  autoCollapsedNavBar: false, // the automatically collapsed navigation bar
  socialLink: 'https://weibo.com/u/2245301913',
  seo: {
    keywords: ['建站', 'Notion', '赚钱', '写作', '副业'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  analytics: {
    provider: 'ga', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.tangly1024.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.tangly1024.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: 'G-5EV4HZD0XX' // e.g: G-XXXXXXXXXX
    },
    baiduAnalytics: 'f683ef76f06bb187cbed5546f6f28f28', // e.g only need xxxxx -> https://hm.baidu.com/hm.js?[xxxxx]
    busuanzi: true, // see http://busuanzi.ibruce.info/
    cnzzAnalytics: '' // 站长统计id only need xxxxxxxx -> https://s9.cnzz.com/z_stat.php?id=[xxxxxxxx]&web_id=[xxxxxxx]
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: 'cusdis', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: 'NotionNext', // The repository of store comments
      owner: 'tentendev',
      admin: ['tentendev'],
      clientID: 'be7864a16b693e256f8f',
      clientSecret: 'dbd0f6d9ceea8940f6ed20936b415274b8fe66a2',
      distractionFreeMode: false
    },
    cusdisConfig: {
      appId: '445ba48e-f751-487f-b22f-cdbe3310d28f', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    },
    utterancesConfig: {
      repo: 'tentendev/NotionNext'
    }
  },
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  googleAdsenseId: 'ca-pub-2708419466378217', // 谷歌广告ID
  DaoVoiceId: '', // 在线聊天 DaoVoice http://dashboard.daovoice.io/get-started
  TidioId: '' // 在线聊天 https://www.tidio.com/
}
// export default BLOG
module.exports = BLOG
