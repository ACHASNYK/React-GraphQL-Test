import React, {Component} from "react";
// import {gql} from 'apollo-boost';
import { graphql } from "react-apollo"
import { allProducts } from "../queries/Queries";
import ApolloProvider from 'react-apollo';
import Card from "./Card";
import Title from "./Title";


class Main extends Component {
    
     
    displayList(){
        const data = this.props.data;
        
        // console.log(data)
        if(data.loading) {
            return(<div>Loading...</div>)
        }else{
            return data.category.products.map(items => {
                return (<li><Card 
                    key={items.id} 
                    photo = {items.gallery[0]} 
                    name={items.name}
                    price = {items.prices} /></li>);
            })
        }
    }

    displayTitle(){
        const title = this.props.data.category.name;
        return (<Title title={title}/>);
    }

    
    
    render() {
  
      return (
         
        <div id="main">
            <div>
                {this.displayTitle()}
                
            </div>
            <div>
            <ul className="categories">
                {this.displayList() }
            </ul>
            </div>
        </div>
      );
    }
  
}
const text = "all";
export default graphql(allProducts)(Main)