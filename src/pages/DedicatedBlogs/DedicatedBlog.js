import "./DedicatedBlog.css";
import Banner from "../../Components/Banner/Banner";
import { useState, useEffect } from "react";
import blogs from "../../Utils/MockData";
import { useParams } from "react-router-dom";

function DedicatedBlog() {
  const { id } = useParams();
  const [blogID, setblogID] = useState(null);

  useEffect(() => {
    if (id) {
      setblogID(parseInt(id)); // Convert string to number
    }
  }, [id]);

  const blogToDisplay = blogs.find((blog) => blog.id === blogID);

  if (!blogToDisplay) {
    return <p>Blog not found</p>;
  }

  return (
    <>
      <Banner />
      <h1>{blogToDisplay.title}</h1>
      <h6>{blogToDisplay.category}</h6>
      <p>{blogToDisplay.content}</p>
    </>
  );
}

export default DedicatedBlog;


















// import "./DedicatedBlog.css";
// import Banner from "../../Components/Banner/Banner";
// import { useState, useEffect } from "react";
// import blogs from "../../Utils/MockData";
// import { useParams } from "react-router-dom";

// function DedicatedBlog() {
//   const { id } = useParams();
 
//   const [blogID, setblogID] = useState(1);

//   let blogToDispay = blogs.filter((blog) => blog.id === blogID)[0];
  
//   useEffect(() => {
//     if (id) {
//       setblogID((id));
//     }
//   }, [id]);

//   return (
//     <>
//       <Banner />
//       <h1>{blogToDispay.title}</h1>
//       <h6>{blogToDispay.category}</h6>
//       <p>{blogToDispay.previewDescription}</p>
//     </>
//   );
// }

// export default DedicatedBlog;


// import "./DedicatedBlog.css";
// import Banner from "../../Components/Banner/Banner";
// import blogs from "../../Utils/MockData";
// import { useParams, useLocation } from "react-router-dom";

// function DedicatedBlog() {
//   const { id } = useParams();
//   const location = useLocation();

//   // Try to get blog from navigation state
//   const blogFromState = location.state?.blog;

//   // Fallback: convert id param to number and find in mock data
//   const blogID = parseInt(id);
//   const blogToDisplay =
//     blogFromState || blogs.find((b) => b.id === blogID);

//   // If not found, handle gracefully
//   if (!blogToDisplay) {
//     return (
//       <>
//         <Banner />
//         <h2>Blog not found</h2>
//         <p>The blog you are looking for does not exist.</p>
//       </>
//     );
//   }

//   return (
//     <>
//       <Banner />
//       <h1>{blogToDisplay.title}</h1>
//       <h6>{blogToDisplay.category}</h6>
//       <p>{blogToDisplay.previewDescription}</p>
//     </>
//   );
// }

// export default DedicatedBlog;
