import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "海带丝干贝",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '前端', link: '/front/html' },
      { text: '后端', link: '/back/java' },
      { text: '关于我', link: '/about' }
    ],

    sidebar: {
      '/front/': [
        {
          text: '前端',
          items: [
            { text: 'JavaScript', link: '/front/javascript' },
            { text: 'CSS', link: '/front/css' },
            { text: 'HTML', link: '/front/html' },
            { text: 'Vue', link: '/front/vue' },
            { text: 'React', link: '/front/react' },
            { text: 'Node', link: '/front/node' },
            { text: 'Webpack', link: '/front/webpack' },
            { text: 'Vite', link: '/front/vite' },
            { text: 'TypeScript', link: '/front/typescript' },
            { text: 'Git', link: '/front/git' },
            { text: 'HTTP', link: '/front/http' },
            { text: '浏览器', link: '/front/browser' },
            // { text: '算法', link: '/front/algorithm' },
            // { text: '数据结构', link: '/front/data-structure' },
            // { text: '设计模式', link: '/front/design-pattern' },
            // { text: '计算机网络', link: '/front/computer-network' },
            // { text: '操作系统', link: '/front/operating-system' },
            // { text: '数据库', link: '/front/database' },
            // { text: '编译原理', link: '/front/compiler' },
            // { text: '计算机组成原理', link: '/front/computer-organization' },
            // { text: '计算机体系结构', link: '/front/computer-architecture' },
            // { text: '计算机图形学', link: '/front/computer-graphics' },
            // { text: '计算机视觉', link: '/front/computer-vision' },
            // { text: '人工智能', link: '/front/artificial-intelligence' },
            // { text: '机器学习', link: '/front/machine-learning' },
            // { text: '深度学习', link: '/front/deep-learning' },
            // { text: '自然语言处理', link: '/front/natural-language-processing' },
            // { text: '计算机安全', link: '/front/computer-security' },
            // { text: '区块链', link: '/front/blockchain' },
            // { text: '微服务', link: '/front/microservice' },
            // { text: '云计算', link: '/front/cloud-computing' },
            // { text: '大数据', link: '/front/big-data' },
            // { text: '移动端', link: '/front/mobile' },
            { text: '前端工程化', link: '/front/front-end-engineering' },
            { text: '性能优化', link: '/front/performance-optimization' },
            { text: '测试', link: '/front/test' },
            { text: '工具', link: '/front/tool' },
            { text: '面试', link: '/front/interview' },
            { text: '其他', link: '/front/other' },
          ]
        }
      ],
      '/back/': [
        {
          text: '后端',
          items: [
            { text: 'Java', link: '/back/java' },
            { text: 'Spring', link: '/back/spring' },
            { text: 'Spring Boot', link: '/back/spring-boot' },
            { text: 'Spring Cloud', link: '/back/spring-cloud' },
            { text: 'Spring Security', link: '/back/spring-security' },
            { text: 'Spring Data', link: '/back/spring-data' },
            { text: 'Spring Batch', link: '/back/spring-batch' },
            { text: 'Spring Integration', link: '/back/spring-integration' },
            { text: 'Spring WebFlux', link: '/back/spring-webflux' },
            { text: 'Spring Web MVC', link: '/back/spring-web-mvc' },
            { text: 'Spring WebSocket', link: '/back/spring-websocket' },
            { text: 'Spring Boot Admin', link: '/back/spring-boot-admin' },
            { text: 'Spring Boot Actuator', link: '/back/spring-boot-actuator' },
            { text: 'Spring Boot Data', link: '/back/spring-boot-data' },
            { text: 'Spring Boot Security', link: '/back/spring-boot-security' },
            { text: 'Spring Boot Web', link: '/back/spring-boot-web' },
            { text: 'Spring Boot Test', link: '/back/spring-boot-test' },
            { text: 'Spring Boot DevTools', link: '/back/spring-boot-devtools' },
            { text: 'Spring Boot Starter', link: '/back/spring-boot-starter' },
          ]
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  ignoreDeadLinks: true,
})
