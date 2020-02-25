const expect = require("chai").expect;
const markets = require("./index");

describe("uganda markets", () => {
	describe("all", () => {
		it("should be an array of objects", () => {
			isArrayOfObjects = array => {
				return array.every(item => typeof item == "object");
			};

			expect(markets.all()).to.satisfy(isArrayOfObjects);
		});
	});
	describe("random", () => {
		it("should return a random item from markets.all", () => {
			const randomMarket = markets.random();
			expect(markets.all()).to.include(randomMarket);
		});
	});

	describe("search", () => {
		it("should search a market by name", () => {
			const searchText = "Mpanga";
            const searchResults = markets.search(searchText);
			expect(searchResults).to.satisfy(isArrayOfObjects);
		});
	});

	describe("selectOne", () => {
		it("should retrieve a single market by id", () => {
			const id = 1;
			const market = markets.selectOne(id);
			expect(market.id).to.equal(id);
		});
	});
});
