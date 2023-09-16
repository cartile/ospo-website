'use client'
import { IoInformationCircleOutline } from "react-icons/io5"
import { useState, useEffect } from 'react'
import RecentApplication from '../Dashboard/RecentApplication'
import DropDown from '../Dashboard/DropDown'
import DemoGraph from '../Dashboard/DemoGraph'
import AmazonPng from '../../assets/images/Amazon_icon.png'
import MicrosoftPng from '../../assets/images/Microsoft_icon.png'
import TeslaPng from '../../assets/images/Tesla_icon.png'
import { motion, AnimatePresence } from 'framer-motion'

export default function MockBrowser() {
    const [timePeriod, setTimePeriod] = useState("Last 365 days")
    const [isLoaded, setIsLoaded] = useState(false)

    let jobsApplied: (number)[] = [400, 50, 15]
    let rejections: (number)[] = [300, 10, 2]
    let ghosted: (number)[] = [75, 5, 1]
    let interviews: (number)[] = [20, 3, 1]
    let offers: (number)[] = [5, 2, 1]
    let currIndex: number = 0

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const handleTimeFrame = () => {
        if (timePeriod === "Last 365 days") {
            currIndex = 0
            return 'Year'
        } else if (timePeriod === "Last 30 days") { 
            currIndex = 1
            return 'Month'
        } else if (timePeriod === "Last 7 days") { 
            currIndex = 2
            return 'Week'
        }
        return 'null'
    }

    return (
        <div className="flex w-auto content-end flex justify-center">
            <div
                className="relative browser-mockup flex bg-gray-200 rounded shadow-xl"
            >
                <div className="flex bg-purple-700 absolute bottom-5 left-5 rounded-md pl-1 pr-1 text-white">
                    <p className="flex items-center m-0 p-1"> <IoInformationCircleOutline className="mr-1" size={24}/> Displaying sample data</p>
                </div>
                <p className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-7"> My Demo Account </p>
                    <div className="flex flex-1 flex-col w-auto bg-white w-2 box-border rounded-lg p-5 m-3 mr-0">
                        <div className="flex flex-row items-center justify-between">
                            <p className="flex p-2 text-3xl font-bold">
                            Your Past&nbsp;
                                {isLoaded ? (
                                    <AnimatePresence initial={false} mode="wait">
                                        <motion.p
                                            key={timePeriod} 
                                            initial={{ opacity: 0 }} 
                                            animate={{ opacity: 1 }} 
                                            exit={{ opacity: 0 }} 
                                            transition={{ duration: 0.3 }}>
                                            {handleTimeFrame()}
                                        </motion.p>
                                    </AnimatePresence>
                                ) : handleTimeFrame()}
                            &nbsp;in Review </p>
                            <DropDown timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
                        </div>
                        <div className="flex flex-initial">
                            <div className="w-[230px]">
                                <div className="flex flex-initial items-center">
                                    <p className="ml-5 text-3xl">{jobsApplied[currIndex]}</p>
                                    <p className="p-2">Jobs Applied</p>
                                </div>
                                <div className="flex flex-initial items-center">
                                    <p className="ml-5 text-3xl">{rejections[currIndex]}</p>
                                    <p className="p-2">Rejections</p>
                                </div>
                                <div className="flex flex-initial items-center">
                                    <p className="ml-5 text-3xl">{ghosted[currIndex]}</p>
                                    <p className="p-2">No response</p>
                                </div>
                                <div className="flex flex-initial items-center">
                                    <p className="ml-5 text-3xl">{interviews[currIndex]}</p>
                                    <p className="p-2">Interview Requests</p>
                                </div>
                                <div className="flex flex-initial items-center">
                                    <p className="ml-5 text-3xl">{offers[currIndex]}</p>
                                    <p className="p-2">Job Offers</p>
                                </div>
                            </div>
                            <div id="graphDiv flex-grow">
                                <DemoGraph timePeriod={timePeriod}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <div className="bg-white box-border rounded-lg p-5 m-3 flex flex-1 flex-col">
                            <p className="text-2xl font-bold mb-2 -translate-y-1">Quick Insights</p>
                        </div>
                        <div className="bg-white box-border rounded-lg m-3 p-3 flex flex-1 flex-col">
                            <p className="text-2xl font-bold translate-x-2 mb-2">Your Recent Applications</p>
                            <ul>
                                <RecentApplication img={AmazonPng.src} alt={"Amazon Logo"} company={"Amazon"} role={"Software Engineer Intern"} timeSince={"5 min ago"} />
                                <RecentApplication img={MicrosoftPng.src} alt={"Microsoft Logo"} company={"Microsoft"} role={"Software Engineer Intern"} timeSince={"27 min ago"} />
                                <RecentApplication img={TeslaPng.src} alt={"Tesla Logo"} company={"Tesla"} role={"Data Analyst Intern"} timeSince={"2 days ago"} />
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    )
}