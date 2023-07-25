import './App.css';
import Movies from './components/movies.js'

function App() {
  const movies = [
    {
      name: "The Matrix",
      year: "1999",
      rating: "R",
      image: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
    },

    {
      name: "Phone Booth",
      year: "2002",
      rating: "R",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Phone_Booth_movie.jpg/220px-Phone_Booth_movie.jpg"
    },

    {
      name: "Gladiator",
      year: "2000",
      rating: "R",
      image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png"
    },

    {
      name: "Troy",
      year: "2004",
      rating: "R",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b8/Troy2004Poster.jpg"
    },

    {
      name: "Pirates of the Caribbean: The Curse of the Black Pearl",
      year: "2003",
      rating: "PG-13",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png/220px-Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png"
    }
  ]
  return (
    <div className="App">
      <Movies movies={movies} />
    </div>
  );
}

export default App;
