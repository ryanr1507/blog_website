import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const DialogWindow = ({registrionButton}) => {


    const handleClose = () => {
      registrionButton(false);
    };

    return (
        <React.Fragment>
          <Dialog
            open={true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Registration Complete"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Your account has been registered. Click OK and navigate to the Sign In page with the link below when you're ready.
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose}>OK</Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
}

export default DialogWindow