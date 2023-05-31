import { PDFViewer } from '@react-pdf/renderer';
import Examen from './Examen';
import { TiArrowBack } from 'react-icons/ti';
const App = ({datos,setPdf,user}) => {
  const handleClick = () => {
    setPdf(false)
  }
    return (<div style={{
      position:'fixed',
      top:0,
      left:0,
      width: '100%',
      height: '100%',
      zIndex: 999
    }}>
      <div style={{ position:'fixed', top:'60px', left:0,width:'150px',padding: '15px',cursor:'pointer',
    backgroundColor: 'white', color: 'black', fontWeight: 'bolder',borderRadius: '0.5rem',
    display:'flex', alignItems:'center', gap: '0.5rem' }}
    onClick={handleClick}
    >
        <TiArrowBack className='text-primary' style={{fontSize: '1.8rem'}} /> Regresar
      </div>
      <PDFViewer
      showToolbar
      style={{ width:'100%',height:'100%' }}
      >
      <Examen datos={datos} user={user} />
    </PDFViewer>
    </div>);
}

export default App;