using System;
using UnityEngine;

// https://docs.unity3d.com/Manual/GUIScriptingGuide.html
public class GUIExample : MonoBehaviour
{
	// Use this for initialization
	// https://docs.unity3d.com/ScriptReference/GUILayout.BeginArea.html
	void OnGUI ()
	{
		Rect rect = new Rect (10, 10, 100, 100);
		Texture2D tex = new Texture2D (1, 1);
		tex.SetPixels(new Color[]{Color.grey});

		GUIStyle style = new GUIStyle ();
		style.normal.background = tex;
		GUILayout.BeginArea (rect, tex, style);
		if (GUILayout.Button ("Click me"))
			action ();
		if (GUILayout.Button ("Or me"))
			action ();
		GUILayout.EndArea ();
	}

	private void action ()
	{
		Debug.Log ("Hello!");
	}
}