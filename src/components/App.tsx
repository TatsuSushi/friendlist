import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, withRouter } from 'react-router-dom';
import './../style.css';
import Header from './Header'
import ListView from './ListView'
import CardView from './CardView'
import axios from 'axios';
import * as constants from '../constants/route'

interface IAppProps{

}

interface IAppStates{
  isRunning: boolean;
  posts: []
}

class App extends Component<IAppProps, IAppStates> {

  constructor() {
    //@ts-ignore
    super();
    //@ts-ignore
    this.state = {
      posts: []
    };
  }

  
  componentDidMount() {
    axios.get(`http://www.json-generator.com/api/json/get/cqHzMtkErS?indent=2`).then(res => {
      console.log(res);
      const posts = res.data.data.friends;
      this.setState({ posts });
    });
  }

  render() {
      
    return (
      <div className={"container-fluid"}>
      <BrowserRouter>
   
          <Header  secondHeader={`Profiles`}  />
          <Route exact path={constants.HOME_ROUTE} render={() => <Redirect to = {constants.LISTVIEW_ROUTE} />} />
          <Route exact path={constants.LISTVIEW_ROUTE} render={() => <ListView data={this.state.posts}/>} />
          <Route exact path={constants.CARDVIEW_ROUTE} render={() => <CardView data={this.state.posts} />} />
       
      </BrowserRouter>
      </div>
    );
  }
}
export default App;
