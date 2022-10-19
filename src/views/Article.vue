<template>
    <div>
      <v-row>
        <v-col cols="12" lg="12" xl="8">
          <div>
            <div>
              <div>
                <h2 class="text-h4 font-weight-bold">Article</h2>
  
                <h4 class="text-h6">Le Blabla spécial Kaméléon</h4>
              </div>
  
              <v-divider class="my-4"></v-divider>
  
              <v-row>
                <v-col cols="12" md="6" lg="4" v-for="i in article" :key="i">
                  <v-hover
                    v-slot:default="{ hover }"
                    open-delay="50"
                    close-delay="50"
                  >
                    <div>
                      <v-card
                        flat
                        :color="hover ? 'white' : 'transparent'"
                        :elevation="hover ? 12 : 0"
                        hover
                        
                        @click="goTodetail(i.id)"
                      >
                        <v-img
                          :src="i.yoast_head_json.og_image[0].url"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                          height="200px"
                          class="elevation-2"
                          style="border-radius: 16px"
                        >
                          <v-card-text>
                            <v-btn color="accent">{{i.yoast_head_json.og_type}}</v-btn>
                          </v-card-text>
                        </v-img>
  
                        <v-card-text>
                          <div class="text-h5 font-weight-bold primary--text">
                            {{i.yoast_head_json.title}}
                          </div>
  
                          <div class="text-body-1 py-4">
                            {{i.yoast_head_json.og_description}}
                          </div>
  
                          <div class="d-flex align-center">
                            <v-avatar color="accent" size="36">
                              <v-icon dark>mdi-feather</v-icon>
                            </v-avatar>
  
                            <div class="pl-2"> {{i.date}}</div>
                          </div>
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-hover>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
  
  
      </v-row>
    </div>
  </template>
  
  <script>
    import axios from 'axios'
  export default {
    name: "Article",
    data(){
        return{
            article:null,
        }
    },

    mounted () {
      axios
        .get('https://leskameleons.fr/wp-json/wp/v2/posts?tags=92')
        .then(response => {this.article = response.data;
                        console.log(this.article)
        })
        
    },
    methods:{
      goTodetail(id) {
        this.$router.push({name:'IdPodcast',params:{id:id}})
      }
    }
  };
  </script>
  