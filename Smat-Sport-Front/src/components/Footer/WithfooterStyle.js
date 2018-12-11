import styled from 'styled-components';
export default (component) => styled(component)`
.Footer__Container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 200px;
    width: 100%;
    background-color:#000000;

    margin-top: 20px;
    margin-bottom:0px;

    
}

.Footer__div1 {
    width: 334px;
}

.Footer__div2 {
    width: 1232px;
    flex-direction: row;
}

.Footer__img {
     
     width: 250px;
     margin-left:20px
   margin-top:60px;
   
}

.Footer__ContDiv2 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.Footer__lDiv {
    margin-bottom: 20px;
    height: 18px;
    width: 170px;
    color: #FFFFFF;
    font-family: Wigrum;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 3.5px;
    line-height: 18px;
    text-transform: uppercase;
}

.Footer__lorem {
    height: 108px;
    width: 216px;
    opacity: 0.7;
    color: #FFFFFF;
    font-family: Wigrum;
    font-size: 14px;
    line-height: 36px;
}

.Footer__B1 {
    margin-left: 133px;
    margin-top: 39px;
}

.Footer__B2 {
    margin-left: 73px;
    margin-top: 39px;
}

.Footer__B3 {
    margin-left: 75px;
    margin-top: 39px;
}
`