import logo from './../assets/imgs/logo.jpg';
import {FaFacebookSquare} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {FaClinicMedical} from 'react-icons/fa';
import {BsTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {HiLocationMarker} from 'react-icons/hi';
const Footer = ({className=''}) => {

    return (
        <>
<footer className={"bg-t__footer py-3 py-md-3 " + className}>
  <div className="container py-3 py-md-3 px-3 px-md-3">
    <div className="row">
      <div className="col-sm-12 col-lg-2 mb-3">
        <ul className="list-unstyled small text-muted">
          <li className="mb-2 text-dark-50">Diseñado y construido con esfuerzo y dedicación para mejorar la presencia en la web de la clinica Yumbay.</li>
          <li className="mb-2 text-dark-50">Licencia del codigo MIT</li>
          <li className="mb-2 text-dark-50">Version v0.0.1</li>
        </ul>
      </div>
      <div className="col-sm-2 col-6 col-lg-2 offset-lg-1 mb-3">
      </div>
      <div className="col-sm-6 col-8 col-lg-4 mb-3">
      <h5 className='text-primary'>
        Contactenos
        </h5>
        <ul className='list-group bg-t__footer'>
                            <li className='d-flex list-group-item align-items-center gap-2 bg-t__footer border-0'>
                                <div className='contact-icon'>
                                <FaClinicMedical className='font-1 text-white'></FaClinicMedical>
                                </div>
                                Fundación Arturo Yumbay
                            </li>
                            <li className='d-flex list-group-item align-items-center gap-2 bg-t__footer border-0'>
                                <div className='contact-icon'>
                                <BsTelephoneFill className='font-1 text-white'></BsTelephoneFill>
                                </div>
                                0968401786
                            </li>
                            <li className='d-flex list-group-item align-items-center gap-2 bg-t__footer border-0'>
                                <div className='contact-icon'>
                                <MdEmail className='font-1 text-white'></MdEmail>
                                </div>
                                rinayumbaytaris@gmail.com
                            </li>
                            <li className='d-flex list-group-item align-items-center gap-2 bg-t__footer border-0'>
                                <div className='contact-icon'>
                                <HiLocationMarker className='font-1 text-white'></HiLocationMarker>
                                </div>
                                Guaranda, Solanda y 7 de Mayo
                            </li>
                        </ul>
      </div>
      <div className=" col-sm-4  col-6 col-lg-2 mb-3">
        <h5 className='text-primary'>
          Siguenos</h5>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a className='text-secondary' target='__black' href="https://www.facebook.com/FundacionArturoYumbay">
            <FaFacebookSquare className='font-1'></FaFacebookSquare>
            Facebook
            </a>
            </li>
          <li className="mb-2"><a className='text-secondary' href="#">
            <AiFillInstagram className='font-1'></AiFillInstagram>
            Instagram</a></li>
          <li className="mb-2"><a className='text-secondary' href="#">
            <BsTwitter className='font-1'></BsTwitter>
            Twitter</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
        </>
    );
}

export default Footer;