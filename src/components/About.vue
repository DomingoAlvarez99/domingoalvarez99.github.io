<template>
  <v-container
    id="about"
    class="about pt-15 pl-10 pb-15 pr-10"
    fluid
  >
    <v-row justify="center">
      <v-col
        cols="12"
      >
        <h4 class="mt-3 font-weight-medium">
          <v-icon
            medium 
            color="accent"
          >
            mdi-account
          </v-icon>
          ¿Quién soy?
        </h4>
        <p class="mt-3">Soy un chico de {{age}} años que vive en Granada y que disfruta desarrollando aplicaciones. Trato de seguir buenas prácticas y de crear código sostenible. Mi motivación es la continua formación y evolución dentro de este mundo. </p>
        <p>Además tengo experiencia en mantener y administrar sistemas, implementar flujos de trabajo CI/CD, automatizar tareas manuales y desplegar aplicaciones en contenedores de software.</p>
        <p>Principalmente uso Java, Spring, JavaScript, VueJS, Git, Docker y Linux.</p>
      </v-col>
      <v-col
        cols="12"
      >
        <h4 class="mt-3 font-weight-medium">
          <v-icon
            medium
            color="accent"
          >
            mdi-star
          </v-icon>
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
            <v-card
              :color="item.color"
              dark
            >
              <v-card-title class="text-h6">
                {{item.title}} {{item.company ? `en ${item.company}` : ''}}
                <p class="subtitle-1 my-0 white--text">
                  {{item.time}}
                </p>
              </v-card-title>
              <v-card-text class="white text--primary">
                <p class="pt-3">{{item.description.about}}</p>
                <div v-if="item.description.functions">
                  <p class="mb-2">{{item.description.functions.title}}</p>
                  <ul>
                    <li 
                      class="mt-1"
                      v-for="(myFunction, i) in item.description.functions.items"
                      :key="i" >
                      {{myFunction}}
                    </li>
                  </ul>
                </div>
                <div
                  class="tools mt-4"
                >
                  <span>Principalmente usando: {{item.tools.join(', ')}}.</span>
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
  export default {
    data() {
      return {
        reverseTimeline: true,
        timelineItems: [
          {
            id: 1,
            title: 'Software Developer Independiente',
            time: 'sept 2019 – presente',
            description: {
              about: 'Arquitectura, análisis, desarrollo, despliegue y mantenimiento de diversos proyectos web para diferentes sectores.'
            },
            color: 'black',
            tools: [
              'Java',
              'Spring',
              'Hibernate',
              'PostgreSQL',
              'Redis',
              'REST',
              'KeyCloak', 
              'JavaScript',
              'VueJS', 
              'Git',
              'TomCat',
              'Nginx',
              'Docker',
              'HAProxy',
              'Linux'
            ],
          },
          {
            id: 2,
            title: 'FullStack Developer',
            company: 'Icired Impagados',
            time: 'mar 2020 – dic 2021',
            description: {
              about: 'Startup sobre consulta y recobro de impagos de personas físicas y jurídicas.',
              functions:  {
                title: 'En este período, entre otras cosas, mis funciones fueron:',
                items: [
                  'Participar en la migración de un monolito en Ruby a una arquitectura de microservicios en Java. (Implementar sistema de autenticación y autorización, sistema de mensajería distribuido en tiempo real, pasarela de pago, servicios de notificaciones, ingesta de logs centralizada..)',
                  'Desarrollar un batch para realizar procesos ETLs. (Homogeneizar datos de entrada transformando ficheros en varios formatos (csv, longitud fija, excel...) para ejecutar procesos comunes y guardar los datos en la plataforma.)',
                  'Añadir nueva funcionalidad y mejorar la plataforma.',
                  'Resolver incidencias de la plataforma.'
                ]
              }
            },
            color: 'blue lighten-1',
            tools: [
              'Java',
              'Spring',
              'Kafka',
              'Hibernate',
              'PostgreSQL',
              'REST', 
              'GraphQL',
              'Elk Stack', 
              'KeyCloak', 
              'JavaScript',
              'VueJS', 
              'Git',
              'Docker',
              'Jira', 
              'WSL 2'
            ],
          },
          {
            id: 3,
            title: 'FullStack Developer',
            company: 'Wavyssa',
            time: 'ene 2021 – presente',
            description: {
              about: 'Startup que gestiona ingresos de hoteles vacacionales.',
              functions:  {
                title: 'Actualmente, mis funciones son:',
                items: [
                  'Desarrollar integraciones con PMSs y Channel Managers.',
                  'Añadir nueva funcionalidad y resolver incidencias de la plataforma.'
                ]
              }
            },
            color: '#785964',
            tools: [
              'Java',
              'Spring',
              'Kafka',
              'jOOQ',
              'PostgreSQL',
              'REST',
              'KeyCloak',
              'JavaScript',
              'VueJS', 
              'Git',
              'Docker',
              'Linux'
            ]
          },
        ],
        age: 0
      }
    },
    methods: {
      getCurrentAge() {
        this.age = Math.floor((new Date() - new Date('1999-04-23').getTime()) / 3.15576e+10)
      },
      sortTimeline() {
        this.timelineItems.sort(({id:a}, {id:b}) => b-a)
      }
    },
    mounted() {
      this.getCurrentAge()
      this.sortTimeline()
    }
  }
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