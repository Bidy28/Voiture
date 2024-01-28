import React from 'react';
import PropTypes from 'prop-types';
import './AnnouncementsTable.css';    

// Composant pour afficher la table des annonces
function AnnouncementsTable({ data }) {


  const handleValidation = async (id) => {
    try {
      // Récupérez le token depuis la session storage
      const token = sessionStorage.getItem('token');
      console.log("Token récupéré :", token);

      // Nettoyez le token si nécessaire (retirez les guillemets)
      const cleanedToken = token ? token.replace(/"/g, '') : '';
      console.log("Token nettoyé :", cleanedToken);

      const response = await fetch(`https://0801241705-production.up.railway.app/annonce/valider/${id}`, {
        method: 'GET',  
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cleanedToken}`,
        },
      });

      if (response.ok) {
        // La requête a réussi
        console.log('Validation successful');
        // Ajoutez ici tout code que vous souhaitez exécuter après la validation réussie
      } else {
        // La requête a échoué
        console.error('Validation failed');
        // Ajoutez ici tout code que vous souhaitez exécuter en cas d'échec de validation
      }
    } catch (error) {
      console.error('Error while validating:', error);
    }
  };
  return (
    <table  className="announcements-table">
      <thead>
        <tr>
          <th>Date Annonce</th>
          <th>Nom de la Voiture</th>
          <th>Marque</th>
          <th>Catégorie</th>
          <th>Modèle</th>
          <th>Transmission</th>
          <th>État</th>
          <th>Puissance</th>
          <th>Portes</th>
          <th>Sièges</th>
          <th>Année</th>
          <th>Prix</th>
          <th>Validation</th>
        </tr>
      </thead>
      <tbody>
        {data.map((announcement) => (
          <tr key={announcement.id}>
            <td>{announcement.dateAnnonce}</td>
            <td>{announcement.voiture.nom}</td>
            <td>{announcement.voiture.marque.nom}</td>
            <td>{announcement.voiture.categorie.nom}</td>
            <td>{announcement.voiture.modele.nom}</td>
            <td>{announcement.voiture.transmission.nom}</td>
            <td>{announcement.voiture.etat.nom}</td>
            <td>{announcement.voiture.puissance}</td>
            <td>{announcement.voiture.portes}</td>
            <td>{announcement.voiture.sieges}</td>
            <td>{announcement.voiture.annee}</td>
            <td>{announcement.prix}</td>
            <td>
              {announcement.etatValidation === '0' && (
                <button className="validation-button" onClick={() => handleValidation(announcement.id)}>
                  Valider
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Validation des props en dehors du composant
AnnouncementsTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AnnouncementsTable;
