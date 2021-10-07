import {useState} from 'react'
import PropTypes from 'prop-types'
import Result from './Result';
import { calculations } from '../helpers/calculations';

const NumberInput = () => {

    const [numbers, setNumbers] = useState({
        num1: 0,
        num2: 0
    });

    const {
        handleChange, 
        add, 
        subtract, 
        multiplicate, 
        divide, 
        num1, 
        num2
        } = calculations(numbers, setNumbers);

    return (
        <>
            <label className="m-2">
                Num 1 {""}
                <input 
                    name="num1" 
                    value={num1} 
                    onChange={handleChange} 
                    type="number"/>
            </label>
            <label className="m-2">
                Num 2 {""}
                <input 
                    name="num2" 
                    value={num2} 
                    onChange={handleChange} 
                    type="number"/>
            </label>
            <Result operation="Adittion" calculation={add()}/>
            <Result operation="Subtraction" calculation={subtract()}/>
            <Result operation="Multiplication" calculation={multiplicate()}/>
            <Result operation="Division" calculation={divide()}/>
        </>
    )
}

NumberInput.propTypes = {
 name: PropTypes.string
}

export default NumberInput
