/**
 * Created by Capricorncd.
 * https://github.com/xing1984
 * https://github.com/capricorncd
 * Date: 2020-09-20 23:56
 */
import React, { useEffect, useRef } from 'react'
import { destroy, init } from './core'

function DrawLines() {
  const elRef = useRef()
  useEffect(() => {
    init(elRef.current)
    return () => {
      destroy()
    }
  })
  return <main className="font-size-zero" ref={elRef}/>
}

export default DrawLines
