import {useRef} from 'react'
import Child from './Child'

const Parent = () =>{
    const inputRef = useRef();
    const clickHandler = () => {
          inputRef.current.focus();
        }
    return <div>
      <button onClick={clickHandler}>Focus child</button>
      <Child ref={inputRef}/>
    </div>
  }

  export default Parent;