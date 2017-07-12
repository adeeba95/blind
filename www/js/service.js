app.factory('firebaseService',function($firebaseArray,$firebaseObject){
	var ref = firebase.database().ref()
	var title = ref.child("Title")
	var data = $firebaseArray(title);

	return{
		all:data,
		get:function(noteID){
			return data.$getRecord(noteID)
		},
		getSubChapter: function(ID){
			return data.$getRecord(ID).child("subchapter")
		}
	}
})