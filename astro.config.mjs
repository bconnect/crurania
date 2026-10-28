import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://crurania.com',
  // 构建产物为纯静态文件 —— dist/ 直接丢给 Nginx 或 OSS
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
