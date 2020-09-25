import axios from "axios";
const rootUrl = "http://bot.api.corasoftware.co.uk/api/";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkZXZlbG9wbWVudC10ZWFtLWFwaS10b2tlbiIsImlhdCI6MTYwMTA1NzEzMywic3ViIjoiREVWRUxPUE1FTlQiLCJpc3MiOiJyb3dhbiJ9.KI-bcBAi6O9529vTu4PRjir7und6UpaMPJ2y29aJJsM";
export default {
  async getRealData() {
    const endpoint = "test-api";
    const fullUrl = `${rootUrl}${endpoint}?token=${token}`;
    let res = await axios.get(fullUrl, {
      headers: { "Access-Control-Max-Age": "*" }
    });
    return res.data;
  },
  async getStarwarsData() {
    let res = await axios.get("https://swapi.dev/api/people/1");
    return res.data;
  },
  getFakeData() {
    return [
      { Name: "Test Data 1", age: 45 },
      { Name: "Test Data 2", age: 5 }
    ];
  }
};
