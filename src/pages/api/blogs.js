import axios from "axios";
import xml2js from "xml2js";

export default async function handler(req, res) {
  try {
    const username = "anamolsoman2"; // Replace with your Medium username
    const rssUrl = `https://medium.com/feed/@${username}`;
    const response = await axios.get(rssUrl);
    const rssData = response.data;

    xml2js.parseString(rssData, (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Error parsing RSS feed" });
      }

      const items = result.rss.channel[0].item;
      console.log(items, "items");
      const blogs = items.map((item) => ({
        title: item.title[0],
        link: item.link[0],
        pubDate: item.pubDate[0],
        content: item["content:encoded"][0],
      }));

      res.status(200).json(blogs);
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching RSS feed" });
  }
}
