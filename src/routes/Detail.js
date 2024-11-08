import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [contents, setContents] = useState(null);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setContents(json.data.movie);
    console.log(json);
  };
  // console.log({ id });
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img src={contents.medium_cover_image} alt={contents.title} />
          <h2>{contents.title} </h2>
          <p> genres : {contents.genres.join(", ")}</p>
          <p>language : {contents.language}</p>
          <p>year : {contents.year}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
