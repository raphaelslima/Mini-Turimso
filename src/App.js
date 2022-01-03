import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

//Rotas
import Routes from './routes'

//Componetes
import Header from './Components/Header'

import history from './services/history'

//store
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  )
}

export default App
