using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class balanza : MonoBehaviour {
GameObject balanza_base = new GameObject();
GameObject balanza_base1 = new GameObject();
	// Use this for initialization

	public GameObject balanza1;

	void Start () {
		
		balanza1 = GameObject.Find("Balanza1");
		
	}
	
	// Update is called once per frame
	void Update () {

	}
}
