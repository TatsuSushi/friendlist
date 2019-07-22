import React, { Component } from 'react';
import CardData from './CardData';

interface ICardLoopProps{
    data : [];
}

class CardLoop extends Component<ICardLoopProps> {
    render() {
        const results = this.props.data;
        let friends = results.map((friends:any, index) => {

            let item = friends.friends.map((item:any) => {
                return `"${item.relationship}",`;
            })

            if(index % 2 === 0){
                return ( 
                         
                    <CardData name={friends.name} gender={friends.gender} age={friends.age}
                    biography={friends.biography} relationship={item} key={friends.id.toString()} />
                    )
                   
            }
           
        })
        
       return friends;
    }
}

export default CardLoop;