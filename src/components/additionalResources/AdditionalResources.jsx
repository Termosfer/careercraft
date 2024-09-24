import React from 'react'
import img1_1 from "../../assets/TestResultsOneImg/1.png";
const AdditionalResources = ({ addRes }) => {
    console.log(addRes, "addRes")
    return (
        <>
            <div className="border d-flex p-4 soft-img-container">
                <img className="soft__img1" src={img1_1} alt="" />
                <div>
                    <h4>{addRes.description}</h4>
                    <ul>
                        <span>Books:</span>
                        {addRes.additionalResources.books.map((c) => (
                            <>
                                {c.length > 0 &&
                                    (<li className="text-secondary-emphasis fw-normal" >  {c}</li>)}
                            </>
                        ))}
                    </ul>
                    <ul>
                        <span>Tools:</span>
                        {addRes.additionalResources.tools.map((c) => (
                            <>
                            {
                                c.length > 0 && 
                            
                                (<li className="text-secondary-emphasis fw-normal" >  {c}</li>) }
                            </>
                        ))}
                    </ul>
                    <ul>
                        <span>Journal Articles:</span>
                        {addRes.additionalResources.academicPapers.map((c) => (
                            <>{
                                c.length > 0 &&
                                (<li className="text-secondary-emphasis fw-normal" >  {c}</li>)}
                            </>
                        ))}
                    </ul>
                </div>
            </div>

            {/* <div className="border d-flex p-4">
                <img className="w-25" src={img1_1} alt="" />
                <div>
                    <h4>Public Speaking & Presentation</h4>
                    <ul>
                        <span>Articles:</span>
                        <li>
                            10 Tips to Improve Your Public Speaking Skills – Forbes
                        </li>
                        <li>Presentation Zen Blog – Garr Reynolds</li>
                        <li>
                            Techniques for Overcoming Public Speaking Anxiety – Speaker Dex
                        </li>
                        <li>The Art of Persuasion in Public Speaking – Harvard Business Review</li>

                    </ul>
                    <ul>
                        <span>Books:</span>
                        <li>
                            The Quick and Easy Way to Effective Speaking by Dale Carnegie
                        </li>
                        <li>
                            Pitch Anything: An Innovative Method for Presenting, Persuading, and Winning the Deal by Oren Klaff
                        </li>
                        <li>
                            Talk Like TED: The 9 Public Speaking Secrets of the World's Top Minds by Carmine Gallo
                        </li>
                        <li>
                            Resonate: Present Visual Stories that Transform Audiences by Nancy Duarte
                        </li>
                    </ul>
                    <ul>
                        <span>Journal Articles:</span>
                        <li>
                            Improving Presentation Skills in Project Teams: An Empirical Analysis – Journal of Project Management Research
                        </li>
                        <li>Public Speaking Anxiety in IT Professionals: Causes and Coping Mechanisms by J. Anderson (2020)</li>
                    </ul>
                </div>
            </div> */}

            {/* <div className="border d-flex p-4">
                <img className="w-25" src={img1_1} alt="" />
                <div>
                    <h4>Active Listening</h4>
                    <ul>
                        <span>Articles:</span>
                        <li>
                            How to Be an Active Listener – MindTools
                        </li>
                        <li>Active Listening – How It Helps in Relationships and Work – Psych Central</li>
                        <li>
                            6 Ways to Improve Your Active Listening Skills – Zenger Folkman
                        </li>
                        <li>The Importance of Active Listening for Leaders – Forbes</li>
                        <li>
                            Active Listening for Better Leadership – Harvard Business Review
                        </li>
                    </ul>
                    <ul>
                        <span>Books:</span>
                        <li>
                            You’re Not Listening: What You’re Missing and Why It Matters by Kate Murphy
                        </li>
                        <li>
                            The Zen of Listening: Mindful Communication in the Age of Distraction by Rebecca Shafir
                        </li>
                    </ul>
                    <ul>
                        <span>Journal Articles:</span>
                        <li>
                            Active Listening as a Leadership Tool: A Qualitative Analysis – Leadership & Organization Development Journal
                        </li>
                        <li>Conflict Resolution Strategies in Agile Teams – Journal of Agile Research</li>
                    </ul>
                </div>
            </div> */}

            {/* <div className="border d-flex p-4">
                <img className="w-25" src={img1_1} alt="" />
                <div>
                    <h4>Negotiation Skills</h4>
                    <ul>
                        <span>Articles:</span>
                        <li>
                            10 Steps to Effective Negotiating – Harvard Business Review
                        </li>
                        <li>The Art of Negotiation – McKinsey</li>
                        <li>
                            The Psychology of Negotiation – Farnam Street
                        </li>
                        <li>Negotiation Skills for Agile Product Owners – MindTools</li>
                        <li>
                            The Art of Negotiation in Agile Development – Atlassian Blog
                        </li>
                    </ul>
                    <ul>
                        <span>Books:</span>
                        <li>
                            Bargaining for Advantage: Negotiation Strategies for Reasonable People by G. Richard Shell
                        </li>
                        <li>
                            Difficult Conversations: How to Discuss What Matters Most by Douglas Stone
                        </li>
                        <li>
                            Getting to Yes: Negotiating Agreement Without Giving In by Roger Fisher and William Ury
                        </li>
                        <li>
                            Negotiation Genius: How to Overcome Obstacles and Achieve Brilliant Results at the Bargaining Table by Deepak Malhotra and Max Bazermann
                        </li>
                    </ul>
                    <ul>
                        <span>Journal Articles:</span>
                        <li>
                            Negotiation Tactics for Product Owners in Agile Environments by M. Smith (2021)
                        </li>
                        <li>Collaborative Negotiation in Agile Teams: An Empirical Study – Journal of Agile Management</li>
                    </ul>
                </div>
            </div> */}
        </>
    )
}

export default AdditionalResources