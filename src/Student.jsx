
//-----------------------------------------------------------------------------------------------

// props = read-only properties that are shared between components.
//          A parent component can send data a child components.
//          <Components key=value />
/*
import PropTypes from 'prop-types'

function Student (props){

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )

}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default Student
*/

//defaultProps = default values for props in case they are not 
//               passed from the parent component
//               name: "Guest"
/*
import PropTypes from 'prop-types'

function Student (props){

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )

}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student
*/


