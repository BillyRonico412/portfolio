import { z, defineCollection, reference } from 'astro:content'

const technology = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string().min(1),
		simpleIcon: z.string().min(1),
		color: z.string().min(1),
		link: z.string().min(1),
	}),
})

const project = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string().min(1),
		description: z.string().min(1),
		technologies: z.array(reference('technology')),
		github: z.string().min(1).nullable(),
		link: z.string().min(1).nullable(),
		month: z.union([
			z.literal(1),
			z.literal(2),
			z.literal(3),
			z.literal(4),
			z.literal(5),
			z.literal(6),
			z.literal(7),
			z.literal(8),
			z.literal(9),
			z.literal(10),
			z.literal(11),
			z.literal(12),
		]),
		year: z.number(),
		thumbnail: z.string().min(1),
		pin: z.boolean().optional(),
	}),
})

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().min(1),
		description: z.string().min(1),
		date: z.string().min(1),
		tags: z.array(z.string().min(1)).max(10),
	}),
})

export const collections = {
	project,
	technology,
	blog,
}
