function createScene(n) {
  this[n] = new THREE.Scene();
}

function createCamera(p = {}) {

const a = {0: [1,1,1], 1: [2.2], 2: [3,3], 3: [4], 4: [5,5,5]};
console.log(

  Object.values(a).reduce((a,n) => {if (n.length > a.length){return n};return a})

);

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

function createRenderer(n, p = {}) {
  if (!("antialias" in p)) {
    p.antialias = true;
  }
  if (!("alpha" in p)) {
    p.alpha = true;
  }
  this[n] = new THREE.WebGLRenderer(p);
  if (!("canvas" in p)) {
    this[n].setSize(
      p.width || window.innerWidth,
      p.height || window.innerHeight
    );
    document.body.appendChild(this[n].domElement);
  }
}

function createGeometry(n, t = "box", p = {}) {
  switch (t) {
    case "box": this[n] = new THREE.BoxGeometry(p.width, p.height, p.depth, p.widthSegments, p.heightSegments, p.depthSegments); break;
    case "capsule": this[n] = new THREE.CapsuleGeometry(p.radius, p.length, p.capSubdivisions || 10, p.radialSegments || 20); break;
    case "circle": this[n] = new THREE.CircleGeometry(p.radius, p.segments, p.thetaStart, p.thetaLength); break;
    case "cone": this[n] = new THREE.ConeGeometry(p.radius, p.height, p.radialSegments, p.heightSegments, p.openEnded, p.thetaStart, p.thetaLength); break;
    case "cylinder": this[n] = new THREE.CylinderGeometry (p.radiusTop, p.radiusBottom, p.height, p.radialSegments, p.heightSegments, p.openEnded, p.thetaStart, p.thetaLength); break;
    case "dodecahedron": this[n] = new THREE.DodecahedronGeometry(p.radius, p.detail); break;
    case "edges": this[n] = new THREE.EdgesGeometry(p.geometry, p.thresholdAngle); break;
    case "extrude": this[n] = new THREE.ExtrudeGeometry(p.shapes, p.options); break;
    case "icosahedron": this[n] = new THREE.IcosahedronGeometry(p.radius, p.detail); break;
    case "lathe": this[n] = new THREE.LatheGeometry(p.points, p.segments, p.phiStart, p.phiLength); break;
    case "octahedron": this[n] = new THREE.OctahedronGeometry(p.radius, p.detail); break;
    case "plane": this[n] = new THREE.PlaneGeometry(p.width, p.height, p.widthSegments, p.heightSegments); break;
    case "polyhedron": this[n] = new THREE.PolyhedronGeometry( p.vertices, p.indices, p.radius, p.detail); break;
    case "ring": this[n] = new THREE.RingGeometry(p.innerRadius, p.outerRadius, p.thetaSegments, p.phiSegments, p.thetaStart, p.thetaLength); break;
    case "shape": this[n] = new THREE.ShapeGeometry(p.shapes, p.curveSegments); break;
    case "sphere": this[n] = new THREE.SphereGeometry(p.radius, p.widthSegments, p.heightSegments, p.phiStart, p.phiLength, p.thetaStart, p.thetaLength); break;
    case "tetrahedron": this[n] = new THREE.TetrahedronGeometry(p.radius, p.detail); break;
    case "torus": this[n] = new THREE.TorusGeometry(p.radius, p.tube, p.radialSegments, p.tubularSegments, p.arc ); break;
    case "torusknot": this[n] = new THREE.TorusKnotGeometry(p.radius, p.tube, p.tubularSegments, p.radialSegments, p.p, p.q); break;
    case "tube": this[n] = new THREE.TubeGeometry(p.path, p.tubularSegments, p.radius, p.radialSegments, p.closed);break;
    case "wireframe": this[n] = new THREE.WireframeGeometry(p.geometry); break;
  }
}

function createMaterial(n, t = "standard", p = {}) {
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

function createObject(n, s, p = {}) {
  this[n] = new THREE.Mesh(p.geometry, p.material);
  this[n].position.set(p.x || 0, p.y || 0, p.z || 0);
  this[n].rotation.set(p.rx * (Math.PI / 180) || 0, p.ry * (Math.PI / 180) || 0, p.rz * (Math.PI / 180) || 0);
  this[n].scale.set(p.scale || 1, p.scale || 1, p.scale || 1);
  this[s].add(this[n]);
}

function createControls(n, t, p = {}) {
  if (t === "drag") {
    this[n] = new THREE.DragControls(p.objects, mcamera, mrenderer.domElement);
    controls.addEventListener("dragstart", function (event) {
      event.object.material = transparentGreen;
    });
    controls.addEventListener("dragend", function (event) {
      event.object.material = green;
    });
  }
}

function createCanvas(n, p = {}) {
  this[n] = document.createElement("canvas");
  this[n].width = p.width || window.innerWidth;
  this[n].height = p.height || window.innerHeight;
  this[n].style.position = "absolute";
  document.body.appendChild(this[n]);
}
