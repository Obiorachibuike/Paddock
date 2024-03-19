const axios = require("axios");

const read = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log("Invalid URL");
    console.log(error);
    return "Incorrect URL!";
  }
};

const post = async (url, newObject) => {
  try {
    const response = await axios.post(url, newObject);
    console.log("Successfull");
    console.log(response);
    return {
      data: response,
      sataus: 201,
      message: "Success",
    };
  } catch (error) {
    console.log("Invalid URL");
    return "Incorrect URL!";
  }
};
const update = async (url, newObject) => {
  try {
    const response = await axios.put(url, newObject);
    console.log(response);
    return {
      data: response,
      sataus: 201,
      message: "Success",
    };
  } catch (error) {
    console.log("Invalid URL");
    return "Incorrect URL!";
  }
};
const erase = async (url) => {
  try {
    const response = await axios.delete(url);
console.log("Successful");
    return response;
  } catch (error) {
    console.log("Invalid URL");
    return "Incorrect URL!";
  }
};



module.exports = { read, post, update, erase };
