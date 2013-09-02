var katana = {
	extend: function(e,o){
	if(typeof e=="string"){
		return document.getElementById(e);
	}
	for(var name in o){
		e[name] = o[name];
	}
	return e;
},
get: function(e){
	if(typeof e=="string"){
		return katana.extend(document.getElementById(e),katana)
	} else {
		return katana.extend(e,katana);
	}
},
esc: function(txt){
	return this.innerHTML = txt;
},
crear: function(e,opc){
	if (opc != undefined){
		var elem = katana.extend(document.createElement(e),katana);
		for(var i in opc){
			elem.setAttribute(i,opc[i]);
        }
		return elem;
	} else {
		return katana.extend(document.createElement(e),katana);
	}
},
insertar: function(e){
	return this.appendChild(e);
},
error: function(txt){
	return confirm(txt);
},
obliga: function(opc){
	this.onblur = function(){
		console.log("entró");
		for (i in opc){
			//return this.focus();
			console.log(i);
			switch(i){
				case "vacio":{
					if(this.value == ""){
						$.error("Está vacío");
					}
					break;}
				case "letras":{
					var pattern = /([0-9])/;
					if (this.value.match(pattern)){
						$.error("Sin números vieja");
					}
					break;}
				case "max":{
					var c = this.value;
					if(c.length > opc[i]){
						$.error("Te pasaste loco")
					}
					break;}
				case "correo":
					if(!this.value.match("@")){
						$.error("No ingreses huevadas")
					}
					break;
				default: break;
			}
		}
		return this.focus();
	}
	
},
css:function(opc){
	for (var p in opc){
		eval("this.style."+p+" = opc[p]");
	}
}
}
window.$ = katana;