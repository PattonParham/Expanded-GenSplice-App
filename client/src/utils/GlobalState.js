import React, {createContext, useReducer, useContext} from "react";

import{
ADD_SOUND
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {

switch (action.type){
    case ADD_SOUND:
        return{
        ...state,
        sounds: [action.sound, ...state.sounds]
        }
        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props}) => {

    const [state, dispatch] = useReducer(reducer, {
        sounds: [],
        currentSound: {
            _id: 0,
            title: "",
            url: ""
        }
    });
return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };