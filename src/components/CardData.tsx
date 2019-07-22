import React, { Component } from 'react';
import Profile from '../assets/profile.svg';
import Background from '../assets/card-bg.jpg';
import SplitName from './SplitName';
import GenderAge from './GenderAge';
import ViewMore from '../assets/view-more.svg';
import Panel from './Panel';
import style from './cardData.module.scss';
import styleImage from './images.module.scss';

interface ICardDataProps{
    name : string;
    gender: string;
    age: string;
    relationship: string;
    biography: string;
}

interface ICardDataState{
    isRunning:boolean;
}

class CardData extends Component<ICardDataProps,ICardDataState> {
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
            <div className={style.card}>
                <div style={{ position: 'relative' }}>
                    <h2 className={style.titleCard}>Profile</h2>
                    <img src={Background} style={{ width: "100%" }} className={style.cardBG} alt="background" /> 
                    <img src={Profile} className={style.cardProfile}  alt="cardProfile" />

                </div>

                <div className="container">
                    <div className={style.marginCard}>
                        <SplitName name={this.props.name} />
                    </div>
                </div>
                <div className={`${style.genderAgeCard} ${style.marginCard}`}  >
                    <GenderAge gender={this.props.gender} age={this.props.age} />
                </div>
                <span>
                    <input type="image" src={ViewMore} className={`${styleImage.image} ${style.viewMore}`} alt="view more" onClick={this.handlePanelToggle} />
                </span>
                <div className="panel">
                    <Panel show={this.state.isRunning} relationship={this.props.relationship} biography={this.props.biography} />
                </div>
            </div>
        );

    }

}

export default CardData;