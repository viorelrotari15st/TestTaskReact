import React from 'react';
import classes from './MyButton.module.css'
//destructurization luam props children 
//iar restul elementelor le lasam asa cum sunt fara a "muta"
const MyButton = ({ children, ...props }) => {
    return (
        //toate propsurile care se transmot la component 
        // se vor transmite direct la button 
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;