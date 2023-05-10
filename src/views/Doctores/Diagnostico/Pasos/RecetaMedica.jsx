import { Page, Text, View, Document, StyleSheet,Image , Font } from '@react-pdf/renderer';
import source from './../../../../assets/fonts/KonkhmerSleokchher-Regular.ttf';
import logo from './../../../../assets/imgs/logo-largo.png';
import simbolo from './../../../../assets/imgs/simbolo_doctor.png';
import dayjs from 'dayjs';
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
      width:'50%'
    },
    imagen:{
      width: '100%', 
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
const RecetaMedica = ({datos}) => {
  const date = dayjs();
  const fecha = date.toDate();
  const format = Intl.DateTimeFormat('es',{ day:'numeric',month:'long',year:'numeric'}).format;
    return (
        <>
      <Document 
      title='Receta Medica'>
        <Page orientation='landscape'
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
                        MEDICINA GENERAL
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
                        <Text style={[styles.text,{width: '50%'}]}>Paciente: 
                        <Text style={{color: 'black'}} > {datos?.nombres} {datos?.apellidos} </Text> 
                        </Text>
                        <Text style={[styles.text,{width: '25%'}]}>Edad: 
                         <Text style={{color: 'black'}}> {datos?.edad}  </Text> 
                        </Text>
                        <Text style={[styles.text,{width: '25%'}]}>Sexo:
                        <Text style={{color: 'black'}}> {datos?.sexo} </Text> 
                         </Text>
                      </View>
                      <View>
                        <Text style={styles.text}>Cédula: 
                        <Text style={{color: 'black'}}>
                        {datos?.cedula}
                          </Text>  </Text>
                      </View>
                      <View>
                        <Text style={styles.text}>
                          Guaranda, {format(fecha)}
                        </Text>
                      </View>
                      <View style={{height: '36vh'}}>
                        <Text style={styles.text}>
                          Rp.
                        </Text>
                        <Text style={{fontSize: '10px', display: 'flex' , flexDirection: 'column'}}>{
                          datos?.medicamentos?.split('|')?.map((element,i) => {
                            const [medicamento,tratamiento] = element.split('^^');
                            return (
                              <Text key={i}> 
                                {medicamento} ➡ {tratamiento}
                              </Text>
                            );
                          })
                        }</Text>
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
                        MEDICINA GENERAL
                      </Text>
                    </View>
                    <View>
                      <View style={{textAlign:'center',height:'45vh' }}>
                        <Text style={styles.titulo}>Indicaciones: </Text>
                        <Text style={{fontSize: '10px'}}>{
                          datos?.medicamentos?.split('|')?.map((element,i) => {
                            const [medicamento,tratamiento] = element.split('^^');
                            return (
                              <Text key={i}> 
                                {medicamento} ➡ {tratamiento} <br />
                              </Text>
                            );
                          })
                        }</Text>
                      </View>
                    </View>
                  </View>
                  <View >
                      {/* <Image  src={simbolo} /> */}
                      <View style={{borderTop:'1px solid #0d0d79'}}>
                      <Text style={[styles.text,{textAlign:'center'}]}>Dirección: Solanda y 7 de Mayo CI.09883703996 </Text>
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

export default RecetaMedica;