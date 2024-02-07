import { useState } from "react"
import stateController,{useIfMounted} from "state-controller" 
import useUserController from "./useUserController"
 
let useValue = ({n=0}) => {

    const [counter, setCounter] = useState({value: n })
    const [,userController] = useUserController()
    const [ifMounted,loading] = useIfMounted();

    const controller = {
        
        increment(n: number){
            setCounter({ ...counter, value: counter.value + n })
            userController.setLastActiveTime( new Date() )
        },

        update(){

            ifMounted(
              async ()=>{
                  return {value:2}
              }
            ).then( setCounter ).catch( e => e && console.error(e) )


            ifMounted({value:2}).then( setCounter )

            if( ifMounted() ){
              setCounter({value:2})
            }
        }
    }
 
    return [counter,controller,loading] as const;
}

let useCounterController = stateController.create(useValue)
export default useCounterController