export const calculations = (numbers, setNumbers) => {
        
    const { num1, num2 } = numbers;

    const handleChange = (e) => {
        setNumbers({
            ...numbers,
        [e.target.name]: parseFloat(e.target.value)
        });
    };

    const add = () => num1 + num2;
    const subtract = () => num1 - num2;
    const multiplicate = () => num1 * num2;
    const divide = () => num1 / num2;

    return{handleChange, add, subtract, multiplicate, divide, num1, num2}
}