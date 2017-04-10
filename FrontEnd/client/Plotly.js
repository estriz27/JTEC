/**
* create_blank_array() returns an array of 0's with dimensions axb
*/

		function create_blank_array(a,b)
		{
		var array = new Array(a);
		for (i= 0; i < a; i ++){
			array[i] = new Array(b)
			}


		for (x = 0; x < a; x++){
			for(y = 0; y<b; y++){
				array[x][y] = 0;
			}
		}
		return array;
		}

		/**
		* populate_array() returns an array based on screen_size where the value at each index represents
		*the amount of times that xy coordinate appears in the x_array, y_array.
		*For example, x_array = [1,1,2,3] y_array = [1,1,3,4], screen_size [4,4] generates
		*[[0,0,0,0,0],[0,2,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,0,1,0]]
		*/
	function populate_array(x_array, y_array,screen_size){
		var min_size = Math.min(x_array.length,y_array.length);
		var array = create_blank_array(screen_size[1]+1,screen_size[0]+1);
		//If statement triggers if there is a value in x_array or y_array that is out of bounds of the screen
		if (min_size > (screen_size[1]+1) || min_size > (screen_size[0]+1)){
			alert("screen size too small");
		}
		for (i = 0; i < min_size; i++){
			var x = y_array[i];
			var y = x_array[i];
			array[x][y]= array[x][y]+1;
		}
		return array;
	}
/**
*make_heatmap() generates a plotly heatmap based on the input values
*/
function make_heatmap(x_array, y_array, screen_size){
			var data = [
		  {
		    z: populate_array(x_array, y_array,screen_size),
		    type: 'heatmap'
		  }
		];

		Plotly.newPlot('myDiv', data);

}
