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

