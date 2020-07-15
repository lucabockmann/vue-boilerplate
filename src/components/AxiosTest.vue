<template>
    <div class="mt-5 mb-5">
        <h2 class="text-center">{{ $t('components.GitHubHeadline') }}</h2>

        <b-input-group prepend="@" class="mt-3 mb-3 w-50 mx-auto">
            <b-form-input v-model="$store.state.InstaUserName"></b-form-input>
            
            <b-input-group-append>
                <b-button variant="outline-success" @click="getData">Search</b-button>
            </b-input-group-append>
        </b-input-group>

        <div v-if="!isLoading" v-show="UserData.name">
            <b-container v-if="!isError.show" class="bv-example-row">
                <b-row class="mb-3">
                    <b-col class="text-right">
                        <b-img thumbnail class="w-50" v-bind:src="UserData.avatar_url" alt="Image 1"></b-img>
                    </b-col>

                    <b-col class="text-left align-self-center instagramProfileInfo">
                        <b>{{UserData.name}}</b> <br>
                        Follower: <b>{{ UserData.followers }}</b> <br>
                        Repos: <b>{{UserData.public_repos}}</b> <br>
                        
                        <b-button :href="UserData.html_url" target="_blank" variant="outline-info" size="sm">view Profile</b-button>
                    </b-col>
                </b-row>

                <b-button v-b-toggle.collapse-repos variant="primary">show Repos</b-button>

                <b-collapse id="collapse-repos" class="mt-2">
                    <div class="text-left w-50 mx-auto" v-for="repo in RepoData" v-bind:key="repo">
                        <a v-bind:href="'https://github.com/' + repo.full_name" target="_blank">{{repo.full_name}}</a>
                    </div>
                </b-collapse>
            </b-container>

            <b-container v-else class="bv-example-row">
                  <b-alert show variant="danger">Profil "{{this.isError.userName}}" nicht gefunden</b-alert>
            </b-container>
        </div>

        <div v-else>
            <b-spinner class="m-5" label="Busy"></b-spinner>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                UserData: [],
                RepoData: [],
                isLoading: false,
                isError: {
                    show: false,
                    userName: ""
                }
            }
        },

        methods: {
            getData() {
                var that = this;

                this.isLoading = true;

                axios.get('https://api.github.com/users/' + this.$store.state.InstaUserName)
                .then(function (response) {
                    that.UserData = response.data;
                    that.isLoading = false
                    that.isError.show = false

                    that.getRepos(response.data.login)
                })

                .catch(function (error) {
                    console.log(error);
                    that.isLoading = false
                    that.isError.show = true
                    that.isError.userName = that.$store.state.InstaUserName
                })
            },

            getRepos(name) {
                var that = this;

                axios.get('https://api.github.com/users/' + name + '/repos')
                .then(function (response) {
                    that.RepoData = response.data
                })

                .catch(function (error) {
                    console.log(error);
                })
            }
        }
    }
</script>