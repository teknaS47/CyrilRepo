import React, { useEffect } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, loadUsers } from "../redux/action";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  table: {
    margin: "50px 0px 0px 50px",
  },
  thead: {
    "&>*": {
      backgroundColor: "#000000",
    },
  },
});

export default function AllUsers() {
  const classes = useStyles();
  let dispatch = useDispatch();
  let history = useHistory();

  const { users } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handledelete = (id) => {
    if (window.confirm("Are you sure you want to delete it ? ")) {
      dispatch(deleteUsers(id));
    }
  };
  return (
    <>
      <Table className={classes.table} style={{ width: "94%" }}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell style={{ color: "#FFFFFF" }}>Id</TableCell>
            <TableCell style={{ color: "#FFFFFF" }}>Name</TableCell>
            <TableCell style={{ color: "#FFFFFF" }}>Email</TableCell>
            <TableCell style={{ color: "#FFFFFF" }}>Age</TableCell>
            <TableCell style={{ color: "#FFFFFF" }}>Gender</TableCell>
            <TableCell style={{ color: "#FFFFFF" }}>Company name</TableCell>
            <TableCell style={{ color: "#FFFFFF" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.company}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginRight: "10px" }}
                      onClick={() => history.push(`/edit/${user.id}`)}
                    >
                      <EditIcon></EditIcon>
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        handledelete(user.id);
                      }}
                    >
                      <DeleteIcon></DeleteIcon>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </>
  );
}
