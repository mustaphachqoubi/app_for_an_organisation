import Section from "./Section"
import TableContainer from "./TableContainer"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

const Depart = ({ style }) => {
    const dispatch = useDispatch

    const [ departTh, setDepartTh ] = useState([])
    const [ departTd, setDepartTd ] = useState([])

    const handleData = async () => {
        try{
            const res = await fetch("http://localhost:5050/depart")
            const data = await res.json()
                setDepartTh(data[0].DepartTh)
                setDepartTd(data[0].DepartTd)
            
        } catch (err) {
        }
    }

    useEffect(() => {
        handleData()
    }, [])

    return (
        <div style={style}>
            <TableContainer caption={"Depart"} th={departTh} td={departTd} />
        </div>
    )
}

const DepartSection = Section(Depart)
export default DepartSection