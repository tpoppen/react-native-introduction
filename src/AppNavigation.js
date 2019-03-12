// package import
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

// local imports
import { ROOT_SWITCH_ROUTES, TAB_ROUTES, STACK_ROUTES } from './AppNavigationConstants';
import {
    HomeScreen,
    LoginScreen,
    SplashScreen,
    StackNavExampleScreen,
    StateManagementExampleScreen
} from './screens';

const SampleStackNavigator = createStackNavigator({
    [STACK_ROUTES.SampleStackView]: { screen: StackNavExampleScreen },
}, {
    initialRouteKey: STACK_ROUTES.SampleStackView,
});

const SampleBottomTabNavigator = createBottomTabNavigator({
    [TAB_ROUTES.Home]: {
        screen: HomeScreen,
    },
    [TAB_ROUTES.StateExample]: {
        screen: StateManagementExampleScreen
    },
    [TAB_ROUTES.StackExample]: {
        screen: SampleStackNavigator
    },
}, {
    initialRouteName: TAB_ROUTES.HomeScreen,
});

const RootLevelNavigation = createSwitchNavigator({
    [ROOT_SWITCH_ROUTES.SplashScreen]: { screen: SplashScreen },
    [ROOT_SWITCH_ROUTES.LoginScreen]: { screen: LoginScreen },
    [ROOT_SWITCH_ROUTES.HomeScreen]: { screen: HomeScreen },
}, {
    initialRouteName: ROOT_SWITCH_ROUTES.SplashScreen
});

export default createAppContainer(RootLevelNavigation);