init({name: 'world'});

light({name: 'light2', type: 'point', scene: 'world', color: 0xFCF9D9, distance: 30});
light({name: 'light2', type: 'point', scene: 'world', color: 0xFCF9D9, x: 10, distance: 30});
light({name: 'light2', type: 'point', scene: 'world', color: 0xFCF9D9, x: 20, distance: 30});
light({name: 'light2', type: 'point', scene: 'world', color: 0xFCF9D9, x: 30, distance: 30});

room({
  material: [wood_floor, ceiling, wall, wall, ceiling],
  scene: world,
  width: 40,
  height: 4,
  depth: 5,
  thickness: 0.1,
  x: 15,
  z: 0,
  cull: [false, false, false, false, false, true]
});

chair({geometry: box, material: wood, scene: world, width: 2, height: 1, depth: 0.5, thickness: 0.05, y: -1.7, z: -2});
lamp({material: [black, black, beige], scene: world, z: -2, y: -0.45});

painting({
  geometry: box,
  material: watermelon,
  scene: world,
  z: -2.45,
  function: function (mesh) {
    mesh.on('click', (ev) => {
      if (mesh.clicked) {new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start()}
      else {new TWEEN.Tween(world_camera.position).to({z: 0}, 500).start()};
      if (mesh.clicked) {mesh.clicked = false} else {mesh.clicked = true};
    });
    mesh.on('mouseout', (ev) => {
      new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start(); mesh.clicked = false
    });
    mesh.on('mouseover', (ev) => {
      new TWEEN.Tween(world_camera.position).to({x: 0}, 500).start(); mesh.clicked = false
    });
  }
});

painting({
  geometry: box,
  material: calendar,
  scene: world,
  x: 10, z: -2.45,
  function: function (mesh) {
    mesh.on('click', (ev) => {
      if (mesh.clicked) {new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start()}
      else {new TWEEN.Tween(world_camera.position).to({z: 0}, 500).start()};
      if (mesh.clicked) {mesh.clicked = false} else {mesh.clicked = true};
    });
    mesh.on('mouseout', (ev) => {
      new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start(); mesh.clicked = false
    });
    mesh.on('mouseover', (ev) => {
      new TWEEN.Tween(world_camera.position).to({x: 10}, 500).start(); mesh.clicked = false
    });
  }
});

painting({
  geometry: box,
  material: flowers,
  scene: world,
  x: 20, z: -2.45,
  function: function (mesh) {
    mesh.on('click', (ev) => {
      if (mesh.clicked) {new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start()}
      else {new TWEEN.Tween(world_camera.position).to({z: 0}, 500).start()};
      if (mesh.clicked) {mesh.clicked = false} else {mesh.clicked = true};
    });
    mesh.on('mouseout', (ev) => {
      new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start(); mesh.clicked = false
    });
    mesh.on('mouseover', (ev) => {
      new TWEEN.Tween(world_camera.position).to({x: 20}, 500).start(); mesh.clicked = false
    });
  }
});

painting({
  geometry: box,
  material: contact,
  scene: world,
  x: 30, z: -2.45,
  function: function (mesh) {
    mesh.on('click', (ev) => {
      if (mesh.clicked) {new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start()}
      else {new TWEEN.Tween(world_camera.position).to({z: 0}, 500).start()};
      if (mesh.clicked) {mesh.clicked = false} else {mesh.clicked = true};
    });
    mesh.on('mouseout', (ev) => {
      new TWEEN.Tween(world_camera.position).to({z: 5}, 500).start(); mesh.clicked = false
    });
    mesh.on('mouseover', (ev) => {
      new TWEEN.Tween(world_camera.position).to({x: 30}, 500).start(); mesh.clicked = false
    });
  }
});
