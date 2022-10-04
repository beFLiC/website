function Navbar () {
  return (
    <nav className="navbar">
      <ul className="pt-10 pl-16 flex gap-10 text-primary-color text-xl  font-bold">
        <li>logo </li>
        <li className="text-secondary-color">|</li>
        <li>About Us</li>
        <li>Our Team</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;