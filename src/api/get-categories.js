import axios from "axios";
import MockAdapter from "axios-mock-adapter";
// import { categories } from "../data/categories";

const mock = new MockAdapter(axios);

mock.onGet("/categories").reply(200, {
  // categories
});

export const getCategories = async () => {
  // console.log(typeof setCategories);
  try {
    return await axios.get("/categories");
  } catch (error) {
    throw new Error(error);
  }
};
