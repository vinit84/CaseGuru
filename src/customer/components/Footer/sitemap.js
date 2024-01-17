const SiteMapNavigation = {
  sitemap: [
    { name: 'Nike Phone Case Collection', href: '#' },
    { name: 'SiteMap', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'CaseGuru Phone Case Collection', href: '#' },
    { name: 'Premium Soft Case', href: '#' },
    { name: 'Premium Glass Case', href: '#' },
    { name: 'Premium Hard Case', href: '#' },
    { name: 'Stellar Phone Case Collection', href: '#' },
    { name: 'Starbucks Phone Case Collection', href: '#' },
    { name: 'Aesthetic Phone Case Collection', href: '#' },
    { name: 'EliteBrand Phone Case Collection', href: '#' },
    { name: 'Abstract Art Phone Case Collection', href: '#' },
    { name: 'Marvel Phone Case Collection', href: '#' },
    { name: 'Shipping Policy', href: '#' },
    { name: 'Replacement Policy', href: '#' },
    { name: 'Anime Phone Case Collection', href: '#' },
    { name: 'ReviewX Schedule Email Unsubscribe', href: '#' },
    { name: 'Wishlist', href: '#' },
    { name: 'Cancellation & Refund Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'My account', href: '#' },
    { name: 'Checkout', href: '#' },
    { name: 'Cart', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'My account', href: '#' },
    { name: 'Checkout', href: '#' },
    { name: 'Cart', href: '#' },
    { name: 'Home', href: '#' },
    { name: 'Contact', href: '#' },

  ],
}
export default function Home() {
  return (
    <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-6'>
      <h1 className='mt-3 text-3xl text-black font-semibold'>SiteMap</h1>
      <div className="mt-7 flex items-center text-base text-gray-600 gap-4">
        <a href='#' className='text-gray-400'>Home</a>
        /
        <p>SiteMap</p>
      </div>
      <h1 className="mt-8 text-xl ml-2 text-orange-600 font-semibold">Pages</h1>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-6'>
        <ul className="mt-6 list-disc">
          {SiteMapNavigation.sitemap.map((item) => (
            <li key={item.name} className="text-base">
              <a href={item.href} className="text-gray-500 hover:text-gray-600">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
