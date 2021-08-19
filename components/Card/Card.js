import Image from 'next/image'

const Card = ({image, title, price, id}) => {

    const onAddButtonClick = () => {
        console.log("added item with id ", id, " to cart")
    }

    return (
        <article key={`card-${id}`} className="w-full h-auto rounded-lg shadow-lg flex flex-col">
            <span className="m-2 border-2 border-indigo-600 h-64 w-auto relative">
            <Image src={image} layout="fill" objectFit="cover" alt="" className="rounded-md "/>
            </span>
            <div className="flex flex-grow-0 flex-row h-8 justify-between center align-middle w-full p-4 bg-gray-100">
            <span className="font-mono font-normal text-gray-800">{title}</span>
            <span className="mr-8 font-mono font-light text-gray-600">{price}</span>
            </div>
            <div className="flex flex-grow-0 flex-row h-18 justify-items-end align-middle w-full p-4 bg-gray-100">
            <div className="flex flex-row">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> - </button>
                <input className="w-4/12 m-0"></input>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> + </button>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"> Buy </button>
            </div>
        </article>
    )
}

export default Card