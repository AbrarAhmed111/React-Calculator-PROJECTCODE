import React, { useState, useEffect } from 'react';
import Html from '../icons/HTMLicon.png';
import Css from '../icons/CSSicon.png';
import Javascript from '../icons/JSicon.png';
import TextData from './TextData';
import Calculator from './Calculator';

function Main() {
  const [on, setOn] = useState('OFF');
  const [input, setInput] = useState('');
  const [blink, setblink] = useState(false)

  const switchToggle = () => {
    if (on === 'OFF') {
      setblink(false)
      setInput('CALCULATOR OFF');
      setOn('ON');
    } else {
      setInput('');
      setOn('OFF');
      setblink(true);
    }
  };

  const deleteDisplay = () => {
    if (on === 'OFF') {
      setInput('0');
      setblink(false)
    } else {
      return;
    }
  };

  const calculateResult = () => {
    if (on === 'OFF') {
      try {
        // Replace instances of numbers followed by an opening parenthesis with '*'
        const cleanedInput = input.replace(/(\d)\(/g, '$1*(');
        
        // eslint-disable-next-line
        const result = eval(cleanedInput);
        setInput(result.toString());
        setblink(false)
      } catch (error) {
        setInput('Syntax Error');
      }
    }
  };
  

  const inputData = (data) => {
    if (data === '=') {
      calculateResult();
      setblink(false)
    } else if (data === 'DEL') {
      setInput(input.slice(0, -1));
      setblink(false)
    } else if (input === '0' && !isNaN(data)) {
      setblink(false)
      setInput(data);
    } else if (input === 'OFF' || input === 'ON') {
      return;
    } else {
      // Insert a '*' before an opening parenthesis if the previous character is a number
      if (!isNaN(data) && input.slice(-1) === ')') {
        setInput(input + '*' + data);
        setblink(false)
      } else {
        setInput(input + data);
        setblink(false)
      }
    }
  };
  
 const keypad = [
    'OFF', '(', ')', '/',
    '9', '8', '7', '*',
    '6', '5', '4', '-',
    '3', '2', '1', '+',
    'DEL', '0', '.', '='
  ];

  const blinking = () => {
    let isVisible = true;
    const blinkTextElement = document.getElementById('blinkText');   
      setInterval(() => {
        blinkTextElement.style.visibility = isVisible ? 'hidden' : 'visible';
  
        isVisible = !isVisible;
      }, 300);
    
  };
  
  useEffect(() => {
    
    blinking(); // Start blinking when the component mounts
  }, []);

  return (
    
    <div className='flex flex-col items-center w-full px-3 xl:flex-row xl:justify-around xl:py-60 py-36 xl:px-20 md:px-2'>
      <TextData Html={Html} Javascript={Javascript} Css={Css} />
      {/* <Calculator keypad={keypad} input={input} deleteDisplay={deleteDisplay} switchToggle={switchToggle} inputData={inputData} blink={blink} on={on}  /> */}
      <div className='  w-[240px] md:w-[300px] lg:w-[330px] items-center flex flex-col bg-[#391C5A] py-7 px-2 rounded-lg shadow-lg shadow-black'>
    <div className=' w-[90%] h-[55px] px-2 mb-8 font-normal flex justify-end items-center text-black bg-[#ECEEFA] overflow-hidden rounded-sm text-lg '>
      <p>{input}<span className={`${blink ? 'block' : 'hidden'} text-4xl font-light`} id='blinkText'>I</span></p>
    </div>

    <div className='flex flex-wrap items-center justify-center gap-4'>
      {keypad.map((keys) => (
        <div
          onClick={
            keys === 'DEL'
              ? deleteDisplay
              : keys === 'OFF' || keys === 'ON'
              ? switchToggle
              : on === 'ON'
              ? null
              : () => inputData(keys)
          }
          className={`${keys === 'DEL' || keys === 'OFF' ? 'px-[5%] ' : 'px-[7%]'} ${keys === 'OFF' ? 'bg-[#CC6530] hover:bg-[#e9763c] active:bg-[#ffb28b]' : ''} ${keys === 'DEL' ? 'bg-[#CE3E5C] hover:bg-[#fc4166] active:bg-[#ff859d]' : ''} p-[4%] rounded-md hover:bg-[#6f47be] bg-[#4D377A] active:bg-[#a291c5] text-white font-bold cursor-pointer shadow-md shadow-white`}
          key={keys}
        >
          {keys === 'OFF' || keys === 'ON' ? on : keys}
        </div>
      ))}
    </div>
  </div>
    </div>
  );
}

export default Main;
