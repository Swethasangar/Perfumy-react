function Navbar() {
    return (
      <nav className="bg-black flex justify-between items-center p-5">
        <h1 className="ml-4 text-xl text-white">Perfumy</h1>
        <ul className="flex mr-60">
          <li>Home |</li>
          <li>Products |</li>
          <li>About |</li>
          <li>Contact |</li>
        </ul>
      </nav>
    );
  }
  export default Navbar;