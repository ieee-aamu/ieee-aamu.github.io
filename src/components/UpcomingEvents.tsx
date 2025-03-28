"use client";
import React, { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    date: "20250327/20250330",
    displayDate: "March 27-30, 2025",
    startTime: "All Day",
    endTime: "All Day",
    startDateTime: "20250327T000000",
    endDateTime: "20250330T235959",
    location: "Embassy Suites Concord (Charlotte), NC",
    title: "IEEE Regional Conference (South East Con 2025)",
    description: "Attend the regional conference and network with IEEE members from across the region."
  },
  {
    date: "20250403",
    displayDate: "April 3, 2025",
    startTime: "5:00 PM",
    endTime: "6:30 PM",
    startDateTime: "20250320T120000",
    endDateTime: "20250320T130000",
    location: "Engineering Building, Room 142",
    title: "IEEE Open Space Projects Lecture 3",
    description: "Learn the fundamentals of embedded programming using Arduino."
  },
  {
    date: "20250322/20250324",
    displayDate: "March 22-24, 2025",
    startTime: "All Day",
    endTime: "All Day",
    startDateTime: "20250322T000000",
    endDateTime: "20250324T235959",
    location: "Virtual Event",
    title: "IEEE Southeast con virtual technical conference",
    description: "Network with IEEE members from across the region and attend technical presentations."
  },
  {
    date: "20250401/20250430",
    displayDate: "April 12, 2025",
    startTime: "All Day",
    endTime: "All Day",
    startDateTime: "20250401T000000",
    endDateTime: "20250430T235959",
    location: "Engineering Building, Auditorium",
    title: "IEEE College Social (AAMU, UAH & UNA)",
    description: "Join us for a social event to network with other IEEE members."
  },
  {
    date: "20250405",
    displayDate: "April 5, 2025",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    startDateTime: "20250405T120000",
    endDateTime: "20250405T130000",
    location: "Engineering Building, Room 201",
    title: "IEEE Trivia Night",
    description: "IEEE trivia night with prizes for the best answers."
  },

];
  // Toggle event view function

const UpcomingEvents = () => {
  const [showAllEvents, setShowAllEvents] = useState(false);

  const toggleEventsView = () => {
    setShowAllEvents(!showAllEvents);
  };

  const displayedEvents = showAllEvents ? upcomingEvents : upcomingEvents.slice(0, 2);

  return (
    <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-maroon-700 text-3xl font-semibold">Upcoming Events</h2>
        <button onClick={toggleEventsView} className="text-maroon-700 font-semibold hover:underline transition-all">
          {showAllEvents ? "View Less" : "View More"}
        </button>
      </div>
      <div className="space-y-6">
        {displayedEvents.map((event, index) => (
          <div key={index} className="border-l-4 border-maroon-700 pl-4 flex justify-between items-start">
            <div>
              <div className="flex items-center text-gray-500 mb-1">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{event.displayDate}</span>
                {event.startTime !== "All Day" && (
                  <>
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    <span>{event.startTime} - {event.endTime}</span>
                  </>
                )}
                <MapPin className="h-4 w-4 ml-4 mr-2" />
                <span>{event.location}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
              <p className="mt-1 text-gray-600">{event.description}</p>
            </div>
            <a
            href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startDateTime}/${event.endDateTime}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&sf=true&output=xml`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-maroon-700 font-semibold transition-all duration-300 hover:text-maroon-900 hover:shadow-md hover:shadow-maroon-500/50"
            >
            <Calendar className="h-5 w-5 mr-2 text-maroon-600 transition-all duration-300 group-hover:text-maroon-900" />
            Add to Calendar
            </a>

          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
