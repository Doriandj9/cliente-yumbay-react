import { Outlet } from "react-router-dom";
import Layout from "../../../components/templates/Layout";
import NavbarDoctores from "../../../components/templates/NavbarDoctores";

const Home = ({datos}) => {
    return (<>
    <Layout 
    navbar={<NavbarDoctores info={datos} />}
    content={<Outlet />}
    />
    </>);
}

export default Home;