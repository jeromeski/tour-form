import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import keywordsJson from "data/keywords.json";

const { keywords } = keywordsJson;

const mock = new MockAdapter(axios);

mock.onGet("/keywords").reply(200, { keywords });

export const getKeywords = async () => {
	try {
		const res = await axios.get("/keywords");
		return res;
	} catch (error) {
		throw new Error(error);
	}
};
