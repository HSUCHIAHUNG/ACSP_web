// router
import Routes from "./router"
// context
import { TitleProvider } from "./context/Header"

function App() {
  return (
    <TitleProvider>
      <Routes />
    </TitleProvider>
  )
}

export default App
