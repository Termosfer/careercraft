import ProgressBar from "react-bootstrap/ProgressBar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { getQuestion, getQuestionsCount, getAnswer } from "../../config/getQuestions";
import { changeIncrease } from "../../config/getQuestions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./freetrial.css";

const FreeTrial = () => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { question, loading, error, totalCount, answer } = useSelector((state) => state.questions);
  const count = useSelector((state) => state.questions.value);
  console.log(question, "asd")
  console.log(count, "ad")
  console.log(totalCount, "total")
  console.log(answer, "answer")

  useEffect(() => {
    dispatch(getQuestion(count));
    dispatch(getQuestionsCount())

  }, [dispatch, count]);

  useEffect(() => {
    if (question) {
      const progressPercentage = Math.round(
        (count / totalCount) * 100
      );
      setProgress(progressPercentage);
    }
  }, [question, count]);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (selectedAnswer) {
      const answer = { questionId: question.id, orderValue: selectedAnswer }
      dispatch(getAnswer(answer));
      dispatch(changeIncrease());
    }

    if (loading)
      return (
        <div className="">
          {<Skeleton height={338} className="m-auto w-100" />}
          <div className=" px-5 py-4 mt-5 text-center">
            <Skeleton style={{ width: "35%" }} className="mb-5" height={40} />
            <Skeleton
              style={{ width: `60%`, margin: "0 auto" }}
              className=" mb-3"
              height={40}
            />
            <Skeleton
              style={{ borderRadius: "18px", height: "70px" }}
              count={5}
              className="my-3 w-50"
            />
            <Skeleton height={50} width={170} className="m-auto mt-4" />
          </div>
        </div>
      );

    if (error) return <div>Error: {error}</div>;


  };
  return (
    <>
      <div className="bg-testimg">
        <Container className="text-position px-5  w-75 ">
          <h1 className="text-center mb-3">Skill Level Test</h1>
          <h2 className="text-center">
            Evaluate Your Skills and Uncover Opportunities for Growth
          </h2>
        </Container>
      </div>
      <ProgressBar variant="primary" now={progress} label={`${progress}%`} animated />
      <Container className="w-75 px-5 py-4 mt-5">
        <h2 className="text-center fw-bold" style={{ color: "#838383" }}>
          <span style={{ color: "#0F77FF" }}>Question {count}</span> Out of <span>{totalCount}</span>
        </h2>
        <div>
          <h2 className="text-center my-5 fw-semibold" key={question.id}>{question.text}</h2>
          <Form onSubmit={submitHandler} className="w-75 px-5 m-auto">
            <ul className="list-unstyled">
              {question.answers?.map((answer) => (
                <li key={answer.id} className="d-flex  my-3 p-2 gap-2 li">
                  <input
                    value={answer.id}
                    onChange={handleAnswerChange}
                    className="radio"
                    type="radio"
                    name="name"
                    required
                  />{" "}
                  {answer.text}
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Button
                type="submit"
                style={{ background: "#0F77FF" }}
                className="px-5 fs-6"
              >
                Next
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default FreeTrial;
