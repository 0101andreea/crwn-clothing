import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sig-in-and-sign-up/sig-in-and-sign-up.component'

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser:null
    }
  }

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if a user sign in, check if is signed in
      //is is signed  and the is a document profile, in will get the userRef from profile document from the userAuth object
      //if there is no document, will create a new object in firebase.utils and still get back the userRef
      //set the local state with the snapShot id and snapShotdata
      //if the current user sign out, will set the currentUser to null
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        //check if DB is updated at that ref with new data

        userRef.onSnapshot(snapShot => {
          //get the data related to the user that is stored to our DB
         this.setState({
           currentUser: {
             id: snapShot.id,
             ...snapShot.data()
           }
         })
         console.log(this.state)
        })
     
      }
      this.setState({currentUser:userAuth})
    
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
  return (
    <div>
    <Header currentUser = {this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
}

export default App;