$(document).ready(function() {


    $("#startDate").datepicker();
    $("#endDate").datepicker();
    
    $("#button").on('click', function(e) {
        	e.preventDefault(); //FÖR ATT INTE SKICKA VÄRDET//
            $('#result').html('');


            
    
    	// 1 Hämta värden
    	var startDate = $('#startDate').val();
    	var endDate = $('#endDate').val();
    	var novacationright = $('#novacationright').val();
    	var vacationright = $('#vacationright').val();



    	//2 hämta skillnaden mellan datumen
     function days() {
            var a = $("#startDate").datepicker('getDate').getTime(),
                b = $("#endDate").datepicker('getDate').getTime(),
                c = 24*60*60*1000,
                diffDays = Math.round(Math.abs((a - b)/(c))); //skillnaden hamnar i diffday
            return diffDays; //show difference
    }


    	// 3 Validera värden "isNaN"


/*
        if (!isNaN(vacationright)) {
            $('#vacationright').before('<p> Skriv hur många semasterrätt i dagar</p>');
        };
        if (!isNaN(novacationright)) {
            $('#novacationright').before('<p>Skriv antal ej semestergrundan frånvaro i heldagar</p>');
        };

*/
    	

    	// 4 Beräkna

    	//ANTAL JOBBDAGAR - FRÅNVARO / ÅRET * ANTAL BERÄTTIGADE SEMESTERDAGAR
    	function vacationTimeCalculator() {
           var diffDays= days();
           var workDaysAtYear = 365;
            var Calculat =  Math.round(Math.abs((diffDays - novacationright) / workDaysAtYear) * vacationright);
               $('#result').append("<br>" + "Antal berättigade semesterdagar: " + Calculat + " dagar");
        };
		
    	// 5 Visa resultatet
           vacationTimeCalculator();


    });
  });