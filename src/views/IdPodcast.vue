<template>
    <div>
        <v-row>
            <v-col cols="12" lg="12" xl="8">
                <div>
                <div>
                    <v-card flat color="transparent">
                    <v-img
                        :src="article.yoast_head_json.og_image[0].url"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        style="border-radius: 16px"
                    ></v-img>

                    <v-card-text>
                        <div>
                        <v-btn color="accent">PODCAST</v-btn>
                        </div>

                        <div class="text-h4 font-weight-bold primary--text pt-4">
                        <h4>{{article.title.rendered}}</h4>
                        </div>

                        <div class="text-body-1 py-4">
                        Mattis enim ut tellus elementum sagittis vitae et. Enim ut tellus elementum sagittis vitae et leo duis ut. Quis vel eros donec.
                        Faucibus nisl tincidunt eget nullam. Quis commodo odio aenean sed adipiscing diam doneg.
                        </div>

                        <div class="d-flex align-center justify-space-between">
                        <div class="d-flex align-center">
                            <v-avatar color="accent" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                            </v-avatar>

                            <div class="pl-2 text-body-1">Yan Lee · 22 July 2019</div>
                        </div>

                        <div class="d-flex align-center">
                            <div>
                            <v-chip small color="transparent">
                                <v-icon left>mdi-eye</v-icon>1.4k
                            </v-chip>

                            <v-chip small color="transparent">
                                <v-icon left>mdi-comment-outline</v-icon>7 Comment
                            </v-chip>
                            </div>
                        </div>
                        </div>

                        <v-divider class="my-4"></v-divider>

                        <div>
                        <p class="text-subtitle-1 primary--text font-weight-medium">
                         {{article.content.rendered}}
                        </p>
                        </div>

                        <div class="py-4">
                        <v-alert
                            class="font-italic text-h6 text-center"
                            border="left"
                            colored-border
                            color="accent"
                        >
                            Srem Ipsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been
                            the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply .
                        </v-alert>
                        </div>

                        <div class="text-h5 primary--text font-weight-bold">
                        Ultricies mi quis hendrerit dolor
                        <p class="text-subtitle-1 primary--text font-weight-medium mt-5">
                            Quam adipiscing vitae proin sagittis nisl rhoncus. Integer vitae justo eget magna fermentum iaculis eu non. Vitae congue mauris
                            rhoncus aenean vel elit. Nibh mauris cursus mattis molestie. Etiam sit amet nisl purus. At auctor urna nunc id cursus metus. Diam in arcu
                            cursus euismod quis viverra nibh cras.
                        </p>
                        </div>

                        <div class="my-4">
                        <v-row>
                            <v-col cols="6">
                            <v-card>
                                <v-img
                                src="https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_1280.jpg"
                                :aspect-ratio="16 / 9"
                                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                                ></v-img>
                            </v-card>
                            </v-col>

                            <v-col cols="6">
                            <v-card>
                                <v-img
                                src="https://cdn.pixabay.com/photo/2019/11/01/11/08/landscape-4593909_1280.jpg"
                                :aspect-ratio="16 / 9"
                                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                                ></v-img>
                            </v-card>
                            </v-col>
                        </v-row>
                        </div>

                        <div class="text-h5 primary--text font-weight-bold">
                        Nibh tellus molestie nunc non blandit massa enim
                        <div class="text-subtitle-1 primary--text font-weight-medium mt-5">
                            <ul>
                            <li class="my-2">
                                Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Malesuada bibendum arcu vitae elementum curabitur vitae
                                nunc sed. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis.
                            </li>

                            <li class="my-2">
                                Proin libero nunc consequat interdum varius. Amet luctus venenatis lectus magna fringillal urna porttitor. Enim tortor at auctor
                                urna nunc id cursus.
                            </li>

                            <li class="my-2">
                                Volutpat maecenas volutpat blandit aliquam. Adipiscing enim eu turpis egestas pretium aenean pharetra magna Morbi leo
                                urna molestie at elementum eu.
                            </li>
                            </ul>

                            <p>
                            Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Semper auctor neque vitae tempus. Magnis dis
                            parturient montes nascetur ridiculus mus. A condimentum vitae sapien pellentesque habitant morbi tristique. Duis ut diam quam nulla
                            porttitor.
                            </p>
                        </div>
                        </div>

                    </v-card-text>
                    </v-card>
                </div>
                </div>
            </v-col>

            <v-col>
                <div>
                <siderbar />
                </div>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
    name: "IdPodcast",
    data(){
        return{
            article:null,
        }
    },

    mounted () {
        console.log(window.location.href);
        let href=window.location.href
        href=href.split('/')
        href=href[href.length-1]
      axios
        .get('https://Leskameleons.fr/wp-json/wp/v2/posts/'+href)
        .then(response => {this.article = response.data;
            console.log(this.article )
            
        })
        
    },
    methods:{

    }
  };
    
    </script>
    