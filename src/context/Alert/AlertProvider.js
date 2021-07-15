import React, { useReducer } from 'react'
import { AlertContext } from './AlertContext'
import { AlertReducer } from './AlertReducer'
import { HIDE_ALERT, SHOW_ALERT } from '../types'

export const AlertProvider = ({children}) => {
  const [state, dispatch] = useReducer(AlertReducer, null)

  const hide = () => dispatch({type: HIDE_ALERT})
  const show = (text, type = 'success') => dispatch({type: SHOW_ALERT, payload: {text, type}})

  return (
    <AlertContext.Provider value={{
      hide,
      show,
      alert: state
    }}>
      {children}
    </AlertContext.Provider>
  )
}