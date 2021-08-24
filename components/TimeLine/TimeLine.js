import { cloneElement } from "react"

const NEXT_ELEMENT_X = 230
const CIRCLE_X_START = 80
const LINE_X1_START = 90
const LINE_X2_START = 300

const TimeLine = ({children}) => {

    let circleX = CIRCLE_X_START
    let lineX1 = LINE_X1_START
    let lineX2 = LINE_X2_START

    return (
        <div className="container">
            <div className="w-full flex justify-center">
                <svg version="1.1" baseProfile="full" width="100%" height="80" xmlns="http://www.w3.org/2000/svg">
                    <g transform={`translate(0, 10)`}>
                        {children && children.map((timeLineEntry, idx) => {

                        const nextRender = <>
                            {cloneElement(timeLineEntry, {circleX: circleX})}
                            {idx < children.length -1 && <line x1={lineX1} x2={lineX2} y1="50" y2="50" strokeWidth="4" strokeOpacity=".15" stroke="black"/>}
                        </>

                        circleX += NEXT_ELEMENT_X
                        lineX1 += NEXT_ELEMENT_X
                        lineX2 += NEXT_ELEMENT_X

                        return nextRender
                        })}
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default TimeLine