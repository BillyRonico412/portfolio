import { z, defineCollection, reference } from "astro:content"

const technology = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string().nonempty(),
		simpleIcon: z.string().nonempty(),
		color: z.string().nonempty(),
		link: z.string().nonempty(),
	}),
})

const project = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string().nonempty(),
		description: z.string().nonempty(),
		technologies: z.array(reference("technology")),
		github: z.string().nonempty().nullable(),
		link: z.string().nonempty().nullable(),
		level: z.union([z.literal(1), z.literal(2), z.literal(3)]),
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
		thumbnail: z.string().nonempty(),
	}),
})

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string().nonempty(),
		description: z.string().nonempty(),
		thumbnail: z.string().nonempty(),
		date: z.string().nonempty(),
	}),
})

export const collections = {
	project,
	technology,
	blog,
}
