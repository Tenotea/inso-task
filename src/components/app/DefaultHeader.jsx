import React from 'react'
import siteLogo from '../../assets/logo-full.png'

const DefaultHeader = () => {
  return (
    <header>
      <div className="max-w-screen-2xl px-5 md:px-8 mx-auto flex items-center justify-between py-5">
        <img src={siteLogo} alt="" className="h-12" />
        <div className="flex items-center justify-end gap-5">
          <button className="border rounded-full px-8 py-2 border-app-primary-blue text-app-primary-blue hover:bg-app-primary-blue hover:text-white transition-colors">
            Sign up
          </button>
          <button className="border rounded-full px-8 py-2 border-app-primary-blue text-app-primary-blue hover:bg-app-primary-blue hover:text-white transition-colors">
            Log in
          </button>
        </div>
      </div>
    </header>
  )
}

export default DefaultHeader
