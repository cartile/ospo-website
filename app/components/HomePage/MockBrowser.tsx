import { IoInformationCircleOutline } from "react-icons/io5"
import RecentApplication from '../Dashboard/RecentApplication'
import AmazonPng from '../../assets/images/Amazon_icon.png'
import MicrosoftPng from '../../assets/images/Microsoft_icon.png'
import TeslaPng from '../../assets/images/Tesla_icon.png'

export default function MockBrowser() {
    return (
        <div className="flex items-center w-full mx-auto content-end">
            <div
                className="relative browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-gray-200 w-1/2 rounded shadow-xl"
            >
                <div className="flex bg-purple-700 absolute bottom-5 left-5 rounded-md pl-1 pr-1 text-white">
                    <p className="flex items-center m-0 p-1"> <IoInformationCircleOutline className="mr-1" size={24}/> Displaying sample data</p>
                </div>
                <p className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-7"> My Demo Account </p>
                    <div className="flex flex-1 flex-col bg-white w-6/12 box-border rounded-lg p-5 m-3 mr-0">
                        <p className="p-5 text-4xl font-bold">Your Year/Month/Week in Review </p>
                        <div className="flex items-center">
                            <p className="ml-5 text-3xl">400</p>
                            <p className="p-2">Jobs Applied</p>
                        </div>
                        <div className="flex items-center">
                            <p className="ml-5 text-3xl">380</p>
                            <p className="p-2">Rejections</p>
                        </div>
                        <div className="flex items-center">
                            <p className="ml-5 text-3xl">20</p>
                            <p className="p-2">Interview Requests</p>
                        </div>
                        <div className="flex items-center">
                            <p className="ml-5 text-3xl">5</p>
                            <p className="p-2">Job Offers</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <div className="bg-white box-border rounded-lg p-5 m-3">
                            something
                        </div>
                        <div className="bg-white box-border rounded-lg m-3">
                            <p className="pt-5 pl-5 text-2xl font-bold">Your Recent Applications</p>
                            <ul className="max-w-md">
                                <RecentApplication img={AmazonPng} alt={"Amazon Logo"} company={"Amazon"} role={"Software Engineer Intern"} timeSince={"5 min ago"} />
                                <RecentApplication img={MicrosoftPng} alt={"Microsoft Logo"} company={"Microsoft"} role={"Software Engineer Intern"} timeSince={"27 min ago"} />
                                <RecentApplication img={TeslaPng} alt={"Tesla Logo"} company={"Tesla"} role={"Data Analyst Intern"} timeSince={"2 days ago"} />
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    )
}