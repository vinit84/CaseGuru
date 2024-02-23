const perks = [
  {
    name: 'Free returns',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
    description: 'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
  },
  {
    name: 'Same day delivery',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
    description:
      'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
  },
  {
    name: 'All year discount',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    description: 'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: 'For the planet',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description: 'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
]
const footerNavigation = {
  myaccount: [
    { name: 'My Account', href: '#' },
    { name: 'Wishlist', href: '#' },
    { name: 'Newsletter', href: '#' },
  ],
  customerService: [
    { name: 'Contact Us', href: '#' },
    { name: 'Replacement Policy', href: '#' },
    { name: 'Shipping Policy', href: '#' },
    { name: 'Site Map', href: '#' },
  ],
}

export default function Footer() {
  return (
    <div className="bg-white">
      <main>
        <section aria-labelledby="perks-heading" className="bg-gray-50 border-t border-gray-200">
          <h2 id="perks-heading" className="sr-only">
            Our perks
          </h2>

          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img className="-my-1 h-24 w-auto mx-auto" src={perk.imageUrl} alt="" />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">{perk.name}</h3>
                  <p className="mt-3 text-sm text-gray-500">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

    <footer aria-labelledby="footer-heading" className="bg-gray-50">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 py-20">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <img
                src="assets/images/logo.svg"
                alt=""
                className="h-8 w-auto"
              />
            <p className="mt-7 w-72 text-lg">Case Guru is a leading online destination for high-qulaity, customized phone case that reflect your unique style.</p>
            <button type="submit" className="w-36 mt-5 bg-orange-600 rounded-md shadow-sm py-2 px-4 flex items-center justify-center test-lg font-medium text-white hover:bg-black">
              Read More
              </button> 
            </div>
            <div className="ml-12">
              <div>
                  <h3 className="text-lg font-medium text-gray-600">Customer Service</h3>
                  <ul role="list" className="mt-6 space-y-3">
                    {footerNavigation.customerService.map((item) => (
                      <li key={item.name} className="text-base">
                        <a href={item.href} className="text-gray-500 hover:text-gray-600">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-600">My Account</h3>
                <ul role="list" className="mt-6 space-y-3">
                  {footerNavigation.myaccount.map((item) => (
                    <li key={item.name} className="text-base">
                      <a href={item.href} className="text-gray-500 hover:text-gray-600">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
              <h3 className="text-base font-medium text-gray-600">FOLLOW US :</h3>
              <button
                    type="button"
                    className="mt-5 bg-orange-600 rounded-full p-2 text-base font-medium text-white hover:bg-orange-600"
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
              </button>
              <div className="md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4">
              <h3 className="text-sm mt-5 font-medium text-gray-900">Sign up for our newsletter</h3>
                <p className="mt-1 text-sm text-gray-500">The latest deals and savings, sent to your inbox weekly.</p>
                <form className="mt-2 sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="text"
                    autoComplete="email"
                    required
                    className="appearance-none min-w-0 w-98 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                  <div className="mt-2">
                    <button
                      type="submit"
                      className="w-30 bg-orange-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-orange-400"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-11 mt-10">
            <div className="flex items-center text-base font-semibold text-orange-600 gap-1">
              Copyright &copy;
              <p className="text-base text-gray-500">2023 All rights Reserved By</p>
              Case Guru
            </div>
            <div className="text-center">
              <a href="#" className="text-base text-gray-500 mr-6">Terms & Conditions</a>
              <a href="#" className="text-base text-gray-500">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
)
}