import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const API = "http://localhost:6001/plants"

function PlantPage() {
  //State to store list of plants from API.
  const [plants, setPlants] = useState([])
  //States to store form data of New Plant
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  //State to store search value
  const [searchValue, setSearchValue] = useState("")

  //On DOM content load, pulls data from the API and assigns it to state-Plants
  useEffect(()=> {
    fetch(API)
      .then((r) => r.json())
      .then(setPlants)
  }, []);

  //Function to submit new plant form data.
  const handleSubmit = (e) => {
    e.preventDefault();
    //Assigning form values to variable formData.
    const formData = {
      name: name,
      image: image, 
      price: price
    };
    //Fetch request to update the database, based on form submit values.
    fetch(API, {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((r) => r.json())
      .then((data) => setPlants([...plants, data]))
    e.target.reset();
  }

  //Searches state-plants for the state-searchValue, and filters out the displayed array. 
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }
  const searchResults = plants.filter((plant) => (plant.name.toLowerCase().includes(searchValue.toLowerCase())))

  return (
    <main>
      <NewPlantForm setName={setName} setImage={setImage} setPrice={setPrice} handleSubmit={handleSubmit}/>
      <Search handleSearch={handleSearch} searchValue={searchValue}/>
      <PlantList plants={searchResults}/>
    </main>
  );
}

export default PlantPage;
