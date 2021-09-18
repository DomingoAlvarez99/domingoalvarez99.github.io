<template>
  <div class="services">
    <v-container
      id="services"
      class="services pt-15 pl-10 pb-15 pr-10"
      fluid
    >
      <v-row justify="center">
        <v-col cols="12">
          <h2 class="text-center">
            <v-icon
              medium 
              color="white"
            >
              mdi-bookmark
            </v-icon>
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
          <v-icon
            x-large
            color="white"
          >
            {{item.icon}}
          </v-icon>
          <h4 class="mt-2 font-weight-medium">
            {{item.title}}
          </h4>
          <!--<p class="mt-3">{{item.text}}</p>-->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            icon: 'mdi-cellphone',
            title: 'ANDROID & SWIFT',
            text: 'Aplicaciones nativas en Android y en Swift.'
          },
          {
            icon: 'mdi-xml',
            title: 'DISEÑO WEB',
            text: 'Diseño responsive e interfaz intuitiva. SPA construidas con el Framework de JavaScript VueJS.'
          },
          {
            icon: 'mdi-web',
            title: 'API REST & GRAPHQL',
            text: 'Permiten realizar la comunicación con el front-end a través del protocolo HTTP enviando JSON. Para ello uso el Framework de Java Spring.'
          },
          {
            icon: 'mdi-database',
            title: 'SQL & NO SQL',
            text: 'Las bases de datos SQL como Postgres se usan para tener datos consistentes usando constraints, en cambio las no SQL como MongoDB se usan para conseguir una programación reactiva.'
          },
          {
            icon: 'mdi-docker',
            title: 'DOCKER',
            text: 'Permite realizar el despligue de una aplicación desde cualquier sistema operativo.'
          },
          {
            icon: 'mdi-hexagon-slice-6',
            title: 'ARQUITECTURAS LIMPIAS',
            text: 'La arquitectura hexagonal & el DDD se usan para hacer una aplicación modular, escalar e independiente de la base de datos aprovechando características de los Frameworks como la inyección de dependencias.'
          }
        ]
      }
    } 
  }
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
    color:white;
  }
</style>