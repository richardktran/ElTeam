import React, { useEffect, useState } from 'react'

function Calendar() {

  return (
    <div className="card card-bordered">
      <div className="card-inner">
        <div id='calendar' className='nk-calendar' />
      </div>
    </div>
  )
}

export default Calendar