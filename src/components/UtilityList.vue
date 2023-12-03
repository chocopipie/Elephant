<template>
    <ion-grid>
      <ion-row>
        <ion-col size="6" v-for="(item, index) in items" :key="index">
            <div class="utilityItem">
              <ion-label class="name">{{ item.label }}</ion-label>
              <ion-icon :src="item.icon"></ion-icon>
              <ion-label class="available">Available</ion-label>
            </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </template>
  
  
  <script setup lang="ts">
    import { ref } from 'vue';
    import { star, tvOutline } from 'ionicons/icons';
    import washingMachineIcon from '@/assets/icons/washing-machine.svg';
    import dishwWasherIcon from '@/assets/icons/dishwasher.svg';
    import ovenIcon from '@/assets/icons/oven.svg';
    import stoveIcon from '@/assets/icons/stove.svg';
    import tvIcon from '@/assets/icons/tv.svg';
    import hairDryerBoldIcon from '@/assets/icons/hair-dryer-bold.svg';
    interface ListItem {
        label: string;
        icon: string;
        availability: boolean;
    }

    const items = ref<ListItem[]>([
        { label: 'Washing Machine', icon: washingMachineIcon, availability: true },
        { label: 'Dryer', icon: hairDryerBoldIcon, availability: true},
        { label: 'Stove', icon: stoveIcon, availability: true },
        { label: 'Oven', icon: ovenIcon, availability: true },
        { label: 'Dishwasher', icon: dishwWasherIcon, availability: true },
        { label: 'Living Room TV', icon: tvIcon, availability: true }  
    ]);
  </script>
  
  <style scoped>
  .utilityItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 170px;
    border: 1px solid #ddd; /* Example border */
    border-radius: 8px; /* Rounded corners */
    background-color: #EAEAEA; /* Background color */
    margin: 5px; /* Space around each item */
    box-shadow: 1px 6px 10px rgba(0, 0, 0, 0.2);
  }
  
  .utilityItem ion-icon {
    font-size: 40px; /* Icon size */
    margin-top: 15px; /* Space between icon and label */
  }
  
  .name {
    font-size: 14px; /* Label font size */
    font-weight: bold;
    text-align: center;
  }
  .available {
    margin-top: 15px;
    font-size: 13px;
    color: white;
    font-weight: 100;
    padding: 4px;
    border-radius: 10%;
    background-color: black;
  }

  </style>
  
  