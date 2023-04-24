import Layout from "../../../components/templates/Layout";
import NavbarDoctores from "../../../components/templates/NavbarDoctores";

const Home = () => {
    return (<>
    <Layout 
    navbar={<NavbarDoctores />}
    content={<p>ssdads</p>}
    />
    </>);
}

export default Home;