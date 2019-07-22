import React, { Component } from 'react';
import CardLoop from './CardLoop';
import CardLoop2 from './CardLoop2';
import style from './cardView.module.scss';

interface ICardViewProps {
    data: [];
}

class CardView extends Component<ICardViewProps> {
    state = {
        isRunning: false
    };

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-6"> {/*1st column */}
                        <div className={style.col}>
                            <CardLoop data={this.props.data} />

                        </div>
                    </div>
                    <div className="col-6"> {/* 2nd column */}
                        <div className={style.col}>
                            <CardLoop2 data={this.props.data} />
                        </div>

                    </div>
                </div>
                <div>
                </div>
            </>
        );
    }
}

export default CardView;