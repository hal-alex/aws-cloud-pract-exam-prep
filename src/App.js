import { Box, Button, Typography } from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState } from "react"
import { questions } from "./Questions"

function App() {
  const [questionIndex, setQuestionIndex] = useState(0)

  const [questionsArr, setQuestionsArr] = useState(questions)

  const [displayWelcomeText, setdisplayWelcomeText] = useState(true)

  const [displayQs, setDisplayQs] = useState(false)

  const [reviseArray, setReviseArray] = useState([])

  const shuffleArray = () => {
    setQuestionsArr(questionsArr.sort(() => Math.random() - 0.5))
    startQuestion()
  }

  const addToRevise = () => {
    setReviseArray([...reviseArray, ", ", questionsArr[questionIndex]])
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
            <Button
              variant="contained"
              sx={{ margin: "20px" }}
              onClick={addToRevise}
            >
              Add to revise
            </Button>
            <Accordion sx={{ maxWidth: "1000px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Topics to revise</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{reviseArray}</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default App
