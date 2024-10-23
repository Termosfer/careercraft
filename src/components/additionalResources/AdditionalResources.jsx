import img1_1 from "../../assets/TestResultsOneImg/1.png";
const AdditionalResources = ({ addRes }) => {
    return (
        
            <div className="border d-flex p-4 soft-img-container">
                <img className="soft__img1" src={img1_1} alt="" />
                <div>
                    <h4>{addRes.description}</h4>
                    <ul>
                        <span>Books:</span>
                        {addRes.additionalResources.books.map((c,index) => (
                            <div key={index}>
                                {c.length > 0 &&
                                    (<li className="text-secondary-emphasis fw-normal">  {c}</li>)}
                            </div>
                        ))}
                    </ul>
                    <ul>
                        <span>Tools:</span>
                        {addRes.additionalResources.tools.map((c,index) => (
                            <div key={index}>
                            {
                                c.length > 0 && 
                            
                                (<li className="text-secondary-emphasis fw-normal" >  {c}</li>) }
                            </div>
                        ))}
                    </ul>
                    <ul>
                        <span>Journal Articles:</span>
                        {addRes.additionalResources.academicPapers.map((c,index) => (
                            <div key={index}>{
                                c.length > 0 &&
                                (<li className="text-secondary-emphasis fw-normal" >  {c}</li>)}
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        
    )
}

export default AdditionalResources