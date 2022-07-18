import Navbar from "./navbar";

const Layout = (props: LayoutProps) => {
    return (
        <>
            <Navbar />
            <div id="layout" className="pt-16">
                {props.children}
            </div>
        </>
    );
}

export default Layout;
