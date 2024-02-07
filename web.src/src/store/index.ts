import stateController from 'state-controller'
import useCounterController from './useCounterController'
import useUserController from './useUserController' 

// 注意前后顺序，后面的hook内部可以调用前面的hook
const store = stateController.combine(
    useUserController,
    useCounterController
)

export default store
