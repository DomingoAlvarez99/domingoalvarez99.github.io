<template>
  <div class="services">
    <v-container id="services" class="services pt-15 pl-10 pb-15 pr-10" fluid>
      <v-row justify="center">
        <v-col cols="12">
          <h2 class="text-center">
            <v-icon medium color="white"> mdi-bookmark </v-icon>
            Lo que uso & hago
          </h2>
        </v-col>
        <v-col
          v-for="item in items"
          :key="item.title"
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="4"
          class="text-center"
        >
          <v-icon x-large color="white">
            {{ item.icon }}
          </v-icon>
          <h4 class="mt-2 font-weight-medium">
            {{ item.title }}
          </h4>
          <!--<p class="mt-3">{{item.text}}</p>-->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import services from '@/data/services.json';

export default {
  data() {
    return {
      items: services,
    };
  },
};
</script>

<style scoped>
.services {
  background-color: var(--v-primary-base);
}

.services h2 {
  font-size: 1.4em;
  color: white;
}
.services h4 {
  font-size: 1.15em;
  color: white;
}

.services p {
  font-size: 0.95em;
  color: white;
}
</style>
