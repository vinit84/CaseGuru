
export const navigation = {
  categories: [
    {
      id: 'hardcase',
      name: 'Hard Case',
      featured: [
        {
          name: 'New Arrivals',
          href: '/hardcase/apple/supreme',
          imageSrc: 'https://caseguru.co.in/wp-content/uploads/2023/08/CG0035-1-1536x1536.webp',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '/hardcase/apple/supreme',
          imageSrc: 'https://caseguru.co.in/wp-content/uploads/2023/07/06-1536x1536.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'apple',
          name: 'Apple Model',
          items: [
            { name: 'IPhone 13 Pro Max', id:"supreme", href: `{hardcase/apple/supreme}` },
            { name: 'iPhone 13 Pro', id:"women_dress", href: '#' },
            { name: 'iPhone 13 Mini', id: 'women_jeans' },
            { name: 'iPhone SE (2nd Gen)', id: 'lengha_choli' },
            { name: 'iPhone 12 Pro Max', id: 'sweater' },
            { name: 'iPhone 12 Pro', id: 't-shirt' },
            { name: 'iPhone 12 Max', id: 't-shirt' },
            { name: 'iPhone SE (1st Gen)', id: 't-shirt' },
            { name: 'iPhone 11 Pro Max', id: 't-shirt' },
            { name: 'iPhone 11 Pro', id: 't-shirt' },
            { name: 'iPhone 11 Mini', id: 't-shirt' },
            { name: 'iPhone 11', id: 't-shirt' },

            // { name: 'Jackets', id: 'jacket' },
            // { name: 'Gouns', id: 'gouns' },
            // { name: 'Sarees', id: 'saree' },
            // { name: 'Kurtas', id: 'kurtas' },
          ],
        },
        {
          id: 'samsungphone',
          name: 'Samsung Phone',
          items: [
            { name: 'Galaxy S21 Ultra', id: 'watch' },
            { name: 'Galaxy S21 Plus', id: 'wallet' },
            { name: 'Galaxy S21', id: 'bag' },
            { name: 'Galaxy Note 20 Ultra', id: 'sunglasse' },
            { name: 'Galaxy Note 20', id: 'hat' },
            { name: 'Galaxy Z Fold 3', id: 'belt' },
            { name: 'Galaxy Z Flip 3', id: 'belt' },
            { name: 'Galaxy A52', id: 'belt' },
            { name: 'Galaxy A72', id: 'belt' },
            
          ],
        },
        {
          id: 'xiamoiphone',
          name: 'Xiamoi Phones',
          items: [
            { name: 'Xiamoi Mi 11 Ultra', id: '#' },
            { name: 'Xiamoi Mi 11 Pro', id: '#' },
            { name: 'Xiamoi Mi 11 Lite', id: '#' },
            { name: 'Xiamoi Redmi Note 10 Pro', id: '#' },
            { name: 'Xiamoi Redmi Note 10', id: '#' },
            { name: 'Xiamoi Poco X0', id: '#' },
            { name: 'Xiamoi Mi 10T Pro', id: '#' },
            { name: 'Xiamoi Mi 10T Lite', id: '#' },

          ],
        },
      ],
    },
    {
      id: 'softcase',
      name: 'Soft Case',
      featured: [
        {
          name: 'New Arrivals',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'apple',
          name: 'Apple Model',
          items: [
            { name: 'IPhone 13 Pro Max', id:"supreme", href: `{hardcase/apple/supreme}` },
            { name: 'iPhone 13 Pro', id:"women_dress", href: '#' },
            { name: 'iPhone 13 Mini', id: 'women_jeans' },
            { name: 'iPhone SE (2nd Gen)', id: 'lengha_choli' },
            { name: 'iPhone 12 Pro Max', id: 'sweater' },
            { name: 'iPhone 12 Pro', id: 't-shirt' },
            { name: 'iPhone 12 Max', id: 't-shirt' },
            { name: 'iPhone SE (1st Gen)', id: 't-shirt' },
            { name: 'iPhone 11 Pro Max', id: 't-shirt' },
            { name: 'iPhone 11 Pro', id: 't-shirt' },
            { name: 'iPhone 11 Mini', id: 't-shirt' },
            { name: 'iPhone 11', id: 't-shirt' },

            // { name: 'Jackets', id: 'jacket' },
            // { name: 'Gouns', id: 'gouns' },
            // { name: 'Sarees', id: 'saree' },
            // { name: 'Kurtas', id: 'kurtas' },
          ],
        },
        {
          id: 'samsungphone',
          name: 'Samsung Phone',
          items: [
            { name: 'Galaxy S21 Ultra', id: 'watch' },
            { name: 'Galaxy S21 Plus', id: 'wallet' },
            { name: 'Galaxy S21', id: 'bag' },
            { name: 'Galaxy Note 20 Ultra', id: 'sunglasse' },
            { name: 'Galaxy Note 20', id: 'hat' },
            { name: 'Galaxy Z Fold 3', id: 'belt' },
            { name: 'Galaxy Z Flip 3', id: 'belt' },
            { name: 'Galaxy A52', id: 'belt' },
            { name: 'Galaxy A72', id: 'belt' },
            
          ],
        },
        {
          id: 'xiamoiphone',
          name: 'Xiamoi Phones',
          items: [
            { name: 'Xiamoi Mi 11 Ultra', id: '#' },
            { name: 'Xiamoi Mi 11 Pro', id: '#' },
            { name: 'Xiamoi Mi 11 Lite', id: '#' },
            { name: 'Xiamoi Redmi Note 10 Pro', id: '#' },
            { name: 'Xiamoi Redmi Note 10', id: '#' },
            { name: 'Xiamoi Poco X0', id: '#' },
            { name: 'Xiamoi Mi 10T Pro', id: '#' },
            { name: 'Xiamoi Mi 10T Lite', id: '#' },

          ],
        },
      ],
    },
    {
      id:"glasscase",
      name:"Glass Case",
      featured: [
        {
          name: 'New Arrivals',
          href: '/hardcase/apple/supreme',
          imageSrc: 'https://caseguru.co.in/wp-content/uploads/2023/08/CG0035-1-1536x1536.webp',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '/hardcase/apple/supreme',
          imageSrc: 'https://caseguru.co.in/wp-content/uploads/2023/07/06-1536x1536.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'apple',
          name: 'Apple Model',
          items: [
            { name: 'IPhone 13 Pro Max', id:"supreme", href: `{hardcase/apple/supreme}` },
            { name: 'iPhone 13 Pro', id:"women_dress", href: '#' },
            { name: 'iPhone 13 Mini', id: 'women_jeans' },
            { name: 'iPhone SE (2nd Gen)', id: 'lengha_choli' },
            { name: 'iPhone 12 Pro Max', id: 'sweater' },
            { name: 'iPhone 12 Pro', id: 't-shirt' },
            { name: 'iPhone 12 Max', id: 't-shirt' },
            { name: 'iPhone SE (1st Gen)', id: 't-shirt' },
            { name: 'iPhone 11 Pro Max', id: 't-shirt' },
            { name: 'iPhone 11 Pro', id: 't-shirt' },
            { name: 'iPhone 11 Mini', id: 't-shirt' },
            { name: 'iPhone 11', id: 't-shirt' },

            // { name: 'Jackets', id: 'jacket' },
            // { name: 'Gouns', id: 'gouns' },
            // { name: 'Sarees', id: 'saree' },
            // { name: 'Kurtas', id: 'kurtas' },
          ],
        },
        {
          id: 'samsungphone',
          name: 'Samsung Phone',
          items: [
            { name: 'Galaxy S21 Ultra', id: 'watch' },
            { name: 'Galaxy S21 Plus', id: 'wallet' },
            { name: 'Galaxy S21', id: 'bag' },
            { name: 'Galaxy Note 20 Ultra', id: 'sunglasse' },
            { name: 'Galaxy Note 20', id: 'hat' },
            { name: 'Galaxy Z Fold 3', id: 'belt' },
            { name: 'Galaxy Z Flip 3', id: 'belt' },
            { name: 'Galaxy A52', id: 'belt' },
            { name: 'Galaxy A72', id: 'belt' },
            
          ],
        },
        {
          id: 'xiamoiphone',
          name: 'Xiamoi Phones',
          items: [
            { name: 'Xiamoi Mi 11 Ultra', id: '#' },
            { name: 'Xiamoi Mi 11 Pro', id: '#' },
            { name: 'Xiamoi Mi 11 Lite', id: '#' },
            { name: 'Xiamoi Redmi Note 10 Pro', id: '#' },
            { name: 'Xiamoi Redmi Note 10', id: '#' },
            { name: 'Xiamoi Poco X0', id: '#' },
            { name: 'Xiamoi Mi 10T Pro', id: '#' },
            { name: 'Xiamoi Mi 10T Lite', id: '#' },

          ],
        },
      ],
    },
  ],
  pages: [
    {id: '/' 
  }, ],
  //   { name: 'Stores', id: '/' },
 
}