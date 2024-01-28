// @mui material components
import Card from "@mui/material/Card";

// React components
import { useEffect, useState } from "react";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";
import Carburant from "../Bill/Carburant";

function ListeCarburantInformation() {
  const [carburants, setcarburants] = useState([]);

  useEffect(() => {
    const fetchcarburants = async () => {
      try {
        const response = await fetch("https://0801241705-production.up.railway.app/carburant");
        const data = await response.json();
        setcarburants(data);
      } catch (error) {
        console.error("Error fetching carburants", error);
      }
    };

    fetchcarburants();
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
        {carburants.map((carburants) => (
          <Carburant key={carburants.id} id={carburants.id} name={carburants.nom} />
        ))}

        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default ListeCarburantInformation;
