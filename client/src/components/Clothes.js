import React, {Component} from "react";
// import {gql} from 'apollo-boost';
import { graphql } from "react-apollo"
import { allClothes } from "../queries/Queries";
import ApolloProvider from 'react-apollo';


class Clothes extends Component {
    displayList(){
        const data = this.props.data;
        
        console.log(data)
        if(data.loading) {
            return(<div>Loading...</div>)
        }else{
            return data.category.products.map(items => {
                return (<li key={items.id}>{items.name} </li>);
            })
        }
    }
    
    
    render() {
  
      return (
        <div id="main">
            <ul className="categories">
                {this.displayList() }
            </ul>
        </div>
      );
    }
  
}
const text = "all";
export default graphql(allClothes)(Clothes)