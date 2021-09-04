import React from "react";
import { Card, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#f8f8ff",
    maxWidth: "200px",
    padding: "16px",
    margin: "16px",
  },
});

const QuoteCard = (props) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <Typography variant="body1" gutterBottom>
          {props.text}
        </Typography>
        <Typography variant="caption" display="block">
          -{props.author}
        </Typography>
      </Card>
    </>
  );
};

export default QuoteCard;
