import dayjs from 'dayjs';
import { useUserStore } from './../../../../store/userStore';

const Ficha = ({data}) => {
    const user = useUserStore((state) => state.user);
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
                            {data?.unidad_operativa
                            }
                        </section>
                    </article>
                    <article style={{ width: '20%' }}>
                        <h6>CODIGO</h6>
                        <section  className='cont sin-b'>
                            {data?.id_especialidad}
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
                                        data?.apellidos?.split(' ')[0] ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6>APELLIDO MATERNO</h6>
                                <p>
                                    {
                                        data?.apellidos?.split(' ')[1] ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6>PRIMER NOMBRE</h6>
                                <p>
                                    {
                                        data?.nombres?.split(' ')[0] ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6>SEGUNDO NOMBRE</h6>
                                <p>
                                    {
                                        data?.nombres?.split(' ')[1] ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6>Nº CÉDULA DE CUIDADANÍA</h6>
                                <p>
                                    {
                                        data?.cedula ?? ''
                                    }
                                </p>
                            </article>
                        </div>
                        <div className='parte1_fila'>
                            <article>
                                <h6>DIRECCIÓN DE RESIDENCIA HABITUAL</h6>
                                <p>
                                    {
                                        data?.direccion ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6>Nº TELÉFONO</h6>
                                <p>
                                    {
                                        data?.celular ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6>FECHA NACIMIENTO</h6>
                                <p>
                                    {
                                       data?.fecha_nacimiento ?? ''
                                    }
                                   
                                </p>
                            </article>
                            <article>
                                <h6>CORREO ELECTRONICO</h6>
                                <p>
                                    {
                                        data?.email ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6>EDAD</h6>
                                <p>
                                    {
                                        data?.edad ?? ''
                                    }
                                </p>
                            </article>
                        </div>
                        <div className='parte1_fila'>
                            <article>
                                <h6>SEXO</h6>
                                <p>
                                    {
                                        data?.sexo ?? ''
                                    }
                                </p>
                            </article>
                            <article>
                                <h6 style={{ borderRight: '2px solid #ccc' }}>ESTADO CIVIL</h6>
                                <p style={{ borderRight: '2px solid #ccc' }}>
                                    {
                                        data?.estado_civil ?? ''
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
                                    data?.hora_finalizacion ?? ''
                                }    
                            </p>
                        </article>
                        <article>
                            <h6>MOTIVO DE CONSULTA</h6>
                            <p>
                                {
                                    data?.motivo_consulta ?? ''
                                }
                            </p>
                        </article>
                    </div>
                    <div  className='parte2__interno'>
                        <article>
                            <h6>ANTECEDENTES MÉDICOS</h6>
                            <p>
                                {
                                    data?.antecedentes_medicos ?? ''
                                }
                            </p>
                        </article>
                        <article>
                            <h6>TRATAMIENTO ACTUAL</h6>
                            <p>
                                {
                                    data?.tratamiento_actual ?? ''
                                }
                            </p>
                        </article>
                    </div>
                    <div  className='parte2__interno'>
                        <article>
                            <h6>ALERGIAS</h6>
                            <p>
                                {
                                    data?.alergias ?? ''
                                }
                            </p>
                        </article>
                        <article className='last'>
                            <h6>HÁBITOS TÓXICOS</h6>
                            <p>
                                {
                                    data?.habitos_toxicos ?? ''
                                }
                            </p>
                        </article>
                    </div>
                    <div  className='parte2__interno'>
                        <article>
                            <h6>OTROS ANTECEDENTES RELEVANTES</h6>
                            <p>
                                {
                                    data?.otros_antecedentes ?? ''
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
                            data?.presion_arterial ? data.presion_arterial.split('/')[0] : ''
                            }<span className='slash'>/</span>{
                                data?.presion_arterial ? data.presion_arterial.split('/')[1] : ''
                                }
                            
                            </p>
                    </article>
                    <article>
                        <h6>F. CARDIACA <br /> <strong>min</strong></h6>
                        <p>
                            { data?.frecuencia_cardiaca ?? '' }
                        </p>
                    </article>
                    <article>
                        <h6>F. RESPIRAT <br /> <strong>min</strong></h6>
                        <p>
                            { data?.frecuencia_respiratoria ?? '' }
                        </p>
                    </article>
                    <article>
                        <h6>TEMPERATURA <br /> <strong>ºC</strong></h6>
                        <p>
                        { data?.temperatura ?? '' }
                        </p>
                    </article>
                    <article>
                        <h6>PESO <br /> <strong>kg</strong></h6>
                        <p>
                        { data?.peso ?? '' }
                        </p>
                    </article>
                    <article>
                        <h6>TALLA <br /> <strong>m</strong></h6>
                        <p>
                        { data?.talla ?? '' }
                        </p>
                    </article>
                </div>
                <div className='parte2__interno'>
                        <article>
                            <h6 style={ { textTransform: 'uppercase' } }>Auscultación cardiaca</h6>
                            <p>
                            { data?.auscultacion_cardiaca ?? '' }
                            </p>
                        </article>
                        <article className='last'>
                        <h6 style={ { textTransform: 'uppercase' } }>Auscultación pulmonar</h6>
                            <p>
                            { data?.auscultacion_pulmonar ?? '' }
                            </p>
                        </article>
                    </div>
                    <div className='parte2__interno'>
                        <article>
                            <h6 style={ { textTransform: 'uppercase' } }>Otros hallazgos relevantes</h6>
                            <p>
                            { data?.otros_hallazgos ?? '' }
                            </p>
                        </article>
                    </div>
                </div>
                <div className='parte4'>
                    <h5>4 PLAN DE TRATAMIENTO </h5>
                    <div className='parte4__interno'>
                        <article>
                            <h6 style={ { textTransform: 'uppercase' } }>Medicamentos</h6>
                            
                                {
                                    data?.medicamentos_tratamiento?.split('|')?.map((mt,i) => {
                                        const [medicamento] = mt.split('^^');
                                        return (
                                            <p key={i}>
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
                                    data?.medicamentos_tratamiento?.split('|')?.map((mt,i) => {
                                        const [medicamento,tratamiento] = mt.split('^^');
                                        return (
                                            <p className='ps-2' key={i}>
                                                {tratamiento}
                                            </p>
                                        );
                                    })
                                }
                        </article>
                    </div>
                </div>
                <div className='parte2'>
                    <h5>5 OTROS MOTIVOS</h5>
                        <div className='parte2__interno flex-column'  >
                            <article style={{ width: '100%' }}>
                            <h6>ANTECEDENTES</h6>
                            <p>
                                {
                                    DataView?.antecedentes_paso ?? ''
                                }
                            </p>
                        </article>
                        <article style={{ width: '100%' }}>
                            <h6>ENFERMEDAD ACTUAL</h6>
                            <p>
                                {
                                    data?.enfermedad_actual ?? ''
                                }
                            </p>
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
                        <p>{data?.hora_finalizacion}</p>
                    </article>
                    <article className='w-50'>
                        <h6>PROFESIONAL Y CÓDIGO</h6>
                        <p>
                            {user.nombres} {user.apellidos.split(' ')[0]}
                        </p>
                    </article>

                </div>
                </div>
            </div>
        </>
    );
}


export default Ficha;