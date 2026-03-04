import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['temel-bilgi', 'strateji', 'inceleme', 'ileri-duzey']),
    tags: z.array(z.string()),
    author: z.string().default('Slot Taktikleri Editör'),
    image: z.string().optional(),
    readingTime: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
