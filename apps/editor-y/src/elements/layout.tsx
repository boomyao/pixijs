import { Application } from 'pixi.js'
import { useEffect, useRef } from 'react'

export function Layout({ layout, options }) {
    const viewRef = useRef()
    useEffect(() => {
      const app = new Application({view: viewRef.current})
    }, [])

    return <canvas ref={viewRef} />
}