import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer, getQuestion } from "../../config/getQuestions";
import { Container, Form, Button } from "react-bootstrap";
import { changeIncrease } from "../../config/getQuestions";

import "./freetrial.css"
const FreeTrial = () => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0)
  const { question, loading, error } = useSelector((state) => state.questions);
  const count = useSelector((state) => state.questions.value)

  useEffect(() => {

    dispatch(getQuestion(count));
    /* dispatch(getAnswer()) */


  }, [dispatch, count]);

  useEffect(() => {

    if (question && question.length) {
      const totalQuestions = 15;
      const answeredQuestions = count;
      const progressPercentage = Math.round((answeredQuestions / totalQuestions) * 100);
      setProgress(progressPercentage);
    }
  }, [question, count]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(changeIncrease())


  }

  return (
    <>
    
      <div className="bg-testimg">
        <Container className="text-position px-5  w-75 ">
          <h1 className="text-center mb-3">Skill Level Test</h1>
          <h2 className="text-center">Evaluate Your Skills and Uncover Opportunities for Growth</h2>
        </Container>
      </div>
      <ProgressBar variant="primary" now={progress} label={`${progress}%`} />
      <Container className="w-75 px-5 py-4 mt-5">
        <h2 className="text-center fw-bold" style={{ color: "#838383" }}><span style={{ color: "#0F77FF" }}>Question {count + 1}</span> Out of 15</h2>
        {question?.map((quest, index) => (
          <div key={index}>

            {quest.questions?.map((question) => (
              <div key={question.id}>
                <h2 className="text-center my-5 fw-semibold">{question.text}</h2>
                <Form onSubmit={submitHandler} className="w-75 px-5 m-auto">
                  <ul className="list-unstyled">
                    {question.answers?.map((answer) => (
                      <li key={answer.id} className="d-flex  my-3 p-2 gap-2 li"><input className="radio" type="radio" name="name" required />  {answer.text}</li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <Button type="submit" style={{ background: "#0F77FF" }} className="px-5 fs-6">Next</Button>
                  </div>
                </Form>
              </div>
            ))}
          </div>
        ))}
      </Container>
    </>

  );
};

export default FreeTrial;




