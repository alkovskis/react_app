import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});


function SimpleTable(props) {
    const { classes } = props;

    return (
        <div style={{textAlign: 'center',padding: '50px'}}>
            <h2>{props.data.quote}</h2>
        </div>


    );
}

export default withStyles(styles)(SimpleTable);