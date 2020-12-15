const _ = require('lodash');

// Import json with list of pets
const pets = require('../data/pets.json');


exports.petsGetAll = async (req, res) => {
  var response = [];
  pets.filter(function(pet){
     if((pet.location === req.query.location) && (pet.age === req.query.age) && 
        (pet.type === req.query.type) && (pet.breed === req.query.breed)){
      response.push(pet)
    }
  });
  
  if(Object.keys(req.query).length === 0){
    response = pets;
  }
  res.json(response);
}