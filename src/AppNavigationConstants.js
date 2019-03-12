// Defining Navigation constants for use across the application to avoid hard coded strings
const SPLASH_SCREEN = 'SPLASH';
const LOGIN_SCREEN = 'LOGIN';
const BASE_TAB_NAVIGATOR = 'BASE_TAB_NAV';

const ROOT_SWITCH_ROUTES = {
    SplashScreen: SPLASH_SCREEN,
    LoginScreen: LOGIN_SCREEN,
    HomeScreen: BASE_TAB_NAVIGATOR,
}

const HOME_SCREEN = 'HOME';
const STATE_EXAMPLE_SCREEN = 'STATE_EXAMPLE';
const STACK_ROOT = 'STACK_ROOT';

const TAB_ROUTES = {
    Home: HOME_SCREEN,
    StateExample: STATE_EXAMPLE_SCREEN,
    StackExample: STACK_ROOT,
}

const STACK_VIEW = 'STACK_VIEW';

const STACK_ROUTES = {
    SampleStackView: STACK_VIEW
}

export { ROOT_SWITCH_ROUTES, TAB_ROUTES, STACK_ROUTES };