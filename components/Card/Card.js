import Image from 'next/image'
import React, { useState } from 'react';

const Card = ({image, title, price, id, onClick}) => {

    const [amount, setAmount] = useState(1)

    const incrementAmount = () => setAmount(amount + 1)

    const decrementAmount = () => setAmount(amount - 1)

    return (
        <article key={`card-${id}`} className="w-full h-auto rounded-lg shadow-lg flex flex-col">
            <span className="m-2 border-2 h-64 w-auto relative">
                <Image src={image} layout="fill" objectFit="cover" alt="" className="rounded-md "/>
            </span>
            <div className="flex flex-grow-0 flex-row h-8 justify-between place-items-center align-middle w-full p-4">
                <span className="font-mono font-normal text-xl text-gray-800">{title}</span>
                <span className="mr-4 font-mono font-light text-gray-600">{price}€</span>
            </div>
            <div className="flex flex-grow-0 flex-row h-18 justify-items-end align-middle w-full p-4">
                <div className="flex flex-row place-items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={decrementAmount}> - </button>
                    <input className="w-2/12 m-1 h-full text-center appearance-none rounded leading-tight focus:outline-none focus:shadow-outline" value={amount}/>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={incrementAmount}> + </button>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded" onClick={onClick}> Add </button>
            </div>
        </article>
    )
}

export default Card