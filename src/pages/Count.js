import { useSelector, useDispatch } from "react-redux"
import style from './css/count.module.css'
export default function Count() {
    const { counter} = useSelector(state => state)
    const dispatch = useDispatch()
    const plus = () => {
        dispatch ({
            type: 'PLUS_COUNTER'
        })        
    }
    const minus = () => {
        dispatch({
        type: 'MINUS_COUNTER'
        })
    }
   
  return (
    <div className={style.buttons}>
      <button className={style.plus} onClick={plus} >+</button>
      <h2 className={style.counter}>{counter}</h2>
      <button className={style.minus} onClick={minus}>-</button>
    </div>
  )
}
