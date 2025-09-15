import React from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
// import FlierModal from "@/components/FlierModal";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import UpcomingEvents from "@/components/UpcomingEvents";
import WhyJoin from "@/components/WhyJoin";

export default function App() {
  return (
    <div className="bg-gray-50">
      {/* Flier Modal */}
      {/* <FlierModal /> */}
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      <main className="container mx-auto px-4 py-16">
        {/* Mission Section */}
        <Mission />
        {/* About Section with Statistics */}
        <About />
        {/* Programs Section */}
        <Programs />
        {/* Upcoming Events Section */}
        <UpcomingEvents />
        {/* Leadership Section */}
        <Leadership />
        {/* Why Join IEEE Section */}
        <WhyJoin />
        {/* Contact/Join Section */}
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
