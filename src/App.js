import { Box, Button, Fade, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import QuoteCard from "./components/QuoteCard";
import { getMotivationalQuote } from "./utils/QuotesAPIUtil";

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

const App = () => {
  const classes = useStyles();
  const [mainCard, setMainCard] = useState(
    <QuoteCard
      quoteAuthor="Justin Mabutas"
      quoteText="Click the button to get started."
    />
  );
  const [cardFade, setCardFade] = useState(true);
  const [quoteLoading, setQuoteLoading] = useState(false);
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Typography variant="h3">Motivational Quote App</Typography>
      </Box>
      <Fade in={cardFade} timeout={500}>
        <div>{mainCard}</div>
      </Fade>
      <Button
        variant="contained"
        color="primary"
        disabled={quoteLoading}
        className={classes.quoteButton}
        onClick={async () => {
          setQuoteLoading(true);
          setCardFade(false);
          const data = await getMotivationalQuote();
          setQuoteLoading(false);
          setCardFade(true);
          setMainCard(
            <QuoteCard
              quoteAuthor={data.quoteAuthor}
              quoteText={data.quoteText}
            />
          );
        }}
      >
        Get Motivated!
      </Button>
    </Box>
  );
};

export default App;
