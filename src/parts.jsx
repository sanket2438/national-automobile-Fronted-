// import React, { useState } from 'react';

// const Parts = () => {
//     const [file, setFile] = useState(null);
//     const [message, setMessage] = useState('');

//     const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append('image', file);

//         try {
//             const response = await fetch('/api/upload', {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (response.ok) {
//                 setMessage('Image uploaded successfully!');
//             } else {
//                 setMessage('Failed to upload image.');
//             }
//         } catch (error) {
//             setMessage('Error: ' + error.message);
//         }
//     };

//     return (
//         <div>
//             <h1>Admin Panel - Upload Image</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="file" onChange={handleFileChange} required />
//                 <button type="submit">Upload</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default Parts;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Parts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/parts");
        setParts(response.data);
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };

    fetchParts();
  }, []);

  return (
    <div className="container">
      <h1>Parts List</h1>
      <div className="row">
        {parts.map((part) => (
          <div key={part._id} className="col-md-4">
            <div className="card">
              <img
                src={part.imageUrl}
                alt={part.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{part.name}</h5>
                <p className="card-text">${part.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parts;
