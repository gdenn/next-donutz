import { ActiveCircle } from "./ActiveCircle";


export const TimeLineEntry = ({title, active, inactive, done, linkTo, circleX, idx}) =>  (
    <g transform={`translate(${circleX - 73}, -26)`}>
        <ActiveCircle x={circleX} y={"0"} idx={idx}/>
        <text className="font-mono font-light text-gray-200 text-sm hover:underline cursor-pointer uppercase" textAnchor="middle" dy="-20">
            {title}
        </text>
    </g>
)

