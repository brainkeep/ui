import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import InputField from "./InputField";
import AddDialog from "./AddDialog";
import "./styles/Layout.css";

LayoutFC.propTypes = {
  inputField: PropTypes.object.isRequired,
  openDialog: PropTypes.func.isRequired
};

export default function LayoutFC(props) {
  const { inputField, openDialog } = props;

  const display = () => {
    if (inputField.isExecuting) {
      if (inputField.text === "add") openDialog();
      return <AddDialog />;
    }
  };

  return (
    <div className="Layout">
      <Grid container spacing={40}>
        <Grid item xs={12} md={12}>
          <InputField />
        </Grid>
        <Grid item xs={12} md={12}>
          {display()}
        </Grid>
      </Grid>
    </div>
  );
}
