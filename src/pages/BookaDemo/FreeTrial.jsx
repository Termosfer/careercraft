
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer, getQuestion } from "../../config/getQuestions";
import { Container, Form, Button } from "react-bootstrap";
import { changeIncrease } from "../../config/getQuestions";
import "./freetrial.css"
const FreeTrial = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.questions.value)

  const { question, loading, error, answer } = useSelector((state) => state.questions);
  console.log(answer, "ans")
  console.log(question, "quest");

  useEffect(() => {

    dispatch(getQuestion(count));
    /* dispatch(getAnswer()) */
  }, [dispatch, count]);

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
      <Container className="w-75 px-5 py-4 mt-5">
        <h2 className="text-center fw-bold" style={{color:"#838383"}}><span style={{color:"#0F77FF"}}>Questions 1</span> Out of 25</h2>
        {question?.map((quest, index) => (
          <div key={index}>

            {quest.questions?.map((question) => (
              <div key={question.id}>
                <h2 className="text-center my-5 fw-semibold">{question.text}</h2>
                <Form onSubmit={submitHandler} className="w-75 px-5 m-auto">
                  <ul key={answer.id} className="list-unstyled">
                  {question.answers?.map((answer) => (

                      <li className="d-flex  my-3 p-2 gap-2 li"><input className="radio" type="radio" name="name" required />  {answer.text}</li>
                    ))}
                    </ul>
                  <div className="text-center">
                    <Button type="submit" style={{background:"#0F77FF"}} className="px-5 fs-6">Next</Button>
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




