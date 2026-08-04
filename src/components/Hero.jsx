import  HeroImage  from '../assets/2.png'


function handleClick(e) {
  e.preventDefault();
  console.log("clicked", e.target)
}


const Hero = () => {
  return (
    <section className="p-10 items-center">
        <div className="flex flex-col justify-center gap-1">
            <h1 className="text-4xl font-semibold">Time is money. Save both</h1>
            <p className="text[#]">Cards, expenses, bill payements, and banking - in the blink of AI.</p>
            <div>
                <button onClick={handleClick} className='bg-amber-800 hover:bg-amber-400 text-white px-4 py-2 rounded-full'>Download for free</button>
            </div>
            <img src={HeroImage} alt="" />
            
        </div>
       

    </section>
  )
}

export default Hero