import Section from "./Section"
import { ArriveeData } from "../dummy"
import { DepartData } from "../dummy"
import { useSelector } from "react-redux"

const Notif = () => {

    const { mood } = useSelector(state => state.mood)
    const style = { padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center" }

    return (
        <div style={style} >
            <h2 style={{ background: "red", textAlign: "center", padding: "1rem", color: "white" }}>You are too late on this, You have to answer as soon as possible</h2>
            <table id="table" className={`${mood === "dark" ? "dark_table" : null}`}>
                <caption className="caption">Depart</caption>
                <thead>
                    <tr>
                        {DepartData.DepartTh.map(h => (
                            <th className={`${mood === "dark" ? "dark_table" : null}`} key={h.id}>{h.name}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {DepartData.DepartTd.map(td => td.data.map(tdtt => tdtt.status === "red" && (
                        <tr key={td.id}>
                            {td.data.map((tt, index) => (
                                <td key={index} className={`${mood === "dark" ? "dark_table" : null}`}>
                                    {tt.status === "red" ? <div className="red" /> : tt[Object.keys(tt)]}
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
                        {ArriveeData.ArriveeTh.map(h => (
                            <th className={`${mood === "dark" ? "dark_table" : null}`} key={h.id}>{h.name}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {ArriveeData.ArriveeTd.map(td => td.data.map(tdtt => tdtt.status === "red" && (
                        <tr key={td.id}>
                            {td.data.map((tt, index) => (
                                <td key={index} className={`${mood === "dark" ? "dark_table" : null}`}>
                                    {tt.status === "red" ? <div className="red" /> : tt[Object.keys(tt)]}
                                </td>
                            ))}
                        </tr>
                    )) )
                    }
                </tbody>
            </table>

        </div>
    )
}

const NotifSection = Section(Notif)
export default NotifSection