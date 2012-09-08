var validate = function (id){
	function nullCheck(){
		if(id === '' || id === 'undefined'){
			if( $("#"+id).val() === '' ){
				return false;
			}
		}		
	}
}