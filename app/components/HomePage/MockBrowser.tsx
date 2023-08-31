import { IoInformationCircleOutline } from "react-icons/io5"

export default function MockBrowser() {
    return (
        <div className="flex items-center w-full mx-auto content-end">
            <div
                className="relative browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"
            >
                <div className="flex bg-purple-700 absolute bottom-4 left-4 rounded-md pl-1 pr-1 text-white">
                    <p className="flex items-center m-0 p-1"> <IoInformationCircleOutline className="mr-1" size={24}/> Displaying sample data</p>
                </div>
                <p className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-7"> My Demo Account </p>
                    <div className="flex flex-1 flex-col bg-gray-300 w-6/12 box-border rounded-lg p-5 m-3">
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
                        <div className="bg-blue-300 box-border rounded-lg p-5 m-3">
                            something
                        </div>
                        <div className="bg-green-300 box-border rounded-lg m-3">
                            <p className="pt-5 pl-5 text-2xl font-bold">Your Recent Applications</p>
                            <ul>
                                <li className="pl-5 p-2">Amazon, Software Engineering Intern</li>
                                <li className="pl-5 p-2">Microsoft, Software Engineering Intern</li>
                                <li className="pl-5 p-2">Tesla, Software Engineering Intern</li>
                            </ul>

                        </div>
                    </div>
            </div>
        </div>
    )
}