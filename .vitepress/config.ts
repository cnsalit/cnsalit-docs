import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ko-KR',
  title: "큰별문학상 개발자 문서",
  description: "큰별문학상 사이트 개발 과정을 소개합니다.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config


    // 상단 네비게이션 바
    nav: [
      { text: '시작', link: '/' },
      { text: '소개', link: '/introduction/hello' },
      { text: '가이드', link: '/guide/hello' },
      { text: '블로그', link: '/blog/hello' },
      { text: '📚큰별문학상', link: 'https://www.cnsalit.com' }
    ],
    

    // 사이드바
    sidebar:
    {
      '/introduction/': [
        {
          text: '소개',
          items: [
            { text: '안녕하세요!', link: '/markdown-examples' },
          ]
        }
      ],

      '/guide/': [
        {
          text: '가이드',
          items: [
            { text: '시작에 앞서', link: '/guide/hello' },
            { text: 'git commit 가이드', link: '/guide/commit' },
            { text: '디자인 시스템', link: '/guide/designsystem' },
          ]
        }
      ],

      '/blog/': [
        {
          text: '블로그',
          items: [
            { text: '시작에 앞서', link: '/markdown-examples' },
          ]
        }
      ],
    },

    // 검색
    search: {
      provider: 'local'
    },

    // 기타 사항들
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cnsalit' }
    ],

    editLink: {
      pattern: 'https://github.com/cnsalit/cnsalit-docs',
      text: '큰별문학상의 개발자라면, GitHub에서 페이지 수정하기'
    },
    footer: {
      message: '본 문서는 MIT License에 따라 제공됩니다.',
    },
    darkModeSwitchLabel: '다크 모드',
    lastUpdatedText: '마지막 수정: ',
    returnToTopLabel: '맨 위로',
    sidebarMenuLabel: '목차',
    docFooter: {
      prev: '이전 글',
      next: '다음 글'
    }
  }
})