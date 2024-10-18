import { useEffect, useState } from "react";
import "./semicirclechart.css"
const SemiCircleChart = ({ min, max, value }) => {
    const [percent, setPercent] = useState(0); 

    useEffect(() => {
        const targetValue = (value / max) * 100; 
        setPercent(targetValue);
    }, [value, max]); 
    const angle = (value / max) * 180;
    const style = { '--angle': `${angle}deg` };

    return (
        <>
            <div className="sc-gauge">
            <div className="sc-background">
                <div className="sc-percentage" style={style}></div>
                <div className="sc-mask"></div>
                <span className="sc-value">{value}%</span>
                </div>
                </div>
           
        </>
    )
}

export default SemiCircleChart