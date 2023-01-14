createScene('world');

createCamera({name: 'camera', type: 'perspective'});

createRenderer('renderer');

createMaterial('red', 'standard', {color: 'red'});

createGeometry('geometry', 'box');

createObject('box', 'world', {geometry: geometry, material: red});

const light = new THREE.PointLight( 0xff0000, 1, 100 );

light.position.set( 1, 1, 1 );
world.add( light );
