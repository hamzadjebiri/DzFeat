<template>
    
    <v-app>

           <navbar-catalogue></navbar-catalogue>


           <v-content>

                <v-container fluid>

                  
                  <v-layout  row>

                        <v-flex lg4 md4 class="hidden-sm-and-down">

                            <liste-catalogue></liste-catalogue>
                              
                        </v-flex>

                        
                        <v-flex lg7 md7 sm12>

                             <catalogue></catalogue>

                        </v-flex>
           

                  </v-layout>

                 </v-container>

           </v-content>

         
    </v-app>


</template>

