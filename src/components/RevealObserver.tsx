"use client";

import { useEffect } from "react";
import { initReveal } from "@/lib/reveal";

/** Mounts the page-wide scroll-reveal observer. Renders nothing. */
export default function RevealObserver() {
  useEffect(() => initReveal(), []);
  return null;
}
