import React from 'react'
import DefaultHeader from '../app/DefaultHeader'
import SignUpLeftColumn from './components/SignUpLeftColumn'
import SignUpRightColumn from './components/SignUpRightColumn'

const SignUp = () => {
  return (
    <>
      <div className="hidden sm:block">
        <DefaultHeader />
      </div>
      <section className="sm:mt-10 sm:px-5 md:px-10">
        <div className="sm:flex w-full max-w-screen-xl mx-auto rounded-xl sm:shadow-pop-up">
          <div className="hidden w-5/12 sm:block">
            <SignUpLeftColumn />
          </div>
          <div className="w-full sm:w-7/12">
            <SignUpRightColumn />
          </div>
        </div>
      </section>
    </>
  )
}

export default  SignUp
