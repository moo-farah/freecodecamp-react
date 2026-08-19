import { ArrowDown } from 'lucide-react';


function handleClick(e) {
  e.preventDefault();
  console.log("clicked", e.target)
}


const Hero = () => {
  return (
    <section className="p-10 items-center">
        <div className="flex flex-col justify-center gap-1">
            <h1 className="text-6xl font-semibold">Time is money. Save both</h1>
            <p className="text-zinc-600">Cards, expenses, bill payements, and banking - in the blink of AI.</p>
            <div className='mt-2'>
                <button onClick={handleClick} 
                className='bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 rounded-full flex items-center gap-2 font-medium text-sm transition-colors'
                >

                  Download for free
                  <ArrowDown size={18} />
                </button>
            </div>
            <img src="/src/assets/2.png" alt="Hero" className="mt-8 max-w-full" />  
        </div>
       

    </section>
  )
}

export default Hero;