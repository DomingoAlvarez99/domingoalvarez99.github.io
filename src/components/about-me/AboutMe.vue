<template>
  <Page class="about" title="Sobre mí">
    <template #content>
      <v-col cols="12">
        <p v-for="item in descripton" :key="item" v-html="item" />
        <p v-html="technologies" />
      </v-col>
      <v-col cols="12">
        <h2>Experiencia</h2>
        <v-timeline
          class="mt-2"
          :reverse="reverseTimeline"
          :dense="$vuetify.breakpoint.smAndDown"
        >
          <v-timeline-item
            v-for="(item, i) in actualTimelineItems"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <v-card :color="item.color" dark>
              <v-card-title class="text-h6">
                {{ item.title }}
                {{ item.company ? `en ${item.company}` : '' }}
                <p
                  :class="!$vuetify.breakpoint.mdAndUp ? 'ml-3' : ''"
                  class="subtitle-1 my-0 white--text"
                >
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
                      v-for="(f, i) in item.description.functions.items"
                      :key="i"
                    >
                      {{ f }}
                    </li>
                  </ul>
                </div>
                <div class="tools mt-4">
                  <span
                    >Principalmente usando:
                    {{ item.tools.map((e) => `#${e}`).join(' ') }}</span
                  >
                </div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
        <div
          v-if="actualTimelineItems.length < timelineItems.length"
          class="text-center mt-5"
        >
          <v-btn
            :ripple="false"
            class="mt-5"
            outlined
            color="accent"
            @click="displayAllItems()"
          >
            Mostrar más
          </v-btn>
        </div>
      </v-col>
    </template>
  </Page>
</template>

<script>
import Page from '@/components/shared/Page';
import jobs from '@/data/jobs.json';
import { descripton, technologies } from '@/data/about-me.json';

export default {
  components: {
    Page,
  },
  data() {
    return {
      descripton: descripton,
      technologies: technologies,
      reverseTimeline: true,
      timelineItems: jobs,
      actualTimelineItems: [],
    };
  },
  methods: {
    sortTimeline() {
      this.timelineItems.sort(({ id: a }, { id: b }) => b - a);
      this.actualTimelineItems = this.timelineItems.slice(0, 3);
    },
    displayAllItems() {
      this.actualTimelineItems = this.timelineItems;
    },
  },
  mounted() {
    this.sortTimeline();
  },
};
</script>

<style lang="scss" scoped>
.about {
  button:hover {
    background-color: var(--v-accent-base);
    color: white !important;
  }

  button {
    font-size: 0.9rem;
    border: 2px solid var(--v-accent-base);
  }
}
</style>
