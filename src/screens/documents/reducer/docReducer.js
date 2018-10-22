export default (state = {}, action) => {
   let newState = JSON.parse(JSON.stringify(state));
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