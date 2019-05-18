<template>
  <v-layout row>
    <v-flex lg8 md8 sm6 xs12  offset-sm3>
      <v-card>
        <v-toolbar color="pink" dark>

          <v-toolbar-title>Catalogue</v-toolbar-title>

        </v-toolbar>

        <v-list two-line>

          <template v-for="(item, index) in items">

            <v-list-tile :key="item.title" avatarripple @click="toggle(index)"  >
                   
              <v-list-tile-content>
   
                <v-list-tile-sub-title class="text--primary">
                    
                     <v-icon>{{ item.ListeIcon }}</v-icon> 
                     
                     {{ item.ListeItem }}
                     
                </v-list-tile-sub-title>
                
              </v-list-tile-content>

            

            </v-list-tile>
            <v-divider
              v-if="index + 1 < items.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        selected: [2],
        items: [

          { ListeItem: 'Liste Items',ListeIcon: 'home'  },

           { ListeItem: 'Liste Items',ListeIcon: 'home'  },
            { ListeItem: 'Liste Items',ListeIcon: 'home'  },
             { ListeItem: 'Liste Items',ListeIcon: 'home'  },
              { ListeItem: 'Liste Items',ListeIcon: 'home'  },
               { ListeItem: 'Liste Items',ListeIcon: 'home'  },

       
        ]
      }
    },

    methods: {
      toggle (index) {
        const i = this.selected.indexOf(index)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
      }
    }
  }
</script>