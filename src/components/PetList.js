import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';
import NewPetForm from './NewPetForm'

import 'bootstrap/dist/css/bootstrap.min.css';


class PetList extends React.Component {
  constructor(props) {
    // look more into the structure of props in classical components
    super(props);
    // props are always passed in from other components
    this.state = {
      pets: props.pets
      // state is dependent on the component itself. Component will update it's own state. 
    }
  }

  deletePet = (petId) => {
    const updatedPets = this.state.pets.filter((pet) => pet.id !== petId);

    this.setState({
      pets: updatedPets
    });
  }

  addPet = (newPet) => {
    const pets = this.state.pets
    pets.push(newPet)

    this.setState({
      pets
    })
  }

  makeCollection () {
    const petCollection = this.state.pets.map((pet, i) => {
      return <PetCard
      id={pet.id}
      name={pet.name}
      species={pet.species}
      about={pet.about}
      location={pet.location}
      delete={this.deletePet}
      key={i}
      setcurrentPet = {() => {this.props.setCurrentPet(pet)}} 
      />
    });
  return petCollection
  }

  render () {
    return (
      
      <div className="card-group">

        <NewPetForm addPetCallback={this.addPet}/>
        
        <ul>
          {this.makeCollection()}
          {/* returns an array of components*/}
        </ul>
      </div>
    )
  }
}


PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
