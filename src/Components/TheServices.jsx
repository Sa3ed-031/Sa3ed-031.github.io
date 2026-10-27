import servicesList from "../data/services";

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
