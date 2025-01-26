import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { Link } from "react-router-dom";
const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className='modal-overlay'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='modal-container'
            >
                <div className='upper-section'>
                    <h1>¡Contacto para oportunidades laborales!</h1>
                    <p onClick={closeModal} className='close'>
                        &times;
                    </p>
                </div>
                <div className='middle-section'>
                    <h3>
                    Estoy en búsqueda de mi primer empleo en el área de TI.
                    </h3>
                    <p>
                    Ofrezco soluciones y habilidades en los siguientes campos👇
                    </p>
                    <ul>
                        <li>
                        Desarrollo de aplicaciones web
                        </li>
                        <li>
                        Programación de software a medida
                        </li>
                        <li>
                        Prototipado de software
                        </li>
                    </ul>
                </div>
                <div className='lower-section'>
                    <a onClick={closeModal} className='modal-btn btn-close'>
                        Cerrar
                    </a>
                    <Link className="modal-btn btn-contact" to="/contact">
                       Contacto
                    </Link>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;