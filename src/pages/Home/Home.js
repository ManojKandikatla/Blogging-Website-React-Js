import Banner from "../../Components/Banner/Banner";
import TrendingBlog from "../../Components/TrendingBlogs/TrendingBlog";
import blogs from "../../Utils/MockData";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
function Home() {
  return (
    <>
      <Banner />
      <div className="my-2">
        <h1>Read blogs from</h1>
        <div className="d-flex justify-content-between flex-wrap row-gap-3 ">
          {["Programming", "Workouts", "Drawing", "Cooking", "Gaming"].map(
            (cat) => (
              <Link
                key={cat}
                to={`/blogs/category/${cat}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="card blog-card" style={{ width: "18rem" }}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={`/media/${cat}.jpg`}
                    className="card-img-top"
                    alt={cat}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{cat}</h5>
                  </div>
                </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>

      <div className="trending-blogs-section">
        <h1>Trending Blogs</h1>
        <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-3">
          {blogs.map((blog) => (
            <TrendingBlog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
