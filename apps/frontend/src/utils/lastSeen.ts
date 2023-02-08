import fromNow from 'fromnow';

/**
 * The function returns the last seen value
 * @param timestamp The timestamp
 * @returns The result string of last seen value
 */
export const getLastSeen = (timestamp: string | undefined) => {
	if (!timestamp) {
		return '';
	}

	return `${fromNow(timestamp)} ago`;
};
