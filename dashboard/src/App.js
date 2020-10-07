import React from "react";
import {
    Redirect,
    Route,
    Switch,
    BrowserRouter as Router,
} from "react-router-dom";
import "./App.css";
import FormPage from "../src/components/ScanFormPage/ScanFormPage";
import FormResults from "../src/components/ScanResultsPage/ScanResultsPage";
import ViewFindings from "../src/components/ViewFindings/ViewFindings";
import history from "./utils/history";
function App() {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path="/scan-results" exact component={FormResults} />

                    <Route path="/add-scanning-result" exact component={FormPage}/> 

                    <Route path="/view-scan-result-findings/:scanId" component={ViewFindings}/>

                    <Redirect to="/add-scanning-result" />
                    <Route path="/" exact component={FormPage} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
