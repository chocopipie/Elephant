<template>
    <ion-list>
        <ion-card :class="{ 'completed-card': item.completed }" v-for="item in items" :key="item">
            <ion-card-content>
                <ion-checkbox :checked="item.completed" label-placement="end" @click="toggleCompletion(item)">{{ item.title }}</ion-checkbox>
                <div class="add">{{ item.add }}</div>
            </ion-card-content>
        </ion-card>
    </ion-list>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue';

    interface Item {
        title: string;
        add: string;
        completed: boolean;
    }

    const items = ref<Item[]>([
        { title: 'Task 1', add: 'By 11/1/23', completed: false },
        { title: 'Task 2', add: 'By 11/2/23', completed: false },
    ]);

    const toggleCompletion = (item: Item) => {
        item.completed = !item.completed;
    };
  </script>
  
  <style scoped>
    ion-list {
        font-weight: 600;
    }

    ion-checkbox {
        --size: 32px;
        --checkbox-background-checked: black;
    }

    ion-checkbox::part(container) {
        border-radius: 6px;
        border: 2.5px solid black;
    }

    ion-card {
        background-color: #EAEAEA;
        color: gray
    }

    .add {
        color: gray;
    }
    .completed-card {
        color: black;
        --checkbox-background-checked: black;
    }

  </style>
  