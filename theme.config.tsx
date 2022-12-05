import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
const YEAR = new Date().getFullYear();
const config: DocsThemeConfig = {
  logo: <span>Aldrich's Portfolio Blog</span>,
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
}

export default config
