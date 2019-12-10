import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      species: '',
      images: '',
    };
  }
  
  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onSpeciesChange = (event) => {
    this.setState({
      species: event.target.value
    })
  }

  onImagesChange = (event) => {
    this.setState({
      images: event.target.value
    })
  }
  

  onAboutChange = (event) => {
    console.log(event)
    this.setState({
      about: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    
    const newPet = {
      name: this.state.name,
      species: this.state.species,
      images: this.state.images
    };

    this.setState({
      name: '',
      species: '',
      images: ''
    });

    this.props.addPetCallback(newPet)
  }

  render() {
    return (
      <form className="new-pet-form" onSubmit={this.onFormSubmit}>
        <h3>Add a Pet</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.onNameChange}
          />
        </div>
        <div>
          <label htmlFor="species">Species:</label>
          <input 
            name="species" 
            value={this.state.species}
            onChange={this.onSpeciesChange} 
          />
        </div>
        <div>
          <label htmlFor="about">About:</label>
          <input 
            name="about" 
            value={this.state.about}
            onChange={this.onAboutChange} 
          />
        </div>
        <div>
          <label htmlFor="images">Image Link:</label>
          <input 
            name="images" 
            value={this.state.images}
            onChange={this.onImagesChange} 
          />
        </div>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }
}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,

};

export default NewPetForm;