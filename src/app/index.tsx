"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Calendar, Users, Award, Book, Activity, X } from "lucide-react";
import Link from "next/link";
import UpcomingEvents from "@/components/UpcomingEvents";
import ProgramsSection from "@/components/ProgramsSection";

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);
  
  // New state for flier modal
  const [showFlier, setShowFlier] = useState(true);
  
  // Array of background images
  const backgroundImages = [
    'images/home-pic.png',
    'images/backgroundphoto.jpeg',
    'images/ETB.jpeg',
    'images/ethicscomp.jpg',
    'images/daniellambo.jpg',
  ];

  useEffect(() => {
    // Change the background image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Flier Modal Component
  const FlierModal = () => {
    if (!showFlier) return null;

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
);}


  // Improved handleSubmit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    // Encode the message properly for mailto
    const encodedSubject = encodeURIComponent(`Message from ${email}`);
    const encodedBody = encodeURIComponent(message);
    const mailtoLink = `mailto:ieeeaamu1875@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
    
    try {
      // Try to open the email client
      window.open(mailtoLink, '_blank');
      
      // Provide feedback to the user
      setEmailStatus("Email client opened. If nothing happened, please email us directly at ieeeaamu1875@gmail.com");
      
      // Reset the form
      (e.target as HTMLFormElement).reset();
      
      // Clear the status message after 5 seconds
      setTimeout(() => {
        setEmailStatus(null);
      }, 5000);
    } catch (error) {
      console.log(error);
      setEmailStatus("Unable to open email client. Please email us directly at ieeeaamu1875@gmail.com");
      
      // Clear the error message after 5 seconds
      setTimeout(() => {
        setEmailStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Flier Modal */}
      <FlierModal />
      
      <Navbar />
      
      {/* Hero Section */}
      <header 
        id="home" 
        className="text-white text-center py-20 relative w-full h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to IEEE AAMU</h1>
          <p className="mt-4 text-xl">Advancing Technology for Humanity</p>
          <div className="mt-8">
            <Link href="https://www.ieee.org/">
              <button className="border-2 border-white text-white font-bold py-2 px-6 rounded-lg hover:bg-white hover:text-maroon-700 transition">
                Explore IEEE
              </button>
            </Link>
          </div>
          <div className="flex mt-8 space-x-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentImageIndex === index ? 'bg-white' : 'bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-10 px-4 pb-16">
        {/* Mission Section */}
        <section id="about" className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-maroon-700 text-3xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            At IEEE (Institute of Electrical and Electronics Engineers) Alabama A & M Branch. We aim to foster technological innovation and leadership among students at Alabama A&M University. 
            The IEEE AAMU Student Branch serves as a hub for engineering students to develop professional and 
            technical abilities. Through workshops, competitions, and networking events, we prepare our members 
            for successful careers in engineering and technology fields.
          </p>
        </section>

        {/* About Section with Statistics */}
        <section className="mb-10">
          <h2 className="text-maroon-700 text-3xl font-semibold mb-6 text-center">About IEEE AAMU</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-maroon-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-maroon-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">50+ Members</h3>
              <p className="mt-2 text-gray-600">Active students from various engineering disciplines</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-maroon-100 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-maroon-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">20+ Events</h3>
              <p className="mt-2 text-gray-600">Annual workshops, seminars, and competitions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-maroon-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-maroon-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">15 Years</h3>
              <p className="mt-2 text-gray-600">Serving AAMU engineering community</p>
            </div>
          </div>
        </section>

        <section id="events">
          <ProgramsSection />
        </section>

        <UpcomingEvents />

        {/* Leadership Section */}
        <section id="team" className="mb-10">
          <h2 className="text-maroon-700 text-3xl font-semibold mb-6 text-center">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
                <img src="images/daniel_hs.jpeg" alt="President" className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">Daniel Lambo</h3>
                <p className="text-maroon-700">President</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
                <img src="images/john_hs.JPG" alt="Vice President" className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">John Adeyemo</h3>
                <p className="text-maroon-700">Vice President</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
                <img src="images/sudeep_hs.jpeg" alt="Secretary" className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">Sudeep Joshi</h3>
                <p className="text-maroon-700">Secretary</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
                <img src="images/mauyon_hs.jpg" alt="Historian" className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">Mauyon Wusu</h3>
                <p className="text-maroon-700">Historian</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
                <img src="images/ruva_hs.JPG" alt="Treasurer" className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">Ruvarashe Nyabando</h3>
                <p className="text-maroon-700">Treasurer</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
                <img src="images/obukome_hs.jpg" alt="Operational Manager" className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">Ogheneobukome Ejaife</h3>
                <p className="text-maroon-700">Operational Manager</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
                <img src="images/sunday_hs.jpg" alt="Technical Manager" className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">Sunday Ochigbo</h3>
                <p className="text-maroon-700">Technical Manager</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
               <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
                 <img src="/images/Kelvin Perkins' Headshot.jpeg" alt="Membership coordinator" className="w-full h-full object-cover" />
               </div>
               <div className="p-4">
                 <h3 className="text-lg font-bold text-gray-800">Kelvin Perkins</h3>
                 <p className="text-maroon-700">Membership Coordinator</p>
               </div>
             </div>
             <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
               <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
                 <img src="/images/Haroon.png" alt="GA Assistant" className="w-full h-full object-cover" />
               </div>
               <div className="p-4">
                 <h3 className="text-lg font-bold text-gray-800">Haroon Tabassum</h3>
                 <p className="text-maroon-700">Graduate Student Assistant</p>
               </div>
             </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-40 w-40 mx-auto overflow-hidden rounded-lg">
                <img src="images/dr_yaqub.jpg" alt="Faculty Advisor" className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">Dr. Raziq Yaqub</h3>
                <p className="text-maroon-700">Faculty Advisor</p>
              </div>
            </div>

          </div>
        </section>

        {/* Contact/Join Section */}
        <section id="contact" className="bg-maroon-700 text-white rounded-lg shadow-lg p-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-semibold mb-4">Join IEEE AAMU Today</h2>
              <p className="text-lg mb-6">
                Become a part of our vibrant community and gain access to resources, events, and networking opportunities.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  <span>Access to workshops and events</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Networking with professionals</span>
                </li>
                <li className="flex items-center">
                  <Book className="h-5 w-5 mr-2" />
                  <span>IEEE digital library access</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg text-gray-800">
              <h3 className="text-xl font-bold text-maroon-700 mb-4">Contact Us</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    className="w-full p-2 border border-gray-300 rounded" 
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea 
                    name="message"
                    placeholder="Message" 
                    className="w-full p-2 border border-gray-300 rounded" 
                    rows={3}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-maroon-700 text-white py-2 rounded font-bold hover:bg-maroon-800 transition"
                >
                  Send
                </button>
                {emailStatus && (
                  <div className="mt-3 p-2 bg-blue-100 text-blue-800 text-sm rounded">
                    {emailStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">IEEE AAMU Student Chapter</h3>
              <p>Alabama A&M University</p>
              <p>4900 Meridian St N, Huntsville, AL 35811</p>
              <div style={{ width: '100px', height: '100px', overflow: 'hidden' }}>
                <img src="images/logo.png" alt="logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/aamu_ieee/" className="hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} IEEE AAMU Student Chapter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;