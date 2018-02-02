import React from 'react';
import Card from './Card';


const CardList = ({cats}) => {
    const cardArray = cats.map((user, i) => {
        console.log(`wtf is ${user.name}`)
        return (
            <Card 
                key={i} 
                id={user.id} 
                name={user.name} 
                email={user.email} 
            />)
    });
    return (
        <div>
            { cardArray }
        </div>
    );
}

export default CardList;