import React from 'react'

export default function OAuth() {
    const handleGoogleCLcik = async() => {
        try{

        }catch(err){
            console.log(`Could not sign in with Google + ${err.message}`);
        }
    }
  return (
    <button onClick={handleGoogleCLcik} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'> Continue with GOOGLE </button>
  )
}
