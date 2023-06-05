import Layout from "../../../components/templates/Layout";
import NavbarAdmin from "../../../components/templates/NavbarAdmin";
import { Outlet, useMatches } from "react-router-dom";
import img from "./../../../assets/imgs/undraw_teaching_re_g7e3.svg";

const Home = ({ datos }) => {
  const data = useMatches();
  return (
    <>
      <Layout
        navbar={<NavbarAdmin info={datos} />}
        index={data.length === 1 && data[0].handle.op}
        content={
          <>
            <Outlet />
          </>
        }
        component={<Welcome datos={datos} />}
      />
    </>
  );
};
const Welcome = ({ datos }) => {
  return (
    <>
      <h2 className="title-list mt-2 mb-2">
        ¡Bienvenido(a) {datos.nombres} {datos.apellidos} al sistema clínico de
        la Fundación Arturo Yumbay estimado Director(a)!!
      </h2>
      <img
        src={img}
        style={{ width: "60%", height: 250, margin: "auto", display: "block" }}
        alt=""
      />
      <p className="ps-5 pe-5">
        Estimado Director(a), es un honor darle la más cálida bienvenida a nuestro
        sistema clínico. En nombre de todo nuestro equipo, queremos expresar
        nuestra gratitud por unirse a nuestra institución como líder y guía en
        el campo de la salud. <br /> <br />
        Su vasta experiencia y visión estratégica serán
        pilares fundamentales para el crecimiento y éxito de nuestra clínica.
        Estamos seguros de que su liderazgo inspirador y su compromiso con la
        excelencia impulsarán la calidad de la atención que ofrecemos a nuestros
        pacientes.<br /> <br /> 
        Nuestro sistema clínico ha sido diseñado para proporcionarle
        herramientas y recursos que facilitarán la gestión eficiente de la
        clínica. A través de esta plataforma, podrá supervisar el desempeño de
        los profesionales de la salud, acceder a informes y estadísticas en
        tiempo real, optimizar los procesos administrativos y tomar decisiones
        fundamentadas para el beneficio de nuestros pacientes. <br /> <br />
        Nos comprometemos
        a trabajar de cerca con usted, brindándole un soporte constante y
        escuchando sus necesidades y sugerencias para mejorar continuamente
        nuestro sistema clínico y ofrecer un entorno de trabajo óptimo. <br /> <br />
        Le damos
        una calurosa bienvenida al sistema clínico y esperamos que esta alianza
        sea fructífera y llena de logros compartidos. Estamos emocionados de
        tenerlo a bordo y confiamos en que, juntos, alcanzaremos nuevas metas en
        el campo de la salud. <br /> <br />
        Si en algún momento necesita asistencia o tiene
        alguna consulta, no dude en comunicarse con nosotros. Estamos aquí para
        brindarle el apoyo que necesite en su rol de Director(a).<br /> <br /> 
        ¡Bienvenido y
        gracias por liderar nuestro equipo hacia un futuro exitoso!
        <br /> <br /> 
        Atentamente,
        <br /> <br />
       El equipo de desarrolló (Ramirez Lorena, Yumbay Diana).
      </p>
    </>
  );
};

export default Home;
