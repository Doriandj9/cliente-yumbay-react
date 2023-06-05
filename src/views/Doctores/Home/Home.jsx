import { Outlet,useMatches } from "react-router-dom";
import Layout from "../../../components/templates/Layout";
import NavbarDoctores from "../../../components/templates/NavbarDoctores";
import img from './../../../assets/imgs/undraw_medical_care_movn.svg';

const Home = ({datos}) => {
const data = useMatches();
    return (<>
    <Layout 
    navbar={<NavbarDoctores info={datos} />}
    content={<Outlet />}
    index={data.length === 1 && data[0].handle.op}
    component={<Welcome datos={datos} />}
    />
    
    </>);
}

const Welcome =({datos}) => {
    return (

<>
<h2 className="title-list mt-2 mb-2">¡Bienvenido(a) {datos.nombres} {datos.apellidos} al sistema clínico de la Fundación Arturo Yumbay!</h2>
                <img src={img} style={{ width: '60%',height: 250, margin: 'auto', display: 'block' }} alt="" />
                <p className="ps-5 pe-5">
                  Estimado(a) doctor(a), nos complace darle la más cordial
                  bienvenida a nuestro sistema clínico. En nombre de todo
                  nuestro equipo, queremos agradecerle por unirse a nuestra red
                  de profesionales de la salud. <br/><br/> Como médico, su experiencia y
                  conocimientos son invaluables para proporcionar una atención
                  de calidad a nuestros pacientes. Estamos seguros de que su
                  dedicación y pasión por su trabajo contribuirán
                  significativamente al crecimiento y éxito de nuestra
                  institución. <br /> <br/> Nuestro sistema clínico se ha diseñado pensando
                  en facilitar su práctica médica y optimizar su tiempo. A
                  través de esta plataforma, podrá acceder de manera rápida y
                  segura a los registros de sus pacientes, gestionar citas,
                  realizar diagnósticos, y colaborar con otros especialistas en
                  el cuidado integral de cada individuo. <br /> <br/> Nos comprometemos a
                  brindarle un soporte constante y a mantener actualizada
                  nuestra plataforma con las últimas innovaciones tecnológicas
                  para garantizar una experiencia fluida y eficiente. <br /><br/> Una vez
                  más, le damos una calurosa bienvenida al sistema clínico.
                  Estamos emocionados de tenerlo(a) a bordo y esperamos
                  construir una relación sólida y duradera, basada en el respeto
                  mutuo y la excelencia en el campo de la medicina. <br /> <br/> Si tiene
                  alguna pregunta o necesita ayuda con el sistema, no dude en
                  contactarnos. Estamos aquí para brindarle el apoyo que
                  necesite. <br /><br/>
                  ¡Bienvenido(a) y gracias por formar parte de nuestro
                  equipo! <br /><br/> Atentamente, <br /><br/> El equipo de desarrolló (Ramirez Lorena, Yumbay Diana).
                </p>
</>
    );
}

export default Home;