import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
// import Currency from './components/currency'
// import DogPhoto from './components/dogs/DogPhoto'
// import Dogs from './components/dogs/Dogs';
import AddTodo from './components/todoList/AddTodo';
import Todos from './components/todoList/Todos';
import client from './todoClient';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>Building Query components 🚀</h2>
          <AddTodo />
          <Todos />
        </div>
      </ApolloProvider>
    );
  }
}

render(<App />, document.getElementById("root"));