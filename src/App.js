import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import { questions } from "./Questions"

function App() {
  const [questionIndex, setQuestionIndex] = useState(0)

  const [questionsArr, setQuestionsArr] = useState(questions)

  const [displayWelcomeText, setdisplayWelcomeText] = useState(true)

  const [displayQs, setDisplayQs] = useState(false)

  const shuffleArray = () => {
    setQuestionsArr(questionsArr.sort(() => Math.random() - 0.5))
    startQuestion()
  }

  const startQuestion = () => {
    setDisplayQs(true)
    setdisplayWelcomeText(false)
  }

  const goNext = () => {
    setQuestionIndex(questionIndex + 1)
  }

  const goBack = () => {
    setQuestionIndex(questionIndex - 1)
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "20%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {displayWelcomeText && (
          <>
            <Typography>AWS Exam Prep - Random Questions</Typography>
            <Box>
              <Button
                variant="contained"
                sx={{ margin: "20px" }}
                onClick={startQuestion}
              >
                Start Questions
              </Button>
              <Button
                variant="contained"
                sx={{ margin: "20px" }}
                onClick={shuffleArray}
              >
                Randomize Questions
              </Button>
            </Box>
          </>
        )}
        {displayQs && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h3">{questionsArr[questionIndex]}</Typography>
            <Typography>What is this AWS resource?</Typography>
            <Typography>
              Q {questionIndex + 1} out of {questionsArr.length}
            </Typography>
            <Button
              variant="contained"
              sx={{ margin: "20px" }}
              onClick={goNext}
            >
              Next Question
            </Button>
            <Button
              variant="contained"
              sx={{ margin: "20px" }}
              onClick={goBack}
            >
              Previous Question
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default App
