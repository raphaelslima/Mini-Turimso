import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {
  const reserveSize = useSelector(state => state.reserve.length)

  return (
    <header className="container">
      <Link to={'/'}>
        <img alt={logo} src={logo} className="logo" />
      </Link>

      <Link to={'/reservas'}>
        <div className="reserva">
          <strong>Minhas Reservas</strong>
          <span>{reserveSize} Reservas</span>
        </div>
      </Link>
    </header>
  )
}

export default Header
