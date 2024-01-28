// @mui material components
import Card from "@mui/material/Card";

// React components
import { useEffect, useState } from "react";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Billing page components
import Modele from "layouts/billing/components/Bill/Modele";

function ListeModeleInformation() {
  const [modeles, setmodeles] = useState([]);

  useEffect(() => {
    const fetchmodeles = async () => {
      try {
        const response = await fetch("https://0801241705-production.up.railway.app/modele");
        const data = await response.json();
        setmodeles(data);
      } catch (error) {
        console.error("Error fetching modeles", error);
      }
    };

    fetchmodeles();
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
        {modeles.map((modele) => (
          <Modele key={modele.id} id={modele.id} name={modele.nom} />
        ))}

        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default ListeModeleInformation;
