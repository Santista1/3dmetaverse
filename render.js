function animate() {
  requestAnimationFrame( animate );

  TWEEN.update();

  menu_renderer.render( menu, menu_camera);
  world_renderer.render( world, world_camera);

};
animate();
