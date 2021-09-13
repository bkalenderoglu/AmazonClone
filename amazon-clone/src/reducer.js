export const initialState = {
    basket: [],
    user: null
};

//selector
//initial amount and iterate through each item
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, //return  whatever the state originally was
                basket: [...state.basket, action.item],
            };

        case "EMPTY_BASKET":
            return {
               ...state,
               basket: [] 
            }
        case 'REMOVE_FROM_BASKET':
            //goes through every basketItem and checks any of them has id matches with action id
            // this only finds the first match
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            //copy the basket into temporary variable 
            let newBasket = [...state.basket];

            if(index >= 0 ) {
                //it found the id
                //splice() will start removing elements from index(ex.2)
                // splice at index(ex.2) and cut it off
                newBasket.splice(index, 1);

            }else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in the basket!`)
            }

            return {
               ...state,
               basket: newBasket 
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};

export default reducer;