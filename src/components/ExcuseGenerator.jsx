import React, { useEffect, useRef, useState } from 'react'

const ExcuseGenerator = () => {

    const excuse = useRef()

    const [who] = useState(['The dog', 'My grandma', 'The mailman', 'My bird']);
    const [action] = useState(['ate', 'peed', 'crushed', 'broke']);
    const [what] = useState(['my homework', 'my phone', 'the car']);
    const [when] = useState(['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying']);

    const genereExcuse = (who, action, what, when) => {
        return `${who[randomPosition(who)]} ${action[randomPosition(action)]} ${what[randomPosition(what)]} ${when[randomPosition(when)]}`
    }

    const randomPosition = (arr) => Math.floor(Math.random() * arr.length)


    useEffect(() => {
        let idInterval = setInterval(() => {
            let phrase = genereExcuse(who, action, what, when)
            excuse.current.innerHTML = phrase
        }, 3000)

        return () => clearInterval(idInterval)
    }, [])

    return (
        <p ref={excuse}></p>
    )
}

export default ExcuseGenerator