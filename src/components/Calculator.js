import React from 'react'

function Calculator(props) {
  const {keypad, on, inputData, deleteDisplay, input, switchToggle} = props;
  return (
    <div className='  w-[90%] md:w-[43%] lg:w-[25%] items-center flex flex-col bg-[#391C5A] py-7 px-2 rounded-lg shadow-lg shadow-black'>
    <div className=' w-[90%] h-[55px] px-2 mb-8 font-normal flex justify-end items-center text-black bg-[#ECEEFA] overflow-hidden rounded-sm text-lg '>
      <p>{input}</p>
    </div>

    <div className='flex gap-4 justify-center items-center flex-wrap'>
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
  )
}

export default Calculator