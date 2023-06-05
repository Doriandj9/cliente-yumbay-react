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
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              temporibus quod vero sint commodi velit aspernatur in, officia
              aperiam tempore dolor et asperiores saepe odit!
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              quo dolore, cumque odio, unde perspiciatis soluta nulla, amet
              deleniti ex porro architecto facere at rerum? consectetur
              adipisicing elit. Nihil quo dolore, cumque odio, unde perspiciatis
              soluta nulla, amet deleniti ex porro architecto facere at rerum?
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              quo dolore, cumque odio, unde perspiciatis soluta nulla, amet
              deleniti ex porro architecto facere at rerum? consectetur
              adipisicing elit. Nihil quo dolore, cumque odio, unde perspiciatis
              soluta nulla, amet deleniti ex porro architecto facere at rerum?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              quo dolore, cumque odio, unde perspiciatis soluta nulla, amet
              deleniti ex porro architecto facere at rerum? consectetur
              adipisicing elit. Nihil quo dolore, cumque odio, unde perspiciatis
              soluta nulla, amet deleniti ex porro architecto facere at rerum?
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
            Como Fundación queremos ser una organización reconocida por el impacto
              de nuestras actuaciones en el bienestar y el desarrollo de las
              comunidades con las que trabajamos así como por nuestra integridad
              y profesionalidad en el modo de actuar y convencidos que la
              educación es una herramienta donde podemos promover el desarrollo
              generando nuevas oportunidades.
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
              Promover el derecho a la salud de toda persona, en
              especial de la infancia, juventud, grupos vulnerables a disfrutar
              de una vida digna y plena en igualdad de oportunidades, partiendo
              del desarrollo integral de las capacidades individuales y
              colectivas como medio para transformar la sociedad. 
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
            Solidaridad: Construimos un enfoque de desarrollo basado en Derechos Humanos y
              salud, orientado a su cumplimiento y a erradicar la desigualdad en
              las comunidades con las que trabajamos. <br /><br />
              Compromiso: Actuamos
              comprometidas en el cumplimiento de nuestra misión y visión y con
              la integridad, como principio fundamental de nuestras actuaciones.
              <br /><br />
              Participación: Fomentamos los principios democráticos y
              participativos como medios necesarios para la transformación
              social y como fin inherente al desarrollo. <br /><br />
              Transparencia: Basamos
              nuestra labor en la honestidad, la mutua responsabilidad como
              pilares fundamentales ante la sociedad en general.
              <br /><br /> Unidad: Creemos
              en el trabajo en equipo y en la colaboración con otras
              organizaciones e instituciones para potenciar sinergias y mejorar
              el rendimiento de nuestro trabajo.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Nosotros;
