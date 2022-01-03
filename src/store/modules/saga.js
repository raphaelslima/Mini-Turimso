import { call, put, all, takeLatest, select } from 'redux-saga/effects'
import { addReserveSucess, updateReserveQtdSuccess } from '../actions'

import api from '../../services/api'
import history from '../../services/history'

function* addToReserve({ id }) {
  const response = yield call(api.get, `trips/${id}`)

  const tripExist = yield select(state =>
    state.reserve.find(trip => trip.id === id)
  )

  const responseStock = yield call(api.get, `stock/${id}`)

  const stockAmount = responseStock.data.amount

  const currentStock = tripExist ? tripExist.amount : 0

  const amount = currentStock + 1

  if (amount > stockAmount) {
    alert('Não existe mais vagas')
    return
  }

  if (tripExist) {
    yield put(updateReserveQtdSuccess(id, amount))
  } else {
    const data = {
      ...response.data,
      amount: 1
    }
    yield put(addReserveSucess(data))
    history.push('/reservas')
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return

  const responseStock = yield call(api.get, `/stock/${id}`)

  const stockAmount = responseStock.data.amount

  if (amount > stockAmount) {
    alert('Vagas não disponíveis')
    return
  }

  yield put(updateReserveQtdSuccess(id, amount))
}

export default all([
  takeLatest('ADD_RESERVE_REQUEST', addToReserve),
  takeLatest('UPDATE_RESERVE_QTD_REQUEST', updateAmount)
])
