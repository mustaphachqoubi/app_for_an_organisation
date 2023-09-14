import Section from "./Section"
import TableContainer from "./TableContainer"
import { useEffect, useState } from "react"

const Arrivee = ({ style }) => {

    const [ arriveeTh, setArriveeTh ] = useState([])
    const [ arriveeTd, setArriveeTd ] = useState([])

    const handleData = async () => {
        try{
            const res = await fetch("http://localhost:5050/arrivee")
            const data = await res.json()
            setArriveeTh(data[0].ArriveeTh)
            setArriveeTd(data[0].ArriveeTd)
        } catch (err) {
        }
    }

    useEffect(() => {
        handleData()
    }, [])

    return (
        <div style={style}>
           <TableContainer caption={"Arrivee"} th={arriveeTh} td={arriveeTd} />
        </div>
    )
}

const ArriveeSection = Section(Arrivee)

export default ArriveeSection