import React from 'react'
import logout from '../../assets/logout-02-stroke-rounded.svg'
const LogoutButton = () => {
  return (
    <div className='mt-auto'>
        <img src={logout} alt="" className='cursor-pointer'/>
    </div>
  )
}

export default LogoutButton
