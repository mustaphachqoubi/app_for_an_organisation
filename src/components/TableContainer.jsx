import { useSelector } from "react-redux"
import FilterSystem from "./FilterSystem"
import { useEffect, useRef } from "react"
import { PrintTable } from "./PrintTable"
import { AddData } from "./AddData"

const TableContainer = ({ caption, th, td }) => {

    useEffect(() => {
        td.map(t => t.data.map(d => console.log()))
    })

    const style = {fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}
    const divStyle = {display: "flex", flexDirection: "column", alignItems: "center"}
    const { mood } = useSelector(state => state.mood)
    const { filteredData } = useSelector(state => state.filteredData)
    const tableRef = useRef(null)
    const { addClicked } = useSelector(state => state.addClicked)
    const handlePrint = () => {
        window.print()
    }

    return (

        <div style={divStyle}>
        { 
            th === undefined && td === undefined ? (<h1>Loading...</h1>) : (
            <>
        <FilterSystem td={td} type={caption}/>
        <div className="printandaddcontainer dontprint">
        <PrintTable handlePrint={handlePrint}  />
        <AddData/>
        </div>
        <table ref={tableRef} id="table" style={style} className={`${mood === "dark" ? "dark_table" : null}`}>
                <caption className="caption">{caption}</caption>
                    <thead>
                    <tr>
                        {th.map(h => (
                            <th className={`${mood === "dark" ? "dark_table" : null}`} key={h._id}>{h.name}</th>
                        ))}
                    </tr>
                    </thead>

                    <tbody>
                    <tr className={`${addClicked === true ? "new" : "hidden"}`}>
                        <td className="addnewtd"><input className="addnewinput" type="text"/></td>
                        <td className="addnewtd"><input className="addnewinput" type="text"/></td>
                        <td className="addnewtd"><input className="addnewinput" type="text"/></td>
                        <td className="addnewtd"><input className="addnewinput" type="text"/></td>
                        <td className="addnewtd"><input className="addnewinput" type="text"/></td>
                        <td className="addnewtd"><button className="addnewinputbtn" type="submit">save</button></td>
                    </tr>
                    
                        {filteredData.length <= 0 ? td.map((t, index) => (
                            <tr key={index}>
                                {t.data.map((d, innerIndex) => (
                                    <td key={innerIndex} className={`${mood === "dark" ? "dark_table" : null}`}>
                                    {d.status === "red" ? <div className="red " /> :
                                    d.status === "yellow" ? <div className="yellow " /> :
                                    d.status === "green" ? <div className="green " /> :
                                    d[Object.keys(d)[0]]
                                    }
                                    </td>
                                    ))}
                                    </tr>
                                    )) : filteredData.map((filtered, index) => (
                                        <tr key={index}>
                                            {filtered.data.map((d, index) => (
                                                <td key={index} className={`${mood === "dark" ? "dark_table" : null}`}>
                                                    {d.status === "red" ? <div className="red" /> :
                                    d.status === "yellow" ? <div className="yellow" /> :
                                    d.status === "green" ? <div className="green" /> :
                                    d[Object.keys(d)[0]]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))
                                }
                    </tbody>
            </table>
                </>
            )
        }
        </div>
    )
}

export default TableContainer