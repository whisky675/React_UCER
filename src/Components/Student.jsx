function Student({name, course, roll}){

    return(
        <div>
            <h1>
                Student Details
            </h1>
            <p>
                Student Name: {name} <br /><br />
                Course: {course}<br />
                Roll: {roll}
            </p>
        </div>
    )
}
export default Student