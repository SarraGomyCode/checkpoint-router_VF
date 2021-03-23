import React from "react";
import { Button } from "react-bootstrap";
import "../Error/Error.css";

const Error = (props) => {
  return (
    <div className="error">
      <h2>Oops ! No Results was found</h2>
      <Button
        variant="danger"
        onClick={() => {
          props.history.push("/");
        }}
      >
        Home Page
      </Button>
    </div>
  );
};

export default Error;
