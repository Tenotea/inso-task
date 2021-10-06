import React, { useState } from 'react'
import TextField from '../../app/TextField'
import backIcon from '../../../assets/icons/sign-up/arrow_back.svg'
import forwardIcon from '../../../assets/icons/sign-up/arrow_forward-white.svg'
import forwardIconGray from '../../../assets/icons/sign-up/arrow_forward-gray.svg'
import closeIcon from '../../../assets/icons/sign-up/close.svg'
import SignUpLeftColumn from './SignUpLeftColumn'

const SignUpRightColumn = () => {
  const [buttonIcon, setButtonIcon] = useState(forwardIconGray)
  return (
    <div className="w-full px-5 sm:px-8 md:px-14 py-8 sm:py-12 rounded-tr-xl rounded-br-xl max-w-2xl sm:max-w-none mx-auto">
      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center justify-start max-w-max gap-3 opacity-70 cursor-pointer hover:opacity-100 transition-opacity">
          <img src={backIcon} alt="" className="h-7" />
          <p className="text-app-primary-green sm:block hidden"> Back </p>
        </div>
        <p className="sm:hidden text-gray-500 font-medium text-lg">
          Sign up
        </p>
        <img src={closeIcon} alt="" className="opacity-70 cursor-pointer hover:opacity-100 transition-opacity" />
      </div>

      <div className="mb-10 sm:hidden">
        <SignUpLeftColumn />
      </div>

      <div className="grid gap-8">
        <TextField 
          label="Email Address"
          required
          type="email"
          placeholder="Enter your email"
          />
        <TextField 
          label="Alternative Email"
          type="email"
          placeholder="Enter email"
          />
        <TextField 
          label="Create Password"
          required
          type="password"
          placeholder="Your password"
          />
        <TextField 
          label="Repeat Password"
          required
          type="password"
          placeholder="Confirm password"
        />

        <button className="rounded-full text-gray-400 hover:text-white bg-gray-200 hover:bg-app-primary-blue py-4 md:py-5 w-full flex items-center justify-center gap-5 transition-colors" onMouseOver={() => setButtonIcon(forwardIcon)} onMouseOut={() => setButtonIcon(forwardIconGray)}>
          Continue
          <img src={buttonIcon} alt="" className="cursor-pointer hover:opacity-100 transition-opacity h-6" />
        </button>
      </div>
    </div>
  )
}

export default SignUpRightColumn
