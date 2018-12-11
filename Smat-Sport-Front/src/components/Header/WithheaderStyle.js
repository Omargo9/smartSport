 import styled from 'styled-components';
 export default (component) => styled(component)`
 

.header{
    display: flex;
    justify-content: space-between;
    width:calc(100%-20px);
    background-color:black;
    padding: 10px 0px;
    
    

}
.menu-icon{
    width: 10%;
}
.display{
    display: none;
}
.logo-img{
    width: 125px;
    height: 50px;
    padding-left:20px;
}
li {
    list-style-type: none;
    font-family: Wigrum;
    font-size: 14px; 
}
.menu{
    display: flex;
    text-decoration: none;
    padding-left: 20px;
    margin-right: 15px;
    color: white;
    

}

`