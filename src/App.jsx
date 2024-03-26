import React from 'react'
import Birthday from './Birthday'
import Accordian from './accordians/Accordian'
import './globals.css'
import UseEffectBasics from './useEffect/UseEffectBasics'
import ScreenSize from './useEffect/screensize/ScreenSize'
import Users from './useEffect/apis/Users'
import 'react-loading-skeleton/dist/skeleton.css'
import Form from './forms/Form'
import Lorem from './forms/loremGenerator/Lorem'
import Todo from './complexTodo/Todo'
import ObjectState from './objectState/ObjectState'
const App = () => {
  return (
    <>
      {/* <Birthday /> */}
      {/* <Accordian /> */}
      {/* <UseEffectBasics /> */}
      {/* <ScreenSize /> */}
      {/* <Users /> */}
      {/* <Form /> */}
      {/* <Lorem /> */}
      {/* <Todo /> */}
      {/* <ObjectState /> */}
      <Todo />
    </>
  )
}

export default App