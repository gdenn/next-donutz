import { cloneElement } from "react"
import { TimeLineEntry } from "."


const NEXT_ELEMENT_X = 230
const CIRCLE_X_START = 80
const LINE_X1_START = 90
const LINE_X2_START = 300

const TimeLine = ({children}) => {

    let circleX = CIRCLE_X_START
    let lineX1 = LINE_X1_START
    let lineX2 = LINE_X2_START

    return (
        <div className="container flex justify-center">
            <div className="mx-auto block">
                <svg version="1.1" baseProfile="full" width="600" height="200" xmlns="http://www.w3.org/2000/svg">
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
                </svg>
            </div>
        </div>
    )
}

export default TimeLine