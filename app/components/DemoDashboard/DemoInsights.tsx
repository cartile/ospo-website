import { BiTimeFive } from "react-icons/bi"
import { FiPercent } from "react-icons/fi"
import { TfiPencilAlt } from "react-icons/tfi"

export default function DemoInsights() {
    return (
        <div className="flex flex-1 flex-col">
            <div className="mb-2">
                <p className="text-3xl font-bold">15.2</p>
                <div className="flex items-center">
                    <p>Average Daily Apps&nbsp;</p>
                    <TfiPencilAlt className="mr-1" size={24}/>
                </div>
            </div>
            <div className="mb-2">
                <p className="text-3xl font-bold">1.5%</p>
                <div className="flex items-center">
                    <p>Interview Conversion Rate&nbsp;</p>
                    <FiPercent className="mr-1" size={24}/>
                </div>
            </div>
            <div className="mb-2">
                <p className="text-3xl font-bold">16 Days</p>
                <div className="flex items-center">
                    <p>Average Response Time&nbsp;</p>
                    <BiTimeFive className="mr-1" size={24}/>
                </div>
            </div>
        </div>
    ) 
}
// BiTimeFive HiReceiptPercent