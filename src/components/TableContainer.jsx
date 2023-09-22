import { useSelector } from "react-redux"
import FilterSystem from "./FilterSystem"
import { useRef, useEffect } from "react"
import { PrintTable } from "./PrintTable"
import { AddData } from "./AddData"
import { useForm } from "react-hook-form"

const TableContainer = ({ caption, th, td }) => {

    const style = {fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}
    const divStyle = {display: "flex", flexDirection: "column", alignItems: "center"}
    const { mood } = useSelector(state => state.mood)
    const { filteredData } = useSelector(state => state.filteredData)
    const tableRef = useRef(null)
    const { addClicked } = useSelector(state => state.addClicked)
    const handlePrint = () => {
        window.print()
    }
    const { register, handleSubmit, watch } = useForm()
    const onSubmit = data => console.log(data)

    useEffect(() => {
        console.log(watch("example"))
    })

    return (

        <div style={divStyle}>
        { 
            th.length === 0 && td.length === 0 ? (<h1>Loading...</h1>) : (
            <>
        <FilterSystem td={td} type={caption}/>
        <div className="printandaddcontainer dontprint">
        <PrintTable handlePrint={handlePrint}  />
        <AddData/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />
        <input type="submit" />
        </form>

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