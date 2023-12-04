<template>
    <div class="heading">
        <strong class="item1">{{item1Text}}</strong>
        <ion-button class="item2" fill="clear" @click="handleItem2ButtonClick">
        <ion-icon slot="icon-only" :icon="refreshOutline"></ion-icon>
        </ion-button>
        <ion-button class="item3" fill="clear" @click="showAddItemModal">
            <ion-icon slot="icon-only" :icon="addOutline"></ion-icon>
        </ion-button>
        <AddTask v-if="isAddItemModalOpen" @add-item="handleAddItem" />
    </div>
    <ion-list>
        <ion-card :class="{ 'completed-card': item.completed }" v-for="item in getTask" :key="item">
            <ion-card-content>
                <div>
                    <ion-checkbox :checked="item.completed" label-placement="end" @click="toggleCompletion(item)">{{ item.title }}</ion-checkbox>
                    <div class="add">{{ item.add }}</div>
                </div>
                <div class="assignee" >
                    <ion-icon  v-for="asignee in item.asignees" :src="asignee"></ion-icon>
                </div>
            </ion-card-content>
        </ion-card>
    </ion-list>
  </template>
  
  <script setup lang="ts">
    import { ref, computed } from 'vue';
    import { addOutline, refreshOutline } from 'ionicons/icons';
    import bear from '@/assets/icons/user-avatar-6.svg';
    import girl from '@/assets/icons/user-avatar-8.svg';
    import glad from '@/assets/icons/user-avatar-glad.svg';
    import alien from '@/assets/icons/user-avatar-alien.svg';
    import robot from '@/assets/icons/user-avatar-robot.svg';
    import AddTask from '@/components/AddTask.vue';

    interface Item {
        title: string;
        add: string;
        completed: boolean;
        asignees?: string[];
    }

    const items = ref<Item[]>([
        { title: 'Pick up groceries', add: 'By 11/1/23', completed: false, asignees: [bear, girl] },
        { title: 'Take out trash', add: 'By 11/2/23', completed: false, asignees: [glad] },
        { title: 'Vacuum living room', add: 'By 11/1/23', completed: false, asignees: [bear, alien, robot] },
        { title: 'Mop floor', add: 'By 11/2/23', completed: false, asignees: [girl, glad] },
        { title: 'Clean bathroom', add: 'By 11/2/23', completed: false, asignees: [robot] },
    ]);

    const toggleCompletion = (item: Item) => {
        item.completed = !item.completed;
    };

    const item1Text = ref('All Tasks');

    // when clicking on refesh icon, change title/task list
    const handleItem2ButtonClick = () => {
        item1Text.value = item1Text.value === 'All Tasks' ? 'My Tasks' : 'All Tasks';
    };

    // filter items list based on All Tasks or My Tasks
    const getTask = computed(() => {
        if (item1Text.value === "My Tasks") {
            return items.value.filter(item => item.asignees && item.asignees.includes(bear));
        }
        return items.value;
    })

    const isAddItemModalOpen = ref(false);

    const showAddItemModal = () => {
        isAddItemModalOpen.value = true;
    };

    const handleAddItem = (newItem: { title: string; assignee: string }) => {
        const currentDate = new Date();
        const formattedDate = `By ${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear().toString().slice(-2)}`;
        items.value.push({ title: newItem.title, add: formattedDate, completed: false, asignees: [bear] }); // asignees: [newItem.asignee] => not working
        isAddItemModalOpen.value = false;
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

    ion-card-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between; /* Align items at each end of the container */
        padding: 10px 10px; /* Adjust the padding as needed */
        height: 70px;
    }

    .assignee {
        font-size: 35px; /* Icon size */
        margin-top: 15px; /* Space between icon and label */
        margin-left: auto;
    }

    .add {
        color: gray;
    }
    .completed-card {
        color: black;
        --checkbox-background-checked: black;
    }

  </style>
  
  