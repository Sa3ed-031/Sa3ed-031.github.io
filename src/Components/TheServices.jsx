const servicesList = [
  {
    title: "Responsive Web Design",
    description:
      "I build websites that look and work great on every screen size, from mobile to desktop. My carpentry company site, for example, adapts smoothly across devices without losing its visual identity..",
  },
  {
    title: "Frontend Development",
    description:
      "I develop clean, component-based interfaces using React.js, with a focus on organized project structure and reusable logic. My ZMovie website project reflects this.",
  },
  {
    title: "Landing Pages Design",
    description:
      "I design focused, conversion-oriented landing pages that communicate a brand's value clearly and quickly, like the homepage I built for a carpentry business, designed to highlight expertise and build trust from the first scroll.",
  },
  {
    title: "Portfolio Websites",
    description:
      "I create stunning personal and professional portfolio sites that showcase work effectively, including interactive elements like contact forms integrated with services such as emailjs, as seen in my own portfolio.",
  },
];

const TheServices = () => {
  return (
    <div
      className="the-services projects-services section-container"
      id="Services"
    >
      <h2 className="section-heading">Services</h2>
      <div className="projects-services-container services-container">
        {servicesList.map((service) => (
          <ServiceBox
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

const ServiceBox = ({ title, description }) => {
  return (
    <div className="service-box rounded-[3rem] opacity-[0.8]">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default TheServices;
