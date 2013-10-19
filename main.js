require.config({
	paths : {
		jquery : 'bower_components/jquery/jquery.min',
		Probability : 'Probability'
	}	
});

require(['jquery', 'Probability'], function(jq, p) {
	
	function log(t) { console.log(t); }

	function chairProblem(chairs, people) {
		var output;

		if (chairs > people) {
			return 'The number of chairs must be less than or equal to the number of people.';
		}

		output = 'There are ' + people + ' people and ' + chairs + ' chairs.';
		output = output + 'There are ' + p.permutations(chairs,people) + ' different ways for the people to sit in the chairs.';
		output = output + 'Disregarding order (ABC, BAC, CAB are all the same), there are ' + p.combinations(chairs, people) + ' ways to sit in the chairs.';
		return output;
	}
	
	$(document).ready(function() {
		function update() {
			var people = $('.people').val();
			var chairs = $('.chairs').val();
			$('#problem p').fadeOut(function(){
				$(this).html(chairProblem(chairs,people)).fadeIn();
			});
		}
		update();
		$('.button').click(function() { update() });
	});	

});