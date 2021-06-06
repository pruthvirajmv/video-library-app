export function authReducer(state, { type, payload }) {
   switch (type) {
      case "LOAD_USER":
         return {
            ...state,
            userName: payload.userName,
            userEmail: payload.email,
            isUserLoggedIn: true,
         };

      case "LOGOUT_USER":
         return { ...state, userName: "", userEmail: "", isUserLoggedIn: false, token: "" };

      case "LOAD_TOKEN":
         return {
            ...state,
            token: payload,
         };

      default:
         return state;
   }
}
