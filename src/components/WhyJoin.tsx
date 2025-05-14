import React from "react";

export default function WhyJoin() {
  const benefits = [
    {
      icon: "🌐",
      title: "Global Network",
      text: "Connect with 400,000+ professionals across 160 countries",
    },
    {
      icon: "🚀",
      title: "Professional Growth",
      text: "Access exclusive jobs, memberships, and leadership opportunities",
    },
    {
      icon: "📚",
      title: "Premium Resources",
      text: "Get free access to IEEE Xplore® and 5 million+ publications",
    },
    {
      icon: "💡",
      title: "Local Community",
      text: "Participate in AAMU workshops, hackathons, and networking events",
    },
  ];

  return (
    <section
      id="why-join"
      className="bg-gradient-to-b from-gray-50 to-white mb-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-maroon-700 mb-4">
            Why Join <span className="text-gold-600">IEEE</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join the world's largest technical community and unlock exclusive
            benefits that accelerate your professional growth and technological
            impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 text-maroon-700">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-maroon-700 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            Ready to shape your future in technology? Join 4,000+ AAMU students
            who've accelerated their careers through IEEE. Join us now!
          </p>
        </div>
      </div>
    </section>
  );
}
