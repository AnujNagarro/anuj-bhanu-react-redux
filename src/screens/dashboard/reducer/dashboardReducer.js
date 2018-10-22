export default (dashboardState = {}, action) => {
   const newState = JSON.parse(JSON.stringify(dashboardState));
   switch (action.type) {
      case "action 1":
         {
            return newState;
         }
      default:
         {
            return newState;
         }
   }
}