import React from 'react'

function CustomButton({ buttonStyle, type, text, onClick }) {
    const roundedButtonClassNames =
  "bg-primary-200 hover:bg-primary-100 text-primary-300 hover:text-primary-200  active:bg-primary-200 active:text-primary-300 font-bold py-2 px-4 rounded-full"

const outlineButtonClassNames =
  "bg-transparent hover:bg-primary-100 text-primary-200 font-semibold hover:text-primary-200 py-2 px-4 border border-transparent hover:border-transparent active:bg-primary-200 active:text-primary-300 rounded"

const disabledButtonClassNames =
  "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
  return (
    <div className="p-1">
    <button
      className={
        buttonStyle === "primary"
        ? roundedButtonClassNames
        : buttonStyle === "secondary"
        ? outlineButtonClassNames
        : buttonStyle === "tertiary"
        ? disabledButtonClassNames
        : null
      }
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  </div>
  )
}

export default CustomButton