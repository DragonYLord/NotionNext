import BLOG from '@/blog.config'
import React from 'react'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return <div className='w-full justify-center flex-wrap flex'>
    <div className='space-x-3 text-xl text-gray-600 dark:text-gray-300 '>
      {BLOG.CONTACT_GITHUB && <a target='_blank' rel='noreferrer' title={'github'} href={BLOG.CONTACT_GITHUB} >
        <i className='transform hover:scale-125 duration-150 fab fa-github dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_ITCH && <a target='_blank' rel='noreferrer' title={'itch'} href={BLOG.CONTACT_ITCH} >
        <i className='transform hover:scale-125 duration-150 fab fa-itch-io dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_DOUBAN && <a target='_blank' rel='noreferrer' title={'douban'} href={BLOG.CONTACT_DOUBAN} >
        <i className='transform hover:scale-125 duration-150 fa-solid fa-ghost dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_STEAM && <a target='_blank' rel='noreferrer' title={'steam'} href={BLOG.CONTACT_STEAM} >
        <i className='transform hover:scale-125 duration-150 fab fa-steam dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_ZHIHU && <a target='_blank' rel='noreferrer' title={'zhihu'} href={BLOG.CONTACT_ZHIHU} >
        <i className='transform hover:scale-125 duration-150 fab fa-zhihu dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_TWITTER && <a target='_blank' rel='noreferrer' title={'twitter'} href={BLOG.CONTACT_TWITTER} >
        <i className='transform hover:scale-125 duration-150 fab fa-twitter dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_TELEGRAM && <a target='_blank' rel='noreferrer' href={BLOG.CONTACT_TELEGRAM} title={'telegram'} >
        <i className='transform hover:scale-125 duration-150 fab fa-telegram dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_LINKEDIN && <a target='_blank' rel='noreferrer' href={BLOG.CONTACT_LINKEDIN} title={'linkIn'} >
        <i className='transform hover:scale-125 duration-150 fab fa-linkedin dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_WEIBO && <a target='_blank' rel='noreferrer' title={'weibo'} href={BLOG.CONTACT_WEIBO} >
        <i className='transform hover:scale-125 duration-150 fab fa-weibo dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_INSTAGRAM && <a target='_blank' rel='noreferrer' title={'instagram'} href={BLOG.CONTACT_INSTAGRAM} >
        <i className='transform hover:scale-125 duration-150 fab fa-instagram dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_EMAIL && <a target='_blank' rel='noreferrer' title={'email'} href={`mailto:${BLOG.CONTACT_EMAIL}`} >
        <i className='transform hover:scale-125 duration-150 fas fa-envelope dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_BILIBILI && <a target='_blank' rel='noreferrer' title={'bilibili'} href={BLOG.CONTACT_BILIBILI} >
        <i className='transform hover:scale-125 duration-150 fab fa-bilibili dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_YOUTUBE && <a target='_blank' rel='noreferrer' title={'youtube'} href={BLOG.CONTACT_YOUTUBE} >
        <i className='transform hover:scale-125 duration-150 fab fa-youtube dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
    </div>
  </div>
}
export default SocialButton
