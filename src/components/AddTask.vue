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
        <ion-item v-if="addType === 'tasks'">
          <ion-label position="floating">Assignee</ion-label>
          <ion-input v-model="assignee"></ion-input>
        </ion-item>
        <ion-item v-if="addType === 'events'">
          <ion-label position="floating">Date</ion-label>
          <ion-input v-model="date"></ion-input>
        </ion-item>
        <ion-item v-if="addType === 'events'">
          <ion-label position="floating">Time</ion-label>
          <ion-input v-model="time"></ion-input>
        </ion-item>
        <ion-item v-if="addType === 'events'">
          <ion-label position="floating">Who</ion-label>
          <ion-input v-model="who"></ion-input>
        </ion-item>
        <ion-item v-if="addType === 'events'">
          <ion-label position="floating">Description</ion-label>
          <ion-input v-model="description"></ion-input>
        </ion-item>
        <ion-button @click="addItem">Add</ion-button>
      </ion-content>
    </ion-modal>
  </template>
  
  <script lang="ts" setup>
  import { ref, defineEmits, defineProps } from 'vue';
  import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';

  defineProps({
    addType: String,
  });

  const isOpen = ref(true);
  const title = ref('');
  const assignee = ref('');
  const date = ref('');
  const who = ref('');
  const description = ref('');
  const time = ref('')
  const emit = defineEmits(['add-item']);
  
  const addItem = () => {
    emit('add-item', { title: title.value, 
                        assignee: assignee.value, 
                        date: date.value, 
                        time: time.value,
                        who: who.value,
                        description: description.value });
    title.value = '';
    assignee.value = '';
    date.value = '';
    time.value = '';
    who.value = '';
    description.value = '';
    isOpen.value = false; // Close the modal
  };
  </script>
  