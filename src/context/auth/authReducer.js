export function authReducer(videoState, { type, payload }) {
   switch (type) {
      case "LOAD_USER":
         return {
            ...videoState,
            userName: payload.userName,
            userEmail: payload.email,
            isUserLoggedIn: true,
         };

      case "LOGOUT_USER":
         return { ...videoState, userName: "", userEmail: "", isUserLoggedIn: false, token: "" };

      case "LOAD_TOKEN":
         return {
            ...videoState,
            token: payload,
         };

      default:
         return videoState;
   }
}
