using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MouseDrag : MonoBehaviour {

	// Use this for initialization
	void Start () {
		this.GetComponent<Rigidbody>().AddForce(Vector3.down);

	}
	
	// Update is called once per frame
	void Update () {
		Vector2 pos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		transform.position = (pos);
		}
		

	void OnMouseDrag()
	{
		/*Vector3 curScreenPoint = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z);
		Vector3 curPosition = Camera.main.ScreenToWorldPoint(curScreenPoint) + offset;
		transform.position = curPosition;
*/
		if (true)
		{
		}
		else
		{
			
		}
	}
}
