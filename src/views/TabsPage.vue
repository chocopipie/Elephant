<template>
  <ion-app>
    <ion-menu contentId="main-content">
      <ion-header>
        <ion-toolbar color="tertiary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item href="/tasks">
          <ion-icon aria-hidden="true" :icon="options" />
          <ion-label>Tasks / Chores</ion-label>
        </ion-item>
        
        <ion-item href="/events">
          <ion-icon aria-hidden="true" :icon="alarmOutline" />
          <ion-label>Events</ion-label>
        </ion-item>

        <ion-item href="/groceries">
          <ion-icon aria-hidden="true" :icon="cartOutline" />
          <ion-label>Groceries</ion-label>
        </ion-item>

        <ion-item href="/utilities">
          <ion-icon aria-hidden="true" :icon="constructOutline" />
          <ion-label>Utilities</ion-label>
        </ion-item>

        <ion-item href="/expenses">
          <ion-icon aria-hidden="true" :icon="cashOutline" />
          <ion-label>Expenses</ion-label>
        </ion-item>
      </ion-content>
    </ion-menu>
    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title></ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-router-outlet></ion-router-outlet>
    </div>
  </ion-app>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { options, alarmOutline, cartOutline, cashOutline, constructOutline } from 'ionicons/icons';

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

ion-header {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjust the shadow as needed */
}

ion-menu::part(backdrop) {
  background-color: rgba(136, 115, 142, 0.816);
}

ion-menu::part(container) {
  border-radius: 0 20px 20px 0;

  box-shadow: 4px 0px 16px rgba(154, 113, 154, 0.18);
}
</style>