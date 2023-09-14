import { AiFillPrinter } from 'react-icons/ai'

export const PrintTable = ({ handlePrint }) => {
    return (
        <button className="print" onClick={handlePrint}> <AiFillPrinter/> Print</button>
    )
}