import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';



const AppNavigator = createSwitchNavigator(
    { Auth: AuthFlow, App: AppFlow },
    { initialRouteName: 'Auth' }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;