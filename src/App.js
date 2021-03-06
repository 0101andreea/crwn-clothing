import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sig-in-and-sign-up/sig-in-and-sign-up.component'

import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { setCurrentUser} from './redux/user/user.actions'


class App extends React.Component {

  componentDidMount(){

    const { setCurrentUser } = this.props;
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
          setCurrentUser({
          //get the data related to the user that is stored to our DB
        
             id: snapShot.id,
             ...snapShot.data()
         
            });
          });
        }
  
        setCurrentUser(userAuth);
      });
    }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
  return (
    //redirect to home if user is signed in
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        
        <Route exact path='/signin' render={()=> 
          this.props.currentUser ? (
            <Redirect to='/'/>
            ) : (
              <SignInAndSignUpPage/>
  )
} 
/>
      </Switch>
    </div>
  );
}
}
//need currentUser from Redux state
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  //whatever object will pass to dispatch it will be an action object that will pass to every reducer
  //invoking the current user with the user that will return the payload from user.actions : dispatching the props
  setCurrentUser: user => dispatch(setCurrentUser(user))


})

export default connect(
  mapStateToProps, 
  mapDispatchToProps ) (App);