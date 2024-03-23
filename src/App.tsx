import { Provider } from "react-redux"
import Routers from "./components/Router/Router"
import { store } from "./store"

function App() {

  return (
    <Provider store={store}>
          <Routers/>
    </Provider>
  )

}

export default App
