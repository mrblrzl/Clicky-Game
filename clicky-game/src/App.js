import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Container from "./components/Container";
import Title from "./components/Title";
import characters from "./characters.json";
import Nav from "./components/Nav";
import Wrapper from "./Wrapper";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
  };

  // removeFriend = id => {
  //   const friends = this.state.friends.filter(characters => characters.id !== id);
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a CharacterCard component for each characters object
  render() {
    return (
      <Container>
        <Nav
        title="Clicky Game!"
        score={this.state.currentScore}
        topScore={this.state.topScore}
        rightWrong={this.state.rightWrong}
        />
        <Title>
        <h3>Don't click on the same character more than once!
        </h3></Title>
        <Wrapper>
        {this.state.characters.map(characters => (
          <CharacterCard
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
          />
        ))}
        </Wrapper>
      </Container>
    );
  }
}

export default App;