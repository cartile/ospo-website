import HomeGraphicBottom from "./HomeGraphics/HomeGraphicBottom"
import HomeGraphicTop from "./HomeGraphics/HomeGraphicTop"

export default function InfoGraphicGuide() {
    return (
    <section className="bg-gray-100 border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
        <h2
            className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800"
        >
            How It Works
        </h2>
        <div className="w-full mb-4">
            <div
            className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
            ></div>
        </div>

        <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-3 flex flex-col justify-center">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    Apply for a job on any platform.
                </h3>
            <p className="text-gray-600 mb-8">Track your job applications manually with our website or automatically with our <a href="#" className="text-orange-500 underline hover:text-orange-700 transition-colors duration-300 ease-in-out">Chrome Extension</a>. 
                <br /><br />
            </p>
            </div>
            <HomeGraphicTop />
        </div>

        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <HomeGraphicBottom />
            <div className="w-full sm:w-1/2 p-3 mt-6 flex flex-col justify-center">
                <div className="align-middle">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    Monitor Dashboard
                    </h3>
                    <p className="text-gray-600 mb-8">
                        Gain insights into your job-hunting journey. Discover patterns, improve strategies, and boost your chances!
                    </p>
                </div>
            </div>
        </div>
        </div>
  </section>

    )
}