import React from 'react';
import './Card.css';

const CardContent = props => <h1> Get Started with React </h1>;

const cContentInfo = props => <p> React makes it painless to create interactive UIs. Design simple views for each state in your application </p>;

const cContent = props => {
    return(
        <div>
            <CardContent />
            <cContentInfo />
        </div>
    );
};
export default cContent;