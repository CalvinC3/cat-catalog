import {createContext} from "react"

export const GlobalState = createContext()

const Context = ({children}) => {
  const [breedList, setBreedList] = useState([])
  const [breedDetails, setBreedDetails] = useState({
    breed: {},
    image: null,
    isLoading: true
  })
  return (
    <GlobalState.Provider>
      {children}
    </GlobalState.Provider>
  )
}

export default Context
