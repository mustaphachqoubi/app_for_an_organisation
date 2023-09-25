import Section from "./Section"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const Notif = () => {

    const [ arriveeTh, setArriveeTh ] = useState([])
    const [ arriveeTd, setArriveeTd ] = useState([])
     
    const [ departTh, setDepartTh ] = useState([])
    const [ departTd, setDepartTd ] = useState([])

    const handleArrivee = async () => {
        try{
            const res = await fetch(process.env.REACT_APP_ARRIVEE)
            const data = await res.json()
            setArriveeTh(data[0].ArriveeTh)
            setArriveeTd(data[0].ArriveeTd)
        } catch (err) {
        }
    }

    const handleDepart = async () => {
        try{
            const res = await fetch(process.env.REACT_APP_DEPART)
            const data = await res.json()
            setDepartTh(data[0].DepartTh)
            setDepartTd(data[0].DepartTd)
        } catch (err) {
        }
    }

    useEffect(() => {
        handleArrivee()
        handleDepart()

    }, [])

    const { mood } = useSelector(state => state.mood)
    const style = { padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center" }

    return (
        <div style={style} >
            {
                arriveeTd.length === 0 && departTd.length === 0 ? (<h1>Loading...</h1>) : (
                    <>
<h2 style={{ background: "red", textAlign: "center", padding: "1rem", color: "white" }}>You are too late on this, You have to answer as soon as possible</h2>
            
            <table id="table" className={`${mood === "dark" ? "dark_table" : null}`}>
                <caption className="caption">Depart</caption>
                <thead>
                    <tr>
                        {departTh.map(h => (
                            <th className={`${mood === "dark" ? "dark_table" : null}`} key={h._id}>{h.name}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {departTd.map(td => td.data.map(tdtt => tdtt.status === "red" && (
                        <tr key={td._id}>
                            {td.data.map((tt, index) => (
                                <td key={index} className={`${mood === "dark" ? "dark_table" : null}`}>
                                    {tt.status === "red" ? <div className="red" /> : tt[Object.keys(tt)[0]]}
                                </td>
                            ))}
                        </tr>
                    )) )
                    }
                </tbody>
            </table>            

            <table id="table" className={`${mood === "dark" ? "dark_table" : null}`}>
                <caption className="caption">Arrivee</caption>
                <thead>
                    <tr>
                        {arriveeTh.map(h => (
                            <th className={`${mood === "dark" ? "dark_table" : null}`} key={h._id}>{h.name}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {arriveeTd.map(td => td.data.map(tdtt => tdtt.status === "red" && (
                        <tr key={td._id}>
                            {td.data.map((tt, index) => (
                                <td key={index} className={`${mood === "dark" ? "dark_table" : null}`}>
                                    {tt.status === "red" ? <div className="red" /> : tt[Object.keys(tt)[0]]}
                                </td>
                            ))}
                        </tr>
                    )) )
                    }
                </tbody>
            </table>
        </>
            )
            }
        </div>
    )
}

const NotifSection = Section(Notif)
export default NotifSection
