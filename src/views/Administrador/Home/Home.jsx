import Layout from "../../../components/templates/Layout";
import NavbarAdmin from "../../../components/templates/NavbarAdmin";
import { Outlet } from "react-router-dom";

const Home = ({datos}) => {
    return (
        <>
            <Layout
            navbar={<NavbarAdmin info={datos} />}
            content={<> <Outlet /> </> }
            />
        </>
    );
}


export default Home;