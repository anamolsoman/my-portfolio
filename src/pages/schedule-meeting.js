import Layout from "@/components/Layout";
import ScheduleMeeting from "@/components/ScheduleMeeting";
import React from "react";

export default function meetings() {
  return (
    <div>
      <Layout className="p-10 pt-0">
        <ScheduleMeeting />
      </Layout>
    </div>
  );
}
