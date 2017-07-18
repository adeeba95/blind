app.factory('firebaseService',function($firebaseArray){
	var ref = firebase.database().ref()
	var title = ref.child("Title")
	var notes = $firebaseArray(title);
	// var fbRef = new firebase ('https://blind-3db9a.firebaseio.com');
	// var notes = $firebaseArray(fbRef);
	var firebaseService = {
		all:notes,
		get:function(noteId){
			return notes.$getRecord(noteId)
		},
		getSubChapter: function(ID){
			return notes.$getRecord(ID).child("chapter")
		}
	}

	return firebaseService; 

	// return{
	// 	all:data,
	// 	get:function(noteID){
	// 		return data.$getRecord(noteID)
	// 	},
	// 	getSubChapter: function(ID){
	// 		return data.$getRecord(ID).child("subchapter")
	// 	}
	// }
});

// app.factory("firebaseService", ["$firebaseObject",
//   function($firebaseObject) {
//     return function(title_book) {
//       // create a reference to the database node where we will store our data
//       var ref = firebase.database().ref("rooms").push();
//       var title = ref.child(title_book);

//       // return it as a synchronized object
//       return $firebaseObject(title);
//     }
//   }
// ]);
