 
		function anyThing() {
		  setTimeout(function(){ $('.stepper').nextStep(); }, 1500);
		}

		$(function(){
		   $('.stepper').activateStepper();
		});

		

	$(document).ready(function() {

		$('select').material_select();


		$('#textarea1').val('New Text');

		$('.datepicker').pickadate({
		    min: new Date(),
		    selectMonths: true, // Creates a dropdown to control month
		    selectYears: 15, // Creates a dropdown of 15 years to control year
		    firstDay: 1
		  });

			var picker = $('#beginDate').pickadate('picker');
			picker.set('select', new Date());
			var picker = $('#endDate').pickadate('picker');
			picker.set('select', new Date());

			var form = $("#example-form");
			form.children("div").steps({
			    headerTag: "h5",
			    bodyTag: "section",
			    transitionEffect: "slideLeft",

			});

	});
