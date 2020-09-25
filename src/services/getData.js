import axios from "axios";

export default {
  async getRealData() {
    let res = await axios.get("http://localhost:8000/data");
    return res.data;
  },
  getFakeData() {
    return [
      { Name: "Test Data 1", age: 45 },
      { Name: "Test Data 2", age: 5 }
    ];
  }
};
