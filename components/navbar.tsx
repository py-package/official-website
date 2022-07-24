import Link from "next/link";
import { useRef } from "react";

const Navbar = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/packages"><a>Packages</a></Link></li>
                    </ul>
                </div>
            </div>
            {/* <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div> */}
            <div className="navbar-end">
                <Link href="https://discord.gg/MPvSqmttVF" target="_blank"><a className="mx-2 font-semibold" title="PyPackage Discord"><i className="fa-brands fa-discord"></i></a></Link>
                <Link href="https://github.com/py-package" target="_blank"><a className="mx-2 font-semibold" title="PyPackage Github"><i className="fa-brands fa-github"></i></a></Link>
                <Link href="https://twitter.com/py-package" target="_blank"><a className="mx-2 font-semibold" title="PyPackage Twitter"><i className="fa-brands fa-twitter"></i></a></Link>
            </div>
        </div>
    );
}

export default Navbar;