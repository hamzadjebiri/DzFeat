<template>

  <div>

    
        <!-- ***** ***** ***** ***** *****  DRAWER : - ***** ***** ***** ***** ***** -->

        <v-navigation-drawer   v-model="drawer"  fixed  clipped  app class="hidden-md-and-up" disable-resize-watcher >
    
            <v-list two-line>


                 <v-subheader class="mt-3 grey--text text--darken-1">Recherche :</v-subheader>

                     <v-flex>
    
                        <v-text-field  label="Recherche.."   prepend-inner-icon="search" background-color="white" solo  ></v-text-field>
    
                     </v-flex>

      
                 <v-subheader class="mt-3 grey--text text--darken-1">Catalogue :</v-subheader>

                      <v-list-tile  v-for="(item, index) in DrawerItems"  :key="index">
                             
                           <v-list-tile-content>
                
                               <v-list-tile-sub-title class="text--primary">
                                   
                                    <v-icon>{{ item.ListeIconDrawer }}</v-icon> 
                                    
                                    {{ item.ListeItemDrawer }}
                                    
                               </v-list-tile-sub-title>
                               
                           </v-list-tile-content>
        
                 
                      </v-list-tile>
           

                 </v-list>

       </v-navigation-drawer>

        <!-- ***** ***** ***** ***** *****  toolbar : - ***** ***** ***** ***** ***** -->




    <v-toolbar tabs style="background-image: linear-gradient(90deg,#5b79a2,#2e4469);height: 180px;" >

      
      <v-layout wrap>

           <v-toolbar-side-icon @click.stop="drawer = !drawer"  class="hidden-md-and-up white"></v-toolbar-side-icon>


           <v-toolbar-title style="color:white">DZGital</v-toolbar-title>
    
           <!-- *****   Search :  ***** -->
    
           <v-flex lg7 md6 sm6 xs12   offset-sm1 class="hidden-sm-and-down"  >
    
              <v-text-field label="Recherche.."  prepend-inner-icon="search"  background-color="white" solo ></v-text-field>
               
           </v-flex>


           <v-spacer></v-spacer>

           <!-- *****   Login / Register :  ***** -->

           <div>

                 <v-btn outline color="white">login</v-btn>

                <v-btn outline color="white">register</v-btn>

  
           </div>


           
      </v-layout>

     

      <template v-slot:extension>

          <v-tabs v-model="tabs"  fixed-tabs  color="transparent"  icons-and-text style="height: 110px;">

             
               <v-tabs-slider></v-tabs-slider>
     
               <v-tab  class="primary--text " href="#tab-1">
     
                     <strong style="color:white">test</strong> 
       
                     <v-icon style="color:white">phone</v-icon>
     
               </v-tab>
     
               <v-tab  class="primary--text">
     
                     <strong style="color:white" >test</strong> 
         
                     <v-icon style="color:white" >favorite</v-icon>
     
               </v-tab>
     
               <v-tab  class="primary--text">
     
                     <strong style="color:white" >test</strong> 
         
                     <v-icon style="color:white" >account_box</v-icon>
     
               </v-tab>

        </v-tabs>

      </template>

    </v-toolbar>

   
  </div>

</template>



<script>

  export default {

    data () {

      return {

        tabs: null,

        drawer: false ,

        DrawerItems: [

             { ListeItemDrawer: 'Liste Items',ListeIconDrawer: 'home'  },

           { ListeItemDrawer: 'Liste Items',ListeIconDrawer: 'home'  },
            { ListeItemDrawer: 'Liste Items',ListeIconDrawer: 'home'  },
             { ListeItemDrawer: 'Liste Items',ListeIconDrawer: 'home'  },
              { ListeItemDrawer: 'Liste Items',ListeIconDrawer: 'home'  },
               { ListeItemDrawer: 'Liste Items',ListeIconDrawer: 'home'  },
          
        ],
         
     }

    }
  }
</script>

<style>

   .v-toolbar__content{

      height:110px !important ;
   }

   .v-tabs__container--icons-and-text{

     height: 100px !important ;
   }
</style>
