import React from "react";
import { InlineWidget } from "react-calendly";

const ScheduleMeeting = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/anamolsoman2/30min" />
    </div>
  );
};

export default ScheduleMeeting;
