using System;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Events;
using UnityEngine.EventSystems;

public class UIExample : MonoBehaviour
{
	// Use this for initialization
	void Start ()
	{
		Rect rect = new Rect (0, 0, 100, 100);
		Texture2D tex = new Texture2D (1, 1);
		tex.SetPixels(new Color[]{Color.blue});

		CreateEventSystem (this.transform);

		GameObject a = area (this.transform, rect, tex);
		GameObject b1 = button (a.transform, new Vector2(0,12), "Click me", delegate { 
			TaskOnClick(); 
		});
		GameObject b2 = button (a.transform, new Vector2(0,-12), "Or me",  delegate { 
			TaskOnClick(); 
		});
	}

	public void TaskOnClick ()
	{
		Debug.Log ("Hello!");
	}

	// BOILER PLATE BELLOW...

	GameObject area (Transform parent, Rect rect, Texture2D tex)
	{
		// OBJECT
		GameObject canObj = new GameObject ("UI:Canvas");
		canObj.transform.SetParent (parent);

		// OBJECT:CANVAS
		// http://docs.unity3d.com/Manual/UICanvas.html
		Canvas can = canObj.AddComponent<Canvas> ();
		can.renderMode = RenderMode.ScreenSpaceOverlay;
		can.pixelPerfect = true;

		// OBJECT:CANVAS:SCALER
		// http://docs.unity3d.com/ScriptReference/UI.CanvasScaler.html
		CanvasScaler canObjSca = canObj.AddComponent<CanvasScaler> ();
		canObjSca.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
		canObjSca.referenceResolution = new Vector2(540, 480);

		// OBJECT:CANVAS:RAYCASTER
		// https://docs.unity3d.com/Manual/script-GraphicRaycaster.html
		GraphicRaycaster canvasRayc = canObj.AddComponent<GraphicRaycaster> ();	

		// OBJECT:CANVAS:PANEL
		GameObject panObj = new GameObject ("UI:Panel");
		panObj.transform.SetParent (canObj.transform);
		// https://docs.unity3d.com/Manual/UIBasicLayout.html
		RectTransform panTrs = panObj.AddComponent<RectTransform> ();
		panTrs.anchoredPosition = new Vector2 (rect.x, rect.y);
		SetSize(panTrs, new Vector2(rect.width, rect.height));

		// OBJECT:CANVAS:PANEL:TEXTURE
		Image img = panObj.AddComponent<Image> ();
		img.sprite = Sprite.Create (tex, new Rect (0, 0, tex.width, tex.height),
			new Vector2 (1.0f, 1.0f));

		return canObj;
	}

	GameObject button (Transform parent, Vector2 coord, string textStr, UnityAction eventListner)
	{
		Vector2 size = new Vector2 (90, 25);

		// OBJECT
		GameObject btnObj = new GameObject ("UI:Button");
		btnObj.transform.SetParent (parent);
		RectTransform btnTrs = btnObj.AddComponent<RectTransform> ();
		btnTrs.anchoredPosition = coord;
		SetSize(btnTrs, size);

		// OBJECT:CANVAS:TEXTURE
		// http://docs.unity3d.com/ScriptReference/Sprite.Create.html
		Image img = btnObj.AddComponent<Image> ();
		Texture2D tex = Resources.Load<Texture2D> ("button_bkg");
		img.type = Image.Type.Sliced;
		img.sprite = Sprite.Create (tex, new Rect (0, 0, tex.width, tex.height), new Vector2 (0.5f, 0.5f), 
			100.0f, 0, SpriteMeshType.Tight, new Vector4 (10, 10, 10, 10));

		//  OBJECT:BUTTON
		// https://docs.unity3d.com/ScriptReference/UI.Button-onClick.html
		Button btn = btnObj.AddComponent<Button> ();
		btn.interactable = true;
		btn.onClick.AddListener (eventListner);
		// https://docs.unity3d.com/ScriptReference/UI.Selectable-transition.html
		btn.targetGraphic = img;
		btn.transition = Selectable.Transition.ColorTint;

		//  OBJECT:TEXT
		// https://docs.unity3d.com/ScriptReference/UI.Text.html
		GameObject btnTxtObj = new GameObject ("UI:Text");
		btnTxtObj.transform.SetParent (btnObj.transform);
		RectTransform btnTxtTrs = btnTxtObj.AddComponent<RectTransform> ();
		btnTxtTrs.anchoredPosition = new Vector2(0,0);
		SetSize(btnTxtTrs, size);
		Text txt = btnTxtObj.AddComponent<Text> ();
		txt.supportRichText = true;
		txt.text = textStr;
		txt.fontSize = 12;
		txt.font = Resources.GetBuiltinResource(typeof(Font), "Arial.ttf") as Font;
		txt.alignment = TextAnchor.MiddleCenter;
		txt.horizontalOverflow = HorizontalWrapMode.Overflow;
		txt.color = Color.black;

		return btnObj;
	}

	public static void SetSize (RectTransform trans, Vector2 size)
	{
		Vector2 currSize = trans.rect.size;
		Vector2 sizeDiff = size - currSize;
		trans.offsetMin = trans.offsetMin -
			new Vector2 (sizeDiff.x * trans.pivot.x,
				sizeDiff.y * trans.pivot.y);
		trans.offsetMax = trans.offsetMax +
			new Vector2 (sizeDiff.x * (1.0f - trans.pivot.x),
				sizeDiff.y * (1.0f - trans.pivot.y));
	}

	public static GameObject CreateEventSystem (Transform parent)
	{
		// https://docs.unity3d.com/Manual/EventSystem.html
		GameObject esObj = new GameObject ("EventSystem");
		esObj.transform.SetParent (parent);

		EventSystem esClz = esObj.AddComponent<EventSystem> ();
		esClz.sendNavigationEvents = true;
		esClz.pixelDragThreshold = 5;

		StandaloneInputModule stdIn = esObj.AddComponent<StandaloneInputModule> ();
		stdIn.horizontalAxis = "Horizontal";
		stdIn.verticalAxis = "Vertical";

		TouchInputModule touchIn = esObj.AddComponent<TouchInputModule> ();

		return esObj;
	}
}
