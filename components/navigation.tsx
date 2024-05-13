"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  
  return <nav>
    <ul>
      <li>
        <Link href={"/"}>Home</Link> {path === "/" ? "🔥" : "" }
      </li>
      <li>
        <Link href={"/aboutt-us"}>About Us</Link> {path === "/aboutt-us" ? "🔥" : "" }
      </li>
    </ul>
  </nav>
}