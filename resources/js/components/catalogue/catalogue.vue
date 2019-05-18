<template>

 <v-container fluid grid-list-md>

  <v-layout wrap row >

       <v-layout wrap align-center>

             <v-flex lg5 xs12 sm6 d-flex>
        <v-select
          
          label="affichage par :"
        ></v-select>
      </v-flex>

         <v-flex lg5  xs12 sm6 d-flex>
        <v-select
          
          label="affichage par :"
        ></v-select>
      </v-flex>

       </v-layout>

      <v-flex lg12 md12 sm12 xs12 >
           
         <v-pagination  :length="4" prev-icon="mdi-menu-left"  next-icon="mdi-menu-right"  ></v-pagination>
     
      </v-flex>
       

    <v-flex lg12 md12 sm12 xs12 v-for="(profil , index) in profils"  :key="index">

         
        <v-card color="#F3E5F5 darken-2" class="white--text">

            <v-layout wrap>
                  
                  <v-flex lg10 xs7 style="color:#7d7d7d ">

                       <v-card-title >

                          <div>

                             <div class="headline"><strong> {{profil.name}} </strong> </div>
                             <div>{{profil.metier}}</div>
                             <div>{{profil.Date}}</div>

                          </div>
 
                           <v-spacer></v-spacer>

                           <div style="display:flex">

                                  <strong style="margin-right:2%">300</strong>  <i class="far fa-eye"  style="color:black;font-size:20px;" ></i> 

                               <div style="margin-left:10%;margin-right:10%" >/</div>
                      
                                  <strong style="margin-right:2%">5</strong>  <i class="far fa-calendar-check" style="color:black;font-size:20px"></i> 

                            
                            </div> 

                      </v-card-title>


                  </v-flex>

             </v-layout>


              <v-divider light></v-divider>
                                
               <v-card-actions class="pa-3">

                   <v-layout wrap>
              
                      <v-icon  color="#c0cc02 ">star_border</v-icon>                
                      <v-icon  color="#c0cc02 ">star_border</v-icon>
                      <v-icon  color="#c0cc02 ">star_border</v-icon>
                      <v-icon  color="#c0cc02 ">star_border</v-icon>
                      <v-icon  color="#c0cc02 ">star_border</v-icon>

                      <v-spacer></v-spacer>

                      <v-btn color="red">Vister</v-btn>

                   </v-layout>

               </v-card-actions>

       </v-card>

       

     </v-flex>

   </v-layout>

 </v-container>       

</template>


<script>

export default {
    
     data(){

           return {

               selected: [2],

               profils : [

                   {name:'Djebiri Hamza',Date:'17/05/2019',metier:'Web Developper'} ,

                    {name:'Boucenna Marwane',Date:'17/05/2019',metier:'Web Developper'} ,

                     {name:'Abdou Abdou',Date:'17/05/2019',metier:'Web Developper'} ,
                      {name:'Sofiane Sofiane',Date:'17/05/2019',metier:'Web Developper'} ,
                       
                    
               ]

                
           }
     }
}

</script>
