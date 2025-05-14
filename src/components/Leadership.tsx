import Image from "next/image";
import React from "react";

export default function Leadership() {
  const leaders = [
    {
      name: "Daniel Lambo",
      role: "President",
      image: "/images/daniel_hs.jpeg",
    },
    {
      name: "John Adeyemo",
      role: "Vice President",
      image: "/images/john_hs.JPG",
    },
    {
      name: "Sudeep Joshi",
      role: "Secretary",
      image: "/images/sudeep_hs.jpeg",
    },
    {
      name: "Mauyon Wusu",
      role: "Historian",
      image: "/images/mauyon_hs.jpg",
    },
    {
      name: "Ruvarashe Nyabando",
      role: "Treasurer",
      image: "/images/ruva_hs.JPG",
    },
    {
      name: "Ogheneobukome Ejaife",
      role: "Operational Manager",
      image: "/images/obukome_hs.jpg",
    },
    {
      name: "Sunday Ochigbo",
      role: "Technical Manager",
      image: "/images/sunday_hs.jpg",
    },
    {
      name: "Kelvin Perkins",
      role: "Membership Coordinator",
      image: "/images/Kelvin Perkins' Headshot.jpeg",
    },
    {
      name: "Haroon Tabassum",
      role: "Graduate Student Assistant",
      image: "/images/Haroon.png",
    },
    {
      name: "Dr. Raziq Yaqub",
      role: "Faculty Advisor",
      image: "/images/dr_yaqub.jpg",
    },
  ];

  return (
    <section id="team" className="mb-20">
      <h2 className="text-maroon-700 text-3xl font-semibold mb-6 text-center">
        Meet Our Leadership
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Leadership cards... */}
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className="bg-white rounded-lg shadow-md overflow-hidden text-center pt-5"
          >
            <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
              <Image
                src={leader.image}
                alt={leader.role}
                className="w-full h-full object-cover"
                width={160}
                height={160}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{leader.name}</h3>
              <p className="text-maroon-700">{leader.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
