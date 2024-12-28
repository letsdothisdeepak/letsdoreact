import react from 'react';

function Card({username,img1, btnText='Profile'}) {
    
    
    return(
        <>
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          className="object-cover object-center w-full rounded-xl h-72 bg-gray-500"
          src={img1}
          alt="Images"
          
        />
        
        <div className="mt-6 mb-4">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button className='bg-yellow-400 text-black text-xl'>{btnText}--</button>
      </div>
      </>
    )
    
}
export default Card

