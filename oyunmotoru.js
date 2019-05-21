$( document ).ready(function() {

	

	// Oyun başlarken, patlama animasyonu gizleniyor.
	$(".patladi").hide();
	$(".konfeti").hide();
	$(".balon").hide();


	// Ekrana yazdır.

	console.log("FURKAN");
	console.log("ARDA");

	function sifirla() {
		console.log("SIFIRMA BAŞLATILDI");

		// SIFIRLAMA
		
		// Patladıyı göster
		$(".patladi").hide();

		// Balonu gizle
		$(".balon").hide();

		// Balonu en alta indir.
		$(".balon").css({
			bottom: 0
		});		


	}

 


	$("#oyunu-baslat").click(function(event) {
		console.log("oyunu baslat");

		// BUTONU GİZLE
		$("#oyunu-baslat").hide();

		$(".balon").clone().appendTo('.oyun-alani')


		// BAŞLATMA
		var rastgelerakam = getRndInteger(10,350);
		console.log(rastgelerakam);

		// Balonun soldan rastgele bir yereden oluşması
		$(".balon").css({
			left: rastgelerakam
		});

		$(".balon").show();

	 	// Balonu aşağıdan yukarıya gönder
		$(".balon").animate({
			'bottom': 650
		}, 3000, function() {
			$("#oyunu-baslat").show()
			sifirla();
		});


		/* BALON CLICK BAŞLADI*/
		// Balonun üzerine tıklayınca
		
		$(".balon-patlat").click(function(event) {

			// Balonu sakla
			$(".balon").hide();

			// Patladıyı göster
			$(".patladi").show();

			// Konfetiyi göster
			$(".konfeti").show();

			var tiklandigiyer = $(".balon").css('bottom');
			console.log("TIKLANDIGI YER: ",  tiklandigiyer);

			$(".patladi").css({
				bottom: tiklandigiyer,
				left: rastgelerakam
			});

		});
		/* BALON CLICK BITTI*/

 



	});


	function getRndInteger(min, max) {
	    return Math.floor(Math.random() * (max - min + 1) ) + min;
	}	
 
});