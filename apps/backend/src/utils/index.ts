/**
 * Paginate array
 * @param items T[]
 * @param page number
 * @param perPage number
 * @returns Paginated array
 */
export const paginate = <T>(items: T[], page = 1, perPage = 6) => {
	const offset = perPage * (page - 1);
	const paginatedItems = items.slice(offset, perPage * page);

	return paginatedItems;
};
