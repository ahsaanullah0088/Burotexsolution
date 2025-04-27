import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="bg-blue-700 text-white text-center py-16 h-120 items-center flex flex-col justify-center">
      <h1 className="text-7xl font-bold mb-3.5">Amplify your  <br/> recruiting reach, <br /> maximize rewards</h1>
      <p className="my-4 text-3xl">Burotek solution expands your recruitment capabilities exponentially with hefty commissions, <br /> exclusive job access, and a powerful community network.</p>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Join burotexsolution today!</button>
    </div>
    <div className="mt-8 items-center flex justify-center">
        <iframe 
          width="1200" 
          height="700" 
          className='mb-9'
          src="https://www.youtube.com/embed/7iZUU2dTH24" 
          title="YouTube Video" 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Hero
