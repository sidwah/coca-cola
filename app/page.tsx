export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-linear-to-b from-black via-gray-900 to-black relative"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="text-center relative z-10 px-6">
          <div className="inline-block mb-8">
            <div className="w-32 h-32 bg-coke-red rounded-full flex items-center justify-center shadow-glow-lg animate-pulse-glow">
              <span className="text-white font-bold text-6xl">C</span>
            </div>
          </div>
          
          <h1 className="font-primary text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            Open Happiness
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 animate-slide-up">
            Experience the original, ice cold, refreshing taste
          </p>
          
          <button className="btn-primary text-lg px-10 py-4 animate-scale-in">
            Explore Our Story
          </button>
        </div>
      </section>

      {/* Smiles Section */}
      <section
        id="smiles"
        className="min-h-screen flex items-center justify-center bg-black py-24"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-primary text-5xl md:text-7xl font-bold text-white mb-6">
            More Than a Century of <span className="text-coke-red">Smiles</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            From street corners to stadiums, Coca-Cola has brought people together for over 
            100 years. Every bottle, every can, it&apos;s about a shared moment of joy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-coke p-8 text-center">
                <div className="w-16 h-16 bg-coke-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-coke-red text-3xl font-bold">{i}</span>
                </div>
                <h3 className="font-primary text-2xl font-bold text-white mb-3">
                  Campaign {i}
                </h3>
                <p className="text-gray-400">
                  Celebrating moments that matter with refreshing taste
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="min-h-screen flex items-center justify-center bg-linear-to-b from-black via-gray-900 to-black py-24"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-primary text-5xl md:text-7xl font-bold text-white mb-6">
            Which <span className="text-coke-red">Coke</span> is Yours?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
            From classic cravings to adventurous styles, there&apos;s a Coke for every taste
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Original', 'Zero', 'Light', 'Vanilla'].map((product) => (
              <div key={product} className="card-coke p-6 text-center">
                <div className="w-20 h-32 bg-linear-to-b from-coke-red to-coke-red-dark rounded-lg mx-auto mb-4 shadow-glow"></div>
                <h3 className="font-primary text-xl font-bold text-white mb-2">
                  Coca-Cola {product}
                </h3>
                <p className="text-gray-400 text-sm">
                  {product === 'Original' && 'The iconic taste'}
                  {product === 'Zero' && 'Zero sugar, full taste'}
                  {product === 'Light' && 'Crisp and refreshing'}
                  {product === 'Vanilla' && 'Classic with a twist'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section
        id="sustainability"
        className="min-h-screen flex items-center justify-center bg-black py-24"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-primary text-5xl md:text-7xl font-bold text-white mb-6">
            Refreshing the World <span className="text-coke-red">Responsibly</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
            We&apos;re committed to making a positive difference in communities and the planet
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Water Stewardship', value: '100%', label: 'Replenishment Goal' },
              { title: 'Sustainable Packaging', value: '100%', label: 'Recyclable' }
            ].map((item) => (
              <div key={item.title} className="card-coke p-10 text-left">
                <h3 className="font-primary text-3xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-6xl font-bold text-coke-red">{item.value}</span>
                  <span className="text-xl text-gray-400">{item.label}</span>
                </div>
                <p className="text-gray-400">
                  Our commitment to environmental responsibility drives every decision we make
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section
        id="company"
        className="min-h-screen flex items-center justify-center bg-linear-to-b from-black via-gray-900 to-black py-24"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-primary text-5xl md:text-7xl font-bold text-white mb-6">
            The <span className="text-coke-red">Coca-Cola</span> Company
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
            137+ years of refreshing moments and bringing people together
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '137+', label: 'Years' },
              { value: '200+', label: 'Countries' },
              { value: '1.9B', label: 'Daily Servings' },
              { value: '700K+', label: 'Employees' }
            ].map((stat) => (
              <div key={stat.label} className="card-coke p-8">
                <div className="text-5xl font-bold text-coke-red mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - This connects to footer */}
      <section
        id="newsletter"
        className="py-24 bg-black"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-primary text-5xl md:text-6xl font-bold text-white mb-6">
            Stay <span className="text-coke-red">Connected</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Get exclusive news, offers, and updates delivered to your inbox
          </p>
          <p className="text-gray-500 text-sm">
            ↓ Scroll down to subscribe in the footer ↓
          </p>
        </div>
      </section>
    </>
  );
}