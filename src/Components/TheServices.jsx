import Reveal from "./Reveal";
import servicesList from "../data/services";
import staggerDelay from "../utils/staggerDelay";

const TheServices = () => {
  return (
    <div
      className="the-services projects-services section-container"
      id="Services"
    >
      <Reveal as="h2" className="section-heading">
        Services
      </Reveal>
      <div className="projects-services-container services-container">
        {servicesList.map((service, index) => (
          <Reveal key={service.title} delay={staggerDelay(index)}>
            <ServiceBox title={service.title} description={service.description} />
          </Reveal>
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
