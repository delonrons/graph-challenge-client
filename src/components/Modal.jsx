import * as React from 'react';
import { motion, AnimatePresence} from 'framer-motion';

const Modal = ({type, message, title, handleClose}) => {
  return (
    <div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full p-5">
      <div className="absolute w-full h-full bg-secondary opacity-50" onClick={handleClose}/>
      <AnimatePresence>
        <motion.div
          className="bg-white sm:w-1/2 z-10 rounded-sm"
          animate={{
            scale: [0, 1],
            duration: .1,
          }}
        >
          <div className="flex flex-col items-start p-4">
            <div className="flex items-center w-full">
              <div className="text-secondary text-2xl mr-3">{title}</div>
              <a onClick={handleClose} className="ml-auto">
                <svg className="fill-current text-secondary w-6 h-6 cursor-pointer "
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                  <path
                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                </svg>
              </a>
            </div>
            <hr />
            <div className="pt-5 text-secondary text-sm">
              {message}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

  )
};

export default Modal;

