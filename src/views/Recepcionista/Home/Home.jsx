import { Outlet } from "react-router-dom";
import Layout from "../../../components/templates/Layout";
import NavbarRecepcionista  from "../../../components/templates/NavbarRecepcionista";

const Home = ({datos}) => {
    return (<>
    <Layout 
    navbar={<NavbarRecepcionista info={datos} />}
    content={<Outlet />}
    />
    </>);
}

export default Home;