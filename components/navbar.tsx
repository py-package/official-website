import Link from "next/link";

const Navbar = () => {
    return (
        <nav id="main-nav" className="w-full h-16 bg-yellow-400 fixed z-10 flex justify-between px-32 items-center">
            <span className="flex items-center justify-center">
                <Link href="/"><a className="mx-2 font-semibold">Home</a></Link>
                <Link href="/packages"><a className="mx-2 font-semibold">Packages</a></Link>
            </span>
            <span>
                <Link href="https://discord.gg/MPvSqmttVF" target="_blank"><a className="mx-2 font-semibold" title="PyPackage Discord"><i className="fa-brands fa-discord"></i></a></Link>
                <Link href="https://github.com/py-package" target="_blank"><a className="mx-2 font-semibold" title="PyPackage Github"><i className="fa-brands fa-github"></i></a></Link>
                <Link href="https://twitter.com/py-package" target="_blank"><a className="mx-2 font-semibold" title="PyPackage Twitter"><i className="fa-brands fa-twitter"></i></a></Link>
            </span>
        </nav>
    );
}

export default Navbar;