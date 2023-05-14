# CS477-2023-03-Homework01
## Exercise 1
Write the necessary Node script to make this code work for all arrays:
[1,2,3,4,5,6,7,8].even(); // [2,4,6,8]
[1,2,3,4,5,6,7,8].odd(); // [1,3,5,7]
Test your code in Node.JS CLI

## Exercise 2
1. Explain why do we want sometimes to use setImmediate instead of using setTimeout? 

2. Explain the difference between process.nextTick and setImmediate?

3. Name 10 global modules/methods available in Node environment.

## Exercise 3 (Optional)

	// Fix the slow function to be asynchronous/non-blocking
	function slow(callback){ 
		for(let i=0; i<= 5e8; i++){}
		if (Math.random() > 0.5) { 	
			return callback("Error",null) 
		} 
		callback(null, {id:12345}) 
	} 

	function exec(fn){ 
		// Complete the code here to implement chaining with callback
	}

	exec(slow).done(function(data){ console.log(data); })
		.fail(function(err){ console.log("Error: " + err); }); 
