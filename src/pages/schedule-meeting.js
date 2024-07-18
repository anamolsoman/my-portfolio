import Layout from "@/components/Layout";
import ScheduleMeeting from "@/components/ScheduleMeeting";
import TransitionEffect from "@/components/TransitionEffect";
import React from "react";

export default function meetings() {
  return (
    <div>
      <Layout className="p-10 pt-0">
        <TransitionEffect />
        <ScheduleMeeting />
      </Layout>
    </div>
  );
}
