import React from 'react'

const SignUpLeftColumn = () => {
  return (
    <div className="flex flex-col items-start justify-start bg-app-primary-green text-white py-12 px-8 md:px-12 w-full h-full rounded-tl-xl rounded-tr-xl sm:rounded-tr-none rounded-br-xl sm:rounded-br-none rounded-bl-xl">
      <h4 className="text-xl hidden sm:block">
        Sign up
      </h4>

      <h1 className="font-medium text-4xl leading-normal sm:text-5xl sm:leading-relaxed md:text-6xl md:leading-relaxed sm:mt-28 mb-10 sm:mb-14 max-w-xs sm:max-w-sm">
        Just a few more details
      </h1>

      <p className="text-lg">
        You are almost there
      </p>
    </div>
  )
}

export default SignUpLeftColumn
