<template>
      <v-app>
            <v-container class="fill-height">
                  <v-row allign="center" justify="center">
                        <v-col cols="12" sm="10">
                              <v-card class="elevation-6 mt-10" color="primary" width="auto">
                                    <v-window v-model="step">
                                          <v-window-item :value="1">
                                                <v-row>
                                                      <v-col cols="12" sm="6">
                                                            <v-card-title
                                                                  class="text-h6 font-weight-regular justify-space-between">
                                                                  <span>{{ currentTitle }}</span>
                                                                  <v-avatar color="primary lighten-2"
                                                                        class="subheading white--text" size="24"
                                                                        v-text="step"></v-avatar>
                                                            </v-card-title>
                                                            <v-card-text>
                                                                  <v-text-field class="mt-15" append-icon="mdi-account"
                                                                        outlined label="Usuario/E-mail"></v-text-field>
                                                                  <v-text-field append-icon="mdi-lock" label="Senha"
                                                                        type="password" outlined></v-text-field>
                                                                  <v-btn rounded block dark color="confirm">Login</v-btn>
                                                            </v-card-text>
                                                      </v-col>
                                                      <v-col cols="12" sm="6" class="purple rounded-bl-xl">
                                                            <div style="text-align: center; padding: 12rem 0;">
                                                                  <v-card-text class="white--text">
                                                                        <h3 class="text-center">Você ainda não tem uma conta?
                                                                        </h3>
                                                                        <h4 class="white--text">Crie uma agora e comece a usar
                                                                              <br>
                                                                              todas as ferramentas!
                                                                        </h4>
                                                                        <v-btn rounded color="confirm"
                                                                              class="white--text mt-5" @click="step++">
                                                                              Criar conta
                                                                        </v-btn>
                                                                  </v-card-text>
                                                            </div>
                                                      </v-col>
                                                </v-row>
                                          </v-window-item>
                                          <v-window-item :value="2">
                                                <v-row>
                                                      <v-col cols="12" sm="6" class="purple rounded-br-xl">
                                                            <div style="text-align: center; padding: 12rem 0;">
                                                                  <v-card-text class="white--text">
                                                                        <h3 class="text-center">Já possui uma conta?
                                                                        </h3>
                                                                        <h4 class="white--text">Faça o login agora e comece a
                                                                              usar
                                                                              <br>
                                                                              todas as ferramentas!
                                                                        </h4>
                                                                        <v-btn rounded color="confirm"
                                                                              class="white--text mt-5" @click="step++">
                                                                              Login
                                                                        </v-btn>
                                                                  </v-card-text>
                                                            </div>
                                                      </v-col>
                                                      <v-col cols="12" sm="6">
                                                            <v-card-title
                                                                  class="text-h6 font-weight-regular justify-space-between">
                                                                  <span>{{ currentTitle }}</span>
                                                                  <v-avatar color="primary lighten-2"
                                                                        class="subheading white--text" size="24"
                                                                        v-text="step"></v-avatar>
                                                            </v-card-title>
                                                            <v-card-text>
                                                                  <v-text-field class="mt-15" append-icon="mdi-account"
                                                                        outlined label="Usuario/E-mail"></v-text-field>
                                                                  <v-text-field append-icon="mdi-lock" label="Senha"
                                                                        type="password" outlined></v-text-field>
                                                                  <v-text-field append-icon="mdi-lock"
                                                                        label="Confirme a senha" type="password"
                                                                        outlined></v-text-field>
                                                                  <v-btn rounded block dark color="confirm">Login</v-btn>
                                                            </v-card-text>
                                                      </v-col>
                                                </v-row>
                                          </v-window-item>
                                    </v-window>
                              </v-card>
                        </v-col>
                  </v-row>
            </v-container>
      </v-app>
</template>

<script>
export default {
      name: 'login-page',

      data: () => ({
            step: 1
      }),

      computed: {
            currentTitle() {
                  switch (this.step) {
                        case 1: return 'Login'
                        case 2: return 'Cadastro'
                        default: return 'Conta criada'
                  }
            },
      },
}
</script>

<style>
.v-application .rounded-bl-xl {
      border-bottom-left-radius: 100px !important;
}

.v-application .rounded-br-xl {
      border-bottom-right-radius: 100px !important;
}
</style>