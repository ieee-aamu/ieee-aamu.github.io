import Image from "next/image";
import React from "react";

export default function Leadership() {
  const leaders = [
    {
      name: "Daniel Lambo",
      role: "President",
      image: "/images/leaders/daniel.jpeg",
    },
    {
      name: "John Adeyemo",
      role: "Vice President",
      image: "/images/leaders/john.jpg",
    },
    {
      name: "Ruvarashe Nyabando",
      role: "Director of Special Projects",
      image: "/images/leaders/ruvarashe.jpg",
    },
    {
      name: "Mauyon Wusu",
      role: "Secretary",
      image: "/images/leaders/mauyon.jpg",
    },
    {
      name: "Valencia Ross",
      role: "Treasurer",
      image: "/images/leaders/valencia.jpg",
    },
    {
      name: "Bukata Mubanga",
      role: "Operations Manager",
      image: "/images/leaders/bukata.jpg",
    },
    {
      name: "Sunday Ochigbo",
      role: "Technical Project Manager",
      image: "/images/leaders/sunday.jpg",
    },
    {
      name: "Munachimso Arubaleze",
      role: "Membership Coordinator",
      image: "/images/leaders/munachimso.jpg",
    },
    {
      name: "Moyinoluwa Adelowo",
      role: "Webmaster",
      image: "/images/leaders/moyinoluwa.jpg",
    },
    {
      name: "Riley Roberts",
      role: "Public Relations Manager",
      image: "/images/leaders/riley.jpeg",
    },
    {
      name: "Uchenna Justin",
      role: "Social Media Manager",
      image: "/images/leaders/uchenna.jpg",
    },
    {
      name: "Nehemiah Edison",
      role: "Graduate Student Rep",
      image: "/images/leaders/nehemiah.jpg",
    },
    {
      name: "Dr. Raziq Yaqub",
      role: "Faculty Advisor",
      image: "/images/leaders/yaqub.jpg",
    },
  ];

  return (
    <section id="team" className="mb-20">
      <h2 className="text-maroon-700 text-3xl font-semibold mb-6 text-center">
        Meet Our Leadership
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
