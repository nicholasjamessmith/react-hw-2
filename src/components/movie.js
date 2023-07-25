const Movie = (props) => {
  return <div className="div"><ul className="movieList">
    <li className="name"><h2>{props.movie.name}</h2></li>
    <li className="image"><img src={props.movie.image} alt=""></img></li>
    <li className="year-rating"><h4>{props.movie.year} - {props.movie.rating}</h4></li>
  </ul>
    </div>
}

export default Movie