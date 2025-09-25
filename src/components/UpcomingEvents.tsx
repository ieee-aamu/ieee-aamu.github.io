"use client";
import React, { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

const upcomingEvents = [
  // {
  //   date: "20250919",
  //   displayDate: "September 19, 2025",
  //   startTime: "12:00 PM",
  //   endTime: "1:00 PM",
  //   startDateTime: "20250919T120000",
  //   endDateTime: "20250919T130000",
  //   location: "Engineering Building, Room 110",
  //   address: "Bond Engineering Building, Normal, AL 35762, USA",
  //   title: "Interest Meeting",
  //   description:
  //     "Come learn about IEEE-AAMU section and how to get involved on campus!",
  // },
  {
    date: "20250927",
    displayDate: "September 27, 2025",
    startTime: "12:00 PM",
    endTime: "2:00 PM",
    startDateTime: "20250927T120000",
    endDateTime: "20250927T140000",
    location: "SST Lobby/Courtyard, UAH",
    address:
      "Shelby Center for Science and Technology, Huntsville, AL 35805, USA",
    title: "IEEE Huntsville Section Fall Picnic",
    description:
      "Please join the for the Fall Picnic Social for the local IEEE Professionals to mix-n-mingle with the three local IEEE Student Chapters (AAMU, UAH, and UNA).",
  },
];
// Toggle event view function

const UpcomingEvents = () => {
  const [showAllEvents, setShowAllEvents] = useState(false);

  const toggleEventsView = () => {
    setShowAllEvents(!showAllEvents);
  };

  const displayedEvents = showAllEvents
    ? upcomingEvents
    : upcomingEvents.slice(0, 2);

  console.log(upcomingEvents.length);

  return (
    <section id="events" className="bg-white shadow-lg rounded-lg p-8 mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-maroon-700 text-3xl font-semibold">
          Upcoming Events
        </h2>
        {upcomingEvents.length > 2 && (
          <button
            onClick={toggleEventsView}
            className="text-maroon-700 font-semibold hover:underline transition-all"
          >
            {showAllEvents ? "View Less" : "View More"}
          </button>
        )}
      </div>

      <div className="space-y-6">
        {displayedEvents.map((event, index) => (
          <div
            key={index}
            className="border-l-4 border-maroon-700 pl-4 grid lg:grid-cols-[1fr_auto] flex-wrap gap-5 justify-between items-start"
          >
            <div>
              <div className="flex flex-wrap items-center gap-x-2 text-gray-500 mb-1">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.displayDate}</span>
                </span>
                {event.startTime !== "All Day" && (
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>
                      {event.startTime} - {event.endTime}
                    </span>
                  </span>
                )}
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
              <p className="mt-1 text-gray-600">{event.description}</p>
            </div>
            <Link
              href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                event.title
              )}&dates=${event.startDateTime}/${
                event.endDateTime
              }&details=${encodeURIComponent(
                event.description
              )}&location=${encodeURIComponent(
                event.address
              )}&sf=true&output=xml`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-maroon-700 font-semibold transition-all duration-300 hover:text-maroon-900 hover:shadow-md hover:shadow-maroon-500/50"
            >
              <Calendar className="h-5 w-5 mr-2 text-maroon-600 transition-all duration-300 group-hover:text-maroon-900" />
              Add to Calendar
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
