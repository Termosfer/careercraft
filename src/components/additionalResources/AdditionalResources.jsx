import img1_1 from "../../assets/TestResultsOneImg/1.png";
import "./additionalresources.css"
const AdditionalResources = ({ addRes }) => {
    return (

        <div className="border d-flex p-4 mb-4 soft-img-container">
            <img className="soft__img1" src={img1_1} alt="img1_1" />
            <div>
                <h4 className="text-primary">{addRes.description}</h4>
                <span className="text-primary">Books:</span>
                {addRes.additionalResources.books.map((c, index) => (
                    <ul key={index}>
                        {c.length > 0 &&
                            (<li>{c}</li>)}
                    </ul>
                ))}
                    <span className="text-primary">Tools:</span>
                    {addRes.additionalResources.tools.map((c, index) => (
                        <ul key={index}>
                            {
                                c.length > 0 &&
                                (<li>{c}</li>)}
                        </ul>
                    ))}
                    <span className="text-primary">Journal Articles:</span>
                    {addRes.additionalResources.academicPapers.map((c, index) => (
                        <ul key={index}>{
                            c.length > 0 &&
                            (<li>{c}</li>)}
                        </ul>
                    ))}
            </div>
        </div>

    )
}

export default AdditionalResources