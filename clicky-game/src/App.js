import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Container from "./components/Container";
import Title from "./components/Title";
import characters from "./characters.json";
import Nav from "./components/Nav";
import Wrapper from "./Wrapper";

//Shuffle character cards 
function randomFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: "Nice Streak!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Streak Over!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = randomFriends(characters);
    this.setState({ characters: shuffledFriends });
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
          key={characters.id}
          handleClick={this.handleClick}
          handleShuffle={this.handleShuffle}
          id={characters.id}
          image={characters.image}
          />
        ))}
        </Wrapper>
      </Container>
    );
  }
}

export default App;