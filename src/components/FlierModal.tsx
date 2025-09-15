"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export default function FlierModal() {
  // state for flier modal
  const [showFlier, setShowFlier] = useState(true);

  if (!showFlier) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 w-full h-screen overflow-hidden"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full h-full grid items-center overflow-y-auto p-5">
        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={() => setShowFlier(false)}
            className="absolute top-2 right-2 z-60 bg-white rounded-full p-2 hover:bg-gray-100 transition"
          >
            <X className="h-6 w-6 text-black" />
          </button>
          <Image
            src="/images/flier.jpg"
            alt="IEEE AAMU Flier"
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
