import React from 'react'
import { Alert } from 'react-bootstrap'

function Meassage({variant, children}) {
  return (
    <Alert variant={variant}>
      {children}
    </Alert>
  )
}

export default Meassage
