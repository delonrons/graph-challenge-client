import * as React from 'react';
import classNames from 'classnames';

const Button = ({buttonText, type, onClick, disabled, isLoading}) => {

  const buttonClasses = classNames('text-base font-thin hover:outline-none focus:outline-none w-full disabled:opacity-50', {
    'bg-primary-dark text-white py-4 rounded-full bg-gradient-to-t from-cta active:from-transparent active:to-cta hover:shadow-lg': type === 'primary'
  });

  return (
    <button type="button"
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled || isLoading}
    >
      {!isLoading && buttonText}
      {isLoading &&
      <svg version="1.1" id="L4" viewBox="0 -7 55 25" width="50" className="block mx-auto">
        <circle fill="#fff" stroke="none" cx="6" cy="6" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"/>
        </circle>
        <circle fill="#fff" stroke="none" cx="26" cy="6" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2"/>
        </circle>
        <circle fill="#fff" stroke="none" cx="46" cy="6" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.3"/>
        </circle>
      </svg>
      }
    </button>
  )
};

export default Button;