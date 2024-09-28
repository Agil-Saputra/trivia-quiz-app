import React from 'react'
import { SignIn } from '@clerk/nextjs'
const SignInPage = () => {
  return (
	<div className='grid place-items-center mt-30 '>
		<div className='text-left'>
		<h1 className='text-3xl font-bold'>Sign In</h1>
		<p className='mb-4'>Please Sign in to continue to Agil Quiz App and enjoy our Quizzes</p>
		<SignIn/>
		</div>
	</div>
  )
}

export default SignInPage