// src/components/FreeTrial.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion } from '../../config/getQuestions';

const FreeTrial = () => {
  const dispatch = useDispatch();
  const { question, loading, error } = useSelector((state) => state.questions);
console.log(question, "quest")
  useEffect(() => {
    dispatch(getQuestion()); // Veriyi çek
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Questions</h1>
    
    </div>
  );
}

export default FreeTrial;
