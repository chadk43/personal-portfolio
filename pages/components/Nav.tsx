import Image from "next/image";
export default function Nav() {
  return (
    <div>
      <nav className="flex justify-between px-10 py-10 bg-gray-500">
       <Image
       src="/signature.png"
       alt=""
       width={100}
       height={100}
       className="rounded-3xl"
       />

 
        <span> Chad Koivuneva</span>
        <ul className="flex justify-between gap-6">
          <li> Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
