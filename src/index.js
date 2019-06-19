import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
// import Currency from './components/currency'
import DogPhoto from './components/dogs/DogPhoto'
import Dogs from './components/dogs/Dogs';

const client = new ApolloClient({
  uri: "https://dog-graphql-api.glitch.me/graphql"
});

class App extends React.Component {
  state = { selectedDog: null };

  onDogSelected = ({ target }) => {
    this.setState(() => ({ selectedDog: target.value }));
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>Building Query components 🚀</h2>
          {this.state.selectedDog && (
            <DogPhoto breed={this.state.selectedDog} />
          )}
          <Dogs onDogSelected={this.onDogSelected} />
        </div>
      </ApolloProvider>
    );
  }
}

render(<App />, document.getElementById("root"));