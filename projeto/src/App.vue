<template>
  <ion-app>
    <explore-container :name="'abc'">
    </explore-container>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import ExploreContainer from './components/ExploreContainer.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    ExploreContainer
  }
});
</script>