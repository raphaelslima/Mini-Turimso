import { all } from 'redux-saga/effects'

import reserve from './saga'

export default function* rootSaga() {
  return yield all([reserve])
}
