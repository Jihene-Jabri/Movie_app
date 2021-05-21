
import AddModal from "./components/AddModal/AddModal";
import MoviesList from "./components/MovieCardList/MoviesList";
import { moviesDataBase } from "./components/MoviesDataBase";
import {useState} from 'react'; 
import Header from './components/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
    const [movie, setMovie] = useState(moviesDataBase);
    const handleAdd = (newMovie) => {
        setMovie([...movie, newMovie]);
    };
    const [titleSearch, setTitleSearch] = useState("");
    const [rateSearch, setRateSearch] = useState(0);
    return (
        <div className="App">
            <header className="App_header">
                <Header
                    setRateSearch={setRateSearch}
                    setTitleSearch={setTitleSearch}
                />
                <div>
                    <AddModal handleAdd={handleAdd} />
                </div>
                <MoviesList
                    rateSearch={rateSearch}
                    titleSearch={titleSearch}
                    movie={movie}
                />
            </header>
        </div>
    );
}

export default App;
