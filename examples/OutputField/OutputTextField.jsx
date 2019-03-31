import React from "react";
import TextField from "@material-ui/core/TextField";
import "./OutputTextField.css";

export default function OutputTextField() {
  return (
    <div className="OutputField">
      <TextField
        id="outlined-multiline-flexible"
        label="Output"
        multiline
        rows="20"
        margin="normal"
        variant="outlined"
        fullWidth={true}
      />
    </div>
  );
}
