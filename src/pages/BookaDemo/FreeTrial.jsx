import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { getQuestion, getQuestionsCount, getAnswer } from "../../config/authQuestions";
import { changeIncrease, currentAnswerOrderValue } from "../../config/authQuestions";
import ProgressBar from "react-bootstrap/ProgressBar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./freetrial.css";

const FreeTrial = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const count = useSelector((state) => state.questions.value);
  const { question, loading, error, totalCount, orderValue } = useSelector((state) => state.questions);
  console.log(question, "question")
  console.log(question.completed, "question")
  useEffect(() => {
    dispatch(getQuestion(count));
    dispatch(getQuestionsCount());
  }, [dispatch, count, navigate]);

  useEffect(() => {
    if (question) {
      const progressPercentage = Math.round((question.id / totalCount) * 100);
      setProgress(progressPercentage);
    }
  }, [question, totalCount]);

  const handleAnswerChange = (e) => {
    dispatch(currentAnswerOrderValue(e.currentTarget.value));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (orderValue) {
      const answer = { orderValue, questionId: question.id };
      await dispatch(getAnswer(answer));
      await dispatch(changeIncrease());

      if (count === totalCount) {
        navigate("/freetest/test-result");
      }
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
        <Container className="text-position px-5  w-75">
          <h1 className="text-center mb-3">Skill Level Test</h1>
          <h2 className="text-center">
            Evaluate Your Skills and Uncover Opportunities for Growth
          </h2>
        </Container>
      </div>
      <div className="bg-freetrial">
        <div className="progress-div">
          <ProgressBar variant="primary" now={progress} />
        </div>

        <Container className="w-75 px-5 py-4 mt-5">
          <h2 className="text-center fw-bold" style={{ color: "#838383" }}>
            <span style={{ color: "#0F77FF" }}>Question {question?.id}</span>{" "}
            Out of <span>{totalCount}</span>
          </h2>
          <div>
            <h2 className="text-center my-5 fw-semibold" key={question?.id}>
              {question?.text}
            </h2>
            <Form onSubmit={submitHandler} className="w-75 px-5 m-auto">
              <ul className="list-unstyled">
                {question &&
                  question.answers?.map((answer) => {
                    return (
                      (
                        <li key={answer.id} className="d-flex  my-3 gap-2 li">
                          <label className="w-100 d-flex align-items-center gap-2 p-2">
                            <input
                              value={answer.orderValue}
                              onChange={handleAnswerChange}
                              className="radio"
                              type="radio"
                              name="name"
                              required
                            />
                            {answer.text}
                          </label>
                        </li>
                      ))
                  })
                }
              </ul>
              <div className="text-center">
                <Button
                  type="submit"
                  style={{ background: "#0F77FF" }}
                  className="px-5 fs-6"
                >
                  {count < totalCount ? "Next" : "Finish"}
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FreeTrial;
