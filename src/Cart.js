import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    render () {
        return (
            <div className="cart">
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
        );
    }
}


// ******************************************************************************************
// example to render a list of components

// class Cart extends React.Component {
//     render () {
//         const arr = [1,2,3,4,5];
//         return (
//             <div className="cart">
//             {/* // this will return the array item */}
//                 {/* {arr} */}

//                 {/* lets try to increase all the item in the array by 5 */}
//                 { 
//                     arr.map((item) => {
//                         return item + 5;
//                     })
//                 }
//             </div>
//         );
//     }
// }
// ******************************************************************************************



export default Cart
