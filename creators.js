function scene(p = {}) {

  this[p.name] = new THREE.Scene();
  if ("background" in p) { this[p.name].background = p.background };

}

function camera(p = {}) {
  if (p.type === "perspective") {
    this[p.name] = new THREE.PerspectiveCamera(
      p.fov || 75,
      p.aspect || window.innerWidth / window.innerHeight,
      p.near || 0.1,
      p.far || 1000
    );
  } else if (p.type === "orthographic") {
    this[p.name] = new THREE.OrthographicCamera(
      ((p.frustumSize || 100) * (p.aspect || window.innerWidth / window.innerHeight)) / -2,
      ((p.frustumSize || 100) * (p.aspect || window.innerWidth / window.innerHeight)) / 2,
      (p.frustumSize || 100) / 2,
      (p.frustumSize || 100) / -2,
      p.near || 0.1,
      p.far || 1000
    );
  }
  this[p.name].position.set(p.x || 0, p.y || 0, p.z || 5);
  this[p.name].rotation.set(
    p.rx * (Math.PI / 180) || 0,
    p.ry * (Math.PI / 180) || 0,
    p.rz * (Math.PI / 180) || 0
  );
}

function renderer(p = {}) {

  if (!("antialias" in p)) { p.antialias = true };

  if (!("alpha" in p)) {p.alpha = true };

  // if (!("canvas" in p)) {p.canvas = createCanvas(p.name)};

  this[p.name] = new THREE.WebGLRenderer(p);

  if (!("canvas" in p)) {
    this[p.name].setSize(
      p.width || window.innerWidth,
      p.height || window.innerHeight
    );
    document.body.appendChild(this[p.name].domElement);
  }

}

function geometry(p = {}) {
  switch (p.type) {
    case "box": this[p.name] = new THREE.BoxGeometry(p.width, p.height, p.depth, p.widthSegments, p.heightSegments, p.depthSegments); break;
    case "capsule": this[p.name] = new THREE.CapsuleGeometry(p.radius, p.length, p.capSubdivisions || 10, p.radialSegments || 20); break;
    case "circle": this[p.name] = new THREE.CircleGeometry(p.radius, p.segments, p.thetaStart, p.thetaLength); break;
    case "cone": this[p.name] = new THREE.ConeGeometry(p.radius, p.height, p.radialSegments, p.heightSegments, p.openEnded, p.thetaStart, p.thetaLength); break;
    case "cylinder": this[p.name] = new THREE.CylinderGeometry (p.radiusTop, p.radiusBottom, p.height, p.radialSegments, p.heightSegments, p.openEnded, p.thetaStart, p.thetaLength); break;
    case "dodecahedron": this[p.name] = new THREE.DodecahedronGeometry(p.radius, p.detail); break;
    case "edges": this[p.name] = new THREE.EdgesGeometry(p.geometry, p.thresholdAngle); break;
    case "extrude": this[p.name] = new THREE.ExtrudeGeometry(p.shapes, p.options); break;
    case "icosahedron": this[p.name] = new THREE.IcosahedronGeometry(p.radius, p.detail); break;
    case "lathe": this[p.name] = new THREE.LatheGeometry(p.points, p.segments, p.phiStart, p.phiLength); break;
    case "octahedron": this[p.name] = new THREE.OctahedronGeometry(p.radius, p.detail); break;
    case "plane": this[p.name] = new THREE.PlaneGeometry(p.width, p.height, p.widthSegments, p.heightSegments); break;
    case "polyhedron": this[p.name] = new THREE.PolyhedronGeometry( p.vertices, p.indices, p.radius, p.detail); break;
    case "ring": this[p.name] = new THREE.RingGeometry(p.innerRadius, p.outerRadius, p.thetaSegments, p.phiSegments, p.thetaStart, p.thetaLength); break;
    case "shape": this[p.name] = new THREE.ShapeGeometry(p.shapes, p.curveSegments); break;
    case "sphere": this[p.name] = new THREE.SphereGeometry(p.radius, p.widthSegments, p.heightSegments, p.phiStart, p.phiLength, p.thetaStart, p.thetaLength); break;
    case "tetrahedron": this[p.name] = new THREE.TetrahedronGeometry(p.radius, p.detail); break;
    case "torus": this[p.name] = new THREE.TorusGeometry(p.radius, p.tube, p.radialSegments, p.tubularSegments, p.arc ); break;
    case "torusknot": this[p.name] = new THREE.TorusKnotGeometry(p.radius, p.tube, p.tubularSegments, p.radialSegments, p.p, p.q); break;
    case "tube": this[p.name] = new THREE.TubeGeometry(p.path, p.tubularSegments, p.radius, p.radialSegments, p.closed);break;
    case "wireframe": this[p.name] = new THREE.WireframeGeometry(p.geometry); break;
  }
}

function material(n, t = "standard", p = {}) {
  switch (t) {
    case "basic": this[n] = new THREE.MeshBasicMaterial(p); break;
    case "depth": this[n] = new THREE.MeshDepthMaterial(p); break;
    case "lambert": this[n] = new THREE.MeshLambertMaterial(p); break;
    case "matcap": this[n] = new THREE.MeshMatcapMaterial(p); break;
    case "normal": this[n] = new THREE.MeshNormalMaterial(p); break;
    case "phong": this[n] = new THREE.MeshPhongMaterial(p); break;
    case "physical": this[n] = new THREE.MeshPhysicalMaterial(p); break;
    case "standard": this[n] = new THREE.MeshStandardMaterial(p); break;
    case "toon": this[n] = new THREE.MeshToonMaterial(p); break;
  }
}

function createMesh(n, s, p = {}) {
  this[n] = new THREE.Mesh(p.geometry, p.material);
  this[n].position.set(p.x || 0, p.y || 0, p.z || 0);
  this[n].rotation.set(p.rx * (Math.PI / 180) || 0, p.ry * (Math.PI / 180) || 0, p.rz * (Math.PI / 180) || 0);
  this[n].scale.set(p.scale || 1, p.scale || 1, p.scale || 1);
  this[s].add(this[n]);
}

function object(p = {}) {

  for (const key of Object.keys(p)) { if ( !Array.isArray(p[key]) ) { p[key] = [].concat(p[key]) } };
  for (var i = 0; i < Object.values(p).reduce((a, v) => { if ( v.length > a.length ){ return v }; return a }).length; i++) {

    const name = p.name[i % p.name.length];
    this[name] = new THREE.Mesh(p.geometry[i % p.geometry.length], p.material[i % p.material.length]);
    this[name].position.set(p.x ? p.x[i % p.x.length] : 0, p.y ? p.y[i % p.y.length] : 0, p.z ? p.z[i % p.z.length] : 0);
    this[name].rotation.set(p.rx ? p.rx[i % p.rx.length] * (Math.PI / 180) : 0, p.ry ? p.ry[i % p.ry.length] * (Math.PI / 180) : 0, p.rz ? p.rz[i % p.rz.length] * (Math.PI / 180) : 0);
    // this[p.name[i]].scale.set(p.scale || 1, p.scale || 1, p.scale || 1);
    this[p.scene[i % p.scene.length]].add(this[name]);

  };

};

function createControls(n, t, p = {}) {
  if (t === "drag") {
    this[n] = new THREE.DragControls(p.objects, menuCamera, menuRenderer.domElement);
    controls.addEventListener("dragstart", function (event) {
      event.object.material = transparentGreen;
    });
    controls.addEventListener("dragend", function (event) {
      event.object.material = green;
    });
  }
};

function createCanvas(n, p = {}) {
  console.log(n);
  this[n] = document.createElement("canvas");
  this[n].width = p.width || window.innerWidth;
  this[n].height = p.height || window.innerHeight;
  this[n].style.position = "absolute";
  document.body.appendChild(this[n]);
}
