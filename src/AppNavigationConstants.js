// Defining Navigation constants for use across the application to avoid hard coded strings
const ROOT_SWITCH_ROUTES = {
    SplashScreen: 'SPLASH',
    LoginScreen: 'LOGIN',
    BaseTabNav: 'ROOT',
}

const TAB_ROUTES = {
    Home: 'HOME_STACK',
    StateExample: 'STATE_STACK',
    StackExample: 'NEST_STACK',
}

const HOME_STACK_ROUTES = {
    Home: 'HOME',
}

const STATE_STACK_ROUTES = {
    State: 'STATE',
}

const NEST_STACK_ROUTES = {
    NestStack: 'STACK_VIEW'
}

export { ROOT_SWITCH_ROUTES, TAB_ROUTES, HOME_STACK_ROUTES, STATE_STACK_ROUTES, NEST_STACK_ROUTES };