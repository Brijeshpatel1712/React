import { DICRIMENT, INCRIMENT } from "./actiontype"

const inisailstate = {
    count: 0
}
export function reduser(state=inisailstate,action){
    switch(action.type){
        case INCRIMENT:
            return{count:state.count + 1}

        case DICRIMENT:
            return{count:state.count - 1}

        default :
        return state 
    }
}