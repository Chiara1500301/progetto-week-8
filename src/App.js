import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavBar from'./Components/HomeNavBar.jsx';
import HomeButton from './Components/HomeButton.jsx';
import MovieGallery from './Components/MovieGallery.jsx';
import Footer from './Components/Footer';
import ListFilm from './Components/ListFilm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeNavBar/>
        <HomeButton/>
        <MovieGallery text="Trending now"/>
        <ListFilm/>
        <MovieGallery text="Watch It Again"/>
        <ListFilm/>
        <MovieGallery text="New Releases"/>
        <ListFilm/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
