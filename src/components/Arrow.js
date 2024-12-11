import React from 'react'

const Arrow = ({ direction = 'right' }) => {
  const arrowStyles = {
    right: 'M1 10L11 20L21 10',
    down: 'M10 1L20 11L10 21',
  }

  return (
    <div className={`flex justify-center my-4 ${direction === 'down' ? 'rotate-90' : ''}`}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={arrowStyles[direction]} stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default Arrow

