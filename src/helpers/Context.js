/* eslint-disable react/prop-types */
import {useReducer, useContext} from 'react'
import {createContext} from "react"
import {globalReducer} from './Reducers'

export const GlobalStates = createContext()

const Context = ({children}) => {
  // const [breedList, setBreedList] = useState([])
  // const [breedDetails, setBreedDetails] = useState({
  //   breed: {},
  //   image: null,
  //   isLoading: true
  // })

  const [state, dispatch] = useReducer( globalReducer,{
    breedList: {
      status: null,
      isLoading: true,
      payload: {

      }
    },
    breedDetails: {
      status: null,
      isLoading: true,
      payload: {
        breed: {},
        image: null
      }
    },
    filter: {
      filterKeys: '',
      page: ''
    }


  })
  return (
    <GlobalStates.Provider value={{state, dispatch}}>
      {children}
    </GlobalStates.Provider>
  )
}

export default Context

export const GlobalState = () => {
  return useContext(GlobalStates)
}