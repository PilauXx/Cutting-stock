<template>
    <div class="app">
        <nav class="navbar navbar-expand navbar-light bg-light">
            <a href="#" class="navbar-brand" @click="setMode(0)">Cutting Stock</a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a href="#" class="nav-link" @click="setMode(1)">2-Dimensions</a></li>
                    <li class="nav-item"><a href="#" class="nav-link" @click="setMode(2)">3-Dimensions</a></li>
                </ul>
            </div>
        </nav>

        <viewer v-if="mode === 1"></viewer>
        <Viewer3D v-else-if="mode === 2"></Viewer3D>
        <div class="container-fluid py-3" v-else>
            <div class="alert alert-info text-center">Veuillez sélectionner un démonstrateur ci-dessus.</div>
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
