"use client";

import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {
  const [meetingType, setMeetingType] = useState<
    "isJoiningMeeting" | "isScheduleMeeting" | "isInstantMeeting" | undefined
  >();
  const router = useRouter();

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        icon="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingType("isInstantMeeting")}
        className="bg-orange-1"
      />
      <HomeCard
        icon="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingType("isScheduleMeeting")}
        className="bg-blue-1"
      />
      <HomeCard
        icon="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        handleClick={() => setMeetingType("isJoiningMeeting")}
        className="bg-purple-1"
      />
      <HomeCard
        icon="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting recordings"
        handleClick={() => router.push("/recordings")}
        className="bg-yellow-1"
      />
    </section>
  );
};

export default MeetingTypeList;
