import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import Header from './Header';
import Dropdown from './Dropdown';

function App() {
  const [pets, setPets] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect (() => {
    fetch(`/pets/all?location=${query[0]}&age=${query[1]}&type=${query[3]}&breed=${query[2]}`)
      .then(res => res.json())
      .then(data => {
        console.table(data)
        //setPets(Object.keys(data).map((key) => [Number(key), data[key]]))

      }
      )
      .catch(err => console.log(err));
  }, [query]);

 

  //new stuff
  return (
    <div>
      <Header />
      <br></br>
      <div className="container mx-auto">
        <div style={rowStyle}>
          <div>
            <Dropdown searchText={(listOfPetsFromDropdown) => setQuery(listOfPetsFromDropdown)}/>
            
          </div>
          
          <div>
             
              <div className="grid grid-cols-3 gap-4">
                {console.log(pets)}
                {Object.keys(pets).map(pet => (
                  <ImageCard key={pet.id} pet={pet} />
                ))}
              </div>
            
          </div>
        </div>
        

        
      </div>
    </div>
  );
}

const rowStyle = {
  display: 'flex'
}

export default App;
