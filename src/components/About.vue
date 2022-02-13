<template>
  <v-container id="about" class="about pt-15 pl-10 pb-15 pr-10" fluid>
    <v-row justify="center">
      <v-col cols="12">
        <h4 class="mt-3 font-weight-medium">
          <v-icon medium color="accent"> mdi-account </v-icon>
          ¿Quién soy?
        </h4>
        <p class="mt-3">
          {{ mainDescription.replace('{age}', age) }}
        </p>
        <p>
          {{ secondaryDescription }}
        </p>
        <p>
          {{ technologies }}
        </p>
      </v-col>
      <v-col cols="12">
        <h4 class="mt-3 font-weight-medium">
          <v-icon medium color="accent"> mdi-star </v-icon>
          Experiencia
        </h4>
        <v-timeline
          :reverse="reverseTimeline"
          :dense="$vuetify.breakpoint.smAndDown"
        >
          <v-timeline-item
            v-for="(item, i) in timelineItems"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <v-card :color="item.color" dark>
              <v-card-title class="text-h6">
                {{ item.title }} {{ item.company ? `en ${item.company}` : '' }}
                <p class="subtitle-1 my-0 white--text">
                  {{ item.time }}
                </p>
              </v-card-title>
              <v-card-text class="white text--primary">
                <p class="pt-3">{{ item.description.about }}</p>
                <div v-if="item.description.functions">
                  <p class="mb-2">{{ item.description.functions.title }}</p>
                  <ul>
                    <li
                      class="mt-1"
                      v-for="(myFunction, i) in item.description.functions
                        .items"
                      :key="i"
                    >
                      {{ myFunction }}
                    </li>
                  </ul>
                </div>
                <div class="tools mt-4">
                  <span
                    >Principalmente usando: {{ item.tools.join(', ') }}.</span
                  >
                </div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import jobs from '@/data/jobs.json';
import {
  mainDescription,
  secondaryDescription,
  technologies,
  birthDate,
} from '@/data/about-me.json';

export default {
  data() {
    return {
      mainDescription: mainDescription,
      secondaryDescription: secondaryDescription,
      technologies: technologies,
      birthDate: birthDate,
      reverseTimeline: true,
      timelineItems: jobs,
    };
  },
  methods: {
    sortTimeline() {
      this.timelineItems.sort(({ id: a }, { id: b }) => b - a);
    },
  },
  mounted() {
    this.sortTimeline();
  },
  computed: {
    age() {
      return Math.floor(
        (new Date() - new Date(birthDate).getTime()) / 3.15576e10
      );
    },
  },
};
</script>

<style scoped>
.about h4 {
  font-size: 1.4em;
  color: var(--v-accent-base);
}

.about h5 {
  font-size: 1.2em;
  color: rgb(85, 85, 85);
}

.about h6 {
  font-size: 0.8em;
  color: ligth-gray;
}

.about p {
  font-size: 1.1em;
  color: rgb(85, 85, 85);
}
</style>
