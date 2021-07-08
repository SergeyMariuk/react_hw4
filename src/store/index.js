import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const initState = {
    participants: [],
    winner: null,
}

const reducer = (state=initState, action) => {
    switch (action.type) {
        case 'ADD_PART':
            return {
                ...state,
                participants:[...state.participants, action.payload]
            }
            case 'REMOVE_PART':
                return {
                    ...state,
                    participants:state.participants.filter(p => p.id != action.payload)
                }
                case 'SHOW_WINNER':
                        const winner = state.participants.reduce((ac, item) => {
                            return act.time > item.time ? item : ac;
                        })
                        return{
                            ...state,
                            winner,
                        }
        default:
            return state
    }
}

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware())
)

export default store