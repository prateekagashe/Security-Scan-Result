import React, { useState, useEffect } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Header from "../Header/Header";

import axios from "axios";
import { IconContext } from "react-icons";
import { Card } from "react-bootstrap";
import CardContent from "@material-ui/core/CardContent";
import { MdKeyboardBackspace } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
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

    form: {
        "& .MuiTextField-root": {
            margin: theme.spacing(2),
            width: "25ch",
        },
        maxWidth: "80%",
    },
}));

const dummy = [
    {
        type: "",
        ruleId: "",
        location: {
            path: "",
            positions: {
                begin: {
                    line: "",
                },
            },
        },
        metadata: {
            description: "",
            severity: "",
        },
    },
];

export default function ScanFormPage(props) {
    const classes = useStyles();
    const [table, setTable] = useState(dummy);
    const [tableShow, setTableShow] = useState(true);

    useEffect(() => {
        let paramScanId = props.match.params.scanId;
        fetchScanResult(paramScanId);
    }, []);

    async function fetchScanResult(paramScanId) {
        let config = {
            params: {
                scanId: paramScanId,
            },
        };
        try {
            let response = await axios.get(
                "http://localhost:5000/fetchScanResultBaseOnId",
                config
            );
            console.log(response.data.findings);
            setTableShow(true);
            setTable(response.data.findings);
        } catch (err) {
            console.log(err);
        }
    }

    function renderBasedOnTable() {
        if (tableShow) {
            let filteredData = [];
            table.map((item) => {
                filteredData.push(item);
            });
            return (
                <div className="tableAndPagination">
                    <div style={{ paddingTop: 0, marginTop: 0 }}>
                        <div>
                            {filteredData.map((item) => {
                                return (
                                    <div>
                                        <Grid container spacing={0}>
                                            <Grid
                                                className="mobileHide"
                                                item
                                                md={2}
                                                xs={4}
                                                style={{
                                                    backgroundColor: "#fff",
                                                }}
                                            >
                                                <ListItem
                                                    style={{
                                                        textAlign: "center",
                                                        cursor: "pointer",
                                                    }}
                                                    alignItems="flex-start"
                                                >
                                                    <ListItemText
                                                        style={{
                                                            paddingTop: 12,
                                                        }}
                                                        primary={item.ruleId}
                                                    />
                                                </ListItem>
                                            </Grid>
                                            <Grid
                                                item
                                                md={3}
                                                xs={6}
                                                style={{
                                                    backgroundColor: "#fff",
                                                }}
                                            >
                                                <ListItem
                                                    style={{
                                                        textAlign: "center",
                                                        cursor: "pointer",
                                                    }}
                                                    alignItems="flex-start"
                                                >
                                                    <ListItemText
                                                        style={{
                                                            paddingTop: 12,
                                                        }}
                                                        primary={
                                                            item.metadata.description
                                                        }
                                                    />
                                                </ListItem>
                                            </Grid>
                                            <Grid
                                                item
                                                md={2}
                                                xs={6}
                                                style={{
                                                    backgroundColor: "#fff",
                                                }}
                                            >
                                                <ListItem
                                                    style={{
                                                        textAlign: "center",
                                                        cursor: "pointer",
                                                    }}
                                                    alignItems="flex-start"
                                                >
                                                    <ListItemText
                                                        style={{
                                                            paddingTop: 12,
                                                        }}
                                                        primary={
                                                            item.metadata.severity
                                                        }
                                                    />
                                                </ListItem>
                                            </Grid>

                                            <Grid
                                                item
                                                md={3}
                                                className="mobileHide"
                                            >
                                                <ListItem
                                                    style={{
                                                        textAlign: "center",
                                                        cursor: "pointer",
                                                    }}
                                                    alignItems="flex-start"
                                                >
                                                    <ListItemText
                                                        style={{
                                                            paddingTop: 12,
                                                        }}
                                                        primary={
                                                            item.location.path + " - " + item.location.positions.begin.line
                                                        }
                                                    />
                                                </ListItem>
                                            </Grid>
                                        </Grid>

                                        <div>
                                            <Divider />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
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
                <div className="backbutton" style={{ padding: 16 }}>
                    <Grid item xs>
                        <ThemeProvider>
                            <Button
                                style={{
                                    textTransform: "none",
                                    fontSize: "1em",
                                }}
                                className={classes.button}
                                onClick={() =>
                                    props.history.push("/scan-results")
                                }
                                variant="contained"
                                color="primary"
                            >
                                <IconContext.Provider value={{ size: "1.5em" }}>
                                    <MdKeyboardBackspace />
                                </IconContext.Provider>
                                Back
                            </Button>
                        </ThemeProvider>
                    </Grid>
                </div>
            </div>

            <Divider />
            <div>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            Findings
                        </Typography>
                        <Grid
                            container
                            spacing={2}
                            style={{ width: "100%", paddingLeft: 20 }}
                        >
                            <Grid className="headings" container spacing={0}>
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
                                                        Rule Id
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        ></ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item md={3} xs={6}>
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
                                                        Description
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
                                                        Severity
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        ></ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item md={3} xs={6}>
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
                                                        Path Name : Line Number
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
        </div>
    );
}
