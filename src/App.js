import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers';
// import AppContainer from './Navigation';
import AuthLoading from './screens/Auth/AuthLoading'

class App extends Component {
    componentDidlMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyAssjsVOz-9T2vayOwmfRWJQKkgvfZwPvo",
            authDomain: "firstfirebase-8ed7c.firebaseapp.com",
            databaseURL: "https://firstfirebase-8ed7c.firebaseio.com",
            projectId: "firstfirebase-8ed7c",
            storageBucket: "firstfirebase-8ed7c.appspot.com",
            messagingSenderId: "1095680296942",
            appId: "1:1095680296942:web:d74001a34bd60a107bf0ff"
          };
          if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
         }
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Root>
                    <AuthLoading />
                </Root>
            </Provider>
        );
    }
}

export default App;