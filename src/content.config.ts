import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ============ 五大内容集合 ============ */
/* 每个板块对应一个文件夹，一篇内容 = 一个 Markdown 文件 + 头部元数据 */
/* 朱曦同志在 CMS 后台或 Obsidian 里编辑的就是这些文件 */

const base = (fields) =>
  z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    ...fields,
  });

// 01 摄影 —— 一组照片 + 文字
const photography = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/photography' }),
  schema: base({
    description: z.string().optional(),
    location: z.string().optional(),
    cover: z.string().optional(),          // 封面图路径，如 /images/xxx.jpg
    tags: z.array(z.string()).default([]),
  }),
});

// 02 读书笔记 —— 一本书一篇
const reading = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reading' }),
  schema: base({
    book: z.string(),                      // 书名
    author: z.string().optional(),         // 作者
    rating: z.number().min(1).max(5).optional(),  // 五星制
    status: z.enum(['在读', '读完', '搁置']).default('在读'),
    tags: z.array(z.string()).default([]),
  }),
});

// 03 旅游纪实 —— 一趟旅程或一个地点
const travel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/travel' }),
  schema: base({
    location: z.string().optional(),       // 地点，如 "日本 · 京都"
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// 04 大事记 —— 一个事件一条（年份驱动，非文章）
const timeline = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/timeline' }),
  schema: z.object({
    year: z.number().int(),                // 1972 / 1995 / 2025
    title: z.string(),                     // 事件标题
    highlight: z.boolean().default(false), // 是否高亮（时间轴实心节点）
    order: z.number().default(0),          // 同年多个事件的排序
  }),
});

// 05 作品 —— 工程或艺术创作
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: base({
    medium: z.string().optional(),         // 媒介：布面油画 / 数字 / Verilog 等
    year: z.number().int().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { photography, reading, travel, timeline, works };
