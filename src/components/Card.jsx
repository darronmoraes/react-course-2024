import React from 'react'


// Wrapping content in Card Component
// Use children 

// template literal => `something` (check className)
// add bg variable in the literal

const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        { children }
    </div>
  )
}

export default Card
