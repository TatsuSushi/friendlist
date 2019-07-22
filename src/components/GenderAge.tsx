import React from 'react';

interface IGenderAgeProps{
    gender: string,
    age: string
}

const GenderAge = (props:IGenderAgeProps) => {

    return(
        <>
       {props.gender}, {props.age} 
       </>
    );
}

export default GenderAge;