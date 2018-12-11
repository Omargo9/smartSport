import React, { Component } from 'react';
import { map } from 'lodash';
import { Query } from 'react-apollo';
import Card from '../Card/Card';
import productList from './Query/ProductList';
import withCardListStyle from './withcardListStyle';


class CardList extends Component {
    constructor () {
        super()
    }
   
    render() { 
        const { className } = this.props;
        return (
            <Query query={productList}>
            {({ loading, error, data }) => {
                 console.log('props', data)
              if (error) return `Error! ${error.message}`;
              return (
                  <div className={className}>
                <div className="cardCon" >
                  {map((data.products), (product) => ( 
                  <Card product={product}/>
                  ))}
                  </div>
                </div>
              )
            }}
          
          </Query>
          
            
          )}
        }
         
export default withCardListStyle(CardList);
