import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import categoriesJson from "data/categories.json";
import keywordsJson from "data/keywords.json";

const { categories } = categoriesJson;
const { keywords } = keywordsJson;

const mock = new MockAdapter(axios);

mock.onGet("/categories").reply(200, { categories });
mock.onGet("/keywords").reply(200, { keywords });

export const getCategories = async () => {
	try {
		const res = await axios.get("/categories");
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const getKeywords = async () => {
	try {
		const res = await axios.get("/keywords");
		return res;
	} catch (error) {
		console.log(error);
	}
};
