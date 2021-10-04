import { CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Switch, Route } from "react-router";
import AddUser from "./components/AddUser";
import AllUsers from "./components/Allusers";
import EditUser from "./components/EditUser";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Sidebar from "./components/Sidebar";

const useStyles = makeStyles({
  mainApp: {
    paddingLeft: "240px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Sidebar />
      <div className={classes.mainApp}>
        <Switch>
          <Route exact path="/" component={AllUsers} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
          {/* <Route component={NotFound} /> */}
        </Switch>
        <CssBaseline />
      </div>
    </>
  );
}

export default App;
