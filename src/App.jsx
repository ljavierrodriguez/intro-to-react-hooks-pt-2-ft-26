import React, { useRef, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import Gallery from './components/Gallery'
import ExcuseGenerator from './components/ExcuseGenerator'
import Counter from './components/Counter'

const App = () => {

    const [name, setName] = useState('')
    const [show, setShow] = useState(false)
    const refPassword = useRef()

    const validarPassword = (pass) => {
        return pass.length >= 6
    }
    const mostrarValor = (show) => {
        if(show){
            refPassword.current.type = "text"
            setShow(true)
        } else {
            refPassword.current.type = "password"
            setShow(false)
        }
    }
    return (
        <>
        {/* <div>
        <input type="password" ref={refPassword}/>

        <button onClick={() => mostrarValor(!show)}>
            { show ? <FaEye /> : <FaEyeSlash />}
        </button>
        </div>
        <button onClick={() => {
            console.log(validarPassword(refPassword.current.value) ? "valido": "invalido")
            if(!validarPassword(refPassword.current.value)){
                refPassword.current.style.backgroundColor = '#ff000077';
            } else {
                refPassword.current.style.backgroundColor = '#ffffffff';
            }
        }}>
            Validar
        </button> */}

        <Counter />
        <Gallery />
        <ExcuseGenerator />
        </>
    )
}

export default App