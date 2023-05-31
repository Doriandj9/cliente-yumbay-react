import { Page, Text, View, Document, StyleSheet,Image , Font } from '@react-pdf/renderer';
import source from './../../../../../assets/fonts/KonkhmerSleokchher-Regular.ttf';
import logo from './../../../../../assets/imgs/logo-largo.png';
import simbolo from './../../../../../assets/imgs/simbolo_doctor.png';
import dayjs from 'dayjs';
import { useUserStore } from '../../../../../store/userStore';
Font.register({ family: 'Serif-Title', src: source, fontStyle: 'normal', fontWeight: 'bold' });
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      display: 'flex',
      gap: '25px',
      flexDirection: 'row'
    },
    columns: {
      width:'100%'
    },
    imagen:{
      width: '75%', 
      height: '100px',
    },
    titulo: {
      fontFamily: 'Serif-Title',
      color: '#0d0d79',
      padding: 0,
      margin: 0,
      fontSize: '12px'
    },
    text:{
      fontSize: '12px',
      color: '#0d0d79',
      fontStyle:'italic',
      marginBottom: '5px'
    } 
  });
const Examen = ({datos,user}) => {
  const date = dayjs();
  const fecha = date.toDate();
  const format = Intl.DateTimeFormat('es',{ day:'numeric',month:'long',year:'numeric'}).format;
  console.log(datos)
    return (
        <>
      <Document 
      title='Receta Medica'>
        <Page orientation='portrait'
        size="A4" style={styles.page}>
        <View style={{ width: '100%' }}>
          <View style={styles.section}>
            <View style={styles.columns}>
                <View>
                    <Image style={styles.imagen}
                    src={logo}>
                    </Image>
                  </View>
                  <View>
                    <View style={{
                      width:'100%',
                      textAlign: 'center',
                      padding:0,
                      margin: '0 0 5px 0',
                      borderBottom: '1px dashed #0d0d79'
                    }}
                    >
                      <Text style={ styles.titulo }>
                      SOLICITUD DE EXÁMEN DE LABORATORIO
                      </Text>
                    </View>
                    <View>
                      <View style={
                        {
                          display:'flex',
                          flexDirection: 'row',
                          justifyContent: 'flex-start'
                        }
                      }>
                        <Text style={[styles.text,{width: '60%'}]}>Paciente: 
                        <Text style={{color: 'black'}} > {datos?.nombres} {datos?.apellidos} </Text> 
                        </Text>
                        <Text style={[styles.text,{width: '40%'}]}>Fecha de nacimiento: 
                         <Text style={{color: 'black'}}> {dayjs(datos?.fecha_nacimiento_fake).format('YYYY-MM-DD')}  </Text> 
                        </Text>
                      </View>
                      <View style={{
                          display:'flex',
                          flexDirection: 'row',
                          justifyContent: 'flex-start'
                        }}>
                        <Text style={[styles.text,{width: '60%'}]} >Cédula: 
                        <Text style={{color: 'black',}}>
                        {datos?.cedula}
                          </Text>  
                        </Text>

                        <Text  style={[styles.text,{width: '40%'}]}>Dirección: 
                          <Text style={{color: 'black'}}>
                          {datos?.direccion}
                            </Text>  
                        </Text>
                      </View>
                      <View style={{
                          display:'flex',
                          flexDirection: 'row',
                          justifyContent: 'flex-start'
                        }}>
                        <Text style={styles.text}>Nº Celular del paciente: 
                        <Text style={{color: 'black', width: '100%'}}>
                        {datos?.celular}
                          </Text>  
                        </Text>
                      </View>
                    </View>
                    <View>
                      <View style={
                        {
                          display:'flex',
                          flexDirection: 'row',
                          justifyContent: 'flex-start'
                        }
                      }>
                        <Text style={[styles.text,{width: '60%'}]}>Médico/a: 
                        <Text style={{color: 'black'}} > {user?.nombres} {user?.apellidos} </Text> 
                        </Text>
                        <Text style={[styles.text,{width: '40%'}]}>Especialidad: 
                         <Text style={{color: 'black'}}> {user?.nombre_especialidad}  </Text> 
                        </Text>
                      </View>
                      
                      <View>
                        <Text style={styles.text}>
                          Guaranda, {format(fecha)}
                        </Text>
                      </View>
                      <View style={{minHeight: '5vh'}}>
                        <Text style={styles.text}>
                        Motivo de la solicitud
                        </Text>
                        <View style={{fontSize: '10px'}}>
                          <Text>
                          {datos?.motivo_examen}
                          </Text>
                        </View>
                      </View>
                      <View style={{minHeight: '5vh'}}>
                        <Text style={styles.text}>
                        Exámenes específicos solicitados
                        </Text>
                        <View style={{fontSize: '10px'}}>
                          <Text>
                          {datos?.examen_solicitud}
                          </Text>
                        </View>
                      </View>
                      <View style={{minHeight: '25vh'}}>
                        <Text style={styles.text}>
                        Indicaciones especiales
                        </Text>
                        <View style={{fontSize: '10px'}}>
                          <Text>
                          {datos?.examen_indicaciones}
                          </Text>
                        </View>
                      </View>

                    </View>

                    <View>
                      {/* <Image src={simbolo} style={{ zIndex: '-1' }} /> */}
                      
                      <View style={{borderTop:'1px solid #0d0d79'}}>
                      <Text style={[styles.text,{textAlign:'center'}]}>Dirección: Solanda y 7 de Mayo CI.09883703996 </Text>
                      </View>
                    </View>
                  </View>
            </View>
          </View>
        </View>
        </Page>
    </Document>
        </>
    );
}

export default Examen;