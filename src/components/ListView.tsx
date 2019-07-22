import React, { Component } from 'react';
import ListLoop from './ListLoop';
import style from './listView.module.scss';


interface ListViewProps {
    data: [];
}

class ListView extends Component<ListViewProps> {
    render() {
        return (
            <ul className={style.friends}>
            {this.props.data ? <ListLoop data={this.props.data}/>: 'No data available'}
            </ul>
        );
    }
}

export default ListView;