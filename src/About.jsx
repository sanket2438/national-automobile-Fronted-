import React from "react";
import "./index.css";
import { FaClock, FaCogs, FaTools } from "react-icons/fa";
import AboutUsHeroImage from "./images/about-us-hero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center" data-aos="fade-left">
          {/* Image Column */}
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={AboutUsHeroImage}
              alt="Automotive solutions and services banner"
              className="img-fluid"
              style={{
                maxWidth: "70%",
                height: "auto",
              }}
            />
          </div>

          {/* Text Column */}
          <div
            className="col-md-6 d-flex flex-column justify-content-center h-100"
            data-aos="fade-left"
          >
            <div
              style={{ maxHeight: "100%", overflowY: "auto", padding: "10px" }}
            >
              <p className="fs-5">
                Welcome to <strong>National Automobile</strong>, where
                innovation meets excellence in the world of automotive
                solutions. With a commitment to quality and reliability, we
                specialize in providing premium car parts, professional vehicle
                maintenance, and expert repair services.
              </p>
              <p className="fs-5">
                At National Automobile, we believe in empowering our customers
                by providing innovative solutions that go beyond standard
                practices. Our passion for excellence drives us to continuously
                enhance our offerings, ensuring you receive the best automotive
                care possible.
              </p>
              <p className="fs-5">
                From routine maintenance to specialized repair services, we
                utilize state-of-the-art equipment and genuine spare parts to
                deliver superior performance and reliability. Our unwavering
                commitment to quality ensures that every service we provide
                meets the highest industry standards, giving you confidence in
                your vehicle's safety and efficiency.
              </p>
              <p className="fs-5">
                Whether you're seeking expert advice on upgrading your vehicle
                or need immediate assistance with repairs, our friendly and
                knowledgeable team is here to guide you every step of the way.
                We prioritize transparency and personalized attention, tailoring
                our services to meet your specific needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container my-5" id="warranty">
        <div className="row text-center">
          <h1 className="mt-5">Why Choose Us?</h1>
          <div className="col-md-4 time" id="time" data-aos="fade-up">
            <div className="p-4 mt-4 border rounded shadow">
              <FaClock size={50} className="mb-3 text-primary" />
              <h3>Time</h3>
              <p>
                We value your time and ensure prompt and efficient service to
                meet your needs.
              </p>
            </div>
          </div>

          <div
            className="col-md-4 mt-4 parts"
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
            className="col-md-4 mt-4 service"
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
    </>
  );
};

export default About;
