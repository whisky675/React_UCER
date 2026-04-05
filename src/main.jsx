import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Welcome from './Components/Welcome.jsx'
// import Student from './Components/Student.jsx'
// import Counter from './Components/Counter.jsx'
// import NameIn from './Components/NameInput.jsx'
import CounterApp from './Components/CounterApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Welcome name="Vishesh Sharma" /> */}
    
    {/* <Counter /> */}
    {/* <NameIn/> */}
    <CounterApp/>

    {/* <Student name="Vishesh Sharma" course="React" roll="29" /> */}
  </StrictMode>,
)