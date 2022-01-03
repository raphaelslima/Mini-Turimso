import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'

import { removeTrip, updateReserveQtdRequest } from '../../store/actions'
import './style.css'

function Reservas() {
  const reserves = useSelector(state => state.reserve)
  const dispatch = useDispatch()

  function handleRemove(id) {
    dispatch(removeTrip(id))
  }

  function handleIncrementAmount(id, amount) {
    dispatch(updateReserveQtdRequest(id, amount + 1))
  }

  function handleDecrementAmount(id, amount) {
    dispatch(updateReserveQtdRequest(id, amount - 1))
  }

  return (
    <div>
      <h1>Você solicitou {reserves.length} reserva(s)</h1>
      {reserves.map(reserve => (
        <div className="reservas" key={reserve.id}>
          <img src={reserve.image} alt={reserve.title} />

          <strong>{reserve.title}</strong>

          <div className="btn-qtd">
            <a
              onClick={() => handleIncrementAmount(reserve.id, reserve.amount)}
            >
              <MdAddCircle size={25} color="#191919" />
            </a>
            <input readOnly value={reserve.amount} />
            <a
              onClick={() => handleDecrementAmount(reserve.id, reserve.amount)}
            >
              <MdRemoveCircle size={25} color="#191919" />
            </a>
          </div>
          <a onClick={() => handleRemove(reserve.id)}>
            <MdDelete size={20} color="red" />
          </a>
        </div>
      ))}

      <footer>
        <a>Solicitar Reserva</a>
      </footer>
    </div>
  )
}

export default Reservas
