import React, { useEffect, useRef, useState } from 'react'

const Gallery = () => {

    const [photos] = useState([
        "https://picsum.photos/id/120",
        "https://picsum.photos/id/220",
        "https://picsum.photos/id/320",
        "https://picsum.photos/id/420",
        "https://picsum.photos/id/520",
        "https://picsum.photos/id/620"
    ])

    const refViewer = useRef()

    const loadImageViewer = url => {
        refViewer.current.src = `${url}/500/400`
    }

    useEffect(() => {

        let idInterval = setInterval(() => {
            let pos = Math.floor(Math.random() * photos.length)
            refViewer.current.src = `${photos[pos]}/500/400`
        }, 2000)

        return () => clearInterval(idInterval)

    }, [])

    return (
        <div className="gallery">
            <div className="gallery-viewer">
                <img ref={refViewer} />
            </div>
            <div className="gallery-photos">
                {
                    photos.map((photo) => {
                        return <img src={`${photo}/120/100`} key={photo} onClick={() => loadImageViewer(photo)} />
                    }) 
                }
            </div>
        </div>
    )
}

export default Gallery