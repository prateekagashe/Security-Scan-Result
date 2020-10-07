import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Header from "../Header/Header";
import TextField from "@material-ui/core/TextField";
import Constants from "../../Constants";
import axios from "axios";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Grid from "@material-ui/core/Grid";
import { IconContext } from "react-icons";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        margin: 40,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    form: {
        "& .MuiTextField-root": {
            margin: theme.spacing(2),
            width: "25ch",
        },
    },
}));

export default function ScanFormPage(props) {
    const classes = useStyles();
    const [type, setType] = useState("");
    const [ruleId, setRuleId] = useState("");
    const [path, setPath] = useState("");
    const [lineNumber, setLineNumber] = useState("");
    const [severity, setSeverity] = useState("LOW");
    const [status, setStatus] = useState("QUEUED");
    const [description, setDescription] = useState("");
    const [repositryName, setRepositryName] = useState("");
    const [findings, setFindings] = useState([]);

    function handleTypeChange(event) {
        setType(event.target.value);
    }
    function handleRuleIdChange(event) {
        setRuleId(event.target.value);
    }

    function handlePathChange(event) {
        setPath(event.target.value);
    }

    function handleLineNumberChange(event) {
        setLineNumber(event.target.value);
    }
    function handleSeverity(event) {
        setSeverity(event.target.value);
    }

    function handleStatus(event) {
        setStatus(event.target.value);
    }

    function handleDescrptionChange(event) {
        setDescription(event.target.value);
    }

    function handleRepositryNameChange(event) {
        setRepositryName(event.target.value);
    }

    function handleAddFindings() {
        let tempFindings = findings;
        console.log("temp", tempFindings);
        let temp = {
            type: type,
            ruleId: ruleId,
            location: {
                path: path,
                positions: {
                    begin: {
                        line: lineNumber,
                    },
                },
            },
            metadata: {
                description: description,
                severity: severity,
            },
        };
        tempFindings.push(temp);
        console.log(findings.length);
        setFindings(tempFindings);
        setType("");
        setRuleId("");
        setPath("");
        setLineNumber("");
        setDescription("");
        setSeverity("LOW");
    }
    async function handleSubmitButton() {
        let timestamp = Date.now();
        let tempStatus = status;
        let tempRepositryName = repositryName;
        let tempFindings = findings;
        let tempQueuedAt, tempScanningAt, tempFinishedAt;
        if (status == "QUEUED") {
            tempQueuedAt = timestamp;
        } else if (status == "IN PROGRESS") {
            tempScanningAt = timestamp;
        } else {
            tempFinishedAt = timestamp;
        }
        let data = {
            status: tempStatus,
            repositoryName: tempRepositryName,
            findings: tempFindings,
            queuedAt: tempQueuedAt !== "" ? tempQueuedAt : "",
            scanningAt: tempScanningAt !== "" ? tempScanningAt : "",
            finishedAt: tempFinishedAt !== "" ? tempFinishedAt : "",
        };
        try {
            let leadResponse = await axios.post(
                "http://localhost:5000/addNewScanResult",
                data
            );
            props.history.push("/scan-results");

            console.log(leadResponse);
        } catch (err) {
            console.log(err);
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
                            <Button
                                style={{
                                    textTransform: "none",
                                    fontSize: "1em",
                                }}
                                className={classes.button}
                                onClick={() =>
                                    props.history.push("/scan-results")
                                }
                                color="primary"
                            >
                                <IconContext.Provider value={{ size: "1.5em" }}>
                                    <VisibilityIcon />
                                </IconContext.Provider>
                                View Scan Results
                            </Button>
                    </Grid>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            Scanning Form
                        </Typography>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <form
                                className={classes.form}
                                noValidate
                                autoComplete="off"
                            >
                                <div className="row">
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Repositry Name"
                                        helperText="Please enter repositry name"
                                        value={repositryName}
                                        onChange={handleRepositryNameChange}
                                        variant="outlined"
                                    />
                                    <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Status"
                                        value={status}
                                        onChange={handleStatus}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        helperText="Please select status"
                                        variant="outlined"
                                    >
                                        {Constants.STATUS.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom
                                        >
                                            {"Findings" +
                                                " - " +
                                                findings.length}
                                        </Typography>
                                        <div className="row">
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Path"
                                                helperText="Please enter path"
                                                value={path}
                                                onChange={handlePathChange}
                                                variant="outlined"
                                            />
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Line Number"
                                                type="number"
                                                helperText="Please enter line number"
                                                value={lineNumber}
                                                onChange={
                                                    handleLineNumberChange
                                                }
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="row">
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Rule Id"
                                                helperText="Please enter rule id"
                                                value={ruleId}
                                                onChange={handleRuleIdChange}
                                                variant="outlined"
                                            />
                                            <TextField
                                                id="outlined-select-currency-native"
                                                select
                                                label="Severity"
                                                value={severity}
                                                onChange={handleSeverity}
                                                SelectProps={{
                                                    native: true,
                                                }}
                                                helperText="Please select Severity"
                                                variant="outlined"
                                            >
                                                {Constants.SEVERITY.map(
                                                    (option) => (
                                                        <option
                                                            key={option.value}
                                                            value={option.value}
                                                        >
                                                            {option.label}
                                                        </option>
                                                    )
                                                )}
                                            </TextField>
                                        </div>
                                        <div className="row">
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Type"
                                                helperText="Please enter type"
                                                value={type}
                                                onChange={handleTypeChange}
                                                variant="outlined"
                                            />
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Description"
                                                helperText="Please enter description"
                                                multiline
                                                rows={4}
                                                value={description}
                                                onChange={
                                                    handleDescrptionChange
                                                }
                                                variant="outlined"
                                            />
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                            }}
                                        >
                                            <Button
                                                variant="outlined"
                                                disabled={
                                                    (description &&
                                                        severity &&
                                                        lineNumber &&
                                                        path &&
                                                        ruleId &&
                                                        type) !== ""
                                                        ? false
                                                        : true
                                                }
                                                color="primary"
                                                onClick={() =>
                                                    handleAddFindings()
                                                }
                                            >
                                                Add Findings
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                        paddingTop: 10,
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={
                                            findings.length > 0 &&
                                            repositryName !== "" &&
                                            status
                                                ? false
                                                : true
                                        }
                                        onClick={() => handleSubmitButton()}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
