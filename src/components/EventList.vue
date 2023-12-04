<template>
    <div class="heading">
        <strong class="item1">Upcoming Event</strong>
        <ion-button class="item3" fill="clear" @click="showAddItemModal">
            <ion-icon slot="icon-only" :icon="addOutline"></ion-icon>
        </ion-button>
        <AddTask v-if="isAddItemModalOpen" :add-type="'events'" @add-item="handleAddItem" />
    </div>
    <ion-list>
        <ion-card v-for="item in items" :key="item">
            <ion-accordion-group>
                <ion-accordion value="first">
                    <ion-item slot="header">
                        <div class="item-header">
                            <ion-label class="title">{{ item.title }}</ion-label>
                            <ion-label class="reg">{{ item.add }}</ion-label>
                        </div>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                        <div class="details"><ion-label class="subtitle">When</ion-label></div>
                        <div class="details"><ion-label>{{ item.when }}</ion-label></div>
                        <div class="details"><ion-label class="subtitle">Who</ion-label></div>
                        <div class="details"><ion-label>{{ item.who }}</ion-label></div>
                        <div class="details"><ion-label class="subtitle">Description</ion-label></div>
                        <div class="details"><ion-label>{{ item.description }}</ion-label></div>             
                    </div>
                </ion-accordion>
            </ion-accordion-group>
        </ion-card>
    </ion-list>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue';
    import { addOutline } from 'ionicons/icons';
    import AddTask from './AddTask.vue';

    interface Item {
        title: string;
        add: string;
        when: string;
        who: string;
        description: string;
    }

    const items = ref<Item[]>([
        { title: 'Party', add: '11/6/23', when: '11/6/23 @ 7 pm', who: 'name1, name2, name3, name4', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '},
        { title: 'Group Work Session', add: '11/23/23', when: '11/23/23 @ 9 pm', who: 'name1, name2, name3, name4', description:'Enim nec dui nunc mattis enim ut tellus elementum. '},
    ]);

    const isAddItemModalOpen = ref(false);

    const showAddItemModal = () => {
        isAddItemModalOpen.value = true;
    };

    const handleAddItem = (newItem: { title: string, date: string, time: string, who: string, description: string }) => {
        const formattedDateTime = `${newItem.date} @ ${newItem.time}`;
        items.value.push({ title: newItem.title, add: newItem.date, when: formattedDateTime, who: newItem.who, description: newItem.description }); // asignees: [newItem.asignee] => not working
        isAddItemModalOpen.value = false;
    };
    
  </script>
  
  <style scoped>

    .cardHeader {
        background-color: #EAEAEA;
    }

    .title,
    .subtitle {
        margin-top: 10px;
        font-weight: bold;
    }

    .reg {
        font-size: smaller;
        }
    .details {
        margin: 4px;
    }

    .reg {
        margin: 8px;
    }

  </style>
  