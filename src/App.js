import React, { useState } from 'react';

function Calculator() {
  const [value, setValue] = useState(0);
  const [calculation, setCalculation] = useState('');

  const handleDigit = digit => {  
    setValue(value => value === 0 ? String(digit) : value + String(digit));
  };

  const handleOperator = operator => {
    switch (operator) {
      case '+':
        setCalculation(`${value} + `);
        setValue(0);
        break;
      case '-':
        setCalculation(`${value} - `);
        setValue(0);
        break;
      case '*':
        setCalculation(`${value} * `);
        setValue(0);
        break;
      case '/':
        setCalculation(`${value} / `);
        setValue(0);
        break;
      case '=':
        const result = eval(`${calculation} ${value}`);
        setValue(result);
        setCalculation('');
        break;
      default:
        break;
    }
  };

  return (
    <div className='calculator'>
      <div className='display'>{value}</div>
      <div>
        <button className='button' onClick={() => handleDigit(1)}>1</button>
        <button className='button' onClick={() => handleDigit(2)}>2</button>
        <button className='button' onClick={() => handleDigit(3)}>3</button>
        <button className='operator' onClick={() => handleOperator('+')}>+</button>
      </div>
      <div >
        <button className='button' onClick={() => handleDigit(4)}>4</button>
        <button className='button' onClick={() => handleDigit(5)}>5</button>
        <button className='button' onClick={() => handleDigit(6)}>6</button>
        <button className='operator' onClick={() => handleOperator('-')}>-</button>
      </div>
      <div >
        <button className='button' onClick={() => handleDigit(7)}>7</button>
        <button className='button' onClick={() => handleDigit(8)}>8</button>
        <button className='button' onClick={() => handleDigit(9)}>9</button>
        <button className='operator' onClick={() => handleOperator('*')}>*</button>
      </div>
      <div>
        <button className='button' onClick={() => handleDigit(0)}>0</button>
        <button className='operator' onClick={() => handleOperator('/')}>/</button>
        <button className='operator' onClick={() => handleOperator('=')}>=</button>
        <button className='operator' onClick={() => setValue(0)}>AC</button>
      </div>
    </div>
  );
}

export default Calculator;
