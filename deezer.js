var songsearch=(function(){
function findmysong(e){
	console.log("in findmysong");
e.preventDefault();
var song_name=$('#song_name').val();
$.ajax({
            url : 'https://deezerdevs-deezer.p.mashape.com/search',
            method: 'GET', 
            data: {'q' : song_name},
            dataType: 'json',
            success: function(data) {
                console.log(data);
            },
            error : function() {
            },
            beforeSend: function(xhr){
            	xhr.setRequestHeader("X-Mashape-Authorization","Knb6LCrBXgmshVMbEzv232dP9J7Ep1GRYItjsnSyYQ88Fl0Mlh")
            }
        });

}




//$.getJSON(url,{}, function(json){});



function init(){
	console.log("in in int")
$('#submit_click').click(findmysong);
}
return{
	init:init
};
})();
