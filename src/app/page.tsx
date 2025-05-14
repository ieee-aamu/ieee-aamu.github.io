import React from "react";
import Navbar from "../components/Navbar";
import UpcomingEvents from "@/components/UpcomingEvents";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Leadership from "@/components/Leadership";
import About from "@/components/About";
import WhyJoin from "@/components/WhyJoin";
import Mission from "@/components/Mission";
import FlierModal from "@/components/FlierModal";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Flier Modal */}
      <FlierModal />

      <Navbar />

      {/* Hero Section */}

      <main className="container mx-auto mt-10 px-4 pb-16">
        {/* Mission Section */}
        <Mission />

        {/* About Section with Statistics */}
        <About />

        {/* Programs Section */}
        <ProgramsSection />

        <UpcomingEvents />

        {/* Leadership Section */}
        <Leadership />

        {/* New Why Join IEEE Section */}
        {/* Enhanced Why Join IEEE Section */}
        <WhyJoin />

        {/* Contact/Join Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
