import React, { useEffect } from "react";
import home_img from "./images/home_image.jpg";
import "./index.css";
import verna from "./images/verna.jpg";
import suzuki from "./images/suzuki-logo.png";
import toyota from "./images/toyota-logo.png";
import hyundai from "./images/hyundai-logo.png";
import honda from "./images/honda-logo.png";
import tata from "./images/tata-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaClock, FaCogs, FaTools } from "react-icons/fa";
import WhatsappIcon from "./whatsappicon";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
    });
  }, []);

  return (
    <>
      {/* Main section */}
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-md-12 main-image position-relative">
            <img src={home_img} alt="Home" className="w-100 img-fluid" />
            <div className="image-overlay"></div>
            <h1 className="image-text">
              Precision Parts for Perfect Performance!
            </h1>
          </div>
        </div>
      </div>

      {/* Info section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 my-5" data-aos="fade-left">
            <h2 className="text-center">
              Discover The Automotive Solutions You Deserve!
            </h2>
            <p>
              Whether you are looking for high-quality car parts, expert
              repairs, or reliable vehicle maintenance, we ensure that each
              solution is crafted with precision and care. Our goal is to
              provide customers with the best automotive experience, ensuring
              satisfaction and long-term reliability with every interaction.
              Trust us to keep your vehicle running smoothly and safely, because
              you deserve nothing less than excellence.
            </p>
          </div>
          <div className="col-md-6 my-5" data-aos="fade-right">
            <img src={verna} alt="" height={300} className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container my-5" id="warranty">
        <div className="row text-center">
          <div className="col-md-4 time" id="time" data-aos="fade-up">
            <div className="p-4 border rounded shadow">
              <FaClock size={50} className="mb-3 text-primary" />
              <h3>Time</h3>
              <p>
                We value your time and ensure prompt and efficient service to
                meet your needs.
              </p>
            </div>
          </div>

          <div
            className="col-md-4 parts"
            id="parts"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="p-4 border rounded shadow">
              <FaCogs size={50} className="mb-3 text-success" />
              <h3>Genuine Parts</h3>
              <p>
                We only use authentic parts to guarantee quality and reliability
                in our services.
              </p>
            </div>
          </div>

          <div
            className="col-md-4 service"
            id="service"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="p-4 border rounded shadow">
              <FaTools size={50} className="mb-3 text-danger" />
              <h3>Service</h3>
              <p>
                Our dedicated team provides exceptional service to ensure
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 marquee-section">
            <div className="heading text-center">
              <h1>Parts available for Brand</h1>
            </div>
            <div className="marquee" data-aos="fade-up" data-aos-delay="200">
              <div className="marquee-content">
                <img src={suzuki} alt="Suzuki" />
                <img src={tata} alt="Tata" />
                <img src={toyota} alt="Toyota" />
                <img src={hyundai} alt="Hyundai" />
                <img src={honda} alt="Honda" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsappIcon />
    </>
  );
};

export default Home;
