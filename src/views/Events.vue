<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Details</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content-container">
      <ExploreContainer name="Upcoming Event" />
      <ItemList />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import ItemList from '@/components/ItemList.vue';

</script>

<style>
.content-container {
  padding-top: 150px; /* Adjust this value based on the height of ExploreContainer */
}
</style>