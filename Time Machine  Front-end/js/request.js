
		
		/////////////////////////////////////////////ajax requests//////////////////////////////////////////////////
		function getComment(postId){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/posts/'+postId+'/comments',
				success: function(data){
					// do something
				}
			});
			
		}
		
		function createComment(postId){
			$.ajax({
				type:'post',
				url:'http://localhost:8080/TimeMachineV1/posts/'+postId+'/comments/create',
				success: function(){
					// do something
				}
			});
			
		}
		
		function editComment(postId , commentId){
			$.ajax({
				type:'post',
				url:'http://localhost:8080/TimeMachineV1/posts/'+postId+'/comments/'+commentId+'/edit' ,
				success: function(){
					// do something
				}
			});
			
		}
		
		
		function deleteComment(postId , commentId){
			$.ajax({
				type:'post',
				url:'http://localhost:8080/TimeMachineV1/posts/'+postId+'/comments/'+commentId+'/delete',
				success: function(data){
					// do something
				}
			});
			
		}
		
		//////////////////era requests///////////////

		
		function getNewsFeed(eraId){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/era/'+eraId+'/newsfeed',
				success: function(data){
					// do something
				}
			});
			
		}
		function getAllEras(){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/era/eraselection',
				success: function(data){
					// do something
				}
			});
			
		}
		
		function getDefaultEra(beginningEra){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/era/eraselection/'+beginningEra,

				success: function(data){
					// do something
				}
			});
			
		}
		
				
    												

		
		function getTopHashtags(eraId){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/era/'+eraId+'/tophashtags',

				success: function(data){
					// do something
				}
			});
			
		}
		
			function getEraMembers(eraId){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/era/selectusers/'+eraId,

				success: function(data){
					// do something
				}
			});
			
		}
		
		
			function getUserEra(userId){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/era/selecteras/'+userId,

				success: function(data){
					// do something
				}
			});
			
		}
		
			function getHashtags(postId){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/era/selecthashtags/'+postId,

				success: function(data){
					// do something
				}
			});
			
		}
		
		/**************************Index****************************/
			function getHomePage(){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/',

				success: function(data){
					// do something
				}
			});
			
		}
			
		/**************************hashtags****************************/
			function getEraHashtags(eraId){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/hashtag/{hashtagName}/'+eraId,

				success: function(data){
					// do something
				}
			});
			
		}
		/*************************************login*************************************/
			function getLoginView(){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/login',

				success: function(data){
					// do something
				}
			});
			
		}
		
		
		function userLogin(){
			$.ajax({
				type:'post',
				url:'http://localhost:8080/TimeMachineV1/login',

				success: function(){
					// do something
				}
			});
			
		}
		
		
		
  
		/*****************************************posts*****************************************/
			
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/posts/0',
				beforeSend: function (request) {
                request.setRequestHeader("Authorization", "Negotiate");
            },
            async: true,
				
				success: function(data){
					// do something
				}
			});
			
		
		
			function createNewPost(){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/posts/create',

				success: function(data){
					// do something
				}
			});
			
		}
			function addNewPost(){
			$.ajax({
				type:'post',
				url:'http://localhost:8080/TimeMachineV1/posts/create',

				success: function(){
					// do something
				}
			});
			
		}
			function editPost(postId){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/posts/' +postId+'/edit',

				success: function(data){
					// do something
				}
			});
			
		}
		
		
		function addEditedPost(postId){
			$.ajax({
				type:'post',
				url:'http://localhost:8080/TimeMachineV1/posts/'+postId+'/edit',

				success: function(){
					// do something
				}
			});
			
		}
		
		function deletePost(postId){
			$.ajax({
				type:'post',
				url:'http://localhost:8080/TimeMachineV1/posts/' +postId+'/delete'	,

				success: function(){
					// do something
				}
			});
			
		}
		
		function likePost(postId,userId){
			$.ajax({
				type:'post',
				url:'http://localhost:8080/TimeMachineV1/posts/'+postId+'/like?userId='+userId,

				success: function(){
					// do something
				}
			});
			
		}
		
		function getTopPosts(postsRequired,userId,eraId){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/posts/top/'+postsRequired+'?eraId='+eraId+'&userId='+userId+'&postsRequired='+postsRequired,

				success: function(data){
					// do something
				}
			});
			
		}
		
		function getNextTopPosts(postsRequired,userId,eraId){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/posts/next/'+postsRequired+'?eraId='+eraId+'&userId='+userId+'&postsRequired='+postsRequired,

				success: function(data){
					// do something
				}
			});
			
		}
		
		/*********************************registration*******************/
		
	
    function getRegistrationForm(){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/user/register',

				success: function(data){
					// do something
				}
			});
			
		}
		
    function redirectRegistrationForm(){
			$.ajax({
				type:'post',
				url:'http://localhost:8080/TimeMachineV1/user/register',

				success: function(){
					// do something
				}
			});
			
		}
		
   function getSignUpForm(){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/signup',

				success: function(data){
					// do something
				}
			});
			
		}
		
		function searchByEmail(email){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/user/searchByEmail?email='+email,

				success: function(data){
					// do something
				}
			});
			
		}
		
		function searchByUserName(userName){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/user/searchByUserName?username='+userName	,

				success: function(data){
					// do something
				}
			});
			
		}
		
		function getUserById(userId){
			$.ajax({
				type:'get',
				url:'http://localhost:8080/TimeMachineV1/user/'+userId,

				success: function(data){
					// do something
				}
			});
			
		}


		
		
		
		
		
		
		
		
		
		
		
		
		
		
