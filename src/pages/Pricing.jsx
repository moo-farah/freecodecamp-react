import Footer from "../components/Footer"


const priceList = [
  {
    id: 1,
    badge: "AI-assisted",
    badgeStyle: "bg-zinc-100 text-zinc-700",
    name: "Free",
    price: "$0",
    priceSuffix: "/mo/user",
    subtext: null,
    description: "Best for smaller teams who want to simplify finances.",
    cta: "Get started for free",
    ctaStyle: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
  }
]


const Pricing = () => {
  return (
    <>
     <h1 className="mt-10 text-5xl flex flex-row items-center justify-center px-6 py-3">Start for free. Scale with Intelligence.</h1>
     <p className="text-lg text-zinc-500 font-medium line-clamp-2 text-center">Whether you're a startup, global enterprise, or somewhere in between, Ramp is designed to save you time and money.</p>
     {priceList.map((price) => (
      <li key={price.id}>{price.name}</li>
     ))}
     <Footer />
    </>
    
   
  )
}

export default Pricing