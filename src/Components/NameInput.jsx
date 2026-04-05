import {useState} from 'react'

function NameIn(){
    const[ name, setName ] = useState('')

    return(
        <div>
            <input type="text" placeholder='Enter Your Name' onChange = {(e)=> setName(e.target.value)} />
            <h2>Hello  { name } </h2>
        </div>
    )
}
export default NameIn