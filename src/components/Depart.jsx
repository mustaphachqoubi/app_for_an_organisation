import Section from "./Section"
import TableContainer from "./TableContainer"
import { useEffect, useState } from "react"

const Depart = ({ style }) => {

    const [ departTh, setDepartTh ] = useState([])
    const [ departTd, setDepartTd ] = useState([])

    const handleData = async () => {
        try{
            const res = await fetch(process.env.REACT_APP_DEPART)
            const data = await res.json()
            setDepartTh(data[0].DepartTh)
            setDepartTd(data[0].DepartTd)
           console.log(data) 
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
