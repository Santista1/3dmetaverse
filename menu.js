createScene('menu');
createCamera('mcamera', 'orthographic');
createRenderer('mrenderer');

createGeometry('geometry', 'capsule');
createMaterial('green', 'basic', {color: 0x00ff00, transparent: true, opacity: 0.5});
createMesh('capsule', {geometry: geometry, material: green, rz: 90});
menu.add( capsule );

const objects = [];
objects.push(capsule);
createControls('controls', 'drag', {objects: objects})
