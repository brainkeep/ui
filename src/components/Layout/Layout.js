import React from 'react'

import './Layout.css'
import Grid from '@material-ui/core/Grid'
import InputField from '../../containers/InputField/InputField'
import AddDialog from '../../containers/AddDialog/AddDialog'

const Layout = ({ input }) => {

  const display = () => {
    return (<AddDialog/>)
    // if (input.executing) {
    //   if (input.input_text === 'add')
    //     return (<AddDialog/>)
    // }
  }

  return (
    <div className="Layout">
      <Grid container spacing={40}>
        <Grid item xs={12} md={12}>
          {/*<InputField/>*/}
        </Grid>
        <Grid item xs={12} md={12}>
          {display()}
        </Grid>
      </Grid>
    </div>
  )
}

export default Layout