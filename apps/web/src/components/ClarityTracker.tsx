"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityTracker() {
  useEffect(() => {
    // Make sure to add your actual project id instead of "yourProjectId".
    const projectId = "yourProjectId";
    Clarity.init(projectId);
  }, []);

  return null;
}
