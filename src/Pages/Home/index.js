import React from 'react'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { MdFlightTakeoff } from 'react-icons/md'

import api from '../../services/api'
import { addReserveRequest } from '../../store/actions'

import './style.css'

function Home() {
  const dispatch = useDispatch()

  const [trips, setTrips] = useState([])

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('trips')
      setTrips(response.data)
    }

    loadApi()
  }, [])

  function handleAdd(id) {
    dispatch(addReserveRequest(id))
  }

  return (
    <div className="box">
      {trips.map(trip => (
        <ul>
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />

            <strong>{trip.title}</strong>
            {trip.status ? (
              <span className="disponível">Disponível</span>
            ) : (
              <span className="indisponível">Indisponível</span>
            )}

            <a onClick={() => handleAdd(trip.id)}>
              <MdFlightTakeoff
                size={16}
                color="white"
                padding={8}
                border-radius={8}
              />
              <span>SOLICITAR RESERVA</span>
            </a>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default Home
