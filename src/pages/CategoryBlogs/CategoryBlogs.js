import Banner from "../../Components/Banner/Banner";
import TrendingBlog from "../../Components/TrendingBlogs/TrendingBlog";
import blogs from "../../Utils/MockData";
import "./CategoryBlogs.css";
import { useParams } from "react-router-dom";

function CategoryBlogs() {
  const { category } = useParams();

  const filteredBlogs = blogs.filter(
    (blog) => blog.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <>
      <Banner />
      <div className="trending-blogs-section">
        <h1>{category}</h1>
        <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-3">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <TrendingBlog key={blog.id} blog={blog} />
            ))
          ) : (
            <p className="text-muted">No blogs available in this category.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default CategoryBlogs;
