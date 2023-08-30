export default function Headline() { 
    return (
    <div className="text-center px-3 lg:px-0">
    <h1
      className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight"
    >
      Tired of Tracking Job Applications in Spreadsheets?
    </h1>
    <p
      className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8"
    >
      Sub-hero message, not too long and not too short. Make it just right!
    </p>

    <button
      className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
    >
      Sign Up
    </button>
    <a
      href="#"
      className="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
      >View Additional Action</a>
  </div>
  )
}