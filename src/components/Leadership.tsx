import React from "react";

export default function Leadership() {
  return (
    <section id="team" className="mb-10">
      <h2 className="text-maroon-700 text-3xl font-semibold mb-6 text-center">
        Meet Our Leadership
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Leadership cards... */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
            <img
              src="images/daniel_hs.jpeg"
              alt="President"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Daniel Lambo</h3>
            <p className="text-maroon-700">President</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
            <img
              src="images/john_hs.JPG"
              alt="Vice President"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">John Adeyemo</h3>
            <p className="text-maroon-700">Vice President</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
            <img
              src="images/sudeep_hs.jpeg"
              alt="Secretary"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Sudeep Joshi</h3>
            <p className="text-maroon-700">Secretary</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
            <img
              src="images/mauyon_hs.jpg"
              alt="Historian"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Mauyon Wusu</h3>
            <p className="text-maroon-700">Historian</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
            <img
              src="images/ruva_hs.JPG"
              alt="Treasurer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">
              Ruvarashe Nyabando
            </h3>
            <p className="text-maroon-700">Treasurer</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
            <img
              src="images/obukome_hs.jpg"
              alt="Operational Manager"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">
              Ogheneobukome Ejaife
            </h3>
            <p className="text-maroon-700">Operational Manager</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
            <img
              src="images/sunday_hs.jpg"
              alt="Technical Manager"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Sunday Ochigbo</h3>
            <p className="text-maroon-700">Technical Manager</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
            <img
              src="/images/Kelvin Perkins' Headshot.jpeg"
              alt="Membership coordinator"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Kelvin Perkins</h3>
            <p className="text-maroon-700">Membership Coordinator</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
            <img
              src="/images/Haroon.png"
              alt="GA Assistant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Haroon Tabassum</h3>
            <p className="text-maroon-700">Graduate Student Assistant</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
            <img
              src="images/dr_yaqub.jpg"
              alt="Faculty Advisor"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Dr. Raziq Yaqub</h3>
            <p className="text-maroon-700">Faculty Advisor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
