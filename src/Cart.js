import React from 'react';
import Carti from './Cartitem';
 
const cart = (props) => {
        const {prod} = props;      // prod is the name of the parent prop (app here), destructuring the props here
        // const arr = [1,2,3,4,5,"tttt"];
        return(
            <div className = "crt">
                {/* { arr.map((item)=>{ return item +1})} */}
              {prod.map((product) => {
                return <Carti 
                p = {product}    // p is a prop name here like others. which is used in its child (cartitem)
                key = {product.id}
                onIncrease = {props.onIncrease}
                onDecrease = {props.onDecrease} 
                onDelete = {props.onDelete}  />
                // i can pass any thing here
     //           func = {() => console.log('sdsd')}
       //         isloggedin = {false}
         //       jsx = {<h1>test</h1>}
           //     comp = {<Carti />}
            
             })} 
                 {/* <Carti qty ={1} title={'watch'} price= {99} img={''} />  */}

            </div>
        )

    }  


export default cart;
