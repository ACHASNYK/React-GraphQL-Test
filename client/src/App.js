
import React, {Component} from "react";
import render from "react-dom";
// import Categories from "./components/Categories";
import ApolloClient from 'apollo-boost';
import InMemoryCache from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import SelectCat from "./components/SelectCat";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Clothes from "./components/Clothes";
import Tech from "./components/Tech";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
  // cache: new InMemoryCache()
})

class App extends Component {
  render() {

    return (
      <Router>
        <ApolloProvider client={client}>
          <div className="main">
            <div>
            <Navbar/>
            </div>
            <div className ="content">
              <Switch>
                <Route exact path="/">
                  <Main/>                                   
                </Route>
                <Route exact path="/all">
                  <Main/>                                   
                </Route>
                <Route exact path="/clothes">
                  <Clothes/>
                </Route>
                <Route exact path="/tech">
                  <Tech/>
                </Route>
              </Switch>
            </div>            
          </div>
        </ApolloProvider>
      </Router>
    );
  }
}


export default App;
