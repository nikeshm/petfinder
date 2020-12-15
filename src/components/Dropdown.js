import React from 'react';

class Dropdown extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = {
        animals: [],
        breeds: {},
        availableBreeds: [],
        selectedAnimal : '--Choose Animal--',
        selectedBreed : '--Choose Breed--',
        zipcode: "",
        age: "",
        zipError: "",
        ageError: "",
        allPets: []
		  };
		this.changeAnimal = this.changeAnimal.bind(this);
    this.changeBreed = this.changeBreed.bind(this);
  }
  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

	async componentDidMount() {
    const res  = await fetch('/pets/all');
    const pets = await res.json();

    const petType = [];
      pets.forEach(pet => {
        if(!petType.includes(pet.type)){
          petType.push(pet.type);
        }
      });

      this.setState({ animals : petType})

    // breedMap is a {type: breed} map
    const breedMap = {};
      for(var pet_type in petType) {
        breedMap[petType[pet_type]] = []
      }
      pets.forEach(pet => {
        var species = pet.type;
        var breed = pet.breed;
        if(!breedMap[species].includes(breed)){
          breedMap[species].push(breed);
        }
      });
      this.setState({ breeds : breedMap})
	}
  
	changeAnimal(event) {
    this.setState({selectedAnimal: event.target.value});
     this.setState({ availableBreeds: this.state.breeds[event.target.value]})
    }

    changeBreed(event) {
		  this.setState({selectedBreed: event.target.value});
  }



  handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {

      const pet_location = this.state.zipcode;
      const pet_age = this.state.age;
      const pet_type = this.state.selectedAnimal;
      const pet_breed = this.state.selectedBreed;
      this.props.searchText([pet_location,pet_age,pet_breed,pet_type]);
    }
    
  };

  validate = () => {
    let zipError = "";
    let ageError = "";
    let zipcodes = ['95050', '95051', '95053', '95054'];
    let zipcheck = !this.state.zipcode || !(zipcodes.indexOf(this.state.zipcode) > -1);
    if (zipcheck) {
      zipError = "Not a valid Santa Clara ZIP code";
    }
    if (parseInt(this.state.age) < 0 || parseInt(this.state.age) > 10) {
      ageError = "Enter a positive number under 10";
    }

    if (ageError || zipError) {
      this.setState({ ageError, zipError });
      return false;
    }

    return true;
  };
	
	render() {
        const isEnabled = (this.state.selectedAnimal !== '--Choose Animal--') && 
            (this.state.selectedBreed !== '--Choose Breed--') && 
            (this.state.zipcode !== "") && (this.state.age !== "");
        return (
			<div className="w-auto bg-grey rounded shadow-2xl p-8 m-4">
				<h2>Enter your future pet's details!</h2>
        <br></br>
        <form onSubmit={this.handleSubmit}>
        <div>
          <input className="border py-2 px-3 text-grey-darkest"
            name="zipcode"
            placeholder="ZIP code"
            value={this.state.zipcode}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.zipError}
          </div>
        </div>
        <div>
          <input
            name="age" className="border py-2 px-3 text-grey-darkest"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.ageError}
          </div>
        </div>
        <div>
					<select className="form-select mt-1 block w-auto" placeholder="--Choose Animal--" value={this.state.selectedAnimal} onChange={this.changeAnimal}>
						<option>--Choose Animal--</option>
            {this.state.animals.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>
        <div>
					<select className="form-select mt-1 block w-auto" placeholder="--Choose Breed--" value={this.state.selectedBreed} onChange={this.changeBreed}>
						<option>--Choose Breed--</option>
            {this.state.availableBreeds.map((e, key) => {
              return <option key={key}>{e}</option>;
            })}
					</select>
				</div>
        <br></br>
        <button disabled={!isEnabled} className="bg-blue-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit">submit</button>
        </form>

			</div>
		)
	}
}

export default Dropdown;
