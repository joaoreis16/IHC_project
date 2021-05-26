<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    <p>Olá zarag</p>
      <ExploreContainer name="Tab 1 page" />
      <music-list-items :items="[{name:'HOUSTONFORNICATION'},{name:'SKELETONS'}]">
      </music-list-items>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '../components/ExploreContainer.vue';
import MusicListItems from '../components/MusicListItems.vue';

export default  {
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, MusicListItems }
}
</script>

<style >
tab {
  position: absolute;
  width: 375px;
  height: 83px;
  left: 1px;
  top: 993px;

}
</style> 