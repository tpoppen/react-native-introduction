// package import
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

// local imports
import { ROOT_SWITCH_ROUTES, TAB_ROUTES, HOME_STACK_ROUTES, STATE_STACK_ROUTES, NEST_STACK_ROUTES } from './AppNavigationConstants';
import {
    HomeScreen,
    LoginScreen,
    SplashScreen,
    StackNavExampleScreen,
    StateManagementExampleScreen,
} from './screens';

const HomeStack = createStackNavigator({
    [HOME_STACK_ROUTES.Home]: HomeScreen,
});

const StateStack = createStackNavigator({
    [STATE_STACK_ROUTES.State]: StateManagementExampleScreen,
});

const NestedStack = createStackNavigator({
    [NEST_STACK_ROUTES.NestStack]: { screen: StackNavExampleScreen },
});

const SampleBottomTabNavigator = createBottomTabNavigator({
    [TAB_ROUTES.Home]: { screen: HomeStack },
    [TAB_ROUTES.StateExample]: { screen: StateStack },
    [TAB_ROUTES.StackExample]: { screen: NestedStack },
});

const RootLevelNavigation = createSwitchNavigator({
    [ROOT_SWITCH_ROUTES.SplashScreen]: { screen: SplashScreen },
    [ROOT_SWITCH_ROUTES.LoginScreen]: { screen: LoginScreen },
    [ROOT_SWITCH_ROUTES.BaseTabNav]: { screen: SampleBottomTabNavigator },
});

export default createAppContainer(RootLevelNavigation);