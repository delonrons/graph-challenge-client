import * as React from 'react';
import classNames from 'classnames';

const Button = ({buttonText, type, onClick, disabled}) => {

  const buttonClasses = classNames('text-base font-thin hover:outline-none focus:outline-none w-full disabled:opacity-50', {
    'bg-primary-dark text-white py-4 rounded-full bg-gradient-to-t from-cta active:from-transparent active:to-cta hover:shadow-lg': type === 'primary'
  });

  return (
    <button type="button"
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
    >
      {buttonText}
    </button>
  )
};

export default Button;