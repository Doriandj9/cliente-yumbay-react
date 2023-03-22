import logo from './../assets/imgs/logo.jpg';
import {FaFacebookSquare} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
const Footer = () => {

    return (
        <>
<footer className="bg-complementario py-3 py-md-3 mt-5">
  <div className="container py-3 py-md-3 px-3 px-md-3">
    <div className="row">
      <div className="col-lg-3 mb-3">
        <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
          <img src={logo}
          style={{
                            width: 150,
                            height: 80,
                            marginRight: '1rem'
                        }}
           alt="" />
        </a>
        <ul className="list-unstyled small text-muted">
          <li className="mb-2 text-white">Diseñado y construido con esfuerzo y dedicación para mejorar la presencia en la web de la clinica Yumbay.</li>
          <li className="mb-2 text-white-50">Licencia del codigo MIT</li>
          <li className="mb-2 text-white-50">Version v0.0.1</li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 offset-lg-1 mb-3">
      </div>
      <div className="col-6 col-lg-2 mb-3">
      </div>
      <div className="col-6 col-lg-2 mb-3">
      </div>
      <div className="col-6 col-lg-2 mb-3">
        <h5 className='text-white'>Siguenos</h5>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a className='text-white-50' href="#">
            <FaFacebookSquare className='font-1'></FaFacebookSquare>
            Facebook
            </a>
            </li>
          <li className="mb-2"><a className='text-white-50' href="#">
            <AiFillInstagram className='font-1'></AiFillInstagram>
            Instagram</a></li>
          <li className="mb-2"><a className='text-white-50' href="#">
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