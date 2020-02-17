const uniqueRandomArray = require("unique-random-array");
const markets = require("./markets.json");

module.exports = {
	all: markets,
	random: uniqueRandomArray(markets)
};
