import './index.css';
import { useUserStore } from './../../../../store/userStore';
import dayjs from 'dayjs';
const Cinco = ({state1,state2,state3,state4}) => {
    const user = useUserStore((state) => state.user);
    const objt =  {...state4};
    delete objt.inputs;
    const keys = Object.keys(objt);
    const res = keys.map((key,i) => {
        const index = key.split('_')[1];
        const residual = keys.filter((keyp) => keyp.includes('_'+index));
       return residual
    });
    let filtrado = [];
    let before = null;
    for(let elem of res){
        if(!before){
            before = elem;
            filtrado.push(elem);
            continue;
        }
        const [i,j] = before;
        if(i === elem[0] && j === elem[1]){
            continue;
        }

        before = elem;
        filtrado.push(elem);
    }
    
    const medicamentos_tratamientos = filtrado.map((element) => {
        const [medicamento,tratamiento] = element;
        return [objt[medicamento],objt[tratamiento]];
    });
    const backendValues = medicamentos_tratamientos.reduce((acum,valor) => {
            const [medi,tra] = valor;
            return acum + medi + '^^' + tra + '|';        
    },'').slice(0,-1);
    return (
        <>
            <div className='contenedor'>
                <div className='titulo'>
                    <article style={{ width: '25%' }}>
                        <h6>INSTITUCIÓN DEL SISTEMA</h6>
                        <section className='cont'>
                            Clinica Yumbay 
                        </section>
                    </article>
                    <article style={{ width: '25%' }} >
                        <h6>UNIDAD OPERATIVA</h6>
                        <section  className='cont'>
                            {user.nombre_especialidad}
                        </section>
                    </article>
                    <article style={{ width: '20%' }}>
                        <h6>CODIGO</h6>
                        <section  className='cont sin-b'>
                            {user.id_especialidad} 
                        </section>
                    </article>
                    <article style={{ width: '30%' }}>
                        <h6>LOCALIZACIÓN</h6>
                        <section className='titulo__localizacion'>
                            <div>
                                <h6>PARROQUIA</h6>
                                <p>boli</p>
                            </div>
                            <div>
                                <h6>CANTÓN</h6>
                                <p>GUARANDA</p>
                            </div>
                            <div>
                                <h6>PROVINCIA</h6>
                                <p>BOLÍVAR</p>
                            </div>
                        </section>
                    </article>
                    <article style={{ width: '25%' }}>
                        <h6>NÚMERO DE HISTORIA CLÍNICA</h6>
                        <section  className='cont'>
                            Clinica Yumbay 
                        </section>
                    </article>
                </div>
                <div className='parte1'>
                    <h5>1 REGISTRO DE ADMISIÓN</h5>
                    <div className='parte1__main'>
                        <div className='parte1_fila'>
                            <article>
                                <h6>APELLIDO PATERNO</h6>
                                <p>
                                    {
                                        state1?.apellidos?.split(' ')[0] ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6>APELLIDO MATERNO</h6>
                                <p>
                                    {
                                        state1?.apellidos?.split(' ')[1] ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6>PRIMER NOMBRE</h6>
                                <p>
                                    {
                                        state1?.nombres?.split(' ')[0] ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6>SEGUNDO NOMBRE</h6>
                                <p>
                                    {
                                        state1?.nombres?.split(' ')[1] ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6>Nº CÉDULA DE CUIDADANÍA</h6>
                                <p>
                                    {
                                        state1?.cedula ?? ''
                                    }
                                </p>
                            </article>
                        </div>
                        <div className='parte1_fila'>
                            <article>
                                <h6>DIRECCIÓN DE RESIDENCIA HABITUAL</h6>
                                <p>
                                    {
                                        state1?.direccion ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6>Nº TELÉFONO</h6>
                                <p>
                                    {
                                        state1?.celular ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6>FECHA NACIMIENTO</h6>
                                <p>
                                    {
                                       state1?.fecha_nacimiento_fake ? state1?.fecha_nacimiento_fake?.format('YYYY/MM/DD') :
                                       ''
                                    }
                                    <input type="hidden" name='fecha_nacimiento' value={
                                        state1?.fecha_nacimiento_fake ? state1?.fecha_nacimiento_fake?.format('YYYY-MM-DD') :
                                        ''
                                    } />
                                </p>
                            </article>
                            <article>
                                <h6>CORREO ELECTRONICO</h6>
                                <p>
                                    {
                                        state1?.correo ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6>EDAD</h6>
                                <p>
                                    {
                                        state1?.edad ?? ''
                                    }
                                </p>
                            </article>
                        </div>
                        <div className='parte1_fila'>
                            <article>
                                <h6>SEXO</h6>
                                <p>
                                    {
                                        state1?.sexo ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6 style={{ borderRight: '2px solid #ccc' }}>ESTADO CIVIL</h6>
                                <p style={{ borderRight: '2px solid #ccc' }}>
                                    {
                                        state1?.estado_civil ?? ''
                                    }
                                </p>
                            </article>
                        </div>

                    </div>
                </div>
                <div className='parte2'>
                    <h5>2  HISTORIA CLÍNICA</h5>
                    <div className='parte2__interno'>
                        <article>
                            <h6>HORA</h6>
                            <p>
                                {
                                    state2?.hora ?? ''
                                }    
                            </p>
                        </article>
                        <article>
                            <h6>MOTIVO DE CONSULTA</h6>
                            <p>
                                {
                                    state2?.motivo ?? ''
                                }
                            </p>
                        </article>
                    </div>
                    <div  className='parte2__interno'>
                        <article>
                            <h6>ANTECEDENTES MÉDICOS</h6>
                            <p>
                                {
                                    state2?.antecendentes ?? ''
                                }
                            </p>
                        </article>
                        <article>
                            <h6>TRATAMIENTO ACTUAL</h6>
                            <p>
                                {
                                    state2?.tratamiento ?? ''
                                }
                            </p>
                        </article>
                    </div>
                    <div  className='parte2__interno'>
                        <article>
                            <h6>ALERGIAS</h6>
                            <p>
                                {
                                    state2?.alergias ?? ''
                                }
                            </p>
                        </article>
                        <article className='last'>
                            <h6>HÁBITOS TÓXICOS</h6>
                            <p>
                                {
                                    state2?.habitos ?? ''
                                }
                            </p>
                        </article>
                    </div>
                    <div  className='parte2__interno'>
                        <article>
                            <h6>OTROS ANTECEDENTES RELEVANTES</h6>
                            <p>
                                {
                                    state2?.otros_antecedentes ?? ''
                                }
                            </p>
                        </article>
                    </div>
                </div>
                <div className='parte3'>
                <h5>3 EXAMEN FÍSICO</h5>
                <div className='parte3_fila'>
                    <article>
                        <h6>PRESIÓN ARTERIAL</h6>
                        <p>{
                            state3?.presion ? state3.presion.split('/')[0] : ''
                            }<span className='slash'>/</span>{
                                state3?.presion ? state3.presion.split('/')[1] : ''
                                }
                            
                            </p>
                    </article>
                    <article>
                        <h6>F. CARDIACA <br /> <strong>min</strong></h6>
                        <p>
                            { state3?.frecuencia ?? '' }
                        </p>
                    </article>
                    <article>
                        <h6>F. RESPIRAT <br /> <strong>min</strong></h6>
                        <p>
                            { state3?.respiracion ?? '' }
                        </p>
                    </article>
                    <article>
                        <h6>TEMPERATURA <br /> <strong>ºC</strong></h6>
                        <p>
                        { state3?.temperatura ?? '' }
                        </p>
                    </article>
                    <article>
                        <h6>PESO <br /> <strong>kg</strong></h6>
                        <p>
                        { state3?.peso ?? '' }
                        </p>
                    </article>
                    <article>
                        <h6>TALLA <br /> <strong>m</strong></h6>
                        <p>
                        { state3?.altura ?? '' }
                        </p>
                    </article>
                </div>
                <div className='parte2__interno'>
                        <article>
                            <h6 style={ { textTransform: 'uppercase' } }>Auscultación cardiaca</h6>
                            <p>
                            { state3?.cardiaco ?? '' }
                            </p>
                        </article>
                        <article className='last'>
                        <h6 style={ { textTransform: 'uppercase' } }>Auscultación pulmonar</h6>
                            <p>
                            { state3?.pulmonar ?? '' }
                            </p>
                        </article>
                    </div>
                    <div className='parte2__interno'>
                        <article>
                            <h6 style={ { textTransform: 'uppercase' } }>Otros hallazgos relevantes</h6>
                            <p>
                            { state3?.otros_hallasgos ?? '' }
                            </p>
                        </article>
                    </div>
                </div>
                <div className='parte4'>
                    <h5> PLAN DE TRATAMIENTO </h5>
                    <div className='parte4__interno'>
                        <article>
                            <h6 style={ { textTransform: 'uppercase' } }>Medicamentos</h6>
                            
                                {
                                    medicamentos_tratamientos.map((mt,i) => {
                                        const [medicamento] = mt;
                                        return (
                                            <p>
                                            <span>{i + 1}</span>
                                                {medicamento}
                                            </p>
                                        );
                                    })
                                }
                                
                            
                        </article>
                        <article>
                            <h6 style={ { textTransform: 'uppercase' } }>Posología</h6>
                            {
                                    medicamentos_tratamientos.map((mt,i) => {
                                        const [medicamento,tratamiento] = mt;
                                        return (
                                            <p className='ps-2'>
                                                {tratamiento}
                                            </p>
                                        );
                                    })
                                }
                        </article>
                    </div>
                </div>
                <div className='parte5'>
                <div className='parte3_fila footer__ficha'>
                    <article>
                        <h6>FECHA DE CONTROL</h6>
                        <p> {dayjs().format('YYYY/MM/DD')} </p>
                        <input type="hidden" name='fecha' value={dayjs().format('YYYY-MM-DD')} />

                    </article>
                    <article>
                        <h6>HORA DE FINALIZACIÓN</h6>
                        <p>{dayjs().format('HH:mm')}</p>
                        <input type="hidden" name='hora_finalizacion' value={dayjs().format('HH:mm')} />
                    </article>
                    <article>
                        <h6>PROFESIONAL Y CÓDIGO</h6>
                        <p>
                            {user.nombres} {user.apellidos.split(' ')[0]}
                        </p>
                    </article>
                    <article>
                        <h6>FIRMA</h6>
                        <p></p>
                    </article>
                </div>
                </div>
            </div>
            {/* Datsos unidos de los medicamentos y los tratamientos */}
            <input type="hidden" name='medicamentos' value={backendValues} />
            {

            }
        </>
    );
}

export default Cinco;