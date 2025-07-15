import "./TrendingBlog.css";
import { Link } from "react-router-dom";

function TrendingBlog({ blog }) {
  let image = "";
  switch (blog.category) {
    case "Travelling":
      image = "travelling.jpg";
      break;
    case "Cooking":
      image = "Cooking.jpg";
      break;
    case "Programming":
      image = "Programming.jpg";
      break;
    case "Health":
      image = "Health.jpg";
      break;
    case "Workouts":
      image = "Workouts.jpg";
      break;
    case "Drawing":
      image = "Drawing.jpg";
      break;
    case "Gaming":
      image = "Gaming.jpg";
      break;
    default:
      image = "default.jpg";
      break;
  }

  return (
    <Link to={`/blog/${blog.id}`} state={{ blog }} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="card blog-card" style={{ width: "18rem" }}>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`/media/${image}`}
          className="card-img-top"
          alt={blog.title}
          style={{
            height: "200px",
            objectFit: "cover",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text text-muted">{blog.category}</p>
          <p className="card-text">{blog.previewDescription}</p>
        </div>
      </div>
      </div>
    </Link>
  );
}

export default TrendingBlog;

