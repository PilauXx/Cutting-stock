//#region simple cube
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// function animate() {
//     requestAnimationFrame( animate );
//     /////////////////////////////////// rotation infini
//     //cube.rotation.x += 0.01;
//     //cube.rotation.y += 0.01;


//     renderer.render( scene, camera );
// }
// // tourne en boucle
// animate();
//#endregion

const container = document.querySelector( '#scene-container' );

// create a Scene
const scene = new THREE.Scene();

// Set the background color
scene.background = new THREE.Color( 'skyblue' );

// Create a Camera
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100;
const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
camera.position.set( 5, 2, 20 );



function setCube(width, height, x, y, z, color) {
    const geometry = new THREE.BoxBufferGeometry(width, height, 2 );
    var material = new THREE.MeshBasicMaterial( { color: color });
    const mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.x += 0.4;
    mesh.rotation.y += 0.4;
    mesh.translateX(x + (width / 2));
    mesh.translateY(y + (height / 2));
    mesh.translateZ(z);
    scene.add(mesh);
}

setCube(2, 2, 0, 0, 0, 0x000000);
setCube(2, 2, 0, 2, 0, 0xff0000);
setCube(4, 2, 2, 0, 0, 0xffffff);
setCube(2, 2, 6, 0, 0, 0x00ff00);
setCube(8, 2, 8, 0, 0, 0x0000ff);
setCube(6, 3, 2, 2, 0, 0x00ffff);
setCube(2, 2, 0, 0, 2, 0x336600);
setCube(2, 2, 0, 0, 4, 0xff6611);


const renderer = new THREE.WebGLRenderer();
renderer.setSize( container.clientWidth, container.clientHeight );
renderer.setPixelRatio( window.devicePixelRatio );
container.appendChild( renderer.domElement );
renderer.render( scene, camera );