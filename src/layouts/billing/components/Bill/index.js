import PropTypes from "prop-types";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import { useArgonController } from "context";

function Bill({ name }) {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  const handleDelete = () => {
    // Logique pour supprimer l'élément ici
    console.log(`Supprimer ${name}`);
  };

  const handleEdit = () => {
    // Logique pour éditer l'élément ici
    console.log(`Modifier ${name}`);
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

Bill.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Bill;
