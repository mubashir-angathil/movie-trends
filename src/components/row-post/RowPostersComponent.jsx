/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { configs } from "../../utils/configs/Configs";
import "./RowPosters.css";
import { useNavigate } from "react-router-dom";

const RowPostersComponent = ({ api = null, title, id, isSmall = false }) => {
  // State to store the fetched posts
  const [posts, setPosts] = React.useState([]);
  const navigate = useNavigate();

  // useEffect to fetch data when the component mounts
  React.useEffect(() => {
    if (api) {
      api()
        .then((res) => {
          setPosts(res.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    posts?.length > 0 && (
      <div className="container-fluid" id={id}>
        <div className="row">
          {/* Display the title of the row */}
          <h3 className="rowTitle">{title}</h3>
          {/* Container for posters */}
          <div className="posters d-flex gap-1">
            {/* Map through posts and display each poster */}
            {posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className={isSmall ? "smallPoster" : "poster"}
                  style={{
                    display: post.poster_path === null ? "none" : "",
                  }}
                  onClick={() => navigate("/movie".concat("/", post.id))}
                >
                  {/* Display poster image */}
                  <img
                    src={configs.imageUrl + post.poster_path}
                    alt="posters"
                    className="thumbnail"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default RowPostersComponent;
