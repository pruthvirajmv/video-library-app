
export function authReducer(state, {type, payload} ) {
    switch(type){
        case "LOAD_USER" : 
            return { ...state,
                userId : payload._id, 
                userName: payload.userName, 
                userEmail: payload.email, 
                isUserLoggedIn : true
            }
        
        case "LOGOUT_USER" : 
            return { ...state,
                userId : "", 
                userName: "", 
                userEmail: "", 
                isUserLoggedIn : false
            }

        default : return state;
    }
}