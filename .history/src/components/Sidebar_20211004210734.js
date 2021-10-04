import React from "react";
import { makeStyles } from "@mui/styles";
import { SubjectOutlined } from "@mui/icons-material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    top: "63px",
    width: "240px",
    minHeight: "100vh",
    backgroundColor: "#253053",
    color: "white",
  },
});
export default function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.sideMenu}>
      <List>
        <ListItem variant='h1'>
          <ListItemText style={{alignItems:'center' , alignSelf:'center' ,justifyContent:'center'}}>
            Menu Bar
          </ListItemText>
        </ListItem>
        <Link
          to="/"
          exact
          style={{ textDecoration: "none", color: "white" }}
        >
          <ListItem button>
            <ListItemIcon>
              <SubjectOutlined color="primary" />
            </ListItemIcon>
            <ListItemText>Show All</ListItemText>
          </ListItem>
        </Link>
        <Link to="/edit/?" style={{ textDecoration: "none", color: "white" }}>
          <ListItem button>
            <ListItemIcon>
              <AddCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText>Add new</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
