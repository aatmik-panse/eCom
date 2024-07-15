import Link from "next/link";
import React from "react";
import Menu from "./Menu";

export default function Header() {
  return (
    <div>
      <header className="navbar justify-between bg-base-300 ">
        <section className="navbar-section">
          <Link href="/" className="btn  btn-ghost text-xl">
            Home
          </Link>
          <Link href="/product" className="btn btn-ghost text-xl">
            Product
          </Link>
        </section>
        <section className="navbar-center btn btn-ghost text-teal-500 text-2xl">
          <Link href="/" className="navbar-brand ">
            eCommerce Site
          </Link>
        </section>
        <section className="navbar-section ">
          <Menu />
        </section>
      </header>
    </div>
  );
}
