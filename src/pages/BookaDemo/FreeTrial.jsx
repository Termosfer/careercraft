// src/components/FreeTrial.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestion } from "../../config/getQuestions";
import { Container, Form, Button } from "react-bootstrap";

import { changeIncrease } from "../../config/getQuestions";
const FreeTrial = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.questions.value);
  console.log(count, "count");
  const { question, loading, error } = useSelector((state) => state.questions);
  console.log(question, "quest");
  useEffect(() => {
    dispatch(getQuestion(count));
  }, [dispatch, count]);

  return (
    <Container className="px-5 w-75">
      {error ? <span>Error: {error}</span> : <span>Loading...</span>}
    </Container>
  );

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changeIncrease());
  };

  return (
    <Container className="w-75 px-5 py-4 mt-5 border rounded">
      {question?.map((quest, index) => (
        <div key={index}>
          <h1>{quest.skillName}</h1>
          {quest.questions?.map((n) => (
            <div key={n.id}>
              <h2>{n.text}</h2>
              <Form onSubmit={submitHandler}>
                {n.answers?.map((answer) => (
                  <ul key={answer.id} className="list-unstyled">
                    <li className="d-flex gap-2">
                      <input type="radio" name="name" required /> {answer.text}
                    </li>
                  </ul>
                ))}
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </Form>
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
};

export default FreeTrial;
