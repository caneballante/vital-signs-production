$(document).ready(function () {	
	$.getJSON('json/newsreleases.json', function (data) {
			newsReleasesData = data;
			newsReleaseShow();
		});


		function newsReleaseShow () {		
			$.each((newsReleasesData['news-releases']), function(i, newsReleases) {
				var newsDate = (newsReleases['date']);
				var newsLink = (newsReleases['link']);
				var newsShow = '<p>' + newsDate + " : " + newsLink + '</p>';
				$('#newsDiv').append(newsShow);
				console.log (newsShow);
			});
		};


});