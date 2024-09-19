import React, { useState } from "react";
import "./TestResultsOne.css";
import img1 from "../../assets/TestResultsOneImg/TestResultsImgOne.png";
import img2 from "../../assets/TestResultsOneImg/TestResultsImg2.png";
import img3 from "../../assets/TestResultsOneImg/TestResultsImg3.png";
import img4 from "../../assets/TestResultsOneImg/TestResultsImg4.png";
import img5 from "../../assets/TestResultsOneImg/TestResultsImg5.png";

import AdditionalResources from "../../components/additionalResources/AdditionalResources";

const TestResultsOne = () => {
  const [activeSection, setActiveSection] = useState("Communication");

  const renderContent = () => {
    switch (activeSection) {
      case "Communication":
        return (
          <div className="Communication">
            {/* Communication İçeriği */}
            <div className="Communication">
              <div className="section1 my-5">
                <h3 className="fw-semibold">
                  Communication <span className="text-primary">Beginner</span>{" "}
                  Level
                </h3>
                <div className="low text-primary">
                  <span className="fw-bold">
                    {`<50%`}
                    <p className="fw-normal">Beginner</p>
                  </span>
                </div>
              </div>
              <div className="border d-flex p-4">
                <img className="w-25 me-3" src={img1} alt="" />
                <div>
                  <h5>Self Awareness & Assessment</h5>
                  <p>
                    <span>Action:</span> Reflect on previous work experiences.
                    Identify specific situations where communication or
                    negotiation failed and write down the reasons. Use the SWOT
                    analysis method to analyze your personal soft skills.
                    Consider both your personal feedback and feedback from
                    colleagues.
                  </p>
                  <span>
                    <span>Resources:</span> SWOT Template: [Downloadable
                    Template for SelfAssessment
                    (https://www.mindtools.com/pages/article/newTMC_05.htm)
                    Literature: "Emotional Intelligence 2.0" by Travis Bradberry
                    and Jean "The 7 Habits of Highly Effective People" by
                    Stephen R. Covey
                  </span>
                </div>
              </div>
              <div className="border d-flex p-4">
                <img className="w-25 me-3" src={img2} alt="" />
                <div>
                  <h5>Basic Communication Skills</h5>
                  <p>
                    <span>Action:</span> Begin practicing clear and concise
                    writing. Start by writing emails with key points summarized
                    in bullet points. Use templates to ensure clarity and
                    simplicity. Join a communication course to learn the basics
                    of delivering complex ideas simply.
                  </p>
                  <p>
                    <span>Courses:</span> "Communication Fundamentals: How to
                    Communicate Better" (Udemy) "The Complete Communication
                    Skills Master Class for Life" (Udemy)
                  </p>
                  <span>
                    <span>Blogs:</span> [Harvard Business Review: How to
                    Communicate Clearly and Effectively]
                    (https://hbr.org/2019/01/howtocommunicateeffectively)
                    Improving Communication Skills]
                    (https://www.mindtools.com/CommSkll/CommunicationSkills.htm)
                  </span>
                </div>
              </div>
              <div className="border d-flex p-4">
                <img className="w-25 me-3" src={img3} alt="" />
                <div>
                  <h5>Basic Public Speaking & Presentation Skills</h5>
                  <p>
                    <span>Action:</span> Start by preparing short presentations
                    on topics you are familiar with. Present them to a small
                    group of friends or colleagues. Practice regularly using
                    online tools like PowerPoint to ensure that your
                    presentations are logically structured and include visual
                    aids
                  </p>
                  <p>
                    <span>Courses:</span> "The Complete Public Speaking
                    Masterclass for Every Occasion" (Udemy) "Presentation Skills
                    for Beginners" (Skills hare)
                  </p>
                  <span>
                    <span>Blogs:</span> [Fast Company: How to Get Over Public
                    Speaking Anxiety] (https://www.fastcompany.com/
                    3048912/howtogetoverpublicspeakinganxiety) [Inc: The Science
                    Behind Why You Fear Public Speaking]
                    (https://www.inc.com/amymorin/3reasonsyoufearpublicspeakingandhowtoovercomeit.html)
                  </span>
                </div>
              </div>
              <div className="border d-flex p-4">
                <img className="w-25 me-3" src={img4} alt="" />
                <div>
                  <h5>Active Listening Skills</h5>
                  <p>
                    <span>Action:</span> Practice active listening techniques
                    during meetings. This involves listening without
                    interrupting, then summarizing what the other person has
                    said before responding. Engage in exercises that help you
                    focus on body language and nonverbal cues during
                    conversations.
                  </p>
                  <p>
                    <span>Courses:</span> "Active Listening Skills for Effective
                    Communication" (Udemy), "Effective Listening Skills: How to
                    Listen to Understand" (Coursera)
                  </p>
                  <span>
                    <span>Blogs:</span> [MindTools: Active Listening]
                    (https://www.mindtools.com/CommSkll/ActiveListening.htm)
                    [Active Listening and How It Can Help You]
                    (https://www.psychologytoday.com/us/blog/communicationsuccess/201501/activelisteningworksyouhowandwhy)
                  </span>
                </div>
              </div>
              <div className="border d-flex p-4">
                <img className="w-25 me-3" src={img5} alt="" />
                <div>
                  <h5>Basic Negotiation Skills</h5>
                  <p>
                    <span>Action:</span> Start by roleplaying simple negotiation
                    scenarios. Practice asserting your viewpoint while also
                    being open to compromise. Focus on understanding the key
                    interests of the other party and look for mutually
                    beneficial solutions.
                  </p>
                  <p>
                    <span>Courses:</span> "Introduction to Negotiation: A
                    Strategic Playbook for Becoming a Principled and Persuasive
                    Negotiator" (Coursera), "Negotiation Fundamentals: Getting
                    the Best Deal" (Udemy)
                  </p>
                  <span>
                    <span>Blogs:</span> [Harvard Law: Negotiation Skills –
                    Negotiation Strategies and Techniques]
                    (https://www.pon.harvard.edu/daily/negotiationskillsdaily/whatisnegotiation/)
                    [MindTools: WinWin Negotiation]
                    (https://www.mindtools.com/CommSkll/NegotiationSkills.htm)
                  </span>
                </div>
              </div>
              <AdditionalResources/>
            </div>
          </div>
        );
      case "Personal Qualities":
        return (
          <div className="PersonalQualities">
            <h3 className="my-5">
              Diğer Personal Qualities içerikleri burada olacak
            </h3>
          </div>
        );
      case "Critical Thinking":
        return (
          <div className="Critical Thinking">
            <h3 className="my-5">
              Diğer Critical Thinking içerikleri burada olacak
            </h3>
          </div>
        );
      case "Leadership":
        return (
          <div className="Leadership">
            <h3 className="my-5">Diğer Leadership içerikleri burada olacak</h3>
          </div>
        );
      case "Teamwork":
        return (
          <div className="Teamwork">
            <h3 className="my-5">Diğer Teamwork içerikleri burada olacak</h3>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="TestResultsOne">
      <div className="container w-75 px-5">
        <div className="toggle mt-5">
          <div
            onClick={() => setActiveSection("Communication")}
            className={activeSection === "Communication" ? "active" : ""}
          >
            Communication
          </div>
          <div
            onClick={() => setActiveSection("Personal Qualities")}
            className={activeSection === "Personal Qualities" ? "active" : ""}
          >
            Personal Qualities
          </div>
          <div
            onClick={() => setActiveSection("Critical Thinking")}
            className={activeSection === "Critical Thinking" ? "active" : ""}
          >
            Critical Thinking
          </div>
          <div
            onClick={() => setActiveSection("Leadership")}
            className={activeSection === "Leadership" ? "active" : ""}
          >
            Leadership
          </div>
          <div
            onClick={() => setActiveSection("Teamwork")}
            className={activeSection === "Teamwork" ? "active" : ""}
          >
            Teamwork
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default TestResultsOne;
