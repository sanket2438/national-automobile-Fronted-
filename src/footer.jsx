import React from "react";
import logo from "./images/national automobiles.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-white py-5">
        <div className="row">
          {/* Address Section */}
          <div className="col-md-4 text-center py-3 d-flex flex-column align-items-center justify-content-center">
            <h3 className="fw-bold mb-3">NATIONAL AUTOMOBILES</h3>

            <p className="d-flex align-items-center">
              <FaMapMarkerAlt className="text-danger me-2" size={20} />
              <strong>
                Nasrapur Velha Road, <br /> Near Cheladi Phata
              </strong>
            </p>
          </div>

          {/* Map Section */}
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.9553780123456!2d73.87994257698534!3d18.257867032784187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2f334739f69a1%3A0x273deb862f6643e1!2sNational%20Automobiles%20nasrapur!5e0!3m2!1sen!2sin!4v1732605733773!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="National Automobiles Location"
            ></iframe>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 text-center py-3 d-flex flex-column align-items-center justify-content-center">
            <h3 className="fw-bold mb-3">Contact Us</h3>
            <p className="d-flex align-items-center">
              <FaPhone className="text-success me-2" size={20} />
              <strong>+91 9130309797</strong>
            </p>
            <p className="d-flex align-items-center">
              <FaEnvelope className="text-warning me-2" size={20} />
              <strong>info@nationalautomobiles.com</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

// import React from "react";
// import logo from "./images/national automobiles.png";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom to navigate between pages

// const Footer = () => {
//   return (
//     <>
//       <div className="container-fluid bg-dark text-white py-5">
//         <div className="row">
//           {/* Address Section */}
//           <div className="col-md-4 text-center py-3 d-flex flex-column align-items-center justify-content-center">
//             <h3 className="fw-bold mb-3">NATIONAL AUTOMOBILES</h3>

//             <p className="d-flex align-items-center">
//               <FaMapMarkerAlt className="text-danger me-2" size={20} />
//               <strong>
//                 Nasrapur Velha Road, <br /> Near Cheladi Phata
//               </strong>
//             </p>
//           </div>

//           {/* Map Section */}
//           <div className="col-md-4 d-flex justify-content-center align-items-center">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.9553780123456!2d73.87994257698534!3d18.257867032784187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2f334739f69a1%3A0x273deb862f6643e1!2sNational%20Automobiles%20nasrapur!5e0!3m2!1sen!2sin!4v1732605733773!5m2!1sen!2sin"
//               width="100%"
//               height="250"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="National Automobiles Location"
//             ></iframe>
//           </div>

//           {/* Contact Section */}
//           <div className="col-md-4 text-center py-3 d-flex flex-column align-items-center justify-content-center">
//             <h3 className="fw-bold mb-3">Contact Us</h3>
//             <p className="d-flex align-items-center">
//               <FaPhone className="text-success me-2" size={20} />
//               <strong>+91 9130309797</strong>
//             </p>
//             <p className="d-flex align-items-center">
//               <FaEnvelope className="text-warning me-2" size={20} />
//               <strong>info@nationalautomobiles.com</strong>
//             </p>
//           </div>
//         </div>

//         {/* Footer Links Section */}
//         <div className="row mt-4">
//           <div className="col-md-12 text-center">
//             <ul className="list-inline">
//               <li className="list-inline-item mx-3">
//                 <Link to="/" className="text-white text-decoration-none">
//                   Home
//                 </Link>
//               </li>
//               <li className="list-inline-item mx-3">
//                 <Link to="/parts" className="text-white text-decoration-none">
//                   Parts
//                 </Link>
//               </li>
//               <li className="list-inline-item mx-3">
//                 <Link to="/about" className="text-white text-decoration-none">
//                   About Us
//                 </Link>
//               </li>
//               <li className="list-inline-item mx-3">
//                 <Link to="/contact" className="text-white text-decoration-none">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;
