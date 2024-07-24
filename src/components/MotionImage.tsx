"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const MImage = motion(Image);
export default function MotionImage(
  props: React.ComponentProps<typeof MImage>,
) {
  return <MImage {...props} />;
}
