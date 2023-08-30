import Navbar from './components/HomePage/NavBar'
import Headline from './components/HomePage/Headline'
import MockBrowser from './components/HomePage/MockBrowser'
import InfoGraphicGuide from './components/HomePage/InfoGraphicGuide'

export default function Home() {
return (
  <>
  <main className="gradient leading-relaxed tracking-wide flex flex-col">
    <Navbar />
    <div className="container mx-auto h-screen">
      <Headline />
      <MockBrowser />
    </div>
    <InfoGraphicGuide />

  <section className="gradient w-full mx-auto text-center pt-6 pb-12">
    <h2
      className="w-full my-2 text-5xl font-black leading-tight text-center text-white"
    >
      Call to Action
    </h2>
    <div className="w-full mb-4">
      <div
        className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
      ></div>
    </div>

    <h3 className="my-4 text-3xl font-extrabold">
      Main Hero Message to sell yourself!
    </h3>

    <button
      className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg"
    >
      Action!
    </button>
  </section>

  <footer className="bg-white ">
    <div className="container mx-auto mt-8 px-8">
      <div className="w-full flex flex-col md:flex-row py-6">
        <div className="flex-1 mb-6">
          <a
            className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <svg
              className="h-6 w-6 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
            </svg>
            ospo
          </a>
        </div>

        <div className="flex-1">
          <p className="uppercase font-extrabold text-gray-500 md:mb-6">Links</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >FAQ</a
              >
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Help</a
              >
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Support</a
              >
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase font-extrabold text-gray-500 md:mb-6">Legal</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Terms</a
              >
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Privacy</a
              >
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase font-extrabold text-gray-500 md:mb-6">Social</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Facebook</a
              >
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Linkedin</a
              >
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Twitter</a
              >
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase font-extrabold text-gray-500 md:mb-6">
            Company
          </p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Official Blog</a
              >
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >About Us</a
              >
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</main>
</>
  )
}
