<template>
  <div class="portfolio">
    <v-container id="portfolio" class="portfolio pt-15 pl-10 pb-15 pr-10" fluid>
      <v-row justify="center">
        <v-col cols="12">
          <h2 class="text-center">
            <v-icon medium color="accent"> mdi-folder-open </v-icon>
            Proyectos
          </h2>
        </v-col>
        <v-col cols="12">
          <v-tabs
            class="mt-5"
            v-model="currentItem"
            background-color="white"
            color="accent"
            centered
          >
            <v-tab
              v-for="tab in tabs"
              :key="tab.key"
              class="project-tab"
              :class="tab.css"
              :href="'#' + tab.key"
              @click="currentItem = tab.key"
            >
              {{ tab.title }}
            </v-tab>
          </v-tabs>
          <v-tabs-items class="mt-10" v-model="currentItem">
            <v-tab-item :value="currentItem">
              <v-row>
                <v-col
                  v-for="item in filteredItems()"
                  :key="item.title"
                  cols="12"
                  sm="6"
                  md="6"
                  lg="4"
                >
                  <v-hover v-slot="{ hover }">
                    <v-img
                      :src="require(`@/assets/${item.src}`)"
                      :lazy-src="requireImg(item.src)"
                      aspect-ratio="1"
                      :class="`${hover ? '' : 'item-container'}`"
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out v-card--reveal display-3"
                        >
                          <div class="text-center">
                            <h6 class="portfolio-title font-weight-bold">
                              {{ item.title }}
                            </h6>
                            <h6 class="portfolio-techs">
                              {{ item.technologies.join(' / ') }}
                            </h6>
                            <v-btn
                              class="pt-5 pb-5"
                              outlined
                              color="white"
                              @click="enableDialog(item.details)"
                            >
                              VER DETALLES
                            </v-btn>
                          </div>
                        </div>
                      </v-expand-transition>
                    </v-img>
                  </v-hover>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
          <v-dialog v-model="dialog" persistent max-width="900">
            <v-card>
              <v-carousel
                progress-color="accent"
                hide-delimiters
                v-model="model"
                height="auto"
              >
                <v-carousel-item
                  v-for="img in currentItemDetails.imgs"
                  :key="img"
                >
                  <v-img :aspect-ratio="16 / 9" :src="requireImg(img)" />
                </v-carousel-item>
              </v-carousel>
              <v-card-title class="headline">
                {{ currentItemDetails.title }}
              </v-card-title>
              <v-card-text class="pb-4">
                <v-btn
                  class="mr-1 text-capitalize white--text"
                  v-for="tag in currentItemDetails.tags"
                  :key="tag.title"
                  rounded
                  x-small
                  :color="tag.backgroundColor"
                >
                  {{ tag.title }}
                </v-btn>
              </v-card-text>
              <v-divider class="mx-6"></v-divider>
              <v-card-text class="pt-3">{{
                currentItemDetails.description
              }}</v-card-text>
              <v-card-actions>
                <v-btn
                  class="mb-2"
                  v-for="item in currentItemDetails.links"
                  :key="item.icon"
                  fab
                  outlined
                  color="white"
                  :href="item.link"
                  target="_blank"
                >
                  <v-icon :color="item.color">
                    {{ item.icon }}
                  </v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn class="mb-2" color="accent" text @click="dialog = false">
                  Cerrar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import projects from '@/data/projects.json';

const TYPES = {
  WEB: 'web',
  ALL: 'all',
};

export default {
  data: () => ({
    model: 0,
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
    currentItem: TYPES.ALL,
    currentItemDetails: {},
    dialog: false,
    tabs: [
      { key: TYPES.ALL, title: 'TODOS', css: '' },
      { key: TYPES.WEB, title: 'WEB', css: 'ml-5' },
    ],
    items: projects,
  }),
  methods: {
    filteredItems() {
      return this.currentItem == TYPES.ALL
        ? this.items
        : this.items.filter((item) => item.type === this.currentItem);
    },
    enableDialog(details) {
      this.dialog = true;
      this.currentItemDetails = details;
    },
    requireImg(path) {
      return require(`@/assets/${path}`);
    },
  },
  mounted() {
    let currentId = this.$route.query.id;

    if (!currentId) return;

    let currentItem = this.items.find((i) => i.id == currentId);

    if (!currentItem) return;

    this.enableDialog(currentItem.details);
  },
};
</script>

<style scoped>
.portfolio {
  background-color: white;
}

.portfolio h2 {
  font-size: 1.4em;
  color: var(--v-accent-base);
}
.portfolio h4 {
  font-size: 1.15em;
}

.portfolio p {
  font-size: 0.95em;
}

.item-container {
  border: 2px solid var(--v-primary-darken1);
  border-radius: 2px;
}

.v-card--reveal {
  background-color: var(--v-primary-darken1);
  color: white;
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
}

.project-tab {
  font-size: 1.05em;
}

.v-card--reveal button:hover {
  background-color: white;
  color: var(--v-primary-base) !important;
}

.v-card--reveal button {
  font-size: 0.3em;
  border: 2px solid white;
}

.portfolio-title {
  font-size: 0.45em !important;
}

.portfolio-techs {
  font-size: 0.3em !important;
}

@media only screen and (max-width: 600px) {
  .project-tab {
    font-size: 1em;
    padding: 0em !important;
  }
}
</style>
