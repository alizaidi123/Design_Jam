export default function Footer() {
    return (
      <>
        <footer>
          <div className="footer p-5 border-t-2 leading-10 border-gray-300">
            <div className="w-full sm:w-[14rem]">
              <h2 className="font-bold text-[2rem]">Funiro.</h2>
              <p className="leading-none">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
  
            <div className="mt-6 sm:mt-0">
              <h4 className="font-semibold">Navbar</h4>
              <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
  
            <div className="mt-6 sm:mt-0">
              <h4 className="font-semibold">Help</h4>
              <ul>
                <li>Payment Option</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
  
            <div className="mt-6 sm:mt-0">
              <h4 className="font-semibold">Newsletter</h4>
              <input type="text" placeholder="Your Email" className="w-full sm:w-auto mb-2 p-2 border-2 border-gray-300 rounded-md" />
              <button type="submit" className="font-bold bg-[#B88E2F] text-white px-4 py-2 rounded">
                SUBSCRIBE
              </button>
            </div>
          </div>
  
          <div className="para text-center mt-6">
            <hr />
            <p>2023 Funiro. All rights reserved</p>
          </div>
        </footer>
      </>
    );
  }
  