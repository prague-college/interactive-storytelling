
var flippedCard = '';
var matches = [];
var matched = false;

$(document).ready(function(){
$("#ot").click(function(){

$("#help").toggle();

})

	$(".card").on('click', function(){

		//console.log('click is working!');

		var $this = $(this);

		if(flippedCard != '') {

			// flipping over a second card, compare cards etc

			console.log('second card');

			$this.closest('.flip-container').addClass('flipped');

			if (flippedCard == $this.data('couple')) {

				console.log('matched');
				matched = true;

				$('[data-couple=' + flippedCard + ']').addClass('matched');

				//$('#msg').append( "<span>" + flippedCard + "</span>" );
				
				$("#"+flippedCard).show();
			}

			flippedCard = '';

		} else {

			// filpped over first card

			console.log('first card');
			flippedCard = $this.data('couple');

			if(matched){

			$('.flipped').empty();


			}else{

			$('.flipped').removeClass('flipped');


			}
			matched = false;
			// set flicpped card
			

		

			

			$this.closest('.flip-container').addClass('flipped');

		}

	});
	
});