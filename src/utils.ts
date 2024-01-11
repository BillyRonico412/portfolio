import type { CollectionEntry } from 'astro:content'

export const sortProject = (a: CollectionEntry<'project'>, b: CollectionEntry<'project'>) => {
  if (a.data.pin && !b.data.pin) {
    return -1
  }
  if (!a.data.pin && b.data.pin) {
    return 1
  }
  if (a.data.year > b.data.year) {
    return -1
  }
  if (a.data.year < b.data.year) {
    return 1
  }
  if (a.data.month > b.data.month) {
    return -1
  }
  if (a.data.month < b.data.month) {
    return 1
  }
  return 1
}