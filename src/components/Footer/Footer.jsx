import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="text-white py-12 px-6 md:px-16"
      style={{ background: "linear-gradient(to top left, #031538, #06235B)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* LOGO + SUBSCRIBE */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Oval Industrials</h1>
          <div>
            <p className="font-semibold">Join the Oval Industrials Community</p>
            <button
              className="text-white px-6 py-2 mt-3 rounded-xl font-medium hover:brightness-110 transition-all"
              style={{ backgroundColor: "#43B02A" }}
            >
              Subscribe now
            </button>
          </div>
          <div className="flex space-x-4 pt-4">
            <div className="bg-white text-[#06235B] w-10 h-10 rounded-full flex items-center justify-center text-xl">
              <FaFacebookF />
            </div>
            <div className="bg-white text-[#06235B] w-10 h-10 rounded-full flex items-center justify-center text-xl">
              <FaXTwitter />
            </div>
            <div className="bg-white text-[#06235B] w-10 h-10 rounded-full flex items-center justify-center text-xl">
              <FaLinkedinIn />
            </div>
            <div className="bg-white text-[#06235B] w-10 h-10 rounded-full flex items-center justify-center text-xl">
              <FaYoutube />
            </div>
            <div className="bg-white text-[#06235B] w-10 h-10 rounded-full flex items-center justify-center text-xl">
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* MARKETS */}
        <div>
          <h2 className="font-bold mb-4">MARKETS</h2>
          <ul className="space-y-2">
            <li>Commercial</li>
            <li>Packaging</li>
            <li>Currency</li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h2 className="font-bold mb-4">PRODUCTS</h2>
          <ul className="space-y-2">
            <li>K-Supply</li>
            <li>Postpress</li>
            <li>Case Studies</li>
            <li>Downloads</li>
            <li>Sheetfed</li>
            <li>Digital</li>
            <li>Webfed</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h2 className="font-bold mb-4">ABOUT</h2>
          <ul className="space-y-2">
            <li>News & Events</li>
            <li>Working at Oval</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Corporate Social</li>
            <li>Responsibility</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="font-bold mb-4">CONTACT</h2>
          {/* <p>Reactorweg 151</p> */}
          <p>3040 Oak Hampton way, Duluth GA 30096 USA</p>
          <p>+1 617-682-6354</p>
          <p>+1 305-924-5585</p>
          <p>ovalindustrials1@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
