const Navbar = () => {
  return (
   <nav className="bg-amber-400 px-4 py-5 mt-2">
      <div className="flex flex-row items-center justify-around">
        <ul className="flex flex-row items-center gap-4">
          <li><a href="/company">Company</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/docs">Docs</a></li>
        </ul>

        <div className="flex flex-row items-center gap-5">
          <button className="hover:bg-[#1D1D1F] text-white text-sm px-4 py-3 rounded-full font-medium" aria-expanded={false}>Sign in</button>
          <button className="bg-[#1D1D1F] text-white text-sm px-4 py-3 rounded-full font-medium" aria-expanded={false}>Sign up</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar