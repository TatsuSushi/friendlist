import React, { Component } from 'react';
import Profile from '../assets/profile.svg';
import ViewMore from '../assets/view-more.svg';
import Panel, { IPanelProps } from './Panel';
import SplitName from './SplitName';
import GenderAge from './GenderAge';
import style from './listData.module.scss';
import styleImage from './images.module.scss';

interface IListDataProps {
    
    name : string;
    gender: string;
    age: string;
    relationship: string;
    biography: string;
}

interface IListDataStates{
    isRunning : boolean;
}

class ListData extends Component<IListDataProps,IListDataStates> {
    state = {
        isRunning: false
    };

    handlePanelToggle = () => {
        console.log(`toggling`);
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));
    }

    render() {
        return (
            <li>
                <div className={style.friend}>
                    <img src={Profile} className={styleImage.image}  alt="profile" />
                    <div className={style.margin}>
                        <SplitName name={this.props.name} />
                    </div>
                    <span className={`${style.margin} ${style.genderAge}`}>
                    <GenderAge  gender= {this.props.gender} age={this.props.age}/>
                    </span>
                    <span> 
                    <input type="image" src={ViewMore} className={styleImage.image} alt="view more" onClick={this.handlePanelToggle} />
                     </span>
                </div>

                <Panel show={this.state.isRunning} relationship={this.props.relationship} biography={this.props.biography} />
            </li>
        );
    }

}

export default ListData;