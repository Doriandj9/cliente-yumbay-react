import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useEffect } from 'react';
import { useFetch } from "../../../utils/hooks/useFetch";
import { useTitle } from "../../../utils/hooks/useTitle";

const Nosotros = () => {
    useTitle('Sobre Nosotros');
    return (
        <>
        <Header />
            <div className="border border-1 w-100 mt-4"></div>
            <div className="mt-2">
                    <h2 className="text-white text-center bg-secondary p-2">Información sobre nosotros</h2>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <div id='' className="card" style={{width:'75%'}}>
                    <div className="card-body">
                        <h5 className="card-title text-center">RESEÑA HISTÓRICA DE LA FUNDACIÓN ARTURO YUMBAY </h5>
                        <div className="border border-1 w-100"></div>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit temporibus quod vero sint commodi velit aspernatur in, officia aperiam tempore 
                        dolor et asperiores saepe odit!
                        <br />
                            Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit. Nihil quo dolore, cumque odio, 
                            unde perspiciatis soluta nulla, amet deleniti ex porro architecto facere at rerum?
                            consectetur adipisicing elit. Nihil quo dolore, cumque odio, 
                            unde perspiciatis soluta nulla, amet deleniti ex porro architecto facere at rerum?
                            <br />
                            Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit. Nihil quo dolore, cumque odio, 
                            unde perspiciatis soluta nulla, amet deleniti ex porro architecto facere at rerum?
                            consectetur adipisicing elit. Nihil quo dolore, cumque odio, 
                            unde perspiciatis soluta nulla, amet deleniti ex porro architecto facere at rerum?
                            Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit. Nihil quo dolore, cumque odio, 
                            unde perspiciatis soluta nulla, amet deleniti ex porro architecto facere at rerum?
                            consectetur adipisicing elit. Nihil quo dolore, cumque odio, 
                            unde perspiciatis soluta nulla, amet deleniti ex porro architecto facere at rerum?
                        </p>

                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <div id='' className="card" style={{width:'75%'}}>
                    <div className="card-body">
                        <h5 className="card-title text-center">MISIÓN INSTITUCIONAL </h5>
                        <div className="border border-1 w-100"></div>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit temporibus quod vero sint commodi velit aspernatur in, officia aperiam tempore 
                        dolor et asperiores saepe odit!
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <div id='' className="card" style={{width:'75%'}}>
                    <div className="card-body">
                        <h5 className="card-title text-center">VISIÓN INSTITUCIONAL </h5>
                        <div className="border border-1 w-100"></div>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit temporibus quod vero sint commodi velit aspernatur in, officia aperiam tempore 
                        dolor et asperiores saepe odit!
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <div id='' className="card" style={{width:'75%'}}>
                    <div className="card-body">
                        <h5 className="card-title text-center">POLITICA INSTITUCIONAL </h5>
                        <div className="border border-1 w-100"></div>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit temporibus quod vero sint commodi velit aspernatur in, officia aperiam tempore 
                        dolor et asperiores saepe odit!
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <div id='' className="card" style={{width:'75%'}}>
                    <div className="card-body">
                        <h5 className="card-title text-center">PRINCIPIOS Y VALORES INSTITUCIONALES </h5>
                        <div className="border border-1 w-100"></div>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit temporibus quod vero sint commodi velit aspernatur in, officia aperiam tempore 
                        dolor et asperiores saepe odit!
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}


export default Nosotros;