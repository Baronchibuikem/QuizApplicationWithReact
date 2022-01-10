import axios from "axios";
import { useState, useEffect } from "react";

// custom hook for making api call to the backend to fetch the appropriate data
function useFetchData() {
  const [questionInfo, setQuestionInfo] = useState([]);

  const route = axios.create({
    baseURL: "https://quizconnectdb.herokuapp.com/api/v1",
  });
  let config = { headers: { "Content-Type": "application/json" } };

  useEffect(() => {
    const fetchQuestions = async () => {
      const queInfo = await route.get("/quizbank/createquiz/", config);
      setQuestionInfo(queInfo.data.data);
    };
    fetchQuestions();
  }, []);

  return questionInfo;
}

export default useFetchData;
