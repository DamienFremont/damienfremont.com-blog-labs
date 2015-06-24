#pragma strict

function Start () {

	// SAY HELLO
    print( "Hello, world" );

	// GET SCENE OBJECTS
	var cam = GameObject.Find("Main Camera");
	var mainObject = GameObject.Find("GameObject");
	
	// CENTER CAMERA ON OBJECT
	cam.transform.LookAt(mainObject.transform);

	// PAUSE
	yield WaitForSeconds (1);

	// ADD OBJECTS TO THE SCENE

	var sphere : GameObject = GameObject.CreatePrimitive(PrimitiveType.Sphere);
	sphere.transform.position = Vector3(0, 1.5, 0);

	var sphere2 : GameObject = GameObject.CreatePrimitive(PrimitiveType.Sphere);
	sphere2.transform.position = Vector3(2, 1, 0);

	var sphere3 : GameObject = GameObject.CreatePrimitive(PrimitiveType.Sphere);
	sphere3.transform.position = Vector3(0, 0, 0);

}

function Update () {

}