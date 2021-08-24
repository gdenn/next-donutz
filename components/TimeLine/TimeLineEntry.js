

export const TimeLineEntry = ({label, active, inactive, done, linkTo, circleX}) => (
    <g transform={`translate(${circleX},50)`}>
        <circle r="10" fillOpacity=".45" fill="white" stroke="black" strokeWidth=".8" strokeOpacity=".25"/>
        <text className="font-mono font-light text-gray-200 text-sm hover:underline cursor-pointer" textAnchor="middle" dy="-20" >
            {label}
        </text>
    </g>
)