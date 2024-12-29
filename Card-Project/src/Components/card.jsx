import React from "react";


function Card({username, cta, details}){
    return(
    <>
        <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      
        <img class="w-full h-48 object-cover" src="https://via.placeholder.com/300x200" alt="Card image">
        </img>

        
        <div class="p-4">
            <h2 class="text-2xl font-semibold text-gray-800">{username}</h2>
            <p class="text-gray-600 mt-2">{details}</p>

           
            <a href="#" class="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">{cta}</a>
        </div>
        </div>
    </>

    )
}

export default Card