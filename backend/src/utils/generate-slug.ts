function generateSlug(input: string): string {
  const transliteratedInput = input
    .replace(/[^a-zA-Zа-яА-Я0-9\s]/g, '') // Remove any characters that are not letters, digits, or spaces
    .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
    .trim() // Trim leading and trailing spaces
    .toLowerCase(); // Convert the string to lowercase

  return transliteratedInput
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/[^a-zA-Z0-9-]/g, '') // Remove any characters that are not letters, digits, or hyphens
    .replace(/-{2,}/g, '-'); // Replace multiple consecutive hyphens with a single hyphen
}
