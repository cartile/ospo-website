export default function MockBrowser() {
    return (
        <div className="flex items-center w-full mx-auto content-end">
            <div
                className="relative browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"
            >
                <p className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-7 "> My Test Account </p>
                    <div className="flex flex-1 flex-col">
                        <p className="p-5">Your Year/Month/Week in Review </p>
                        <p className="p-5">400 Jobs Applied </p>
                        <p className="p-5">380 Rejections </p>
                        <p className="p-5">20 Interview Requests </p>
                        <p className="p-5">5 Job Offers </p>
                    </div>
            </div>
        </div>
    )
}