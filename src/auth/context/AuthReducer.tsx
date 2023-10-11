export const LogActions = {
    login: "LOG_IN",
    logout: "LOG_OUT"
}

const authReducer = (state, action) => {

    switch (action.type) {
        case LogActions.login:
            return {
                ...state,
                isLogged: true,
                user: action.payload
            }
        case LogActions.logout:
            return {
                isLogged: false,
            }
        default: state;
    }

}

export default authReducer;