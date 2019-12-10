import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { pets } from './data/pets.json';
// const pets = importData.pets;
// I don't understand this syntax. Is this destructing?

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
    console.log(pets);
  }
  
  render () {
    const { currentPet } = this.state;

    const setCurrentPet = (pet) => {
      // event could be anything
      this.setState({
        currentPet: pet
      })
    }

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */}
          <SearchBar />
        </section>
        {currentPet ? <PetDetails currentPet={currentPet}/> : null }
        <section className="pet-list-wrapper">
          <PetList pets={this.state.petList}
          setCurrentPet={setCurrentPet}
          // setCurrentPet isn't defined as an instance of the class. It's just a variable. 
          />
        </section>
        <section className="new-pet-form-wrapper">
          {<NewPetForm/>}
        </section>
      </main>
    );
  }
}

export default App;


// 
