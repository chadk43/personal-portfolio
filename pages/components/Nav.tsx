export default function Nav() {
  return (
    <div>
      <nav className="flex justify-between px-10 py-10 bg-gray-500">
        <span> Chad Koivuneva</span>
        <ul className="flex justify-between gap-6">
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
