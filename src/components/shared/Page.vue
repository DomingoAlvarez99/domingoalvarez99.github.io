<template>
  <div class="page animated animationFadeIn px-5">
    <v-container fluid>
      <v-row>
        <v-col class="animated animationFadeInLeft" cols="12">
          <slot name="title">
            <h1 class="title">{{ title }}</h1>
          </slot>
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <slot name="content" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>
