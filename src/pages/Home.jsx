import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
function Home() {
    return (
        <>
            <SearchBar />
            <MovieList movieType="Popular Movies" />    
        </>
    )
}

export default Home
