import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import SnapShot from "./Components/SnapShot";
import Mountain from "./Components/Mountain";
import Beaches from "./Components/Beaches";
import Birds from "./Components/Birds";
import Food from "./Components/Food";

function App() {
  const [fetchedData, setFetchedData] = useState({});
  const [searchData, setSearchData] = useState("mountain");

  //showdata

  //function to search elements
  const handleSearch = (e) => {
    let search = e.target.value;
    console.log(search);
    setSearchData(search);
  };

  const handleSearching = () => {
    console.log("get function");
    getData();
  };

  const getData = () => {
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${searchData}&per_page=24&format=json&nojsoncallback=1`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFetchedData(data);
      });
  };


  //handle mountain
  const handleMountain = () => {
    console.log("mountain")
    setSearchData("mountain");
    getData();
  };
  //handle beach

  const handleBeach = () => {
    console.log("beaches")
    setSearchData("Beaches");
    getData();
  };

  //handle birds
  const handleBird = () => {
    console.log("Birds")
    setSearchData("Birds");
    getData();
  };

 //handle food
 const handleFood = () => {
   console.log("food")
  setSearchData("Indian Food");
  getData();
};


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <SnapShot
        handleSearch={handleSearch}
        handleSearching={handleSearching}
        fetchedData={fetchedData}
        handleBeach={handleBeach}
        handleBird={handleBird}
        handleFood ={handleFood}
        handleMountain ={handleMountain }
      />

      <Routes>
        <Route path="/" element={<Mountain />}></Route>
        <Route path="beaches" element={<Beaches />}></Route>
        <Route path="birds" element={<Birds />}></Route>
        <Route path="food" element={<Food />}></Route>
      </Routes>
      <ol>
        {fetchedData.photos &&
          fetchedData.photos.photo.map((item) => {
            return (
              <img
                src={`https://farm66.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                style={{ height: "200px", width: "200px" }}
              />
            );
          })}
      </ol>
    </>
  );
}

export default App;
