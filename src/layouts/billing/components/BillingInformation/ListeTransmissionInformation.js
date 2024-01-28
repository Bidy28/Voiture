// @mui material components
import Card from "@mui/material/Card";

// React components
import { useEffect, useState } from "react";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Billing page components
import Transmission from "layouts/billing/components/Bill/Transmission";

function ListeTransmissionInformation() {
  const [transmissions, settransmissions] = useState([]);

  useEffect(() => {
    const fetchtransmissions = async () => {
      try {
        const response = await fetch("https://0801241705-production.up.railway.app/transmission");
        const data = await response.json();
        settransmissions(data);
      } catch (error) {
        console.error("Error fetching transmissions", error);
      }
    };

    fetchtransmissions();
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
        {transmissions.map((transmission) => (
          <Transmission key={transmission.id} id={transmission.id} name={transmission.nom} />
        ))}

        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default ListeTransmissionInformation;
