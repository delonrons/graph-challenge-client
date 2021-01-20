import React, {useState} from 'react';
import { motion } from 'framer-motion'

import { useLazyQuery } from '@apollo/react-hooks';

import Button from './components/Button'
import Image from './components/Image'
import Input from './components/Input'
import Modal from './components/Modal'
import { GET_PERSON_VAL } from './utilities/api';

function App() {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const [hasError, setError] = useState(false);
  const [value, setValue] = useState('');
  const [showModal, setShowModal] = useState(true);
  const [calculate, { called, loading, data, error }] = useLazyQuery(
    GET_PERSON_VAL
  );

  return (
    <article
      className="container mx-auto md:max-w-4xl sm:px-4 sm:py-8"
     >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 bg-primary-light "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 sm:pt-10 pb-3"/>

        <motion.div variants={item} className="col-start-1 row-start-2 px-4 py-4 sm:pb-16">
          <p className="flex items-center text-secondary font-light text-2xl font-serif italic">
            Simple web app using React and Apollo/Graphql
          </p>
          <p className="flex items-center text-secondary font-light pt-5 text-sm">
            This app uses tailwindcss and framer motion.
          </p>
        </motion.div>

        <motion.div variants={item} className="col-start-1 row-start-3 px-4 py-4 sm:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="col-start-1 row-start-1 sm:col-span-2">
              <Input placeholder="Identifier Eg: 9999999999"
                     type="text"
                     maxLength={10}
                     onChange={(value) => {setError(!value.match(/[0-9]{1,10}$/)); setValue(value);}}
              />
            </div>

            <div className="col-start-1 row-start-2 sm:col-span-2 h-3">
              { hasError && <p className="text-xs text-red-500">* Please enter a number between 0 and 9999999999</p>}
            </div>

            <div className="col-start-1 row-start-3 sm:row-start-1 sm:col-start-3">
              <Button
                buttonText="Calculate"
                type="primary"
                disabled={hasError || !value}
                onClick={() => { calculate({ variables: { id: value } });  setShowModal(true);} }
              />
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
          <div className="w-full grid grid-cols-1 grid-rows-1 gap-2">
            <div className="relative col-span-3 row-span-2 md:col-span-2">
              <Image src="/assets/images/showcase.jpg" type="full-width" altText="show case"/>
            </div>
          </div>
        </motion.div>
      </motion.div>

      { called && !loading && showModal &&
          <Modal
            type={error ? "error": "success"}
            title={error ? "Calculation failed": "Wohoo!!"}
            message={
              data && data.person
                ? `The calculated value is ${data.person.val3 * data.person.val5}`
                : error.graphQLErrors.reduce((r, { extensions: { code }, message }) => {
                  return code === 'BAD_USER_INPUT'
                    ? 'We could not identify this person!!'
                    : message;
                }, '')
            }
            handleClose={() => setShowModal(false)}
          />
      }

    </article>
  );
}

export default App;
