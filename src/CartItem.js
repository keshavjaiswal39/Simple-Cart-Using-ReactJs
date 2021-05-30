import React from 'react';


class CartItem extends React.Component {
    // 2. we added this state
    constructor() {
        super(); // this will call the constructor of my component class in react, 
        //  so whenever we are using constructor in our classes, we need to call super() to basically call the constructor of my parent class if I am inheriting
        this.state = {
            price: 9999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
        // Second method is to do binding here
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    // Increase Quantity

    increaseQuantity = () => {
        // here it will only increase the value in the state, but it wont re-render in our component so we will use setState funciton to re-render in our component
        // this.state.qty += 1;

        // setState method - 1
        // this.setState({
        //     qty: this.state.qty + 1   // it does shallow merging, it means, if i want to change the quantity then it will only change the qunantity, it wont touch other properties
        // });

        // setState method - 2
        // Instead of passing an object, we can pass a function

        // So, id i require a previous state i will use fucntion form, else i will use the object form
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });

        // easy method rather than doing binding is placing an arrow function
        console.log('this.state', this.state);
    }

    // Decrease Quantity

    decreaseQuantity = () => {
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }

    render() {
        //  Instead of writing this.state.title everywhere, we can define all those and get those from my object and i will use object destructuring
        const { price, title, qty } = this.state;
        return (

            // 1. we added this JsX first
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777', marginBottom: 10 }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/128/1828/1828926.png"
                            // 3. we saw how to attach click listener and discussed about binding
                            // onClick={this.increaseQuantity}    // this will show error so we will do binding
                            // onClick={this.increaseQuantity.bind(this)}    // 1st way is to to binding here.
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/128/992/992683.png" 
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/128/3096/3096673.png" 
                        />
                    </div>
                </div>

            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem
