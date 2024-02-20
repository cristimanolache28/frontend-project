import {PropTypes} from 'prop-types'
import {useState} from 'react'

export default function CounterButton({by, incrementMethod, decrementMethod}) {

    //[0,f]
    const [count, setCount] = useState(0);


    // function incrementCounterFunction() {
    //     incrementMethod(by)
    // }

    // function decrementCounterFunction() {
    //     decrementMethod(by)
    // }
    
    return (
        <div className="Counter">
            <div>
                <button className="counterButton" 
                    onClick={() => incrementMethod(by)}
                >+{by}</button>
                 <button className="counterButton" 
                    onClick={() => decrementMethod(by)}
                >-{by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}