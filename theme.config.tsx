import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
const YEAR = new Date().getFullYear();
const meta = {
  title: '이찬우의 Next.js Blog',
  description: 'Next.js 포트폴리오 블로그',
  image: '/images/22313.png'
}
const config: DocsThemeConfig = {
  logo: <strong>Aldrich's Portfolio Blog</strong>,
  project: {
    link: 'https://github.com/LChanwoo/nextjs-blog',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: `${YEAR}@Chanwoo Aldrich Lee, All rights reserved.`,
  },
  head: (
    <>
      <title>Aldrich's Portfolio Blog</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} key="title"/>
      <meta property="og:image" content={meta.image} />
      <link rel="icon" href="/favicon1.ico" />
    </>
  ),
}

export default config
