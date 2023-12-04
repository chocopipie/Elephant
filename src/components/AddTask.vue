<template>
    <ion-modal :is-open="isOpen">
      <ion-header>
        <ion-toolbar>
          <ion-title>Add Item</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-label position="floating">Title</ion-label>
          <ion-input v-model="title"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Assignee</ion-label>
          <ion-input v-model="assignee"></ion-input>
        </ion-item>
        <ion-button @click="addItem">Add</ion-button>
      </ion-content>
    </ion-modal>
  </template>
  
  <script lang="ts" setup>
  import { ref, defineEmits } from 'vue';
  import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
  
  const isOpen = ref(true);
  const title = ref('');
  const assignee = ref('');
  const emit = defineEmits(['add-item']);
  
  const addItem = () => {
    emit('add-item', { title: title.value, assignee: assignee.value });
    console.log(assignee.value)
    title.value = '';
    assignee.value = '';
    isOpen.value = false; // Close the modal
  };
  </script>
  