import axios from "axios";
import { useState, useEffect } from "react";

// custom hook for making api call to the backend to fetch the appropriate data
function useFetchData() {
  const [questionInfo, setQuestionInfo] = useState([]);

  const route = axios.create({
    baseURL: "https://quizconnectdb.herokuapp.com/api/v1/",
  });

  useEffect(() => {
    const fetchQuestions = async () => {
      const queInfo = await axios.get(
        `${route}quizbank/createquiz/`
        // "http://127.0.0.1:8000/api/v1/quizbank/createquiz/"
      );
      setQuestionInfo(queInfo.data.data);
    };
    fetchQuestions();
  }, []);

  return questionInfo;
}

export default useFetchData;
