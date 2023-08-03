import React from 'react';

//class Navbar extends React.Component{   // we are inheriting from the component class in React
  //  render() {   /* for a class component to be a react component, we use a method render() that returns some jsx code */
    const Navbar = (props) =>{
    return ( 
    <div style= {styles.nav}>
    <div style= {styles.carticonContainer}>
    <img style = {styles.carticon} src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="cart-icon"></img>
    <span style= {styles.cartCount}>{props.count}</span>
    </div>
    </div>
)
    }

const styles ={
    carticon : {
        height:32, marginRight :20
    }, 
    nav : {
        height: 70,
        background : '#4267b2',
        display: 'flex',
        justifyContent :'flex-end',
        alignItems : 'center'
    },
    carticonContainer : {
        position : 'relative',
    },
    cartCount : {
        background :'yellow',
        borderRadius : '50%',
        padding : '4px 8px',
        position :'absolute',
        right: 0 ,
        top: -9
    }
}

 export default Navbar;