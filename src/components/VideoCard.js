import React, {forwardRef} from "react";
import "../css/videoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        // textTruncateChild={<a href="#">Read more</a>}
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        <p>{movie.release_date || movie.first_air_date}</p>
        <p>
          <ThumbUpSharp /> {movie.vote_count}
        </p>
      </p>
    </div>
  );
});

export default VideoCard;
