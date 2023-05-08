import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import PasoUno from './Pasos/PasoUno';
import PasoDos from './Pasos/PasoDos';
import PasoTres from './Pasos/PasoTres';
import Cuatro from './Pasos/Cuatro';
import Cinco from './Pasos/Cinco';
import { Form } from 'react-router-dom';
import { useAppConfig } from './../../../store/configAppStore';
import { PDFViewer } from '@react-pdf/renderer';
import RecetaMedica from './Pasos/RecetaMedica';
import { LoadingOne } from '../../../components/Loading';
import AlertaExito from '../../../components/AlertaExito';

const steps = ['REGISTRO DE ADMISIÓN', 'HISTORIA CLÍNICA', 'EXAMEN FÍSICO','PLAN DE TRATAMIENTO','FICHA'];
const App = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [state1,setState1] = useState(null);
    const [state2,setState2] = useState(null);
    const [state3,setState3] = useState(null);
    const [state4,setState4] = useState(null);
    const [state5,setState5] = useState(null);
    const [final,setFinal] = useState(null);
    const [data,setData] = useState(null);
    const [send, setSend] = useState(false);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData,setFormData] = useState(null);
    const [open,setOpen] = useState(false);
    const elementos = [<PasoUno state={state1} setState={setState1} />,
     <PasoDos state={state2} setState={setState2} />,
      <PasoTres state={state3} setState={setState3} />, 
      <Cuatro state={state4} setState={setState4} />, 
      <Cinco state1={state1}
      state2={state2}
      state3={state3}
      state4={state4}
      />];

    const appConfig = useAppConfig((state) => state.app);
    const isStepOptional = (step) => {
      return step >= 1 && step < steps.length - 1;
    };
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = (e) => {
      e.stopPropagation();
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
    const handleSumbit = (e) => {
      e.stopPropagation();
      e.preventDefault();

      const form = new FormData(e.target);
      [state1,state2,state3].forEach(state => {
        for(let index in state){
          form.append(index,state[index]);
        }
      })
      setFormData(form);
      setSend(true);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    
    useEffect(() => {
      if(send){
        setLoading(true);
        fetch(appConfig.hostServer + 'api/ficha-medica/save',{method:'POST',body: formData})
        .then(query => query.json())
        .then(setData)
        .catch(setError)
        .finally(() => {
          setSend(false);
          setLoading(false);
          setOpen(true);
        })
      }
    },[send])

    const handleClose = () => {
      setOpen(false);
      
    }
    console.log(data);
    return (
        <>
        {
          loading && (
            <LoadingOne
            ancho={'50%'}
            textInner='Guardando la información espere por favor...'
            />
          )
        }
        {
          (data && data.ident) && 
          (<>
            <AlertaExito
            open={open}
            message={ <span> {data.mensaje} <br /> A continuación se presentará la recete médica. </span> }
            handleClose={handleClose}
            />
          </>)
        }
        <article>
            <h2 className='text-center'>Registro de fichas clinicas</h2>
            <p className='p-2'>
            Para registrar una nueva ficha médica, es necesario completar todos los 6 pasos
            que se encuentran en la parte inferior. Al final, se presentará la ficha 008 con todos los datos previamente ingresados. <br />
            Es importante asegurarse de completar todos los pasos para garantizar la precisión de la información registrada en la ficha médica
            </p>
        </article>
      <Box sx={{ width: '100%' }}>
      <Form onSubmit={handleSumbit} className='p-3'>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = (
            //     <Typography variant="caption">Optional</Typography>
            //   );
            // }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel> <span style={{ fontSize: '0.65rem' }}>{label}</span> </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Todos los pasos estan completados.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button type='reset' onClick={handleReset}>Restablecer</Button>
            </Box>
          </>
        ) : (
          <>
          <Box sx={{ minHeight: '50vh' }} >
            {elementos[activeStep]}

          </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                className='text-primary'
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Anterior
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button className='text-danger' onClick={handleSkip} sx={{ mr: 1 }}>
                  Saltar
                </Button>
              )}
  
                {
                 (activeStep !== steps.length - 1) && (<Button onClick={handleNext}>Siguiente </Button>)
                }
                {
                 activeStep === steps.length - 1 && (<Button type='submit'> Finalizar </Button>)
                }
            </Box>
          </>
        )}
        </Form>
      </Box>
           
      </>

    );
}

export default App;