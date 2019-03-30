import React from "react";

import "./Layout.css";
import Grid from "@material-ui/core/Grid";
import InputField from "../../containers/InputField/InputField";
import AddDialog from "../../containers/AddDialog/AddDialog";
import PropTypes from "prop-types";

Layout.propTypes = {
  inputField: PropTypes.object.isRequired,
  openDialog: PropTypes.func.isRequired
};

export default function Layout(props) {
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
