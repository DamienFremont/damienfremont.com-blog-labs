using UnityEngine;
using UnityEditor;

// http://docs.unity3d.com/Manual/RunningEditorCodeOnLaunch.html
[InitializeOnLoad]
public class Startup
{
	static Startup ()
	{
		GameObject gameObject;
		gameObject = GameObject.Find("Main Camera");

		Component script1 = gameObject.GetComponent<GUIExample>();
		if (script1 == null) {
			gameObject.AddComponent<GUIExample> ();
		}

		Component script2 = gameObject.GetComponent<UIExample>();
		if (script2 == null) {
			gameObject.AddComponent<UIExample> ();
		}
	}
}