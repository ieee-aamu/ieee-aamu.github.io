// import { useState } from "react";
// import { Package, Share, Users, Briefcase, Network } from "lucide-react"; // Import relevant icons

// export default function ProgramsSection() {
//   const [activeProgram, setActiveProgram] = useState<keyof typeof programs | null>(null);

//   const programs = {
//     "3d-printing": {
//       title: "3D Printing Workshop",
//       description:
//         "Learn the fundamentals of 3D printing, including design, modeling, and hands-on experience with printers.",
//       images: ["images/3dprint1.jpg", "images/3dprint2.jpg"],
//       icon: <Package className="w-6 h-6 text-maroon-600" />, // Icon for 3D Printing
//     },
//     ops: {
//       title: "OPS Project",
//       description:
//         "The Opportunity Project Sprint (OPS) is a hands-on initiative where teams solve real-world problems using technology.",
//       images: ["images/ops1.jpg", "images/ops2.jpg"],
//       icon: <Share className="w-6 h-6 text-maroon-600" />, // Icon for OPS Project
//     },
//     southeastcon: {
//       title: "IEEE SoutheastCon",
//       description:
//         "Our flagship conference where students participate in technical paper competitions, hackathons, and networking events.",
//       images: ["images/southeastcon1.jpg", "images/southeastcon2.jpg"],
//       icon: <Users className="w-6 h-6 text-maroon-600" />, // Icon for SoutheastCon
//     },
//     gbm: {
//       title: "General Body Meeting",
//       description:
//         "Stay updated on IEEE activities, upcoming events, and ways to get involved in leadership and technical projects.",
//       images: ["images/gbm1.jpg", "images/gbm2.jpg"],
//       icon: <Briefcase className="w-6 h-6 text-maroon-600" />, // Icon for GBM
//     },
//     industry: {
//       title: "Industry Engagement",
//       description:
//         "Connect with professionals from top companies, attend guest lectures, and explore career opportunities.",
//       images: ["images/industry1.jpg", "images/industry2.jpg"],
//       icon: <Briefcase className="w-6 h-6 text-maroon-600" />, // Icon for Industry Engagement
//     },
//     networking: {
//       title: "Networking",
//       description:
//         "Build connections with peers, alumni, and industry professionals through IEEE networking events and socials.",
//       images: ["images/networking1.jpg", "images/networking2.jpg"],
//       icon: <Network className="w-6 h-6 text-maroon-600" />, // Icon for Networking
//     },
//   };

//   return (
//     <section id="events" className="mb-10 text-center">
//       <h2 className="text-maroon-700 text-3xl font-semibold mb-6">
//         Our Programs
//       </h2>

//       {/* Flexbox for Buttons */}
//       <div className="flex justify-center items-center space-x-4 flex-wrap">
//         {Object.keys(programs).map((key) => (
//           <button
//             key={key}
//             onClick={() => setActiveProgram(key as keyof typeof programs)}
//             className="w-48 h-48 flex flex-col items-center justify-center rounded-lg 
//                        bg-white border-[4px] border-maroon-600 shadow-lg 
//                        text-maroon-800 font-bold text-lg transition-all duration-300 
//                        hover:scale-105 hover:border-yellow-500 hover:shadow-[0_0_20px_4px_rgba(255,215,0,0.6)]"
//           >
//             {programs[key as keyof typeof programs].icon}
//             <span className="mt-2 text-sm">{programs[key as keyof typeof programs].title}</span>
//           </button>
//         ))}
//       </div>

//       {/* Modal */}
//       {activeProgram && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-2xl w-1/2 relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
//               onClick={() => setActiveProgram(null)}
//             >
//               ✖
//             </button>
//             <h3 className="text-xl font-bold text-gray-800">
//               {programs[activeProgram].title}
//             </h3>
//             <p className="mt-2 text-gray-600">{programs[activeProgram].description}</p>

//             {/* Image Gallery */}
//             <div className="mt-4 flex space-x-2 overflow-x-auto">
//               {programs[activeProgram].images.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt={`Gallery ${index + 1}`}
//                   className="w-5/6 h-5/6 object-cover rounded-lg shadow-md"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

import { useState } from "react";
import { Package, Share, Users, Briefcase, Network } from "lucide-react"; // Import relevant icons

export default function ProgramsSection() {
  const [activeProgram, setActiveProgram] = useState<keyof typeof programs | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const programs = {
    "3d-printing": {
      title: "3D Printing Workshop",
      description:
        "Our 3D Printing Workshop provided participants with hands-on experience in 3D modeling, slicing, and printing. The session introduced attendees to the fundamentals of additive manufacturing, covering both the theoretical and practical aspects of 3D printing technology.",
      images: ["images/3dprint/3dprint1.jpg", "images/3dprint/3dprint2.jpg", "images/3dprint/3dprint3.jpg", "images/3dprint/3dprint4.jpg"],
      icon: <Package className="w-6 h-6 text-maroon-600" />, // Icon for 3D Printing
    },
    ops: {
      title: "IEEE OPS Program",
      description:
        "The Open Project Space Program brings IEEE at UCLA’s successful hardware engineering curriculum to AAMU. Through structured lectures, hands-on projects, and expert mentorship, OPS empowers student organizations to build and sustain impactful engineering programs. With resources for budgeting, event planning, and recruitment, OPS provides everything needed to foster innovation and technical growth",
      images: ["images/ops/ops1.jpg", "images/ops/ops2.jpg","images/ops/ops3.jpg","images/ops/ops4.jpg","images/ops/ops5.jpg"],
      icon: <Share className="w-6 h-6 text-maroon-600" />, // Icon for OPS Project
    },
    southeastcon: {
      title: "IEEE SoutheastCon",
      description:
        "Our flagship conference where students participate in technical paper competitions, hackathons, and networking events.",
      images: ["images/southeastcon1.jpg", "images/southeastcon2.jpg"],
      icon: <Users className="w-6 h-6 text-maroon-600" />, // Icon for SoutheastCon
    },
    gbm: {
      title: "General Body Meeting",
      description:
        "Our General Body Meeting (GBM) is held every semester to update members on IEEE activities, upcoming events, and opportunities for involvement. It’s a chance to connect with peers, learn about technical projects, and explore leadership roles within IEEE.",
      images: ["images/gbm/gbm1.jpg", "images/gbm/gbm2.jpg","images/gbm/gbm3.jpg","images/gbm/gbm4.jpg","images/gbm/gbm5.jpg","images/gbm/gbm6.jpg"],
      icon: <Briefcase className="w-6 h-6 text-maroon-600" />, // Icon for GBM
    },
    industry: {
      title: "Industry Engagement",
      description:
        "Connect with professionals from top companies, attend guest lectures, and explore career opportunities.",
      images: ["images/industry/industry1.jpg", "images/industry/industry2.jpg","images/industry/industry3.jpg","images/industry/industry4.jpg","images/industry/industry5.jpg","images/industry/industry6.jpg"],
      icon: <Briefcase className="w-6 h-6 text-maroon-600" />, // Icon for Industry Engagement
    },
    networking: {
      title: "Networking",
      description:
        "Build connections with peers, alumni, and industry professionals through IEEE networking events and socials.",
      images: ["images/net/networking1.jpg", "images/net/networking2.jpg", "images/net/networking3.jpg", "images/net/networking4.jpg", "images/net/networking5.jpg"],
      icon: <Network className="w-6 h-6 text-maroon-600" />, // Icon for Networking
    },
  };

  // Function to open modal with the first image
  const openModal = (programKey: keyof typeof programs) => {
    setActiveProgram(programKey);
    setCurrentImageIndex(0); // Start with the first image
  };

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % programs[activeProgram!].images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + programs[activeProgram!].images.length) %
        programs[activeProgram!].images.length
    );
  };

  return (
    <section id="events" className="mb-10 text-center">
      <h2 className="text-maroon-700 text-3xl font-semibold mb-6">Our Programs</h2>

      {/* Flexbox for Buttons */}
      <div className="flex justify-center items-center space-x-4 flex-wrap">
        {Object.keys(programs).map((key) => (
          <button
            key={key}
            onClick={() => openModal(key as keyof typeof programs)}
            className="w-48 h-48 flex flex-col items-center justify-center rounded-lg 
                       bg-white border-[4px] border-maroon-600 shadow-lg 
                       text-maroon-800 font-bold text-lg transition-all duration-300 
                       hover:scale-105 hover:border-yellow-500 hover:shadow-[0_0_20px_4px_rgba(255,215,0,0.6)]"
          >
            {programs[key as keyof typeof programs].icon}
            <span className="mt-2 text-sm">{programs[key as keyof typeof programs].title}</span>
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeProgram && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl w-1/2 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              onClick={() => setActiveProgram(null)}
            >
              ✖
            </button>
            <h3 className="text-xl font-bold text-gray-800">{programs[activeProgram].title}</h3>
            <p className="mt-2 text-gray-600">{programs[activeProgram].description}</p>

            <div className="mt-4 flex justify-center items-center relative">
              <img
                src={programs[activeProgram].images[currentImageIndex]}
                alt={`Gallery ${currentImageIndex + 1}`}
                className="max-w-full max-h-[500px] object-contain rounded-lg shadow-md"
              />
              {/* Navigation Buttons */}
              <div
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-red-700 font-bold cursor-pointer"
                onClick={prevImage}
              >
                &#10094; {/* Left Arrow */}
              </div>
              <div
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-red-700 font-bold cursor-pointer"
                onClick={nextImage}
              >
                &#10095; {/* Right Arrow */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

