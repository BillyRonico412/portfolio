import type { CollectionEntry } from "astro:content"

export const sortByDate = (
	a: CollectionEntry<"project">,
	b: CollectionEntry<"project">,
) => {
	const dateB = new Date()
	dateB.setMonth(b.data.month - 1)
	dateB.setFullYear(b.data.year)
	const dateA = new Date()
	dateA.setMonth(a.data.month - 1)
	dateA.setFullYear(a.data.year)
	return dateB.getTime() - dateA.getTime()
}
