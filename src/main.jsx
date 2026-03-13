import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Welcome from './Components/Welcome.jsx'
import Student from './Components/Student.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Welcome name="Vishesh Sharma"/> */}
    
    <Student name="Vishesh Sharma" course="React" roll='29'/>
  </StrictMode>,
)
