import { useRef, useEffect } from 'react'
import { mount } from "vueRemoteOne/bootstrap";


export const VueRemoteOneWrap = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current, { title: 'Remote Bootstrap'})
    }, [])

    return <div ref={ref}/>
}

