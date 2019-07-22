import React, {PureComponent} from 'react';
import style from './images.module.scss';


export interface IPanelProps {
    show: boolean;
    biography: string;
    relationship: string;
}


class Panel extends PureComponent <IPanelProps>{


    render (){
        return (
            <div className = {style.panel} style={{display: this.props.show ? 'block' : 'none'}}>
                <span> <h3>Relationship</h3> <p style ={{wordBreak: 'break-word'}}>{this.props.relationship} </p> </span>
                <h3>Biography</h3> <p>{this.props.biography}</p>
            </div>
    
        );
    
    }
    
}

export default Panel;