<template>
  <v-dialog transition="dialog-top-transition" max-width="800">
    <template v-slot:activator="{ on, attrs }">
      <purple-button :bind="attrs" :on="on" :text="$i18n.t('landing.modal.buttonText')" />
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar style="background-color: rgb(51, 51, 51)" dark>
          <v-row>
            <v-col cols="10" md="11">
              {{ $i18n.t("landing.modal.toolbar") }}
            </v-col>

            <v-col cols="2" md="1">
              <v-icon @click="dialog.value = false"> {{ exitIcon }} </v-icon>
            </v-col>
          </v-row>
        </v-toolbar>
        <v-card-text class="ma-0 pa-0">
          <div>
            <v-row no-gutters>
              <v-col cols="12">
                <tips id="tips" />
              </v-col>
            </v-row>
          </div>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { mdiClose } from "@mdi/js";
import Tips from "@/components/ourFunds/Tips";
import PurpleButton from "@/components/PurpleButton";

export default {
  components: { Tips, PurpleButton },
  name: "InvestmentTips",

  data: () => ({
    exitIcon: mdiClose
  })
};
</script>

<style lang="scss">
.v-dialog > .v-card > .v-toolbar {
  position: sticky;
  top: 0;
  z-index: 999;
}

#tips {
  padding-bottom: 0px;
}
</style>
