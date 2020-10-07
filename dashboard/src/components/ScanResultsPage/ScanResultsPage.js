import React, { useState, useEffect } from "react";
import {
    makeStyles,
    ThemeProvider,
    createMuiTheme,
} from "@material-ui/core/styles";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Badge from "@material-ui/core/Badge";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Header from "../Header/Header";
import axios from "axios";
import { IconContext } from "react-icons";
import { FiDelete } from 'react-icons/fi'
import { MdMoreHoriz } from "react-icons/md";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
const menuTheme = createMuiTheme({ shadows: ["none"] });

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        padding: 20,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    pos: {
        marginBottom: 12,
    },
    form: {
        "& .MuiTextField-root": {
            margin: theme.spacing(2),
            width: "25ch",
        },
    },
}));

const dummy = [
    {
        _id: "",
        user_id: "",
        phone: "",
        email: "",
        email_verified: "",
        roles: "",
        updated_at: new Date(),
        findings: {
            type: "",
        },
    },
];

export default function ScanFormPage(props) {
    const classes = useStyles();
    const [table, setTable] = useState(dummy);
    const [tableShow, setTableShow] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [editResult, setEdit] = useState("");
    const [currentItem, setCurrentItem] = useState("");
    const [show, setShow] = useState(false);

    const handleModalClose = () => setShow(false);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            let response = await axios.get(
                "http://localhost:5000/fetchAllScanResult"
            );
            if (response.data.length > 0) {
                setTableShow(true);
                setTable(response.data);
            } else setTableShow(false);
        } catch (err) {
            console.log(err);
        }
    }
    function handleScanIdClick(item) {
        props.history.push({ pathname: "/view-scan-result-findings/" + item.scanId });
    }

    async function handleDeleteScanResult() {
        let config = {
            params: {
                scanId: currentItem.scanId,
            },
        };
        try {
            let response = await axios.delete(
                "http://localhost:5000/deleteScanResult",
                config
            );
            fetchData();
            setAnchorEl(null);
        } catch (err) {
            console.log(err);
        }
    }
    function handleClose() {
        setAnchorEl(null);
    }

    function handleClickEllipsis(event, item) {
        setAnchorEl(event.currentTarget);
        setCurrentItem(item);
    }


    function renderBasedOnTable(){
      
      if (tableShow) {
        let filteredData = [];
        table.map((item) => {
            filteredData.push(item);
        });
        return (
            <div style={{ paddingTop: 0, marginTop: 0 }}>
                <div>
                    {filteredData.map((item) => {
                        return (
                            <div>
                                <Grid container spacing={0}>
                                    <Grid
                                        item
                                        md={2}
                                        xs={4}
                                        style={{ backgroundColor: "#fff" }}
                                    >
                                        <ListItem
                                            style={{
                                                textAlign: "center",
                                                cursor: "pointer",
                                            }}
                                            alignItems="flex-start"
                                        >
                                            <ListItemText
                                                style={{ paddingTop: 12 }}
                                                primary={item.repositoryName}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid
                                        item
                                        md={2}
                                        xs={6}
                                        style={{ backgroundColor: "#fff" }}
                                    >
                                        <ListItem
                                            style={{
                                                textAlign: "center",
                                                cursor: "pointer",
                                            }}
                                            alignItems="flex-start"
                                        >
                                            <ListItemText
                                                style={{ paddingTop: 12 }}
                                                primary={item.status}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid
                                        item
                                        md={1}
                                        xs={6}
                                        style={{ backgroundColor: "#fff" }}
                                    >
                                        <div
                                            onClick={() => handleScanIdClick(item)}
                                            style={{
                                                textAlign: "center",
                                                cursor: "pointer",
                                                paddingTop: 12,
                                            }}
                                        >
                                            <Badge
                                                badgeContent={item.findings.length}
                                                color="primary"
                                            >
                                                <FileCopyIcon />
                                            </Badge>
                                        </div>
                                    </Grid>
    
                                    <Grid item md={3}>
                                        <ListItem
                                            style={{
                                                textAlign: "center",
                                                cursor: "pointer",
                                            }}
                                            alignItems="flex-start"
                                        >
                                            <ListItemText
                                                style={{ paddingTop: 12 }}
                                                primary={
                                                    item.status === "QUEUED" ? "Queued At - " +
                                                          new Date(parseInt(item.queuedAt)).toLocaleString()
                                                        : item.status ==="SUCCESS" || item.status === "FAILURE"
                                                        ? "Finished At - " +
                                                          new Date(parseInt(item.finishedAt)).toLocaleString()
                                                        : "Scanning At - " +
                                                          new Date(parseInt(item.scanningAt)).toLocaleString()
                                                }
                                            />
                                        </ListItem>
                                    </Grid>
    
                                    <Grid
                                        item
                                        md={1}
                                        style={{ backgroundColor: "#fff" }}
                                    >
                                        <ListItem
                                            style={{
                                                justifyContent: "center",
                                                paddingTop: 26,
                                                textAlign: "center",
                                            }}
                                        >
                                            <div>
                                                <IconContext.Provider
                                                    value={{ size: "1.5em" }}
                                                >
                                                    <div
                                                        aria-controls="simple-menu"
                                                        aria-haspopup="true"
                                                        onClick={(e) =>
                                                            handleClickEllipsis(
                                                                e,
                                                                item
                                                            )
                                                        }
                                                    >
                                                        <MdMoreHoriz />
                                                    </div>
                                                </IconContext.Provider>
    
                                                <ThemeProvider theme={menuTheme}>
                                                    <Menu
                                                        id="simple-menu"
                                                        anchorEl={anchorEl}
                                                        open={Boolean(anchorEl)}
                                                        onClose={handleClose}
                                                    >
                                                        <div
                                                            style={{
                                                                boxShadow:
                                                                    "6px 6px 2px 1px rgba(0, 0, 255, .2)",
                                                            }}
                                                        >
                                                            <Card>
                                                                <MenuItem
                                                                    item
                                                                    className={
                                                                        classes.menu
                                                                    }
                                                                >
                                                                    <Grid
                                                                        container
                                                                        spacing={1}
                                                                        direction="row"
                                                                        onClick={() =>
                                                                            handleDeleteScanResult(
                                                                                item
                                                                            )
                                                                        }
                                                                    >
                                                                        <Grid item xs>
                                                                            <FiDelete />
                                                                        </Grid>
                                                                        <Grid item xs>
                                                                            Delete
                                                                        </Grid>
                                                                    </Grid>
                                                                </MenuItem>
                                                            </Card>
                                                        </div>
                                                    </Menu>
                                                </ThemeProvider>
                                            </div>
                                        </ListItem>
                                    </Grid>
                                </Grid>
                                <div>
                                    <Divider style={{ width: "80%" }} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    } else {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 20,
                }}
            >
                No Result Found
            </div>
        );
    }
    
  
  }



  return (
    <div>
        <Header />
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
            }}
        >
            <div style={{ padding: 16 }}>
                <Grid item xs>
                    <ThemeProvider>
                        <Button
                            style={{ textTransform: "none", fontSize: "1em" }}
                            className={classes.button}
                            onClick={() =>props.history.push("/add-scanning-result")}
                            variant="outlined"
                            color="primary"
                        >
                            <IconContext.Provider value={{ size: "1.5em" }}>
                                <AddIcon />
                            </IconContext.Provider>
                            Add Scan Result
                        </Button>
                    </ThemeProvider>
                </Grid>
            </div>
        </div>
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    Scan Results
                </Typography>
                <Grid
                    container
                    spacing={2}
                    style={{ width: "100%", paddingLeft: 20, paddingTop: 15 }}
                >
                    <Grid container spacing={0}>
                        <Grid item md={2} xs={6}>
                            <ListItem
                                style={{
                                    backgroundColor: "#fff",
                                    textAlign: "center",
                                    fontWeight: 400,
                                }}
                            >
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography
                                                variant="h6"
                                                color="textPrimary"
                                            >
                                                Repository Name
                                            </Typography>
                                        </React.Fragment>
                                    }
                                ></ListItemText>
                            </ListItem>
                        </Grid>
                        <Grid item md={2} xs={6}>
                            <ListItem
                                style={{
                                    backgroundColor: "#fff",
                                    textAlign: "center",
                                }}
                            >
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography
                                                variant="h6"
                                                color="textPrimary"
                                            >
                                                Scan Status
                                            </Typography>
                                        </React.Fragment>
                                    }
                                ></ListItemText>
                            </ListItem>
                        </Grid>
                        <Grid item md={1} xs={3}>
                            <ListItem
                                style={{
                                    backgroundColor: "#fff",
                                    textAlign: "center",
                                }}
                            >
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography
                                                variant="h6"
                                                color="textPrimary"
                                            >
                                                Findings
                                            </Typography>
                                        </React.Fragment>
                                    }
                                ></ListItemText>
                            </ListItem>
                        </Grid>

                        <Grid item md={3}>
                            <ListItem
                                style={{
                                    backgroundColor: "#fff",
                                    textAlign: "center",
                                }}
                            >
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography
                                                variant="h6"
                                                color="textPrimary"
                                            >
                                                Time Stamp
                                            </Typography>
                                        </React.Fragment>
                                    }
                                ></ListItemText>
                            </ListItem>
                        </Grid>
                        <Grid item md={1} xs={6}>
                            <ListItem
                                style={{
                                    backgroundColor: "#fff",
                                    textAlign: "center",
                                    fontWeight: 400,
                                }}
                            >
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography
                                                variant="h6"
                                                color="textPrimary"
                                            >
                                                Action
                                            </Typography>
                                        </React.Fragment>
                                    }
                                ></ListItemText>
                            </ListItem>
                        </Grid>
                    </Grid>
                </Grid>
                {renderBasedOnTable()}
            </CardContent>
        </Card>
    </div>
  );

}


