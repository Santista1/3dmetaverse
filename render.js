function render() {
  mrenderer.render( menu, mcamera);
  renderer.render( scene, camera);
}

function loop() {
  requestAnimationFrame( loop );
  // capsule.rotation.y += 0.01;
  render();
};

function animate() {
loop();
};

animate();
