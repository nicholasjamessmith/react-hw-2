import Movie from './movie.js'
const Movies = (props) => {
  return <ul>{props.movies.map((item, index) => (<Movie movie={item} key={item.name} />
  ))}
  </ul>
}

export default Movies