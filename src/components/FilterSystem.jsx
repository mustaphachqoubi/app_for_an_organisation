import Search from "./Search"
import Filter from "./Filter"
import { useDispatch } from "react-redux"
import { setFilteredData } from "../redux/filteredData"


const FilterSystem = ({ td, type }) => {
    const style = { display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem"}
    const dispatch = useDispatch()

    const handleNumber = (number) => { 
        const dataAsANumber = parseInt(number, 10)
        if(number >= 1){
        dispatch(setFilteredData(td.filter(t => t.data.map(tt => tt.number).includes(dataAsANumber))))
        }
        else{
            dispatch(setFilteredData([]))
        }
    }
    
    const handleDelay = (delay) => {
        if(delay !== ""){
        dispatch(setFilteredData(td.filter(t => t.data.map(tt => tt.status).includes(delay))))
        }
        else{
            dispatch(setFilteredData([]))
        }
    }
    
    const handleDate = (date) => {
        if(date !== ""){
        dispatch(setFilteredData(td.filter(t => t.data.map(tt => tt.messageDate || tt.answerdate ).includes(date))))
        }
        else{
        dispatch(setFilteredData([]))
        }
    }

    const handleSearch = (search) => {
        if(search !== ""){
        dispatch(setFilteredData(td.filter(t => t.data.map(tt => tt.reciever || tt.subject).includes(search))))
        }
        else{
        dispatch(setFilteredData([]))
        }
    }

    return (
        <div className="dontprint">
        <div style={style}>
        <Search handleSearch={handleSearch} type={type}/>
        <Filter handleNumber={handleNumber} handleDelay={handleDelay} handleDate={handleDate}/>
        </div>
        </div>
    )
}

export default FilterSystem