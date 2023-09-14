
const Filter = ({ handleNumber, handleDelay, handleDate }) => {
    const style = { display: "flex", gap: "1rem"}

    return (
        
        <div style={style}>
            <input className="filter" onChange={(e) => handleDate(e.target.value)} type="date" />
            <input className="filter" onChange={(e) => handleNumber(e.target.value)} type="number" placeholder="number" />
            <select onChange={(e) => handleDelay(e.target.value)}>
                <option value="" >answer time</option>
                <option value="red" >Delay</option>
                <option value="yellow" >Almost Delay</option>
                <option value="green" >No delay</option>
            </select>
        </div>
    
    )
}

export default Filter