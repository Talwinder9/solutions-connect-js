
/*
    Write function to return text values of each input string. 
	only characters a/A - z/Z have a value.
    a=1, b=2, c=3, ... z=26
    
*/
function StringValue(string) {
    var value = 0;

    //code here//
    return string.getInt();
}

window.onload = () => {
	String.prototype.getInt = function(){
		//build a list of characters
		var list = `{`;
		for (i = 0; i < 26; i++) {
			//\/${String.fromCharCode(65+i)}
		  list += `"${String.fromCharCode(97+i)}":${i+1}${i== 25 ? "":","}`;
		}
		list += `}`;

		//parse the json object
		var stringvalpairs = JSON.parse(list);

		var result = 0;
		
		for(i=0; i< this.length; i++)
		{
			var code = `stringvalpairs.${this.charAt(i).toLowerCase()}`;
			result += eval(code);
		}
		return result;
	}
    document.getElementById('blue').innerHTML = StringValue('Blue');
	document.getElementById('red').innerHTML = StringValue('red');

};


