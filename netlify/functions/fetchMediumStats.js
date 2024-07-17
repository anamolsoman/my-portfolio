const axios = require("axios");

exports.handler = async function (event, context) {
  const mediumUsername = "anamolsoman2";
  const mediumApiToken = "YOUR_MEDIUM_API_TOKEN";

  try {
    // Step 1: Fetch User Information
    const userResponse = await axios.get(`https://api.medium.com/v1/me`, {
      headers: {
        Authorization: `Bearer ${mediumApiToken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const userId = userResponse.data.data.id;

    // Step 2: Fetch User Stats
    const statsResponse = await axios.get(
      `https://api.medium.com/v1/users/${userId}/stats`,
      {
        headers: {
          Authorization: `Bearer ${mediumApiToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(statsResponse.data),
    };
  } catch (error) {
    console.error("Error fetching Medium stats:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch Medium stats" }),
    };
  }
};
