const Navbar = () => {
  return (
   <nav className="mt-2 text-xl">
    <ul className="flex flex-row items-center justify-center gap-4" >
        <li><a href="#">Company</a></li>
        <li><a href="#"></a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Docs</a></li>
        <li>
            <button className="bg-zinc-600 hover:bg-zinc-900 text-white px-3 py-1 rounded-lg" aria-expanded>Sing up</button>
        </li>
    </ul>
   </nav>
  )
}

export default Navbar