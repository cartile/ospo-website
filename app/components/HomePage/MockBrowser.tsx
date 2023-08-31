'use client'
import { IoInformationCircleOutline } from "react-icons/io5"
import { useState, useEffect } from 'react'
import RecentApplication from '../Dashboard/RecentApplication'
import DropDown from '../Dashboard/DropDown'
import AmazonPng from '../../assets/images/Amazon_icon.png'
import MicrosoftPng from '../../assets/images/Microsoft_icon.png'
import TeslaPng from '../../assets/images/Tesla_icon.png'
import { motion, AnimatePresence } from 'framer-motion'

export default function MockBrowser() {
    const [timePeriod, setTimePeriod] = useState("Last 365 days")
    const [isLoaded, setIsLoaded] = useState(false)
    const [animateChange, setAnimateChange] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])
    
    useEffect(() => {
        if (isLoaded) {
            setAnimateChange(true)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timePeriod])

    const handleTimeFrame = () => {
        if (timePeriod === "Last 365 days") {
            return 'Year'
        } else if (timePeriod === "Last 30 days") { 
            return 'Month'
        } else if (timePeriod === "Last 7 days") { 
            return 'Week'
        }
        return 'null'
    }

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
                        <div className="flex flex-row items-center justify-between">
                            <p className="flex p-2 text-3xl font-bold">
                            Your Past&nbsp;
                                {isLoaded && (
                                    <AnimatePresence mode="wait">
                                        <motion.p
                                            key={animateChange ? timePeriod : ''} 
                                            initial={animateChange ? { opacity: 0 } : { opacity: 1 }} 
                                            animate={{ opacity: 1 }} 
                                            exit={{ opacity: 0 }} 
                                            transition={{ duration: 0.3 }}>
                                            {handleTimeFrame()}
                                        </motion.p>
                                    </AnimatePresence>
                                )}
                            &nbsp;in Review </p>
                            <DropDown timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
                        </div>
                        
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
                        <div className="bg-white box-border rounded-lg m-3 p-3">
                            <p className="text-2xl font-bold translate-x-2 mb-2">Your Recent Applications</p>
                            <ul className="max-w-md">
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