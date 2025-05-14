"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

export default function FlierModal() {
  // New state for flier modal
  const [showFlier, setShowFlier] = useState(true);

  if (!showFlier) return null;
  // Flier Modal Component

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <button
          onClick={() => setShowFlier(false)}
          className="absolute top-2 right-2 z-60 bg-white rounded-full p-2 hover:bg-gray-100 transition"
        >
          <X className="h-6 w-6 text-black" />
        </button>
        <img
          src="images/flier.jpg"
          alt="IEEE AAMU Flier"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
}
