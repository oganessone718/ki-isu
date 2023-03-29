function onGeoOk(position){
  
}
function onGeoError(){
  alert("Can't find you");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

// 개인정보를 위해 삭제.