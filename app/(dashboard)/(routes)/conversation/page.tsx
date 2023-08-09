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
      />
    </div>
  );
};

export default Conversation;
