<template>
    <div class="mt-5 mb-5">
        <h2 class="text-center">{{ $t('components.InstagramHeadline') }}</h2>

        <b-input-group prepend="Username" class="mt-3 mb-3 w-50 mx-auto">
            <b-form-input v-model="$store.state.InstaUserName"></b-form-input>
            
            <b-input-group-append>
                <b-button variant="outline-success" @click="getData">Search</b-button>
            </b-input-group-append>
        </b-input-group>

        <div v-if="!isLoading">
            <b-container v-if="!isError.show" class="bv-example-row">
                <b-row>
                    <b-col class="text-right">
                        <b-img thumbnail v-bind:src="data.profile_pic_url" alt="Image 1"></b-img>
                    </b-col>

                    <b-col class="text-left align-self-center instagramProfileInfo">
                        <b>{{data.full_name}}</b> <br>
                        Follower: <b>{{ data.edge_followed_by.count }}</b> <br>
                        Posts: <b>{{data.edge_owner_to_timeline_media.count}}</b> <br>
                          <b-button :href="'https://www.instagram.com/' + data.username" target="_blank" variant="outline-info" size="sm">view Profile</b-button>
                    </b-col>
                </b-row>
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
                data: [],
                isLoading: false,
                isError: {
                    show: false,
                    userName: ""
                }
            }
        },

        created() {
            this.getData()
        },

        methods: {
            getData() {
                var that = this;

                this.isLoading = true;

                axios.get('https://www.instagram.com/' + this.$store.state.InstaUserName + '/?__a=1')
                .then(function (response) {
                    that.data = response.data.graphql.user;
                    that.isLoading = false
                    that.isError.show = false
                })

                .catch(function (error) {
                    console.log(error);
                    that.isLoading = false
                    that.isError.show = true
                    that.isError.userName = that.$store.state.InstaUserName
                })
            }
        }
    }
</script>