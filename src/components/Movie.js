import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// url 이동 시 a태그를 사용=> 페이지 전체 재실행
//
function Movie({ img, summary, title, id, index, genres }) {
  return (
    <div key={id}>
      <h2>id : {id}</h2>
      <h2>
        <Link to={`/movie/${id}`}>
          {index + 1}. {title}
        </Link>
      </h2>
      <Link to={`/movie/${id}`}>
        <img src={img} alt={title} />
      </Link>

      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}> {g}</li>
        ))}
      </ul>
      <hr></hr>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
