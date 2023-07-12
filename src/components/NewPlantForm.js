import React from "react";

function NewPlantForm({ setName, setImage, setPrice, handleSubmit}) {

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e)=> (setName(e.target.value))}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e)=> (setImage(e.target.value))}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e)=> (setPrice(e.target.value))}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
