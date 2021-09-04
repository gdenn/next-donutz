

export const ActiveCircle = ({idx, x, y}) => (
    <svg width="127" height="128" viewBox={`0 0 235 120`} version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g transform="matrix(1,0,0,1,-125.601,-238.068)">
            <g id="active" transform="matrix(1,0,0,1,0.23461,197.716)">
                <g id="circle" transform="matrix(1.07699,0,0,1.04954,-21.5618,-4.0949)">
                    <ellipse cx="243.327" cy="119.245" rx="36.75" ry="36.586" style={{fill: "rgb(59,130,246)"}}/>
                </g>
                <g id="number-label" transform="matrix(3.39071,0,0,1.7158,-590.315,-73.6377)">
                    <text x="239px" y="119px" className="fill-current text-white text-lg font-sans" >{idx}</text>
                </g>
            </g>
        </g>
    </svg>
)