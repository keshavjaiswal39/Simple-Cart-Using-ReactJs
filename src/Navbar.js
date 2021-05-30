import React from 'react';

const Navbar = (props) => {

        return (
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://image.flaticon.com/icons/png/128/34/34568.png" alt="cart-icon"/>
                    <span style={styles.cartCount}>3</span>
                </div>
            </div>
        );
    }

const styles = {
    cartIcon: {
        height: 40,
        marginRight: 50,
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        marginRight: 38,
        background:'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 5,
        top: -10
    }
};


export default Navbar