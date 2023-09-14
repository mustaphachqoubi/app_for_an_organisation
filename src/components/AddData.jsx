import { BsPlusCircleFill } from 'react-icons/bs'
import { AiFillMinusCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { setAddClicked } from '../redux/addClicked'
import { useSelector } from 'react-redux'

export const AddData = () => {

    const dispatch = useDispatch()

    const { addClicked } = useSelector(state => state.addClicked)

    const handleClick = () => {
        addClicked === true ? dispatch(setAddClicked(false)) : dispatch(setAddClicked(true))
    }

    return (
        <button className="addnew" onClick={handleClick}>{addClicked === false ? (<><BsPlusCircleFill /> <p>Add new</p></>) : (<><AiFillMinusCircle /> <p>dimiss</p></>)}</button>
    )
}