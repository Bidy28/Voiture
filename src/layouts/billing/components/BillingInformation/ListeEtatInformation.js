// @mui material components
import Card from "@mui/material/Card";

// React components
import { useEffect, useState } from "react";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";
import Etat from "../Bill/Etat";

function ListeEtatInformation() {
  const [etats, setetats] = useState([]);

  useEffect(() => {
    const fetchetats = async () => {
      try {
        const response = await fetch("https://0801241705-production.up.railway.app/etat");
        const data = await response.json();
        setetats(data);
      } catch (error) {
        console.error("Error fetching etats", error);
      }
    };

    fetchetats();
  }, []);

  return (
    <Card id="delete-account">
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Voici la liste
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2}>
      <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
        {etats.map((etat) => (
          <Etat key={etat.id} id={etat.id} name={etat.nom} />
        ))}

        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default ListeEtatInformation;
