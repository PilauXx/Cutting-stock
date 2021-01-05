<template>
    <div class="app">
        <nav class="navbar navbar-expand navbar-light">
            <a href="#" class="navbar-brand" @click="setMode(0)">Découpe Optimale</a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a href="#" class="nav-link" @click="setMode(1)"> 2D </a></li>
                </ul>
            </div>
        </nav>

        <viewer v-if="mode === 1"></viewer>
        <div class="container-fluid py-3" v-else>
            <div class="alert alert-info text-center message">
            Bienvenu sur 'Découpe Optimale' ! </br>
            Choisissez le type de dimension que vous souhaitez découper </br>
            (la 3D est non disponible pour l'instant) </div>
        </div>
    </div>
</template>

<script>
    import Viewer from './Viewer';
    import Viewer3D from './3DViewer';

    export default {
        components: {
            Viewer, Viewer3D
        },

        data() {
            return {
                mode: 0
            };
        },

        methods: {
            setMode(mode) {
                this.mode = mode;
            }
        },

        mounted() {
            console.log('Hello, world!');
        }
    }
</script>
