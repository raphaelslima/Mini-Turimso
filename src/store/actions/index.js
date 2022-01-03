export function removeTrip(id) {
  return {
    type: 'REMOVE_RESERVE',
    id
  }
}

export function addReserveRequest(id) {
  return {
    type: 'ADD_RESERVE_REQUEST',
    id
  }
}

export function addReserveSucess(trip) {
  return {
    type: 'ADD_RESERVE_SUCESS',
    trip
  }
}

export function updateReserveQtdRequest(id, amount) {
  return {
    type: 'UPDATE_RESERVE_QTD_REQUEST',
    id,
    amount
  }
}

export function updateReserveQtdSuccess(id, amount) {
  return {
    type: 'UPDATE_RESERVE_QTD_SUCESS',
    id,
    amount
  }
}
