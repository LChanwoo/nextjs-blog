import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';
const YEAR = new Date().getFullYear();
const meta = {
  title: '이찬우의 Next.js Blog',
  description: 'Next.js 포트폴리오 블로그',
  image: '/images/me2.png'
}
const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/images/22313.png" alt="logo" style={{width:"24px",height:"24px"}}/>
      <strong> Aldrich's Portfolio Blog</strong>
    </>
  ),
  project: {
    link: 'https://github.com/LChanwoo/nextjs-blog',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/LChanwoo/nextjs-blog/tree/main/',
  footer: {
    text: `${YEAR}@Chanwoo Aldrich Lee, All rights reserved.`,
  },
  head: ()=>{
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return(
    <>
      <title>Aldrich's Portfolio Blog</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={frontMatter.description || meta.description} />
      <meta property="og:title" content={frontMatter.title || meta.title} key="title"/>
      <meta property="og:image" content={meta.image} />
      <link rel="icon" href="/favicon1.ico" />
    </>
  )},
  sidebar:{
    defaultMenuCollapseLevel: 0,
  },
  feedback: {
    content: undefined
  },
  toc: {
    float: true,
  },
  useNextSeoProps(){
    return {
      titleTemplate: "%s | Aldrich's Portfolio Blog",
    }
  }
}

export default config
