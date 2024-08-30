import React, { useRef, useState } from 'react'

const Counter = () => {

    const count = useRef(0)

    const [, forzarUpdate] = useState({})

    const increment = () => {
        count.current += 1
        forzarUpdate({})
    }

    return (
        <>
            <div>Counter: {count.current}</div>
            <button onClick={increment}>
                Incrementar
            </button>

            <button onClick={() => console.log(count.current)}>
                Imprimir Valor actual
            </button>
        </>
    )
}

export default Counter