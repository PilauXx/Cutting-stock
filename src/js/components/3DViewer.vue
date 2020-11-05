<template>
    <div class="viewer">
        <div class="toolbar">
            <div class="form-group">
                <label for="width">Largeur</label>
                <input type="text" class="form-control" id="width" v-model="width">
            </div>

            <div class="form-group">
                <label for="depth">Profondeur</label>
                <input type="text" class="form-control" id="depth" v-model="depth">
            </div>

            <div class="form-group items">
                <label for="items">Liste des blocs</label>
                <textarea class="form-control" id="items" v-model="items"></textarea>
            </div>
        </div>

        <div class="render">
        </div>
    </div>
</template>

<script>
    const BinPacking = require('bp3d');
    const THREE = require('three');

    export default {
        data() {
            return {
                width: 100,
                depth: 100,
                items: '',
                scene: null
            };
        },

        watch: {
            width() {
                this.parse();
            },

            depth() {
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

                    for (let i = 0; i < values[3]; i++)
                        blocks.push({ w: parseInt(values[0]), h: parseInt(values[1]), d: parseInt(values[2]) });
                });

                this.fit(blocks);
            },

            fit(blocks) {
                let bin = new BinPacking.Bin('Conteneur', this.width, 100000, this.depth, 100000);
                let packer = new BinPacking.Packer();
                packer.addBin(bin);

                blocks.forEach((block, index) => {
                    packer.addItem(new BinPacking.Item(`Item ${index}`, block.w, block.h, block.d, 0));
                });

                packer.pack();

                this.render(bin.items);
            },

            render(blocks) {
                const container = this.$el.querySelector('.render');

                if (this.scene) {
                    container.innerHTML = '';
                    this.scene = null;
                }
                
                this.scene = new THREE.Scene();
                this.scene.background = new THREE.Color('skyblue');
                
                let camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 0.1, 100);
                camera.position.set(0, 0, 20);
                
                let renderer = new THREE.WebGLRenderer();
                renderer.setSize(container.clientWidth, container.clientHeight);
                renderer.setPixelRatio(window.devicePixelRatio);
                container.appendChild(renderer.domElement);

                blocks.forEach(block => {
                    let color = new THREE.Color(0xffffff);
                    color.setHex(Math.random() * 0xffffff);

                    let geometry = new THREE.BoxGeometry(block.w, block.h, block.d);
                    let material = new THREE.MeshBasicMaterial({ color: color });
                    let cube = new THREE.Mesh(geometry, material);

                    cube.translateX(block.position[0]);
                    cube.translateY(block.position[1]);
                    cube.translateZ(block.position[2]);

                    // Temporary
                    cube.rotation.x += 0.5;
                    cube.rotation.y += 0.5;

                    this.scene.add(cube);
                });

                let animate = () => {
                    requestAnimationFrame(animate);
                    renderer.render(this.scene, camera);
                };

                animate();
            }
        }
    }
</script>

<style lang="scss">
canvas { width: 100%; height: 100% }
</style>