import Layout from "../../../components/templates/Layout";
import NavbarAdmin from "../../../components/templates/NavbarAdmin";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
        dasdas
        sadas
            <Layout
            navbar={<NavbarAdmin />}
            content={<> <Outlet /> </> }
            />
        </>
    );
}


export default Home;