using System;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Events;

public class UIExample : MonoBehaviour
{
	// Use this for initialization
	void Start ()
	{
		Rect rect = new Rect (0, 0, 100, 100);
		Texture2D tex = new Texture2D (1, 1);
		tex.SetPixels(new Color[]{Color.blue});

		GameObject a = area (this.transform, rect, tex);
		GameObject b1 = button (a.transform, new Vector2(0,12), "Click me", new UnityAction (action));
		GameObject b2 = button (a.transform, new Vector2(0,-12), "Or me", new UnityAction (action));
	}

	private void action ()
	{
		Debug.Log ("Hello!");
	}

	// BOILER PLATE BELLOW...

	GameObject area (Transform parent, Rect rect, Texture2D tex)
	{
		GameObject canObj = new GameObject ("UI:Canvas");
		canObj.transform.SetParent (parent);
		// http://docs.unity3d.com/Manual/UICanvas.html
		Canvas can = canObj.AddComponent<Canvas> ();
		can.renderMode = RenderMode.ScreenSpaceOverlay;
		can.pixelPerfect = true;

		GameObject panObj = new GameObject ("UI:Panel");
		panObj.transform.SetParent (canObj.transform);
		// https://docs.unity3d.com/Manual/UIBasicLayout.html
		RectTransform panTrs = panObj.AddComponent<RectTransform> ();
		SetSize(panTrs, new Vector2(rect.width, rect.height));
		panTrs.anchoredPosition = new Vector2 (rect.x, rect.y);
		Image img = panObj.AddComponent<Image> ();
		img.sprite = Sprite.Create (tex, new Rect (0, 0, tex.width, tex.height),
			new Vector2 (1.0f, 1.0f));

		return canObj;
	}

	GameObject button (Transform parent, Vector2 coord, string textStr, UnityAction eventListner)
	{
		Vector2 size = new Vector2 (90, 25);

		GameObject btnObj = new GameObject ("UI:Button");
		btnObj.transform.SetParent (parent);
		RectTransform btnTrs = btnObj.AddComponent<RectTransform> ();
		SetSize(btnTrs, size);
		btnTrs.anchoredPosition = coord;
		btnTrs.localPosition.Set (0, 0, 0);

		Image img = btnObj.AddComponent<Image> ();
		Texture2D tex = Resources.Load<Texture2D> ("button_bkg");
		img.type = Image.Type.Sliced;
		img.sprite = Sprite.Create (tex, new Rect (0, 0, tex.width, tex.height), new Vector2 (0.5f, 0.5f), 
			100.0f, 0, SpriteMeshType.Tight, new Vector4 (10, 10, 10, 10));
			
		Button btn = btnObj.AddComponent<Button> ();
		btn.interactable = true;
		btn.onClick.AddListener (eventListner);

		GameObject btnTxtObj = new GameObject ("UI:Text");
		btnTxtObj.transform.SetParent (btnObj.transform);
		RectTransform btnTxtTrs = btnTxtObj.AddComponent<RectTransform> ();
		SetSize(btnTxtTrs, size);
		btnTxtTrs.anchoredPosition = new Vector2(0,0);
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
}
