<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Details</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content-container">
        <ItemList />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ItemList from '@/components/ItemList.vue';

</script>

<style>
.content-container {
  padding-top: 150px; /* Adjust this value based on the height of ExploreContainer */
}

.heading {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* Align items at each end of the container */
  padding: 5px 20px; /* Adjust the padding as needed */
  height: 70px;
}

.item1 {
  font-size: 25px;
  flex: 1; /* Take up all available space to push item1 to the very left */
}

.item2,
.item3 {
  margin-left: auto; /* Push item2 and item3 to the right */
}

</style>
