import React, {PureComponent} from 'react';
import Toggle from '../assets/toggle.svg';
import ActiveToggle from '../assets/toggle-active.svg'
import { NavLink, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import style from './toggleView.module.scss';
import * as constants from '../constants/route';

interface IToggleViewProps extends RouteComponentProps{}

interface IToggleViewStates{
    isRunning: boolean;
}

class ToggleView extends PureComponent<IToggleViewProps, IToggleViewStates>{


    state = {
        isRunning: this.props.location.pathname === constants.CARDVIEW_ROUTE ? false : true
        
      };

      handleViewToggle = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));
    }
    
    render () {
        return(
            <div>
            <NavLink to={this.state.isRunning ? constants.CARDVIEW_ROUTE: constants.LISTVIEW_ROUTE } onClick = {this.handleViewToggle} > <img className={style.toggle} src={this.state.isRunning ? Toggle: ActiveToggle} alt="Toggle" /> </NavLink>
            </div>
        );
    }
}

export default withRouter(ToggleView);