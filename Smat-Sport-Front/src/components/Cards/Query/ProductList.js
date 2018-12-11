import gql from 'graphql-tag'

export default gql`
query{
    products{
    id
    price
    sale
    name
    quantity
    imgPath
    description
    
   
  }}
  
`