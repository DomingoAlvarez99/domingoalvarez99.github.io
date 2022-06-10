<template>
  <Page class="about" title="Sobre mí">
    <template #content>
      <v-col cols="12">
        <p v-for="item in descripton" :key="item" v-html="item" />
        <p v-html="technologies" />
      </v-col>
      <v-col cols="12">
        <h2 id="experience">Experiencia</h2>
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
              <v-card-title class="card-title text-h6">
                {{ item.title }}
                {{ item.company ? `en ${item.company}` : '' }}
                <p class="subtitle-1 my-0 white--text">
                  {{ formatDateRange(item.startedAt, item.finishedAt) }}
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
                  <span> {{ item.tools.map((e) => `#${e}`).join(' ') }}</span>
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
      timelineItems: jobs.map((job) => {
        job.startedAt = new Date(job.startedAt.year, job.startedAt.month - 1);
        job.finishedAt =
          job.finishedAt != null
            ? new Date(job.finishedAt.year, job.finishedAt.month - 1)
            : new Date();

        return job;
      }),
      actualTimelineItems: [],
    };
  },
  methods: {
    sortTimeline() {
      this.timelineItems.sort(({ finishedAt: a }, { finishedAt: b }) => b - a);
      this.actualTimelineItems = this.timelineItems.slice(0, 3);
    },
    displayAllItems() {
      this.actualTimelineItems = this.timelineItems;
    },
    formatDateRange(startingDate, endingDate) {
      return `${this.formatDate(startingDate)} - ${
        this.isToday(endingDate) ? 'actualidad' : this.formatDate(endingDate)
      } (${this.dateDiff(startingDate, endingDate)})`;
    },
    isToday(date) {
      const withoutTime = (date) => date.setHours(0, 0, 0, 0);

      return withoutTime(date) == withoutTime(new Date());
    },
    formatDate(date) {
      return date.toLocaleString('es-ES', { month: 'long', year: 'numeric' });
    },
    dateDiff(startingDate, endingDate) {
      var startDate = new Date(
        new Date(startingDate).toISOString().substr(0, 10)
      );
      if (!endingDate) {
        endingDate = new Date().toISOString().substr(0, 10);
      }
      var endDate = new Date(endingDate);
      if (startDate > endDate) {
        var swap = startDate;
        startDate = endDate;
        endDate = swap;
      }
      var startYear = startDate.getFullYear();
      var february =
        (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0
          ? 29
          : 28;
      var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      var yearDiff = endDate.getFullYear() - startYear;
      var monthDiff = endDate.getMonth() - startDate.getMonth();
      if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
      }
      var dayDiff = endDate.getDate() - startDate.getDate();
      if (dayDiff < 0) {
        if (monthDiff > 0) {
          monthDiff--;
        } else {
          yearDiff--;
          monthDiff = 11;
        }
        dayDiff += daysInMonth[startDate.getMonth()];
      }

      var roundedMonthDiff = monthDiff + (dayDiff == 0 ? 0 : 1);

      var message =
        yearDiff > 0 ? `${yearDiff} ${yearDiff > 1 ? 'años' : 'año'}` : '';
      message +=
        roundedMonthDiff > 0
          ? `${yearDiff > 0 ? ' y ' : ''}${roundedMonthDiff} ${
              roundedMonthDiff > 1 ? 'meses' : 'mes'
            }`
          : '';

      return message;
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
  .card-title {
    display: block !important;
  }
}
</style>
