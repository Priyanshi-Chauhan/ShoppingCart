import React from 'react';

//class cartitem extends React.Component{  
  //  render() { 
  const cartitem = (props) => {  
  console.log('render');
  console.log('props', props);
  const {title,price,qty} = props.p;   // state is an object, here we are doing object destructuring -> meaning wanting these properties from state object
  const {p, onIncrease, onDecrease, onDelete} = props;
  return ( 
  <div className ='cart-item'>
  
  <div className ='left-block'>
  <img style = {styles.image} src = {p.img} />      {/* this src is very important to get the images of the products displayed on the screen*/}
      </div>
      
    <div className='right-block'>
     <div style = { {fontSize : 25} }>{title}</div>
     <div style = { {color : '#777'} }>Rs. {price}</div>
     <div style = { {color : '#777'} }>Qty : {qty}</div>  
     <div className ='cart-item-actions'>
        {/* buttons */}
        <img alt="increase" className ="action-icons" src="https://cdn-icons-png.flaticon.com/512/2550/2550342.png" onClick = {() => onIncrease(p)} ></img>
        <img alt ="decrease" className ="action-icons" src="https://cdn-icons-png.flaticon.com/512/5974/5974627.png" onClick = {()=> onDecrease(p)} ></img>
        <img alt="delete" className= "action-icons" src= "https://cdn-icons-png.flaticon.com/512/6861/6861362.png" onClick= {() => onDelete(p.id)}></img>
        </div>      
    </div>

 </div>
)
    }
const styles= {
     image : {
         height : 110, width : 110, borderRadius :6, background : '#ccc'}
}
 export default cartitem;