
//		var a = 1000;
//		var b = 1000;

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

	function populate_array(x_array, y_array,screen_size){
		var min_size = Math.min(x_array.length,y_array.length);
		var array = create_blank_array(screen_size[1]+1,screen_size[0]+1);
		for (i = 0; i < min_size; i++){
			var x = y_array[i];
			var y = x_array[i];
			array[x][y]= array[x][y]+1;
		}
		return array;
	}

function make_heatmap(x_array, y_array, screen_size){
console.log(x_array);
console.log(y_array);
screen_size = [1000,1000];
			var data = [
		  {
		    z: populate_array(x_array, y_array,screen_size),
		    type: 'heatmap'
		  }
		];

		Plotly.newPlot('myDiv', data);

}
