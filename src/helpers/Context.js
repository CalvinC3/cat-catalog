import {createContext} from "react"

export const GlobalState = createContext()

const Context = ({children}) => {
  const [breeds, setBreeds] = useState([])
  return (
    <GlobalState.Provider>
      {children}
    </GlobalState.Provider>
  )
}

export default Context
