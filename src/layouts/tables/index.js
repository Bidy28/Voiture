/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import React, { useState, useEffect } from 'react';


// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import AnnouncementsTable from "./data/authorsTableData";

function Tables() {
  const [announcementsData, setAnnouncementsData] = useState([]);

  useEffect(() => {
    // Effectuez la requête pour récupérer les données depuis l'URL
    fetch('https://0801241705-production.up.railway.app/annonce')
      .then(response => response.json())
      .then(data => setAnnouncementsData(data))
      .catch(error => console.error('Erreur lors de la récupération des données :', error));
  }, []);

  const { columns, rows } = authorsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card>
            <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <ArgonTypography variant="h6">Authors table</ArgonTypography>
            </ArgonBox>
            <ArgonBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              {/* Utilisez le composant AnnouncementsTable avec les données récupérées */}
              <AnnouncementsTable data={announcementsData} />
            </ArgonBox>
          </Card>
        </ArgonBox>
        {/* ... Autres éléments de votre interface utilisateur ... */}
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;

