

const Entry = ({}) => (
    <g transform={`translate(${circleX},50)`}>
        <circle r="10" fillOpacity=".45" fill="white" stroke="black" strokeWidth=".8" strokeOpacity=".25"/>
        <text textAnchor="middle" dy="-20" className="font-mono font-light text-gray-200 text-sm hover:underline cursor-pointer ">
            {label}
        </text>
    </g>
)

const TimeLine = ({steps}) => {

    let circleX = 80
    let lineX1 = 90
    let lineX2 = 300
    let labelX = 30

    return (
        <div className="h-auto w-2/3">
            <svg version="1.1" baseProfile="full" width="600" height="200" xmlns="http://www.w3.org/2000/svg">
                {steps && steps.map(({label, active, linkTo}, idx) => {

                    const comp = (
                        <>
                            <g transform={`translate(${circleX},50)`}>
                                <circle r="10" fillOpacity=".45" fill="white" stroke="black" strokeWidth=".8" strokeOpacity=".25"/>
                                <text textAnchor="middle" dy="-20" className="font-mono font-light text-gray-200 text-sm hover:underline cursor-pointer ">
                                    {label}
                                </text>
                            </g>
                            
                            {idx < steps.length -1 && <line x1={lineX1} x2={lineX2} y1="50" y2="50" strokeWidth="4" strokeOpacity=".15" stroke="black"/>}
                        </>
                    )

                    circleX += 230
                    lineX1 += 230
                    lineX2 += 230
                    labelX += 230

                    return comp
                })}
            </svg>
        </div>
    )
}

export default TimeLine