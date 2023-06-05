import { useRef, useEffect } from 'react'
import { mount } from "vueRemoteTwo/bootstrap";


export const VueRemoteTwoWrap = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current, { title: 'Remote Bootstrap'})
    }, [])

    return <div ref={ref}/>
}

