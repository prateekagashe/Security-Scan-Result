# Security-Scan-Result
# Folder Structure for Backend:
    api/
        config/
            constants.js - Defined all the constants in constants.js
        controllers/
            scan-controller.js - Defined all the functions to handle API calls
        models/
            ScanResults.js - Defined DB Schema in ScanResults.js
        routes/
            scan-routes.js - Defined all the API routes in scan-routes.js
        setup/
            database.js - Database connection file
    Dockerfile
    index.js - Defined the code related to server using express

# Folder Structure for Frontend:
    dashboard/
        src/
            components/
                Header/
                    Header.js - Defined the navbar which is used a component within other components
                    Header.css - CSS for navbar
                ScanResultsPage/
                    ScanResultsPage.js - Component to view all the Scan Results
                ScanFormPage/
                    ScanFormPage.js - Component for adding new Scan Result
                ViewScanResult/
                    ViewFindings.js - Component to view Findings for a specific Scan Result
            utils/
                history.js  
            App.js - Defined all the routes
            Contants.js - Defined all the constants

        Dockerfile
