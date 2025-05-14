export function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Single point of contact",
      description: "Streamlined communication and accountability for all your facility management needs.",
    },
    {
      title: "Skilled, certified teams",
      description: "Our professionals are trained and certified to handle all aspects of facility management.",
    },
    {
      title: "Aligned quality & safety",
      description: "We maintain the highest standards of quality and safety in all our operations.",
    },
    {
      title: "Smart CAFM systems",
      description: "Utilizing advanced Computer-Aided Facility Management systems for efficient operations.",
    },
    {
      title: "Customized SLAs",
      description: "Service Level Agreements tailored to your specific requirements and expectations.",
    },
    {
      title: "Rapid response & customer satisfaction",
      description: "Quick response times and a focus on ensuring complete customer satisfaction.",
    },
  ]

  return (
    <section id="why-us" className="py-16 bg-orange-500 text-white" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="max-w-2xl mx-auto">
            We are committed to delivering excellence in facility management services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-white/15 hover:border-white/40 
                hover:shadow-lg hover:shadow-orange-600/20
                cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
