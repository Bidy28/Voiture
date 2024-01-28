// billing/index.js
import React from 'react';
import Grid from "@mui/material/Grid";
import BaseLayout from './components/BaseLayout';
import BillingInformation from './components/BillingInformation';
import PaymentMethod from './components/PaymentMethod';
import Invoices from './components/Invoices';
import ListeCategorieInformation from './components/BillingInformation/ListeCategorieInformation';
import ListeModeleInformation from './components/BillingInformation/ListeModeleInformation';
import ListeTransmissionInformation from './components/BillingInformation/ListeTransmissionInformation';
import ListeCarburantInformation from './components/BillingInformation/ListeCarburantInformation';
import ListeCouleurInformation from './components/BillingInformation/ListeCouleurInformation';
import ListeEtatInformation from './components/BillingInformation/ListeEtatInformation';

function Billing() {
  return (
    <BaseLayout stickyNavbar>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <BillingInformation />
        </Grid>
      </Grid>
    </BaseLayout>
  );
}

export default Billing;

// Utilisez une nouvelle instance de composant pour la route Categorie
export const CategorieComponent = () => (
  <BaseLayout stickyNavbar>
    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <ListeCategorieInformation />
      </Grid>
    </Grid>
  </BaseLayout>
);


export const ModeleComponent = () => (
  <BaseLayout stickyNavbar>
    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <ListeModeleInformation />
      </Grid>
    </Grid>
  </BaseLayout>
);

export const TransmissionComponent = () => (
  <BaseLayout stickyNavbar>
    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <ListeTransmissionInformation />
      </Grid>
    </Grid>
  </BaseLayout>
);

export const CarburantComponent = () => (
  <BaseLayout stickyNavbar>
    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <ListeCarburantInformation />
      </Grid>
    </Grid>
  </BaseLayout>
);

export const CouleurComponent = () => (
  <BaseLayout stickyNavbar>
    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <ListeCouleurInformation/>
      </Grid>
    </Grid>
  </BaseLayout>
);

export const EtatComponent = () => (
  <BaseLayout stickyNavbar>
    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <ListeEtatInformation/>
      </Grid>
    </Grid>
  </BaseLayout>
);