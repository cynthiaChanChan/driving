import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'

type WithPortal = {
    children: React.ReactChild,
    selector: string
}

//Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
//A typical use case for portals is when a parent component has an overflow: hidden or z-index style, but you need the child to visually “break out” of its container.
// For example, modal, popup.
const WithPortal = ({ children, selector }: WithPortal) => {
    const ref = useRef<HTMLElement | null>(null)
    const [mounted, setMouted] = useState(false)

    useEffect(
        () => {
            ref.current = document.querySelector(selector)
            setMouted(true)
        },[selector]
    )

    return mounted && ref.current ? createPortal(children, ref.current) : null
}

export default WithPortal