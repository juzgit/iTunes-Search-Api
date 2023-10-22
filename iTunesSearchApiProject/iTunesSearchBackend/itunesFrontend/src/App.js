import React, {useState} from "react";
import './App.css';
//imported the icons modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [getTerm, setgetTerm] = useState(""); //stores the search term entered by the user. 
  const [getMedia, setgetMedia] = useState("all"); //stores the selected media type for the search.
  const [results, setResults] = useState([]); //stores the search results fetched from the API.
  const [favourites, setfavourites] = useState([]); //stores the user's favorite items.

  //fetching search results from the API based on the search term and media type.
  const search = async () => {
    try{
      const response = await fetch(`search?term=${getTerm}&media=${getMedia}`);
      const data = await response.json();
      setResults(data.results); //update the results state with the fetched search results.
    } catch (error){ //log any errors that occur during the data fetching process.
      console.error("Error fetching data: ", error);
    }
  }

  const addFavourites = (item) => {
    setfavourites([...favourites, item]);  //add the selected item to the favorites list.
    alert('Added to favourites');
  }

  //removes the item with the specified id from the favorites list.
  const removeFavourites = (id) => {
    const updateFavourties = favourites.filter((item) => item.trackId !== id)
    setfavourites(updateFavourties);
    alert('Removed from favourites');
  }


  //renders the UI
  return (
    <div className="App">
      <h1 className="name-heading">iTunes SEARCH API <span>by Rameck-Junior Gadziso</span> </h1>
      <p className="sub-text"> Enter a search term and also select the type of media you want to search</p>
      <div className="search-container">

        <input 
          type="text"
          placeholder="Search"
          value={getTerm}
          onChange={(e) => setgetTerm(e.target.value)}
          /> 

        <select value={getMedia} onChange={(e) => setgetMedia(e.target.value)}>
          <option value="all">All</option>
          <option value="movie">Movie</option>
          <option value="music">Music</option>
          <option value="podcast">Podcast</option>
          <option value="TV show">TV Show</option>
          <option value="audiobook">Audiobook</option>
          <option value="ebook">ebook</option>
          <option value="short film">Short Film</option>
          <option value="software">Software</option>
        </select>
        <button className="search-btn" onClick={search}>  Search</button>
      </div>

    {/**displays the results from the API */}
      <div className="results">
        <h1 className="results-heading">Results</h1>
        {results.map((item) => (
          <div key={item.trackId} className="result-item">
            <img className="artwork" src={item.artworkUrl100} alt="Album Art" />
            <h2 className="results-trackName">{item.trackName}</h2>
            <p className="results-artist">{item.artistName}</p>
            {favourites.some((fav)=> fav.trackId === item.trackId) ? (
              <button className="delete-btn" onClick={() => removeFavourites(item.trackId)}>
              <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />  Remove from Favourites
              </button>
            ) : (
            <button className="add-btn" onClick={() => addFavourites(item)}>
             <FontAwesomeIcon icon={faPlus} />  Add to favourites
            </button>
            )}
          </div>
        ))}
      </div>
      
      {/**The user's favourites will be displayed here */}
      <div className="favourites">
        <h1 className="fav-heading">Favourites</h1>
        {favourites.map((item) => (
          <div key={item.trackId} className="fav-item">
            <img src={item.artworkUrl100} alt="Album Art" />
            <h2 className="favs-trackName">{item.trackName}</h2>
            <p className="favs-artist">{item.artistName}</p>
            <button className="delete-btn" onClick={() => removeFavourites(item.trackId)}>
            <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />  
            Remove from favourites
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
