import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import categoriesJson from "data/categories.json";

const { categories } = categoriesJson;

const mock = new MockAdapter(axios);

mock.onGet("/categories").reply(200, { categories });

export const getCategories = async () => {
	try {
		const res = await axios.get("/categories");
		return res;
	} catch (error) {
		throw new Error(error);
	}
};
