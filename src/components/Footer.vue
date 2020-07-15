<template>
    <footer>
        <b-container class="bv-example-row">
                <b-row>
                    <b-col>
                        Kontakt
                    </b-col>

                    <b-col>
                        Made with <BIconHeartFill color="red"></BIconHeartFill> by Luca Bockmann
                    </b-col>

                    <b-col>
                        <div class="locale-switcher">🌐 {{$i18n.locale}}</div>
                    </b-col>
                </b-row>
            </b-container>
    </footer>
</template>

<script>
    import {BIconHeartFill } from 'bootstrap-vue'

    export default {
        components: {
            BIconHeartFill
        },
    }
</script>