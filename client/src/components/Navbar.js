import React, {Component} from "react";
// import {gql} from 'apollo-boost';
import { graphql } from "react-apollo"
import { allCatQuery } from "../queries/Queries";
import ApolloProvider from 'react-apollo';
import HeaderButton from "./HeaderButton";



class Navbar extends Component {
    displayList(){
        const data = this.props.data;
        
        // console.log(data);
        if(data.loading) {
            return(<div>Loading...</div>)
        }else{
            return data.categories.map((items, i) => {
                return (<li className="buttons" key={i}> <HeaderButton 
                    key = {i}
                    name = {items.name}
                    link = {items.name}
                    /></li>);
                
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