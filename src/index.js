const uniqueRandomArray = require("unique-random-array");
const Fuse = require("fuse.js");
const markets = require("./markets.json");

module.exports = {
	all: markets,
	random: uniqueRandomArray(markets),
	search: text => {
		const options = {
			keys: ['name']
		};
		const fuse = new Fuse(markets, options);
		return fuse.search(text);
	}
};
