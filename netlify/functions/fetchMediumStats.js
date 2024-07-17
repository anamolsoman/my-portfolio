// netlify/functions/fetchMediumStats.js
const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const response = await axios.get(
      "https://api.medium.com/v1/users/anamolsoman2/stats/total",
      {
        headers: {
          Authorization: `Bearer 23e561bd6c7fe5f6a022d4d0519f21d8242520308b3108dc535d9008d8100dcc7`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error fetching Medium stats:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error fetching Medium stats" }),
    };
  }
};
