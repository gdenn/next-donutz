import Image from 'next/image'
import React from 'react';
import Button from '../Button/Button';
import useCard from './useCard';

const Card = ({image, title, price, id, onValueChanged}) => {

    const {amount, incrementAmount, decrementAmount, onClick, onInputFieldValueChanged} = useCard(onValueChanged)

    return (
        <article key={`card-${id}`} className="w-full h-auto rounded-lg shadow-lg flex flex-col">
            <span className="m-2 border-2 h-64 w-auto relative">
                <Image src={image} layout="fill" objectFit="cover" alt="" className="rounded-md"/>
            </span>
            <div className="flex flex-grow-0 flex-row h-8 justify-between place-items-center align-middle w-full p-4">
                <span className="font-mono font-normal text-xl text-gray-800">{title}</span>
                <span className="mr-4 font-mono font-light text-gray-600">{price}€</span>
            </div>
            <div className="flex flex-grow-0 flex-row h-18 justify-items-end align-middle w-full p-4">
                <div className="flex flex-row place-items-center">
                    <Button primary onClick={decrementAmount}>-</Button>
                    <input className="w-2/12 m-1 h-full text-center appearance-none rounded leading-tight focus:outline-none focus:shadow-outline" value={amount} onChange={onInputFieldValueChanged}/>
                    <Button primary onClick={incrementAmount}>+</Button>
                </div>
                <Button primary onClick={onClick}>Add</Button>
            </div>
        </article>
    )
}

export default Card