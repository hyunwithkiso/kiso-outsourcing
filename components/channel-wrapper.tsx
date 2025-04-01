"use client";

import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import { useEffect } from "react";

ChannelService.loadScript();

export default function ChannelWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    ChannelService.loadScript();
    ChannelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_TALK_ID || "",
    });
  }, []);
  return <>{children}</>;
}
