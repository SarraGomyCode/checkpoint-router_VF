import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ handleDataMovie }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [image, setImage] = useState("");
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h4 id="simple-modal-title">
        <form>
          <label>image</label>
          <input onChange={(e) => setImage(e.target.value)} />
          <label>rating</label>
          <input onChange={(e) => setRating(e.target.value)} />
          <label>name</label>
          <input onChange={(e) => setName(e.target.value)} />
          <br />
          <label>date</label>
          <br />
          <input onChange={(e) => setDate(e.target.value)} />
          <br />
          <label>type</label>
          <br />
          <input onChange={(e) => setType(e.target.value)} />
          <label>description</label>
          <input onChange={(e) => setDescription(e.target.value)} />
        </form>
      </h4>
      <p id="simple-modal-description">Click Add movie when you are done</p>
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleDataMovie({
            id: Math.random(),
            image,
            rating,
            name,
            date,
            type,
            description,
          });
        }}
        variant="contained"
        color="secondary"
      >
        Add movie
      </Button>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add Movie
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
