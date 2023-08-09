"use client";

import { Heading } from "@/components/Heading";
import { MessageSquare } from "lucide-react";
import React from "react";

const Conversation = () => {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Our Most Advanced conversation model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  );
};

export default Conversation;
