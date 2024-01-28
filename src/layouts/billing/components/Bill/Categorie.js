// Categorie/Categorie.js
import PropTypes from "prop-types";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import { useArgonController } from "context";

function Categorie({ id, name }) {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  const handleDelete = async () => {
    try {
      const token = sessionStorage.getItem('token');
      console.log("Token récupéré :", token);
  
      // Nettoyez le token si nécessaire (retirez les guillemets)
      const cleanedToken = token ? token.replace(/"/g, '') : '';
      console.log("Token nettoyé :", cleanedToken);
  
      // Envoyer la requête DELETE au service web
      const response = await fetch(`https://0801241705-production.up.railway.app/categorie/delete/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cleanedToken}`,
        },
      });
  
      // Vérifier si la suppression a réussi
      if (response.ok) {
        console.log(`Transmission avec l'id ${id} supprimée avec succès`);
        // Ajoutez ici toute logique supplémentaire que vous souhaitez exécuter après la suppression
      } else {
        console.error(`Échec de la suppression de la Transmission avec l'id ${id}`);
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de la Transmission:', error);
    }
  };

  const handleEdit = () => {
    console.log(`Modifier la catégorie avec l'id ${id}`);
  };

  return (
    <ArgonBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      borderRadius="lg"
      p={3}
      mt={2}
      sx={({ palette: { grey, background } }) => ({
        backgroundColor: darkMode ? background.default : grey[100],
      })}
    >
      <ArgonBox width="100%" display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium" textTransform="capitalize">
          {name}
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox display="flex">
        <ArgonButton variant="text" color="error" onClick={handleDelete}>
          Supprimer
        </ArgonButton>
        {/* <ArgonButton variant="text" color="dark" onClick={handleEdit}>
          Modifier
        </ArgonButton> */}
      </ArgonBox>
    </ArgonBox>
  );
}

Categorie.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Categorie;
