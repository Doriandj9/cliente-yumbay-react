import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useEffect } from "react";
import { useFetch } from "../../../utils/hooks/useFetch";
import { useTitle } from "../../../utils/hooks/useTitle";

const Nosotros = () => {
  useTitle("Sobre Nosotros");
  return (
    <>
      <Header />
      <div className="border border-1 w-100 mt-4"></div>
      <div className="mt-2">
        <h2 className="text-white text-center bg-secondary p-2">
          Información sobre nosotros
        </h2>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <div id="" className="card" style={{ width: "75%" }}>
          <div className="card-body">
            <h5 className="card-title text-center">
              RESEÑA HISTÓRICA DE LA FUNDACIÓN ARTURO YUMBAY{" "}
            </h5>
            <div className="border border-1 w-100"></div>
            <p className="card-text" style={{ textAlign: 'justify' }}>
              La fundación Arturo Yumbay se encuentra ubicada al sur de la
              ciudad de Guaranda en las calles Solanda y 7 de mayo. El doctor
              Inti Yumbay junto a sus hermanos y familia en colaboración con la
              comunidad bolivarense creó la fundación para brindar el servicio
              de salud a la comunidad guarandeña en conmemoración a su padre el
              señor Arturo Yumbay ex alcalde de la Ciudad, esta fundación sin
              fines de lucro con el único propósito de llegar a los sectores más
              vulnerables y ayudar en el ámbito del bienestar social.
              <br /> <br />
              Fue creada
              en el 2011, dando paso a un gran legado con la esperanza de
              mejorar la salud de los más necesitados desarrollando proyectos de
              actividad social. Fruto de este voluntariado de 30 personas
              iniciaron sus actividades de brigadas médicas totalmente gratis,
              doctores, enfermeras y voluntarios iniciaron jornadas en el sector
              de la plaza roja cada 10 de noviembre en conmemoración a la muerte
              de su padre, desde ese momento la fundación ha continuado
              trabajando por el desarrollo de las personas más pobres y
              vulnerables. 
              <br /> <br />
              Gracias a la aceptación de la ciudadanía bolivarense
              el 16 de mayo del 2021 se inauguró la casa de la fundación Arturo
              Yumbay creada para brindar servicio social a la ciudadanía,
              contando con espacios de atención médica y ayuda social
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <div id="" className="card" style={{ width: "75%" }}>
          <div className="card-body">
            <h5 className="card-title text-center">MISIÓN INSTITUCIONAL </h5>
            <div className="border border-1 w-100"></div>
            <p className="card-text">
              Como Fundación queremos ser una organización reconocida por el
              impacto de nuestras actuaciones en el bienestar y el desarrollo de
              las comunidades con las que trabajamos así como por nuestra
              integridad y profesionalidad en el modo de actuar y convencidos
              que la educación es una herramienta donde podemos promover el
              desarrollo generando nuevas oportunidades.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <div id="" className="card" style={{ width: "75%" }}>
          <div className="card-body">
            <h5 className="card-title text-center">VISIÓN INSTITUCIONAL </h5>
            <div className="border border-1 w-100"></div>
            <p className="card-text">
              Promover el derecho a la salud de toda persona, en especial de la
              infancia, juventud, grupos vulnerables a disfrutar de una vida
              digna y plena en igualdad de oportunidades, partiendo del
              desarrollo integral de las capacidades individuales y colectivas
              como medio para transformar la sociedad.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="d-flex justify-content-center mb-4">
        <div id="" className="card" style={{ width: "75%" }}>
          <div className="card-body">
            <h5 className="card-title text-center">POLITICA INSTITUCIONAL </h5>
            <div className="border border-1 w-100"></div>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              temporibus quod vero sint commodi velit aspernatur in, officia
              aperiam tempore dolor et asperiores saepe odit!
            </p>
          </div>
        </div>
      </div> */}
      <div className="d-flex justify-content-center mb-4">
        <div id="" className="card" style={{ width: "75%" }}>
          <div className="card-body">
            <h5 className="card-title text-center">
              PRINCIPIOS Y VALORES INSTITUCIONALES{" "}
            </h5>
            <div className="border border-1 w-100"></div>
            <p className="card-text">
              Solidaridad: Construimos un enfoque de desarrollo basado en
              Derechos Humanos y salud, orientado a su cumplimiento y a
              erradicar la desigualdad en las comunidades con las que
              trabajamos. <br />
              <br />
              Compromiso: Actuamos comprometidas en el cumplimiento de nuestra
              misión y visión y con la integridad, como principio fundamental de
              nuestras actuaciones.
              <br />
              <br />
              Participación: Fomentamos los principios democráticos y
              participativos como medios necesarios para la transformación
              social y como fin inherente al desarrollo. <br />
              <br />
              Transparencia: Basamos nuestra labor en la honestidad, la mutua
              responsabilidad como pilares fundamentales ante la sociedad en
              general.
              <br />
              <br /> Unidad: Creemos en el trabajo en equipo y en la
              colaboración con otras organizaciones e instituciones para
              potenciar sinergias y mejorar el rendimiento de nuestro trabajo.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Nosotros;
