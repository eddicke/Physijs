var Hexa = function(scene, options)
{
    options.box_width = options.box_width || 30;
    options.box_height = options.box_height || 30;
    options.box_depth = options.box_depth || 6;
    this.options =options;


    var facettes = [];

    var material;

    var pivots=[];
    this.fulldepth = Hexa.default.depth + options.box_depth*2;

    var cell = new THREE.Object3D();
    cell.position.x=options.x;
    cell.position.z=options.z;
    scene.add(cell);
    for(var i=0; i<6;i++)
    {
        pivots[i] = new THREE.Object3D();
        cell.add(pivots[i]);
        material = new THREE.MeshLambertMaterial( { color: 0xffffff } );

        var geometry = new THREE.BoxGeometry( options.box_width, options.box_height, options.box_depth);

        facettes[i] = new THREE.Mesh( geometry, material );
        pivots[i].add( facettes[i] );

        facettes[i].position.set(0, 0, Hexa.default.depth);
        switch(i)
        {
            case 0: pivots[i].rotation.y= Math.radians(0*60);
            break;
            case 1: pivots[i].rotation.y= Math.radians(1*60); 
            break;
            case 2: pivots[i].rotation.y= Math.radians(2*60); 
            break;
            case 3: pivots[i].rotation.y= Math.radians(3*60); 
            break;
            case 4: pivots[i].rotation.y= Math.radians(4*60);
            break;
            case 5: pivots[i].rotation.y= Math.radians(5*60); 
            break;
            default: facettes[i].position.set(10000,10000,10000); 
            facettes[i].rotation.y=Math.radians(-90); 
            break;

        }
    }
}
Hexa.default= { box_width: 30, box_height: 30, box_depth: 2};
Hexa.default.depth = (Math.sqrt(3)/2) * Hexa.default.box_width;
