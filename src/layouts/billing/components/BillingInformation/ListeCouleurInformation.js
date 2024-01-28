// @mui material components
import Card from "@mui/material/Card";

// React components
import { useEffect, useState } from "react";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";
import Couleur from "../Bill/Couleur";

function ListeCouleurInformation() {
  const [couleurs, setcouleurs] = useState([]);

  useEffect(() => {
    const fetchcouleurs = async () => {
      try {
        const response = await fetch("https://0801241705-production.up.railway.app/couleur");
        const data = await response.json();
        setcouleurs(data);
      } catch (error) {
        console.error("Error fetching couleurs", error);
      }
    };

    fetchcouleurs();
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
        {couleurs.map((couleur) => (
          <Couleur key={couleur.id} id={couleur.id} name={couleur.nom} />
        ))}

        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default ListeCouleurInformation;
