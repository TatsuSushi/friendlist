import React, { Component } from 'react';
import CardData from './CardData';

interface ICardLoop2Props {
    data : [];
}

class CardLoop2 extends Component<ICardLoop2Props> {
    render() {
        const results = this.props.data;
        let friends = results.map((friends:any, index) => {

            let item = friends.friends.map((item:any) => {
                return `"${item.relationship}",`;
            })

            if(index % 2 === 1){
                return ( 
                         
                    <CardData name={friends.name} gender={friends.gender} age={friends.age}
                    biography={friends.biography} relationship={item} key={friends.id.toString()} />
                    )
                   
            }
           
        })
        
       return friends;
    }
}

export default CardLoop2;