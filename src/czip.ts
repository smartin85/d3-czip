/**
 * Generates a collection from multiple arrays
 * 
 * @export
 * @param {{[key: string]: any[]}} input Object with arrays
 * @param {string} [primary] Key of primary array (result will have the same length)
 * @returns {{[key: string]: any}} Collection
 */
export default function(input: {[key: string]: any[]}, primary?: string) : {[key: string]: any} {
	let keys : string[] = Object.keys(input),
		primaryValues : any = input[primary || keys[0]];

	return primaryValues.map((val, i) => {
		let res = {};
		keys.forEach(k => res[k] = input[k][i]);
		return res;
	});
};