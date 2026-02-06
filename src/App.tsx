import { useState } from 'react';
import { ShoppingBag, Menu, X, Heart, Calendar, Clock, Truck, Handshake, CreditCard, RotateCcw } from 'lucide-react';

function App() {
  const [heroImage, setHeroImage] = useState('/hero1.png');
  const [heroIndex, setHeroIndex] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleImageHover = (image: string, index: number) => {
    setHeroImage(image);
    setHeroIndex(index);
  };
//file kombai
  return (
    <div className="relative min-h-screen bg-slate-600 overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 pt-2 sm:pt-[10.8px]">
        <div className="max-w-3xl mx-auto bg-slate-300/95 backdrop-blur-sm rounded-lg sm:rounded-xl py-2 sm:py-[9px] overflow-hidden">
          <div className="flex animate-scroll-left">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="inline-block mx-4 sm:mx-[28.8px] text-[10px] sm:text-[12.6px] font-medium text-slate-900 whitespace-nowrap">
                FREE SHIPPING ON ALL ORDERS
              </span>
            ))}
          </div>
        </div>
      </div>

      <nav className="fixed top-[42px] sm:top-[50.4px] left-0 right-0 z-40 px-3 sm:px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-slate-300/95 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-[28.8px] py-3 sm:py-[14.4px] flex items-center justify-between">
          <div className="text-lg sm:text-[21.6px] font-bold text-slate-900 tracking-tight">VÉON</div>

          <div className="hidden lg:flex items-center gap-4 xl:gap-[25.2px] text-[13.5px]">
            <a href="#" className="text-slate-900 hover:text-black transition-colors font-medium">Shop</a>
            <a href="#" className="text-slate-900 hover:text-black transition-colors font-medium">About</a>
            <a href="#" className="text-slate-900 hover:text-black transition-colors font-medium">Blogs</a>
            <a href="#" className="text-slate-900 hover:text-black transition-colors font-medium">Contact</a>
            <a href="#" className="text-slate-900 hover:text-black transition-colors font-medium">
              Favorites
            </a>
            <a href="#" className="text-slate-900 hover:text-black transition-colors font-medium">
              Search
            </a>
            <a href="#" className="text-slate-900 hover:text-black transition-colors flex items-center gap-2 font-medium">
              <ShoppingBag className="w-[16.2px] h-[16.2px]" />
              Bag
              <span className="flex items-center justify-center w-[21.6px] h-[21.6px] rounded-full border border-slate-900 text-[12.6px] font-medium">0</span>
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <a href="#" className="text-slate-900 hover:text-black transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-900 hover:text-black transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 max-w-3xl mx-auto bg-slate-300/95 backdrop-blur-md rounded-xl px-4 py-4">
            <div className="flex flex-col gap-3 text-sm">
              <a href="#" className="text-slate-900 hover:text-black transition-colors font-medium py-2">Shop</a>
              <a href="#" className="text-slate-900 hover:text-black transition-colors font-medium py-2">About</a>
              <a href="#" className="text-slate-900 hover:text-black transition-colors font-medium py-2">Blogs</a>
              <a href="#" className="text-slate-900 hover:text-black transition-colors font-medium py-2">Contact</a>
              <a href="#" className="text-slate-900 hover:text-black transition-colors font-medium py-2">Favorites</a>
              <a href="#" className="text-slate-900 hover:text-black transition-colors font-medium py-2">Search</a>
            </div>
          </div>
        )}
      </nav>

      <div className="relative h-screen pt-[80px] sm:pt-[90px] md:pt-[100.8px]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Fashion model in blue denim"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        <div className="relative h-full px-4 sm:px-6 md:pl-8 flex flex-col justify-between md:justify-end pb-24 sm:pb-28 md:pb-12 pt-12 sm:pt-16 md:pt-20">
          <div className="max-w-xl mt-auto md:mt-0 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-light text-white leading-[0.95] tracking-tight mb-4 sm:mb-6">
              Bold Layers, <br/>Confident Looks.
            </h1>
          </div>

          <div className="relative flex flex-col gap-6 sm:gap-8 md:gap-0">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-white/30 leading-none transition-all duration-300">
                {heroIndex.toString().padStart(2, '0')}
              </span>
              <div className="flex gap-2 sm:gap-3">
                <div
                  className="w-16 h-10 sm:w-20 sm:h-12 md:w-[128px] md:h-[72px] rounded-lg sm:rounded-xl overflow-hidden border-2 border-white/10 hover:border-white/30 transition-all cursor-pointer"
                  onClick={() => handleImageHover('/hero1.png', 1)}
                  onMouseEnter={() => handleImageHover('/hero1.png', 1)}
                >
                  <img
                    src="/hero1.png"
                    alt="Collection preview 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="w-16 h-10 sm:w-20 sm:h-12 md:w-[128px] md:h-[72px] rounded-lg sm:rounded-xl overflow-hidden border-2 border-white/10 hover:border-white/30 transition-all cursor-pointer"
                  onClick={() => handleImageHover('/hero2.png', 2)}
                  onMouseEnter={() => handleImageHover('/hero2.png', 2)}
                >
                  <img
                    src="/hero2.png"
                    alt="Collection preview 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="w-16 h-10 sm:w-20 sm:h-12 md:w-[128px] md:h-[72px] rounded-lg sm:rounded-xl overflow-hidden border-2 border-white/10 hover:border-white/30 transition-all cursor-pointer"
                  onClick={() => handleImageHover('/hero3.png', 3)}
                  onMouseEnter={() => handleImageHover('/hero3.png', 3)}
                >
                  <img
                    src="/hero3.png"
                    alt="Collection preview 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:absolute md:left-1/2 md:bottom-0 md:-translate-x-1/2 gap-3 sm:gap-4 md:gap-6">
              <p className="text-xs sm:text-sm md:text-[13.6px] text-white/90 leading-relaxed text-center px-4">
                Layer up with confidence and<br className="hidden sm:inline" />
                <span className="sm:hidden"> </span>stylish all season
              </p>
              <button className="bg-slate-400/70 hover:bg-slate-400/85 text-slate-900 font-semibold text-xs sm:text-[12px] px-5 sm:px-6 md:px-[22.4px] py-2.5 sm:py-3 md:py-[11.2px] rounded-lg transition-all">
                Browse Collection
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white px-6 py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#f5f5f5] rounded-lg px-6 py-3 flex items-center justify-between mb-6 max-w-xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-900">Best Sellers</h2>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                name: 'Véon Mariner Knit Sweater',
                price: '$120.00 USD',
                image: '/dress1.png'
              },
              {
                name: 'Noir Poplin Blouse',
                price: '$199.00 USD',
                image: '/dress2.png'
              },
              {
                name: 'Axis Oblique Cardigan',
                price: '$220.00 USD',
                image: '/dress3.png'
              },
              {
                name: 'Véon Scarlet Belted Dress',
                price: '$499.00 USD',
                image: '/dress4.png'
              },
              {
                name: 'Drift Oversized Hooded Jacket',
                price: '$340.00 USD',
                image: '/dress5.png'
              },
              {
                name: 'Véon Statement Slogan T-Shirt',
                price: '$99.00 USD',
                image: '/dress6.png'
              }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="relative bg-[#f5f5f5] rounded-lg overflow-hidden mb-4 aspect-[3/4]">
                  <span className="absolute top-4 left-4 bg-[#dc2626] text-white text-[11px] font-medium px-3 py-1.5 rounded-md z-10">
                    Best Seller
                  </span>

                  <button className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-white rounded-full transition-all duration-200 hover:scale-110 z-10">
                    <Heart className="w-[18px] h-[18px] text-gray-700" />
                  </button>

                  <div className="w-full h-full flex items-center justify-center p-12">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <h3 className="text-[15px] font-normal text-gray-900 mb-1.5">
                  {product.name}
                </h3>
                <p className="text-[15px] font-semibold text-gray-900">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/image1.jpeg"
            alt="Fashion portrait"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative h-full flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6 leading-tight">
              Our Story, Your Style
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Crafting timeless fashion with quality, innovation, and<br />
              sophistication at the core
            </p>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium text-sm px-8 py-3.5 rounded-lg transition-all">
              Explore About us
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#f5f5f5] rounded-lg px-6 py-3 flex items-center justify-between mb-6 max-w-xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-900">New in</h2>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                name: 'Véon Essential T-Shirt',
                price: '$60.00 USD',
                image: '/new1.png'
              },
              {
                name: 'Véon Checkered Zip Shirt',
                price: '$170.00 USD',
                image: '/new2.png'
              },
              {
                name: 'Oblique Hooded Jacket',
                price: '$280.00 USD',
                image: '/new3.png'
              },
              {
                name: 'Véon Statement Slogan T-Shirt',
                price: '$99.00 USD',
                image: '/new4.png'
              },
              {
                name: 'Véon Icon Track Pants',
                price: '$99.00 USD',
                image: '/new5.png'
              },
              {
                name: 'Drift Oversized Hooded Jacket',
                price: '$340.00 USD',
                image: '/new6.png'
              }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="relative bg-[#f5f5f5] rounded-lg overflow-hidden mb-4 aspect-[3/4]">
                  <button className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-white rounded-full transition-all duration-200 hover:scale-110 z-10">
                    <Heart className="w-[18px] h-[18px] text-gray-700" />
                  </button>

                  <div className="w-full h-full flex items-center justify-center p-12">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <h3 className="text-[15px] font-normal text-gray-900 mb-1.5">
                  {product.name}
                </h3>
                <p className="text-[15px] font-semibold text-gray-900">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="max-w-[1400px] mx-auto space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="bg-[#e5e3df] rounded-xl p-12 flex flex-col justify-center min-h-[750px]">
              <p className="text-xs text-gray-500 mb-3 tracking-wide">New in Dresses</p>
              <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 leading-tight">
                Elevate Your Style
              </h2>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed max-w-md">
                Discover sophisticated silhouettes and luxurious fabrics, designed for timeless style
              </p>
              <button className="bg-gray-300/60 hover:bg-gray-300/80 text-gray-900 font-medium text-sm px-6 py-3 rounded-lg transition-all w-fit">
                Discover Collection
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden min-h-[750px]">
              <img
                src="/style1.png"
                alt="Elegant fashion style"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden min-h-[750px]">
              <img
                src="/style2.png"
                alt="Casual comfort style"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-[#e5e3df] rounded-xl p-12 flex flex-col justify-center min-h-[750px]">
              <p className="text-xs text-gray-500 mb-3 tracking-wide">New in T-Shirts</p>
              <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 leading-tight">
                Redefine Casual Comfort
              </h2>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed max-w-md">
                Experience premium fabrics and modern fits, designed for effortless everyday style
              </p>
              <button className="bg-gray-300/60 hover:bg-gray-300/80 text-gray-900 font-medium text-sm px-6 py-3 rounded-lg transition-all w-fit">
                Discover Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Real experiences. Authentic style. See why<br />
              everyone loves Véon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                quote: "The quality and fit are absolutely perfect! From the moment I put it on, I could feel the attention to detail and craftsmanship. The fabric is soft yet durable, making it perfect for everyday wear while still looking stylish. Definitely my new go-to brand!",
                name: "Alex Carter",
                avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
              },
              {
                quote: "Véon's designs are effortlessly chic and modern. I recently purchased a polo and a pair of cargo pants, and both exceeded my expectations. The fit is flattering, and the materials feel premium. I get compliments every time I wear them!",
                name: "Sophie Martinez",
                avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200"
              },
              {
                quote: "From the fabric to the fit, every piece feels premium. You can tell that Véon puts a lot of effort into making sure their designs are both fashionable and functional. I love the sophisticated yet relaxed aesthetic—it's exactly what I've been looking for in a brand!",
                name: "Lily Thompson",
                avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
              },
              {
                quote: "Finally, a brand that blends luxury with everyday wear! The attention to detail in every piece is incredible, from the stitching to the fabric choice. My wardrobe has completely transformed, and I can confidently say these are some of the best clothes I own.",
                name: "Daniel Wong",
                avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
              },
              {
                quote: "The T-shirts are next-level comfort! They are incredibly soft, breathable, and hold their shape even after multiple washes. I love how they fit perfectly without feeling too tight or too loose. It's rare to find such a great balance of style and comfort.",
                name: "Emma Lewis",
                avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200"
              },
              {
                quote: "I'm obsessed with the cargo pants! The fit is spot-on, and the quality is unmatched. They are stylish enough to dress up yet comfortable enough for casual wear. I've already ordered a second pair in a different color!",
                name: "Noah Richardson",
                avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#f5f5f5] rounded-xl p-8 flex flex-col">
                <p className="text-[13px] text-gray-700 leading-relaxed mb-8 flex-grow text-center">
                  {testimonial.quote}
                </p>
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <p className="text-[13px] font-medium text-gray-900">
                    — {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-3">
              The Véon Edit Fashion Style
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Your go-to destination for trends, tips, and<br />
              timeless style inspiration
            </p>
            <button className="bg-gray-300/60 hover:bg-gray-300/80 text-gray-900 font-medium text-sm px-6 py-3 rounded-lg transition-all">
              View all Blogs
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
            <div className="bg-[#c9c0b5] rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src="/fashion1.png"
                alt="Dressing for Your Body Type"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white rounded-xl p-8 md:p-12 flex flex-col justify-center">
              <p className="text-xs text-gray-500 mb-3 tracking-wide">Fashion Tips</p>
              <h3 className="text-3xl md:text-4xl font-normal text-gray-900 mb-8 leading-tight">
                Dressing for Your Body Type: Find the Perfect Fit with Véon
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>3/20/25</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>7min</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/fashion2.png"
                  alt="Multi-Seasonal Dressing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-3 tracking-wide">Style Guide</p>
                <h4 className="text-xl font-normal text-gray-900 mb-6 leading-tight">
                  How to Master the Art of Multi-Seasonal Dressing
                </h4>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>3/28/25</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                    <Clock className="w-3.5 h-3.5" />
                    <span>7min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/fashion3.png"
                  alt="The Human Touch"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-3 tracking-wide">Brand Stories</p>
                <h4 className="text-xl font-normal text-gray-900 mb-6 leading-tight">
                  The Human Touch Behind Every Veon Piece
                </h4>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>3/28/25</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                    <Clock className="w-3.5 h-3.5" />
                    <span>8min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/fashion4.png"
                  alt="Why We Chose the Name Veon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-3 tracking-wide">Brand Stories</p>
                <h4 className="text-xl font-normal text-gray-900 mb-6 leading-tight">
                  Why We Chose the Name Veon: Story Behind Brand
                </h4>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>3/22/25</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                    <Clock className="w-3.5 h-3.5" />
                    <span>5min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-3">
              Why Shop with Véon
            </h2>
            <p className="text-sm text-gray-500">
              Enjoy exclusive benefits designed for a<br />
              seamless shopping experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="mb-6">
                <Truck className="w-12 h-12 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3">
                Free Shipping
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Get your sunglasses in 4-7<br />
                business days.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="mb-6">
                <Handshake className="w-12 h-12 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3">
                Here to help
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Customer service is available<br />
                Monday through Friday.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="mb-6">
                <CreditCard className="w-12 h-12 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3">
                Secure Payment
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We keep your payment<br />
                information safe.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="mb-6">
                <RotateCcw className="w-12 h-12 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3">
                10-Days Return Policy
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We think you'll love it. If you don't,<br />
                let us know!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] px-6 py-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-400 mb-2">Instagram</p>
            <h2 className="text-5xl md:text-6xl font-normal text-gray-900">
              @veonshop
            </h2>
          </div>

          <div className="overflow-hidden pb-4">
            <div className="flex gap-4 animate-scroll-right">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-4 flex-shrink-0">
                  <div className="w-72 h-96 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src="/insta1.png"
                      alt="Fashion look 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-72 h-96 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src="/insta2.png"
                      alt="Fashion look 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-72 h-96 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src="/insta3.png"
                      alt="Fashion look 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-72 h-96 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src="/insta4.png"
                      alt="Fashion look 4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-72 h-96 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src="/insta5.png"
                      alt="Fashion look 5"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-72 h-96 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src="/insta6.png"
                      alt="Fashion look 6"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-72 h-96 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src="/insta7.png"
                      alt="Fashion look 7"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white px-6 py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">VÉON</h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Sign-up to receive the latest<br />
                news from Véon.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-[#2a2a2a] text-white placeholder-gray-500 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <button className="w-full bg-white text-gray-900 font-semibold px-4 py-3 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-400 mb-6 tracking-wider">NAVIGATION</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Blogs</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Favorites</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-400 mb-6 tracking-wider">SHOP</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">All</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">T-Shirts</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Shirts</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Dresses & Jump Suits</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Bottoms</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Knitwears</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Coats & Jackets</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-400 mb-6 tracking-wider">SUPPORT</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Payment Methods</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Returns & Refunds</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Sipping & Delivery</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Terms & Condition</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
