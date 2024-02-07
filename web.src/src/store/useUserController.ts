import { useState, useMemo } from "react"
import stateController from "state-controller" 
 
const useValue = () => {
 
    const [user, setUser] = useState({
        name: "", 
        lastActiveTime: new Date()
    }) 
 
    const controller = useMemo( ()=>({ 
        setName(n: string){
            setUser( user=>({ ...user, name: n }) )
        }, 
        setLastActiveTime(d:Date){
            setUser( user=>( { ...user,  lastActiveTime: d} ) )
        },
    }),[])

    return [user,controller] as const;
}

let useUserController = stateController.create(useValue)
export default useUserController