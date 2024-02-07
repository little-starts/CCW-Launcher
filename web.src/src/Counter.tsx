import React, { useEffect, useState } from "react"
import { Button } from 'antd'
import useCounterController from "./store/useCounterController"
import useUserController from "./store/useUserController"

const Counter:React.FC<{}> = () =>  {
  const [nativeValue, setNativeValue] = useState("");
  const [counter,counterController] = useCounterController()
  const [user,userController] = useUserController()

  useEffect(
     ()=>{
        userController.setName("stateController")
     },[userController]
  )

   useEffect(
     ()=>{
        aardio.onCounterUpdate(user.name,counter.value).then(
          (res:string) =>{
            setNativeValue(res)
          }
        )
     },[counter.value,user.name]
  )
  
  return (
    <div>
      name: { user.name } value: {counter.value} <Button onClick={ () => { 
        counterController.increment(1);  
      } }>点这里增加计数，跨组件同步状态。</Button>  <br /> 
      { user.lastActiveTime.toLocaleString() }
      <br /> <br /> 
      {nativeValue}
    </div>
  )
}
 
export default Counter;