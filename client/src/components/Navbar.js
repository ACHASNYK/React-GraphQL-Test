import React, {Component} from "react";
// import {gql} from 'apollo-boost';
import { graphql } from "react-apollo"
import { allCatQuery } from "../queries/Queries";
import ApolloProvider from 'react-apollo';


class Navbar extends Component {
    displayList(){
        const data = this.props.data;
        // console.log(data);
        if(data.loading) {
            return(<div>Loading...</div>)
        }else{
            return data.categories.map(items => {
                return (<button a href= "/:{this.name}">{items.name}</button>);
            })
        }
    }
    
    
    render() {
  
      return (
        <div className="navbar">
            <ul className="categories">
                {this.displayList() }
            </ul>
        </div>
      );
    }
  
}
export default graphql(allCatQuery)(Navbar)