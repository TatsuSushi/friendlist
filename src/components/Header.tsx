import React, { Component } from 'react';
import ToggleView from './ToggleView';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import style from './header.module.scss';
;

interface IHeader extends RouteComponentProps {
    firstHeader?: string,
    secondHeader: string
}

class Header extends Component<IHeader>{
    render() {
        console.log(this.props);

        const getDefaultTitle = () => {
            if (this.props.location.pathname === '/cardview') {
                return "CARD View";
            } else if (this.props.location.pathname === '/listview') {
                return "List View";
            }
        }

        return (
            <>
                <header className={style.header}>
                    <h1>{this.props.firstHeader ? this.props.firstHeader : getDefaultTitle()} </h1>
                    <ToggleView />
                </header>
                <h2>{this.props.secondHeader}</h2>
            </>
        );
    }

}

export default withRouter(Header);