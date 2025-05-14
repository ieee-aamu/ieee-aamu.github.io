import React from "react";
import { Calendar, Users, Award } from "lucide-react";

export default function About() {
  return (
    <section className="mb-10">
      <h2 className="text-maroon-700 text-3xl font-semibold mb-6 text-center">
        About IEEE AAMU
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="inline-block p-3 bg-maroon-100 rounded-full mb-4">
            <Users className="h-8 w-8 text-maroon-700" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">50+ Members</h3>
          <p className="mt-2 text-gray-600">
            Active students from various engineering disciplines
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="inline-block p-3 bg-maroon-100 rounded-full mb-4">
            <Calendar className="h-8 w-8 text-maroon-700" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">20+ Events</h3>
          <p className="mt-2 text-gray-600">
            Annual workshops, seminars, and competitions
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="inline-block p-3 bg-maroon-100 rounded-full mb-4">
            <Award className="h-8 w-8 text-maroon-700" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">15 Years</h3>
          <p className="mt-2 text-gray-600">
            Serving AAMU engineering community
          </p>
        </div>
      </div>
    </section>
  );
}
