import { Box, Button, Fade, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import QuoteCard from "./components/QuoteCard";
import { getMotivationalQuotes } from "./utils/QuotesAPIUtil";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    flexDirection: "column",
    minHeight: "50vh",
    width: "100%",
  },
  header: {
    paddingTop: "64px",
    width: "100%",
  },
  quoteButton: {
    background: "#9cd1ff",
    color: "#222222",
    "&:hover": {
      background: "#75bfff",
    },
  },
});

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const FADE_DURATION = 500;

const App = () => {
  const classes = useStyles();
  const [quoteArray, setQuoteArray] = useState([]);
  const [mainCard, setMainCard] = useState({
    author: "Justin Mabutas",
    text: "Click the button to get started.",
  });
  const [quoteLoading, setQuoteLoading] = useState(false);

  useEffect(() => {
    if (quoteArray.length > 0) {
      const peek = quoteArray[quoteArray.length - 1];
      setMainCard(peek);
      setQuoteLoading(false);
    }
  }, [quoteArray]);

  const handleClick = async () => {
    setQuoteLoading(true);
    if (quoteArray.length === 0) {
      await sleep(FADE_DURATION);
      const response = await getMotivationalQuotes();
      setQuoteArray(response);
    } else {
      await sleep(FADE_DURATION);
      quoteArray.pop();
      if (quoteArray.length === 0) {
        const response = await getMotivationalQuotes();
        setQuoteArray(response);
      } else {
        setQuoteArray([...quoteArray]);
      }
    }
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Typography variant="h3">Motivational Quote App</Typography>
      </Box>
      <Fade in={!quoteLoading} timeout={FADE_DURATION}>
        <div>
          <QuoteCard author={mainCard.author} text={mainCard.text} />
        </div>
      </Fade>
      <Button
        variant="contained"
        color="primary"
        disabled={quoteLoading}
        className={classes.quoteButton}
        onClick={handleClick}
      >
        Get Motivated!
      </Button>
    </Box>
  );
};

export default App;
