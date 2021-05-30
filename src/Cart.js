import React from 'react';
import CartItem from './CartItem';

// =========================================================================================
// we will use props to pass item from the parent cart to the chile cart-item

class Cart extends React.Component {
    constructor() {
            super(); // this will call the constructor of my component class in react, 
            //  so whenever we are using constructor in our classes, we need to call super() to basically call the constructor of my parent class if I am inheriting
            this.state = {
                products: [
                    {
                        price: 99,
                        title: 'Watch',
                        qty: 1,
                        img:'',
                        id: 1
                    },
                    {
                        price: 9999,
                        title: 'Mobile',
                        qty: 10,
                        img:'',
                        id: 2
                    },
                    {
                        price: 99999,
                        title: 'Laptop',
                        qty: 4,
                        img:'',
                        id: 3
                    }
                ]
            }
        }
    render () {
        const { products } = this.state;
        return (
            <div className="cart">
                {
                    products.map((product) => {
                        return 
                        (
                            <CartItem 
                                product={product} 
                                key={product.id}
                            />
                        )

                    })
                }
                
            </div>
        );
    }
}

// -----------------------------------------------------------------------------------------

// class Cart extends React.Component {
//     render () {
//         return (
//             <div className="cart">
//                 <CartItem/>
//                 <CartItem/>
//                 <CartItem/>
//             </div>
//         );
//     }
// }


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