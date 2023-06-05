import { Outlet, useMatches } from "react-router-dom";
import Layout from "../../../components/templates/Layout";
import NavbarRecepcionista from "../../../components/templates/NavbarRecepcionista";
import img from "./../../../assets/imgs/undraw_job_offers_re_634p.svg";

const Home = ({ datos }) => {
  const data = useMatches();

  return (
    <>
      <Layout
        index={data.length === 1 && data[0].handle.op}
        navbar={<NavbarRecepcionista info={datos} />}
        component={<Welcome datos={datos} />}
        content={<Outlet />}
      />
    </>
  );
};
const Welcome = ({ datos }) => {
  return (
    <>
      <h2 className="title-list mt-2 mb-2">
        ¡Bienvenido(a) {datos.nombres} {datos.apellidos} al sistema clínico de
        la Fundación Arturo Yumbay estimada recepcionista!
      </h2>
      <img
        src={img}
        style={{ width: "60%", height: 350, margin: "auto", display: "block" }}
        alt=""
      />
      <p className="ps-5 pe-5">
        Queremos darte una cálida bienvenida a nuestro sistema clínico. Tu papel
        como recepcionista es fundamental para brindar una experiencia positiva
        a nuestros pacientes. Estamos aquí para apoyarte y ofrecerte
        herramientas eficientes que faciliten tu trabajo diario.<br /><br />
        Gracias por
        unirte a nuestro equipo. ¡Bienvenida y gracias por ser parte de nuestra
        clínica! <br /><br />
        Atentamente,<br /><br />
        El equipo de desarrolló (Ramirez Lorena, Yumbay Diana).
      </p>
    </>
  );
};

export default Home;
