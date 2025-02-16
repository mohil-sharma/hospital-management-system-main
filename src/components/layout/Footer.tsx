import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white flex w-full flex-col overflow-hidden items-stretch justify-center px-16 py-20 max-md:max-w-full max-md:px-5">
      <div className="flex min-h-[248px] w-full gap-[40px_128px] flex-wrap max-md:max-w-full">
        <div className="flex min-w-60 gap-10 flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="flex flex-col overflow-hidden flex-1 shrink basis-[0%]">
            <Link to="/">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8abbd9bba2cc3af695ff3b77923d67d4c94e7ed6a213fc71af3965c112ea8f92"
                className="aspect-[2.33] object-contain w-[84px]"
                alt="Hospital Logo"
              />
            </Link>
          </div>

          <div className="overflow-hidden text-black flex-1 shrink basis-[0%]">
            <h4 className="text-base font-semibold">Quick Links</h4>
            <nav className="w-full text-sm font-normal mt-4">
              <Link to="/" className="block py-2 hover:text-gray-600">
                Home
              </Link>
              <Link to="/about" className="block py-2 hover:text-gray-600">
                About Us
              </Link>
              <Link to="/services" className="block py-2 hover:text-gray-600">
                Services
              </Link>
              <Link to="/contact" className="block py-2 hover:text-gray-600">
                Contact Us
              </Link>
              <Link to="/faq" className="block py-2 hover:text-gray-600">
                FAQ
              </Link>
            </nav>
          </div>

          <div className="overflow-hidden text-black flex-1 shrink basis-[0%]">
            <h4 className="text-base font-semibold">Resources</h4>
            <nav className="w-full text-sm font-normal mt-4">
              <Link to="/blog" className="block py-2 hover:text-gray-600">
                Blog
              </Link>
              <Link to="/guides" className="block py-2 hover:text-gray-600">
                Guides
              </Link>
              <Link to="/webinars" className="block py-2 hover:text-gray-600">
                Webinars
              </Link>
              <Link
                to="/case-studies"
                className="block py-2 hover:text-gray-600"
              >
                Case Studies
              </Link>
              <Link
                to="/testimonials"
                className="block py-2 hover:text-gray-600"
              >
                Testimonials
              </Link>
            </nav>
          </div>

          <div className="overflow-hidden text-black flex-1 shrink basis-[0%]">
            <h4 className="text-base font-semibold">Stay Connected</h4>
            <nav className="w-full text-sm font-normal mt-4">
              <a href="#" className="block py-2 hover:text-gray-600">
                Facebook
              </a>
              <a href="#" className="block py-2 hover:text-gray-600">
                Twitter
              </a>
              <a href="#" className="block py-2 hover:text-gray-600">
                LinkedIn
              </a>
              <a href="#" className="block py-2 hover:text-gray-600">
                Instagram
              </a>
              <a href="#" className="block py-2 hover:text-gray-600">
                YouTube
              </a>
            </nav>
          </div>
        </div>

        <div className="min-w-60 text-black w-[400px]">
          <div className="w-full text-base">
            <h4 className="font-semibold">Subscribe</h4>
            <p className="font-normal leading-6 mt-4">
              Join our newsletter for updates on features and new releases.
            </p>
          </div>
          <div className="w-full font-normal mt-6">
            <form
              className="flex w-full gap-4 text-base"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="self-stretch flex-1 shrink border min-w-60 gap-2 basis-6 p-3 border-black border-solid"
                required
              />
              <button
                type="submit"
                className="self-stretch border gap-2 whitespace-nowrap px-6 py-3 border-black border-solid hover:bg-gray-100 transition-colors max-md:px-5"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs leading-[18px] mt-3">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
