"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

// Remembers gclid / utm parameters on first touch (see lib/attribution.ts). Renders nothing.
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
