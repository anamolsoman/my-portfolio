import React, { useEffect, useState } from "react";
import axios from "axios";

const MediumStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediumStats = async () => {
      try {
        const response = await axios.get(
          "/.netlify/functions/fetchMediumStats"
        );
        setStats(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Medium stats:", error);
        setLoading(false);
      }
    };

    fetchMediumStats();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!stats) {
    return <p>Error fetching stats</p>;
  }

  return (
    <div>
      <h2>Medium Stats</h2>
      <p>Total Claps: {stats.totalClapCount}</p>
      <p>Total Views: {stats.viewsCount}</p>
      {/* Render additional stats as needed */}
    </div>
  );
};

export default MediumStats;
