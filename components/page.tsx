import { LayoutProps } from "../global";

const Page = (props: LayoutProps) => {
    return (
        <div id="page">
            {props.children}
        </div>
    );
}

export default Page;