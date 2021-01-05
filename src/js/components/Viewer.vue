<template>
    <div class="viewer">
        <div class="toolbar">
            <div class="form-group">
                <label for="width">Largeur du Conteneur :</label>
                <input type="text" class="form-control" id="width" v-model="width">
            </div>

            <div class="form-group items">
                <label for="items">Liste des blocs : largeur x hauteur x quantité </br> <p class="precision">Retour à la ligne pour le bloc suivant</p> </label>
                <textarea class="form-control" id="items" v-model="items"></textarea>
            </div>
        </div>

        <div class="render">
            <svg class="svg" width="100%" height="100%">
                <rect :x="block.fit.x" :y="block.fit.y" :width="block.w" :height="block.h" :fill="'#'+((1<<24)*Math.random()|0).toString(16)" :key="index" v-for="(block, index) in blocks" />
            </svg>
        </div>
    </div>
</template>

<script>
    import packing from '../mixins/packing';

    export default {
        mixins: [packing],

        data() {
            return {
                width: 100,
                items: ''
            };
        },

        watch: {
            width() {
                this.parse();
            },

            items() {
                this.parse();
            }
        },

        methods: {
            parse() {
                let blocks = [];

                this.items.split('\n').forEach(item => {
                    let values = item.split('x');

                    for (let i = 0; i < values[2]; i++)
                        blocks.push({ w: parseInt(values[0]), h: parseInt(values[1]) });
                });

                this.render(blocks);
            },

            render(blocks) {
                this.run(blocks, this.width, 500);
            }
        }
    }
</script>