import produce from 'immer'

export default function reserve(state = [], action) {
  switch (action.type) {
    case 'ADD_RESERVE_SUCESS':
      return produce(state, draft => {
        draft.push(action.trip)
      })

    case 'REMOVE_RESERVE':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(tripId => tripId.id === action.id)

        if (tripIndex >= 0) {
          draft.splice(tripIndex, 1)
        }
      })

    case 'UPDATE_RESERVE_QTD_SUCESS':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(tripId => tripId.id === action.id)

        const updateAmount = action.amount

        draft[tripIndex].amount = updateAmount
      })

    default:
      return state
  }
}
