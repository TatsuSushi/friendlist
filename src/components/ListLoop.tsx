import React, { Component } from 'react';
import ListData from './ListData';


interface IListLoopProps {
    data: [];
}

class ListLoop extends Component<IListLoopProps> {
    static defaultProps = {
        data: []
    }

    render() {
        const results = this.props.data;
        let friends = results.map((friends: any) => {
            let item = friends.friends.map((item: any) => {
                return `"${item.relationship}",`;
            })
            return (
                <ListData name={friends.name} gender={friends.gender} age={friends.age}
                    biography={friends.biography} relationship={item} key={friends.id.toString()} />
            )

        })

        return friends;
    }
}

export default ListLoop;