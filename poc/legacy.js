const util = require('util');

const movies = [{
	"link": "https://www.yorck.de/filme/56e6db2b69f5b509d7de91e2",
	"eventId": "114311",
	"id": "68ca56c3",
	"title": "Bach in Brazil",
	"countries": ["D", "BR"],
	"year": "2014",
	"description": "Eine Erbschaft, ein Original-Notenblatt Bachs, verschlägt den graumausigen Musiklehrer Marten Brückling nach Brasilien. So gar nicht in seiner Komfortzone wird ihm vor der Rückreise sein Gepäck geklaut. Doch es kommt noch schlimmer: Er muss seinem Helfer Candido versprechen, in der Jugendstrafanstalt Musikunterricht zu geben. Dabei zeigt sich, dass Bach und Brückling besser nach Brasilien passen als gedacht.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56e6db2b69f5b509d7de91e2/show_retina_BIB_poster_A4.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56e6db2b69f5b509d7de91e2/normal_retina_bachinbrazil_trailerpreview.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e6dd5d69f5b509d7de91e7/normal_retina_03_Bach_in_Brazil.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e6dd5d69f5b509d7de91e7/03_Bach_in_Brazil.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e6dd5d69f5b509d7de91e8/normal_retina_08_Bach_in_Brazil.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e6dd5d69f5b509d7de91e8/08_Bach_in_Brazil.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e6dd5d69f5b509d7de91e9/normal_retina_13_Bach_in_Brazil.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e6dd5d69f5b509d7de91e9/13_Bach_in_Brazil.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=bZBScAZ2RhU"
	},
	"camera": ["Jörg Widmer"],
	"composer": ["Johann Sebastian Bach"],
	"director": ["Ansgar Ahlers"],
	"fsk": "0",
	"length": "91 min",
	"screenplay": ["Ansgar Ahlers", "Soeren Mening"],
	"program": [
		["54eda1df6831381d72230000", [
			["2016-05-08T11:45:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/5718c17169f5b539bbcbea1f",
	"eventId": "114949",
	"id": "6a0ef8c7",
	"title": "Bauernopfer - Spiel der Könige",
	"countries": ["USA"],
	"year": "2014",
	"description": "Biopic über Bobby Fischer, der 1972 als bester amerikanischer Schachspieler aller Zeiten inmitten des Kalten Krieges den sowjetischen Weltmeister Boris Spasskij zum sportlich-politischen Duell herausfordert. Doch das Genie zeigt Anzeichen schwerer Paranoia und auch schon erste Hinweise auf seine späteren antiamerikanischen und antisemitischen Ausfälle. Mit Tobey Maguire und Liev Schreiber stark besetzt.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/5718c17169f5b539bbcbea1f/show_retina_bauernopfer_Plakat_A4_RGB.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/5718c17169f5b539bbcbea1f/normal_retina_bauernopfer_trailerpreview.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5718c16e69f5b539bbcbea1c/normal_retina_bauernopfer_001.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5718c16e69f5b539bbcbea1c/bauernopfer_001.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5718c16e69f5b539bbcbea1d/normal_retina_bauernopfer_007.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5718c16e69f5b539bbcbea1d/bauernopfer_007.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5718c16e69f5b539bbcbea1e/normal_retina_bauernopfer_014.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5718c16e69f5b539bbcbea1e/bauernopfer_014.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=0ku4i19g2Gs"
	},
	"director": ["Edward Zwick"],
	"length": "114 min",
	"program": [
		["54eef979683138488b0c0000", [
			["2016-05-03T17:15:00.000Z", "OmUD"],
			["2016-05-03T20:00:00.000Z", "OmUD"],
			["2016-05-03T21:15:00.000Z", "OmUD"],
			["2016-05-04T17:15:00.000Z", "OmUD"],
			["2016-05-04T20:00:00.000Z", "OmUD"],
			["2016-05-04T21:15:00.000Z", "OmUD"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/56d5a30f614440619310ee1e",
	"eventId": "114307",
	"id": "9460b528",
	"title": "Birnenkuchen mit Lavendel",
	"countries": ["F"],
	"year": "2015",
	"description": "Eine Liebesgeschichte ohne Sex und wilde Küsse? – Was für eine schöne Idee! Es geht um etwas ganz Altmodisches: um Seelenverwandtschaft und gegenseitige Akzeptanz. Anders als in der üblichen Romcom finden hier nicht zwei streitbare Geister zueinander, sondern zwei, die vieles gemeinsam haben.<br>\nBesnard findet genau den richtigen feinen, humorvollen Ton für seine Story, die immer spannender wird. Louise ist von der Pleite bedroht, und Pierre könnte möglicherweise in ein Heim kommen. Und da ist auch noch Louises Nachbar, der sowohl auf sie als auch auf ihr Land scharf ist … \nMit Witz, Eleganz und viel Sensibilität erzählt Éric Besnard eine Geschichte, die so leicht und locker ist wie Louises Merveilles – die Birnenkrapfen, die Pierre so liebt. sic!",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56d5a30f614440619310ee1e/show_retina_BIKULA_Plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56d5a30f614440619310ee1e/normal_retina_birnenkuchen_lavendel_trailerbild.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def91669f5b52747de91cc/normal_retina_BML_Pressefoto_11.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def91669f5b52747de91cc/BML_Pressefoto_11.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def91669f5b52747de91cd/normal_retina_BML_Pressefoto_08.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def91669f5b52747de91cd/BML_Pressefoto_08.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def91669f5b52747de91ce/normal_retina_BML_Pressefoto_04.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def91669f5b52747de91ce/BML_Pressefoto_04.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=MIJnBrMt9Z8",
		"ORIGINAL": "https://www.youtube.com/watch?v=UGI7aiA6bU0"
	},
	"camera": ["Philippe Guilbert"],
	"composer": ["Christophe Julien"],
	"director": ["Éric Besnard"],
	"fsk": "0",
	"length": "101 min",
	"screenplay": ["Éric Besnard"],
	"program": [
		["54ed9a996831381d72060000", [
			["2016-05-03T18:00:00.000Z"],
			["2016-05-04T18:00:00.000Z"]
		]],
		["54ed9d086831381d720f0000", [
			["2016-05-03T18:00:00.000Z"],
			["2016-05-04T18:00:00.000Z"]
		]],
		["54ed9e276831381d72150000", [
			["2016-05-03T16:45:00.000Z"],
			["2016-05-03T19:00:00.000Z"],
			["2016-05-04T16:45:00.000Z"],
			["2016-05-04T19:00:00.000Z"]
		]],
		["54eda1df6831381d72230000", [
			["2016-05-03T15:45:00.000Z"],
			["2016-05-03T20:00:00.000Z"],
			["2016-05-04T15:45:00.000Z"],
			["2016-05-04T20:00:00.000Z"],
			["2016-05-05T15:45:00.000Z"],
			["2016-05-06T15:45:00.000Z"],
			["2016-05-07T15:45:00.000Z"],
			["2016-05-08T15:45:00.000Z"],
			["2016-05-09T15:45:00.000Z"],
			["2016-05-10T15:45:00.000Z"],
			["2016-05-11T15:45:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/570662df69f5b55f7958618f",
	"eventId": "114742",
	"id": "6044384e",
	"title": "Chamissos Schatten Kapitel 2, Teil 1 – Tschukotka und die Wrangelinsel",
	"countries": ["Deutschland"],
	"year": "2015",
	"description": "Das zweite Kapitel ihrer Reise auf den Spuren großer Abenteurer wie Adelbert von Chamisso führt die Dokumentarfilmerin Ulrike Ottinger in den äußersten Nordosten Russlands – nach Tschukotka. Spektakuläre Bilder bringt sie nicht nur von den einheimischen Tschuktschen mit, sondern auch von der Flora und Fauna der Wrangelinsel, einem Weltnaturerbe der UNESCO, wo bis 1700 v. Chr. noch lebende Mammuts hausten.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/570662df69f5b55f7958618f/show_retina_chamissos-schatten_plakat_press.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/570662df69f5b55f7958618f/normal_retina_chamisso_kapitel2_trailerpreview.jpg",
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=Cz99ZjpDsBg"
	},
	"director": ["Ulrike Ottinger "],
	"length": "192 min"
}, {
	"link": "https://www.yorck.de/filme/569cfbbc6566391149060000",
	"eventId": "114110",
	"id": "e7817899",
	"title": "Colonia Dignidad",
	"countries": ["D", "LUX", "F"],
	"year": "2016",
	"description": "Chile, 1973. Lena und Daniel geraten während des Militärputsches in die Fänge der Geheimpolizei. Daniel wird verschleppt und Lena findet heraus, dass er in der hermetisch abgeriegelten Colonia Dignidad im Süden Chiles festgehalten wird. Nach Außen ein deutsches Musterdorf unter der Führung des Laienpredigers Paul Schäfer, kollaboriert die Colonia in Wahrheit mit Diktator Pinochet und lässt ihn dort politische Gefangene foltern und töten. Lena beschließt, sich der berüchtigten Sekte anzuschließen, um Daniel zu befreien. zelluloid.de",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/569cfbbc6566391149060000/show_retina_colonia_dignidad.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/569cfbbc6566391149060000/normal_retina_05_colonia_dignidad_C_00344a.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21020000/normal_retina_01_colonia_dignidad_R7A3827.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21020000/01_colonia_dignidad_R7A3827.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21030000/normal_retina_02_colonia_dignidad_R7A1608.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21030000/02_colonia_dignidad_R7A1608.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21040000/normal_retina_04_colonia_dignidad_R7A1916.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21040000/04_colonia_dignidad_R7A1916.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21050000/normal_retina_06_colonia_dignidad_R7A3407.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21050000/06_colonia_dignidad_R7A3407.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21060000/normal_retina_09_colonia_dignidad_R7A8453.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21060000/09_colonia_dignidad_R7A8453.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21070000/normal_retina_10_colonia_dignidad_R7A0120.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21070000/10_colonia_dignidad_R7A0120.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21080000/normal_retina_11_colonia_dignidad_R7A3644.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21080000/11_colonia_dignidad_R7A3644.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21090000/normal_retina_14_colonia_dignidad_R7A8607.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a21090000/14_colonia_dignidad_R7A8607.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a210a0000/normal_retina_20_colonia_dignidad_R7A9203.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e3683865352a210a0000/20_colonia_dignidad_R7A9203.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=m7Zvy86jnpA",
		"ORIGINAL": "https://www.youtube.com/watch?v=56auQjWcSRQ"
	},
	"camera": ["Kolja Brandt"],
	"composer": ["André Dziezuk", "Fernando Velázquez"],
	"director": ["Florian Gallenberger"],
	"length": "110 min",
	"screenplay": ["Florian Gallenberger", "Torsten Wenzel"]
}, {
	"link": "https://www.yorck.de/filme/571612f869f5b509b2cbed07",
	"eventId": "114752",
	"id": "bb7e6884",
	"title": "Der Schamane und die Schlange",
	"countries": ["Kolumbien"],
	"year": "2015",
	"description": "Die Erzählperspektive macht diesen Film einzigartig. Berichte von Begegnungen mit Schamanen, die wir kennen, stammen immer von Weißen; etwa von dem Ethnologen Grünberg oder dem Botaniker Schultes (die in den beiden fiktiven Forschern unschwer zu erkennen sind). Auch Castaneda kommt einem natürlich in den Sinn. Der Film dagegen macht sich ganz die Perspektive des Schamanen zu eigen, ist seine Charakterstudie und Entwicklungsgeschichte, klischeefrei und glaubwürdig. Die Metaphorik der schwarzweißen Bilder, die schrecklich-schönen Naturaufnahmen, der mäandernde Rhythmus und die Art in der die beiden Begegnungen einander spiegeln, das alles ist meisterhaft erzählt, ist ein weiser und tiefgründiger Einblick in eine andere Welt. Es ist Filmmagie im wahrsten Sinne des Wortes.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/571612f869f5b509b2cbed07/show_retina_Poster_Schamane.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/571612f869f5b509b2cbed07/normal_retina_schamane_trailerpreviewjpg.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571612f369f5b509b2cbed04/normal_retina_schamane3.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571612f369f5b509b2cbed04/schamane3.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571612f369f5b509b2cbed05/normal_retina_schamane1.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571612f369f5b509b2cbed05/schamane1.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571612f369f5b509b2cbed06/normal_retina_schamane2.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571612f369f5b509b2cbed06/schamane2.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=y1RI1Bzop5g"
	},
	"camera": ["David Gallego"],
	"composer": ["Nascuy Linare"],
	"director": ["Ciro Guerra"],
	"length": "125 min",
	"program": [
		["54ec8ea868313813e3190000", [
			["2016-05-03T17:10:00.000Z", "OmU"],
			["2016-05-03T19:50:00.000Z", "OmU"],
			["2016-05-03T22:30:00.000Z", "OmU"],
			["2016-05-04T17:10:00.000Z", "OmU"],
			["2016-05-04T19:50:00.000Z", "OmU"],
			["2016-05-04T22:30:00.000Z", "OmU"],
			["2016-05-05T17:15:00.000Z", "OmU"],
			["2016-05-06T16:40:00.000Z", "OmU"],
			["2016-05-06T19:15:00.000Z", "OmU"],
			["2016-05-06T21:50:00.000Z", "OmU"],
			["2016-05-07T16:40:00.000Z", "OmU"],
			["2016-05-07T19:15:00.000Z", "OmU"],
			["2016-05-07T21:50:00.000Z", "OmU"],
			["2016-05-08T16:40:00.000Z", "OmU"],
			["2016-05-08T19:15:00.000Z", "OmU"],
			["2016-05-08T21:50:00.000Z", "OmU"],
			["2016-05-09T16:40:00.000Z", "OmU"],
			["2016-05-09T19:15:00.000Z", "OmU"],
			["2016-05-09T21:50:00.000Z", "OmU"],
			["2016-05-10T16:40:00.000Z", "OmU"],
			["2016-05-10T19:15:00.000Z", "OmU"],
			["2016-05-10T21:50:00.000Z", "OmU"],
			["2016-05-11T16:40:00.000Z", "OmU"],
			["2016-05-11T19:15:00.000Z", "OmU"],
			["2016-05-11T21:50:00.000Z", "OmU"]
		]],
		["54ed9e276831381d72150000", [
			["2016-05-03T17:45:00.000Z", "OmU"],
			["2016-05-03T20:30:00.000Z", "OmU"],
			["2016-05-04T17:45:00.000Z", "OmU"],
			["2016-05-04T20:30:00.000Z", "OmU"],
			["2016-05-05T18:20:00.000Z", "OmU"],
			["2016-05-05T21:00:00.000Z", "OmU"],
			["2016-05-06T18:20:00.000Z", "OmU"],
			["2016-05-06T21:00:00.000Z", "OmU"],
			["2016-05-07T18:20:00.000Z", "OmU"],
			["2016-05-07T21:00:00.000Z", "OmU"],
			["2016-05-08T18:20:00.000Z", "OmU"],
			["2016-05-08T21:00:00.000Z", "OmU"],
			["2016-05-09T18:20:00.000Z", "OmU"],
			["2016-05-09T21:00:00.000Z", "OmU"],
			["2016-05-10T18:20:00.000Z", "OmU"],
			["2016-05-10T21:00:00.000Z", "OmU"],
			["2016-05-11T18:20:00.000Z", "OmU"],
			["2016-05-11T21:00:00.000Z", "OmU"]
		]],
		["54eda1df6831381d72230000", [
			["2016-05-03T17:15:00.000Z", "OmU"],
			["2016-05-03T20:00:00.000Z", "OmU"],
			["2016-05-04T17:15:00.000Z", "OmU"],
			["2016-05-04T20:00:00.000Z", "OmU"],
			["2016-05-05T16:15:00.000Z", "OmU"],
			["2016-05-05T20:00:00.000Z", "OmU"],
			["2016-05-06T16:15:00.000Z", "OmU"],
			["2016-05-06T20:00:00.000Z", "OmU"],
			["2016-05-07T16:15:00.000Z", "OmU"],
			["2016-05-07T20:00:00.000Z", "OmU"],
			["2016-05-08T11:30:00.000Z", "OmU"],
			["2016-05-08T16:15:00.000Z", "OmU"],
			["2016-05-08T20:00:00.000Z", "OmU"],
			["2016-05-09T16:15:00.000Z", "OmU"],
			["2016-05-09T20:00:00.000Z", "OmU"],
			["2016-05-10T16:15:00.000Z", "OmU"],
			["2016-05-10T20:00:00.000Z", "OmU"],
			["2016-05-11T16:15:00.000Z", "OmU"],
			["2016-05-11T20:00:00.000Z", "OmU"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/571f18b069f5b54191cbf44b",
	"eventId": "115344",
	"id": "358b7653",
	"title": "Desire will set you free - Premiere mit Yony Leyser und Peaches",
	"countries": ["Deutschland"],
	"year": "2015",
	"description": "Endlich mal wieder ein Berlin-Film, der den hedonistischen Vibe dieser Stadt einfängt. Ezra verbringt seine Zeit mit pseudophilosophischen Gesprächen, Drogen und Durchfeiern. Als er sich in den russischen Stricher Sascha verliebt, nimmt er ihn mit auf seine Reise durch die Nacht. Exzessiv, psychedelisch und ziemlich toll.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/571f18b069f5b54191cbf44b/show_retina_desire_poster_web.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/571f18b069f5b54191cbf44b/normal_retina_desirewill_trailerpreview.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571f18ad69f5b54191cbf448/normal_retina_DWSYF_04.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571f18ad69f5b54191cbf448/DWSYF_04.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571f18ad69f5b54191cbf449/normal_retina_desire_setfree.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571f18ad69f5b54191cbf449/desire_setfree.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571f18ad69f5b54191cbf44a/normal_retina_DWSYF_06.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571f18ad69f5b54191cbf44a/DWSYF_06.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=CJfqLQf8Kd8"
	},
	"director": ["Yony Leyser"],
	"length": "92 min"
}, {
	"link": "https://www.yorck.de/filme/56e03ba561444009e9af0843",
	"eventId": "114945",
	"id": "1aa13cf9",
	"title": "Die Kommune",
	"countries": ["Dk"],
	"year": "2016",
	"description": "Regisseur Thomas Vinterberg, der mit DAS FEST und zuletzt DIE JAGD großartige, realitätsnahe Dramen inszenierte, mit denen er Themen wie Kindesmissbrauch sezierte, greift bei seinem neuen Film auf eigene Erfahrungen zurück. Er ist selbst in den Siebziger Jahren in einer Kommune aufgewachsen und schildert dieses Milieu zwischen Enthusiasmus und Naivität, Basisdemokratie und Besitzansprüchen zugleich liebevoll und schonungslos.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56e03ba561444009e9af0843/show_retina_KOM.PL_A4_rgb_300dpi.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56e03ba561444009e9af0843/normal_retina_kommune_trailerbild.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e0419769f5b51d9ade92ac/normal_retina_kommune3.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e0419769f5b51d9ade92ac/kommune3.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e0419769f5b51d9ade92ad/normal_retina_kommune2.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e0419769f5b51d9ade92ad/kommune2.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e0419769f5b51d9ade92ae/normal_retina_kommune1.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e0419769f5b51d9ade92ae/kommune1.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=WkuuyDcfP4E",
		"ORIGINAL": "https://www.youtube.com/watch?v=w04-EOPvIHM"
	},
	"director": ["Thomas Vinterberg"],
	"length": "111 min",
	"screenplay": ["Thomas Vinterberg,Tobias Lindholm"],
	"program": [
		["54ed9a996831381d72060000", [
			["2016-05-03T15:30:00.000Z"],
			["2016-05-03T20:30:00.000Z"],
			["2016-05-04T15:30:00.000Z"],
			["2016-05-04T20:30:00.000Z"]
		]],
		["54ed8d1968313849e8010000", [
			["2016-05-03T15:00:00.000Z"],
			["2016-05-03T17:45:00.000Z"],
			["2016-05-03T20:30:00.000Z"],
			["2016-05-04T15:00:00.000Z"],
			["2016-05-04T17:45:00.000Z"],
			["2016-05-04T20:30:00.000Z"]
		]],
		["54ed9e276831381d72150000", [
			["2016-05-05T15:00:00.000Z"],
			["2016-05-05T20:00:00.000Z"],
			["2016-05-06T15:00:00.000Z"],
			["2016-05-06T20:00:00.000Z"],
			["2016-05-07T15:00:00.000Z"],
			["2016-05-07T20:00:00.000Z"],
			["2016-05-08T15:00:00.000Z"],
			["2016-05-08T20:00:00.000Z"],
			["2016-05-09T15:00:00.000Z"],
			["2016-05-09T20:00:00.000Z"],
			["2016-05-10T15:00:00.000Z"],
			["2016-05-10T20:00:00.000Z"],
			["2016-05-11T15:00:00.000Z"],
			["2016-05-11T20:00:00.000Z"]
		]],
		["54ed9ff26831381d721c0000", [
			["2016-05-03T14:30:00.000Z"],
			["2016-05-03T19:30:00.000Z"],
			["2016-05-04T14:30:00.000Z"],
			["2016-05-04T19:30:00.000Z"]
		]],
		["54eda1df6831381d72230000", [
			["2016-05-05T15:00:00.000Z"],
			["2016-05-05T17:30:00.000Z"],
			["2016-05-05T20:00:00.000Z"],
			["2016-05-06T15:00:00.000Z"],
			["2016-05-06T17:30:00.000Z"],
			["2016-05-06T20:00:00.000Z"],
			["2016-05-07T15:00:00.000Z"],
			["2016-05-07T17:30:00.000Z"],
			["2016-05-07T20:00:00.000Z"],
			["2016-05-08T15:00:00.000Z"],
			["2016-05-08T17:30:00.000Z"],
			["2016-05-08T20:00:00.000Z"],
			["2016-05-09T15:00:00.000Z"],
			["2016-05-09T17:30:00.000Z"],
			["2016-05-09T20:00:00.000Z"],
			["2016-05-10T15:00:00.000Z"],
			["2016-05-10T17:30:00.000Z"],
			["2016-05-10T20:00:00.000Z"],
			["2016-05-11T15:00:00.000Z"],
			["2016-05-11T17:30:00.000Z"],
			["2016-05-11T20:00:00.000Z"]
		]],
		["54eda3cb6831381d722b0000", [
			["2016-05-03T17:00:00.000Z", "OmU"],
			["2016-05-03T19:30:00.000Z", "OmU"],
			["2016-05-03T22:00:00.000Z", "OmeU"],
			["2016-05-04T17:00:00.000Z", "OmU"],
			["2016-05-04T19:30:00.000Z", "OmU"],
			["2016-05-04T22:00:00.000Z", "OmeU"]
		]],
		["54eeff36683138488b240000", [
			["2016-05-03T18:00:00.000Z"],
			["2016-05-03T20:30:00.000Z"],
			["2016-05-04T18:00:00.000Z"],
			["2016-05-04T20:30:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/5695135c30356102c6000000",
	"eventId": "114090",
	"id": "ea6e89e6",
	"title": "Die Winzlinge - Operation Zuckerdose",
	"countries": ["FR", "BE"],
	"year": "2016",
	"description": "Nicht auszudenken, was eine in der Hast des Aufbruchs beim Picknick zurückgelassene Zuckerdose anrichten kann. Sie vermag wilde Feindschaften und unerbittliche Verfolgungsjagden zwischen schwarzen und roten Ameisen auszulösen, begründet aber auch Freundschaften zwischen einem Marienkäfer und einer Ameise und holt – in ungewöhnlich animierten Bildern – das Ritterlichste aus den Protagonisten heraus.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/5695135c30356102c6000000/show_retina_Plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/5695135c30356102c6000000/normal_retina_Banner.jpg",
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=dTfAPiaEF40"
	},
	"director": ["Thomas Szabo", "Hélène Giraud"],
	"fsk": "0",
	"length": "98 min",
	"program": [
		["54ed9e276831381d72150000", [
			["2016-05-05T13:45:00.000Z"],
			["2016-05-06T13:45:00.000Z"],
			["2016-05-07T13:45:00.000Z"],
			["2016-05-08T13:45:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/5723455c69f5b508b4673fb4",
	"eventId": "115390",
	"id": "cbcd5bd4",
	"title": "Digitale Nomaden 2 mit Diskussion",
	"countries": ["Deutschland"],
	"year": "2016",
	"description": "Für den zweiten Teil, „Digitale Nomaden – Deutschland meldet sich ab“ machte sich das Produktionsteam 2015 erneut auf den Weg, die Nomaden zu treffen. Dieses Mal möchten sie ihnen etwas mehr auf den Zahn fühlen: ist alles wirklich so rosig, wie sie es im ersten Film beschrieben haben? Finden sie, dass die \"Bewegung\" eine gute Entwicklung macht? Haben sie Bedenken, was die Nachhaltigkeit ihres Lebensstils betrifft? Der zweite Film zum Thema \"Digitale Nomaden\" ist keine Abrechnung, aber er möchte mehr Fragen stellen und mehr Antworten präsentieren. Auch wird es um die Frage gehen, wie sich das Leben vom Hauptakteur Thorsten Kolsch verändert hat. Hat er noch seine Lagerbox? Lebt er weiterhin in Ferienwohnungen? Wie definiert er heute ortsunabhängiges Leben und Arbeiten? Ist das digitale Nomadentum ein Selbstzweck, ein Lebensstil oder vielleicht doch nur eine Momentaufnahme, die sich im nächsten Augenblick aufgrund äußerer Veränderungen wieder relativieren kann?",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/5723455c69f5b508b4673fb4/show_retina_DigitaleNomaden2_Plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/5723455c69f5b508b4673fb4/normal_retina_digitalenomadentrailerpreview.jpg",
	"length": "60 min",
	"program": [
		["54ed9e276831381d72150000", [
			["2016-05-06T18:30:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/56eace5369f5b52b3cf36699",
	"eventId": "114947",
	"id": "a22b9d8a",
	"title": "Ein Hologramm für den König",
	"countries": ["D", "USA", "GB", "F"],
	"year": "2015",
	"description": "Alan Clay, Alter 54, Opfer der Bankenkrise, hat eine letzte Chance. Er soll innovative Hologramm-Kommunikationstechnologie an den Mann, besser gesagt den König bringen: König Abdullah von Saudi-Arabien lässt in der arabischen Wüste eine strahlende Wirtschaftsmetropole errichten. Doch der König kommt nicht. Nicht am ersten Tag, nicht am zweiten – und auch nicht in den Tagen danach. In diesen Tagen der Unverbindlichkeit und des Wartens wird der junge Fahrer Yousef Alans Gefährte. Durch ihn erlebt er die Widersprüchlichkeiten eines Landes zwischen Aufbruch und Stillstand, zwischen Tradition und Moderne. Und er lernt die interessante Ärztin Zahra kennen. Anhand dieser Begegnungen und der neuen kulturellen Eindrücke entwickelt sich Alan Clay vom zielstrebigen und erfolgsgetriebenen Salesman zu einer Person, die sich selbst Perspektiven sucht und für sich einen neuen Platz im Leben findet. So gerät für Alan immer mehr zur Nebensache, ob der König nun kommt oder nicht.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56eace5369f5b52b3cf36699/show_retina_Holo_Plakat_A4_300dpi.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56eace5369f5b52b3cf36699/normal_retina_hologramm_koenig_previewtrailer.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56eacfa569f5b52b39f36689/normal_retina_hologramm-007.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56eacfa569f5b52b39f36689/hologramm-007.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56eacfa569f5b52b39f3668a/normal_retina_hologramm--11.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56eacfa569f5b52b39f3668a/hologramm--11.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56eacfa569f5b52b39f3668b/normal_retina_HOLOGRAMM_X_Verleih_001.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56eacfa569f5b52b39f3668b/HOLOGRAMM_X_Verleih_001.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=G7_OL6O43OY",
		"ORIGINAL": "https://www.youtube.com/watch?v=uEkVQ-gU3M0"
	},
	"camera": ["Frank Griebe"],
	"composer": ["Johnny Klimek", "Tom Tykwer"],
	"director": ["Tom Tykwer"],
	"fsk": "6",
	"length": "98 min",
	"screenplay": ["Tom Tykwer"],
	"program": [
		["54ed9e276831381d72150000", [
			["2016-05-03T15:30:00.000Z"],
			["2016-05-03T18:00:00.000Z"],
			["2016-05-03T20:15:00.000Z"],
			["2016-05-04T15:30:00.000Z"],
			["2016-05-04T18:00:00.000Z"],
			["2016-05-04T20:15:00.000Z"],
			["2016-05-05T15:30:00.000Z"],
			["2016-05-05T17:45:00.000Z"],
			["2016-05-05T20:00:00.000Z"],
			["2016-05-06T15:30:00.000Z"],
			["2016-05-06T17:45:00.000Z"],
			["2016-05-06T20:00:00.000Z"],
			["2016-05-06T22:45:00.000Z"],
			["2016-05-07T15:30:00.000Z"],
			["2016-05-07T17:45:00.000Z"],
			["2016-05-07T20:00:00.000Z"],
			["2016-05-07T22:45:00.000Z"],
			["2016-05-08T15:30:00.000Z"],
			["2016-05-08T17:45:00.000Z"],
			["2016-05-08T20:00:00.000Z"],
			["2016-05-09T15:30:00.000Z"],
			["2016-05-09T17:45:00.000Z"],
			["2016-05-09T20:00:00.000Z"],
			["2016-05-10T15:30:00.000Z"],
			["2016-05-10T17:45:00.000Z"],
			["2016-05-10T20:00:00.000Z"],
			["2016-05-11T15:30:00.000Z"],
			["2016-05-11T17:45:00.000Z"],
			["2016-05-11T20:00:00.000Z"]
		]],
		["54eda1df6831381d72230000", [
			["2016-05-03T15:00:00.000Z"],
			["2016-05-03T18:00:00.000Z"],
			["2016-05-03T20:20:00.000Z"],
			["2016-05-04T15:00:00.000Z"],
			["2016-05-04T18:00:00.000Z"],
			["2016-05-04T20:20:00.000Z"],
			["2016-05-05T15:30:00.000Z"],
			["2016-05-05T17:45:00.000Z"],
			["2016-05-05T20:00:00.000Z"],
			["2016-05-06T15:30:00.000Z"],
			["2016-05-06T17:45:00.000Z"],
			["2016-05-06T20:00:00.000Z"],
			["2016-05-07T15:30:00.000Z"],
			["2016-05-07T17:45:00.000Z"],
			["2016-05-07T20:00:00.000Z"],
			["2016-05-08T15:30:00.000Z"],
			["2016-05-08T17:45:00.000Z"],
			["2016-05-08T20:00:00.000Z"],
			["2016-05-09T15:30:00.000Z"],
			["2016-05-09T17:45:00.000Z"],
			["2016-05-09T20:00:00.000Z"],
			["2016-05-10T15:30:00.000Z"],
			["2016-05-10T17:45:00.000Z"],
			["2016-05-10T20:00:00.000Z"],
			["2016-05-11T15:30:00.000Z"],
			["2016-05-11T17:45:00.000Z"],
			["2016-05-11T20:00:00.000Z"]
		]],
		["54eda5536831381d72330000", [
			["2016-05-03T16:00:00.000Z", "OmUD"],
			["2016-05-03T20:40:00.000Z", "OmUD"],
			["2016-05-04T16:00:00.000Z", "OmUD"],
			["2016-05-04T20:40:00.000Z", "OmUD"]
		]],
		["54eda6996831381d723a0000", [
			["2016-05-03T15:50:00.000Z"],
			["2016-05-03T18:10:00.000Z"],
			["2016-05-03T20:30:00.000Z", "OmUD"],
			["2016-05-04T15:50:00.000Z"],
			["2016-05-04T18:10:00.000Z"],
			["2016-05-04T20:30:00.000Z", "OmUD"]
		]],
		["54eeff36683138488b240000", [
			["2016-05-03T15:00:00.000Z"],
			["2016-05-03T17:15:00.000Z"],
			["2016-05-03T19:30:00.000Z"],
			["2016-05-03T21:45:00.000Z"],
			["2016-05-04T15:00:00.000Z"],
			["2016-05-04T17:15:00.000Z"],
			["2016-05-04T19:30:00.000Z"],
			["2016-05-04T21:45:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/56e2d46069f5b52747de957f",
	"eventId": "114736",
	"id": "b652688b",
	"title": "Ein Mann namens Ove",
	"countries": ["S"],
	"year": "2015",
	"description": "Mit viel hintergründigem Witz und Herz erzählt Regisseur und Drehbuchautor Hannes Holm diese hinreißende Komödie über eine unerwartete Freundschaft und eine große Liebe. In der Titelrolle brilliert Schwedens Schauspielstar Rolf Lassgård",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56e2d46069f5b52747de957f/show_retina_mannnamensove_plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56e2d46069f5b52747de957f/normal_retina_mannamensove_trailerpreview.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e2d45369f5b52747de957c/normal_retina_mannnamens_ove1.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e2d45369f5b52747de957c/mannnamens_ove1.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e2d45369f5b52747de957d/normal_retina_mannnamens_ove2.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e2d45369f5b52747de957d/mannnamens_ove2.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e2d45369f5b52747de957e/normal_retina_mannnamens_ove3.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e2d45369f5b52747de957e/mannnamens_ove3.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=fCVr8hK8Mgg"
	},
	"camera": ["Göran Hallberg"],
	"composer": ["Gaute Storaas"],
	"director": ["Hannes Holm"],
	"fsk": "12",
	"length": "116 min",
	"screenplay": ["Hannes Holm"],
	"program": [
		["54ed9d086831381d720f0000", [
			["2016-05-03T15:15:00.000Z"],
			["2016-05-03T20:30:00.000Z"],
			["2016-05-04T15:15:00.000Z"],
			["2016-05-04T20:30:00.000Z"]
		]],
		["54ed9e276831381d72150000", [
			["2016-05-03T15:15:00.000Z"],
			["2016-05-03T20:00:00.000Z"],
			["2016-05-04T15:15:00.000Z"],
			["2016-05-04T20:00:00.000Z"],
			["2016-05-05T17:30:00.000Z"],
			["2016-05-07T17:30:00.000Z"],
			["2016-05-08T17:30:00.000Z"],
			["2016-05-09T17:30:00.000Z"],
			["2016-05-10T17:30:00.000Z"]
		]],
		["54ed9ff26831381d721c0000", [
			["2016-05-03T16:50:00.000Z"],
			["2016-05-04T16:50:00.000Z"]
		]],
		["54eda6996831381d723a0000", [
			["2016-05-03T17:15:00.000Z"],
			["2016-05-03T20:00:00.000Z"],
			["2016-05-04T17:15:00.000Z"],
			["2016-05-04T20:00:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/5704cab869f5b55f7658602c",
	"eventId": "114738",
	"id": "cecbb088",
	"title": "Ein letzter Tango",
	"countries": ["D", "ARG"],
	"year": "2015",
	"description": "Ein bewegendes Porträt über eines der berühmtesten Tanz-Paare - das legendäre Tango-Duo María Nieves und Juan Carlos Copes - mit einem exquisiten Soundtrack, furiosen Tango-Einlagen und eleganten Rückblenden, die sich stilecht wie die Beine der Tangotänzer ineinander verschränken und wieder auseinanderdrehen, wodurch die Doku auch formal begeistert. Diese leidenschaftliche Hommage an den Tanz strahlt pure Sinnlichkeit aus. Ganz großer Applaus!",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/5704cab869f5b55f7658602c/show_retina_ELT_plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/5704cab869f5b55f7658602c/normal_retina_letztertango_trailerpreview.jpg",
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=T53y_AdEKGc"
	},
	"director": ["German Kral"],
	"length": "84 min",
	"program": [
		["54eef979683138488b0c0000", [
			["2016-05-03T19:20:00.000Z", "OmU"],
			["2016-05-04T19:20:00.000Z", "OmU"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/56fbcec46144402451e268b4",
	"eventId": "114734",
	"id": "1e21453e",
	"title": "Freeheld - Jede Liebe ist gleich",
	"countries": ["USA"],
	"year": "2015",
	"description": "Julianne Moore und Ellen Page brillieren als lesbisches Paar in einem bewegenden Bürgerrechtsdrama, das auf einem wahren Fall beruht.Regisseur Peter Sollett schildert nach dem Drehbuch von PHILADELPHIA-Autor Ron Nyswaner die wahre Geschichte von Laurel Hester und Stacie Andree, die sich vor rund zehn Jahren für Gleichberechtigung im Rentengesetz einsetzten, die im vergangenen Jahr in den Vereinigten Staaten endlich anerkannt wurde. Ein berührendes menschliches Drama, das niemanden kaltlässt und deutlich macht: \nHier geht es um elementare Bürgerrechte, die uns alle betreffen, egal ob homo- oder heterosexuell.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56fbcec46144402451e268b4/show_retina_Freeheld_Hauptplakat_02.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56fbcec46144402451e268b4/normal_retina_freeheld_trailerpreview.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbcec26144402451e268b1/normal_retina_Freeheld_Szenenbilder_12.300dpi.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbcec26144402451e268b1/Freeheld_Szenenbilder_12.300dpi.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbcec26144402451e268b2/normal_retina_Freeheld_Szenenbilder_09.300dpi.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbcec26144402451e268b2/Freeheld_Szenenbilder_09.300dpi.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbcec26144402451e268b3/normal_retina_Freeheld_Szenenbilder_03.300dpi.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbcec26144402451e268b3/Freeheld_Szenenbilder_03.300dpi.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=pIgde6rWivI",
		"ORIGINAL": "https://www.youtube.com/watch?v=-N-NTx46K_g"
	},
	"camera": ["Maryse Alberti"],
	"composer": ["Johnny Marr", "Hans Zimmer"],
	"director": ["Peter Sollett"],
	"fsk": "6",
	"length": "103 min",
	"screenplay": ["Ron Nyswaner"],
	"program": [
		["54ec8ea868313813e3190000", [
			["2016-05-03T17:00:00.000Z", "OmU"],
			["2016-05-04T17:00:00.000Z", "OmU"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/56d5aee2614440619310ee35",
	"eventId": "114708",
	"id": "df44d916",
	"title": "Grüße aus Fukushima",
	"countries": ["D"],
	"year": "2015",
	"description": "Obwohl beide total unterschiedlich sind, lernen die junge Marie und die alte Geisha Satomi in dieser „Education sentimentale“, sich von ihren belastenden Erinnerungen zu befreien. Eine unglaublich anrührende Seelenreparatur in eindrucksvollem Schwarzweiß im Sperrgebiet der verstrahlten Zone nach der Reaktorkatastrophe von Fukushima. Dabei besticht besonders die schauspielerische Leistung der jungen Hauptdarstellerin Rosalie Thomass. Ihr bei den Wechselbädern der Gefühle zwischen Enttäuschung, Wut, Hoffnung und Bemühen zuzusehen, ist sehr berührend.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56d5aee2614440619310ee35/show_retina_Gruesse-Aus-Fukushima-poster.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56d5aee2614440619310ee35/normal_retina_gruesse_fukushima_trailerbild.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def6d261444009e3af0742/normal_retina_06_gruesse_aus_fukushima_MB1_10_sw.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def6d261444009e3af0742/06_gruesse_aus_fukushima_MB1_10_sw.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def6fd61444009e9af073a/normal_retina_04_gruesse_aus_fukushima_1.6.1.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def6fd61444009e9af073a/04_gruesse_aus_fukushima_1.6.1.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def6fd61444009e9af073b/normal_retina_03_gruesse_aus_fukushima_DSC00478.2.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def6fd61444009e9af073b/03_gruesse_aus_fukushima_DSC00478.2.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=QiIaNw6VJo4"
	},
	"camera": ["Hanno Lentz"],
	"composer": ["Ulrike Haage"],
	"director": ["Doris Dörrie"],
	"fsk": "12",
	"length": "108 min",
	"screenplay": ["Doris Dörrie"],
	"program": [
		["54eda1df6831381d72230000", [
			["2016-05-03T14:15:00.000Z"],
			["2016-05-04T14:15:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/56bc488c69f5b504c185b9d9",
	"eventId": "114112",
	"id": "a9e1e534",
	"title": "Hail, Caesar!",
	"countries": ["USA", "GB"],
	"year": "2016",
	"description": "Joel und Ethan Coen erzählen eine wilde Geschichte aus dem Schattenbereich der früheren Hollywood-Traumfabrik – augenzwinkernd, mit viel Charme und spektakulärer Besetzung.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56bc488c69f5b504c185b9d9/show_retina_HAIL_CAESAR_Hauptplakat_4C.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56bc488c69f5b504c185b9d9/normal_retina_haillcaesar_banner2.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56f3f54b614440120de24240/normal_retina_VF-HAIL-CAESAR1_A4.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56f3f54b614440120de24240/VF-HAIL-CAESAR1_A4.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56f3f54b614440120de24241/normal_retina_VF-HAIL-CAESAR2_A4.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56f3f54b614440120de24241/VF-HAIL-CAESAR2_A4.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56f3f54b614440120de24242/normal_retina_VF-HAIL-CAESAR3_A4.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56f3f54b614440120de24242/VF-HAIL-CAESAR3_A4.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=yoMjvIVCHtU",
		"ORIGINAL": "https://www.youtube.com/watch?v=kMqeoW3XRa0"
	},
	"camera": ["Roger Deakins"],
	"composer": ["Carter Burwell"],
	"director": ["Joel Coen", "Ethan Coen"],
	"fsk": "0",
	"length": "100 min",
	"screenplay": ["Joel Coen", "Ethan Coen"],
	"program": [
		["54ec8ea868313813e3190000", [
			["2016-05-03T21:30:00.000Z", "OmU"],
			["2016-05-04T21:30:00.000Z", "OmU"]
		]],
		["54eda1df6831381d72230000", [
			["2016-05-05T21:00:00.000Z"],
			["2016-05-06T21:00:00.000Z"],
			["2016-05-07T21:00:00.000Z"],
			["2016-05-08T21:00:00.000Z"],
			["2016-05-09T21:00:00.000Z"],
			["2016-05-10T21:00:00.000Z"],
			["2016-05-11T21:00:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/570cc028614440705a643e6e",
	"eventId": "115142",
	"id": "9ff97381",
	"title": "Kobuto",
	"countries": ["D"],
	"year": "2016",
	"description": "Ein langes Haus steht in Kreuzberg, mittendrin. Das abgeknickte Hochhausband schlängelt sich ums Kottbusser Tor, beschleunigt, springt über Straßen und schneidet durch Blöcke. Stadt fliegt vorbei hinter den großen Fensterbändern. Der Motor schnaubt. 11 Stockwerke. 300 Wohnungen, 6 Meter von der Stoßstange bis zu den Heckschwertern. Der 76'er Cadillac Sedan Deville ist so alt wie das Haus. Am Steuer ein älterer Herr mit funkelnden Augen. Johannes Uhl drückt auf's Gas. Er ist Architekt und hat es gebaut - damals als die Stadtautobahn bereits fast durch Kreuzberg führte. Das lange Haus wäre nur der Anfang gewesen zu einer anderen Stadt, an den Ufern der tosenden Verkehrsströme errichtet. Wir begeben uns auf die Suche, auf nach «KOBUTO»!",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/570cc028614440705a643e6e/show_retina_KOBUTO_POSTER11.png",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/570cc028614440705a643e6e/normal_retina_still_yorck111111.png",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/570cd5046144407c496436ef/normal_retina_still_yorck_b.png",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/570cd5046144407c496436ef/still_yorck_b.png"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/570cd5046144407c496436f0/normal_retina_still_yorck_c.png",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/570cd5046144407c496436f0/still_yorck_c.png"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/570cd5046144407c496436f1/normal_retina_still_yorck_e.png",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/570cd5046144407c496436f1/still_yorck_e.png"
	}],
	"trailers": {
		"DEUTSCH": "https://vimeo.com/161963094"
	},
	"director": ["Peter Behrbohm", "Masen Khattab"],
	"length": "38 min"
}, {
	"link": "https://www.yorck.de/filme/569debcf3439662e8d040000",
	"eventId": "114871",
	"id": "d4c09f26",
	"title": "Mein Ein, Mein Alles",
	"countries": ["F"],
	"year": "2015",
	"description": "Nach einem schweren Skiunfall wird Tony (Emmanuelle Bercot) in ein Reha-Zentrum gebracht. Dort muss die junge Frau nicht nur mühsam das Gehen neu erlernen, sondern auch ihr inneres Gleichgewicht wiederfinden. Zeit, um auf ihre turbulente Beziehung mit Georgio (Vincent Cassel) zurückzublicken: Warum haben sie sich geliebt? Wer ist dieser Mann, dem sie so verfallen war? Und wie konnte sie es zulassen, sich dieser erstickenden, zerstörerischen Leidenschaft auszuliefern? Vor Tony liegt ein langer Heilungsprozess, aber auch eine Chance, die Stücke ihrer zerbrochenen Persönlichkeit neu zusammenzusetzen und am Ende wieder frei zu sein…",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/569debcf3439662e8d040000/show_retina_MeinEinMeinAlles_Plakat_A3_RGB.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/569debcf3439662e8d040000/normal_retina_MeinEinMeinAlles_001.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a6035764363256b0000000/normal_retina_MeinEinMeinAlles_002.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a6035764363256b0000000/MeinEinMeinAlles_002.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a6035764363256b0010000/normal_retina_MeinEinMeinAlles_005.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a6035764363256b0010000/MeinEinMeinAlles_005.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a6035764363256b0020000/normal_retina_MeinEinMeinAlles_006.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a6035764363256b0020000/MeinEinMeinAlles_006.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a6035764363256b0030000/normal_retina_MeinEinMeinAlles_004.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a6035764363256b0030000/MeinEinMeinAlles_004.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a6035764363256b0040000/normal_retina_MeinEinMeinAlles_008.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a6035764363256b0040000/MeinEinMeinAlles_008.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a6035764363256b0050000/normal_retina_MeinEinMeinAlles_009.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a6035764363256b0050000/MeinEinMeinAlles_009.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a60439656461313e060000/normal_retina_MeinEinMeinAlles_014.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a60439656461313e060000/MeinEinMeinAlles_014.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a60439656461313e070000/normal_retina_MeinEinMeinAlles_015.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a60439656461313e070000/MeinEinMeinAlles_015.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a60439656461313e080000/normal_retina_MeinEinMeinAlles_011.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a60439656461313e080000/MeinEinMeinAlles_011.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=kRyH9H-pbTc",
		"ORIGINAL": "https://www.youtube.com/watch?v=PtGbfRoZ0iQ"
	},
	"camera": ["Claire Mathon"],
	"director": ["Maïwenn Le Besco"],
	"fsk": "12",
	"length": "128 min",
	"screenplay": ["Maïwenn Etienne Comar"],
	"program": [
		["54eda1df6831381d72230000", [
			["2016-05-03T16:30:00.000Z"],
			["2016-05-04T16:30:00.000Z"],
			["2016-05-08T12:15:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/569cf41136353816a3020000",
	"eventId": "114118",
	"id": "175da304",
	"title": "Mustang",
	"countries": ["TR", "F", "D"],
	"year": "2016",
	"description": "Wunderschön anzusehen ist dieser Debütfilm der jungen türkischen Filmemacherin Deniz Gamze Ergüven über fünf Schwestern und ihren Kampf um Unabhängigkeit.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/569cf41136353816a3020000/show_retina_Mustang_Plakatmotiv.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/569cf41136353816a3020000/normal_retina_Mustang_Banner.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5020000/normal_retina_01_Mustang.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5020000/01_Mustang.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5030000/normal_retina_02_Mustang.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5030000/02_Mustang.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5040000/normal_retina_03_Mustang.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5040000/03_Mustang.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5050000/normal_retina_04_Mustang.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5050000/04_Mustang.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5060000/normal_retina_05_Mustang.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5060000/05_Mustang.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5070000/normal_retina_06_Mustang.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5070000/06_Mustang.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5080000/normal_retina_07_Mustang.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5080000/07_Mustang.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5090000/normal_retina_08_Mustang.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b5090000/08_Mustang.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b50a0000/normal_retina_09_Mustang.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b50a0000/09_Mustang.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b50b0000/normal_retina_10_Mustang.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56a5e6c364363247b50b0000/10_Mustang.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=aUqd4auX-x0",
		"ORIGINAL": "https://www.youtube.com/watch?v=rU9JAN8LtIk"
	},
	"camera": ["Ersin Gök", "David Chizallet"],
	"composer": ["Warren Ellis"],
	"director": ["Deniz Gamze Ergüven"],
	"fsk": "12",
	"length": "97 min",
	"screenplay": ["Alice Winocour,Deniz Gamze Erguven"],
	"program": [
		["54ec8ea868313813e3190000", [
			["2016-05-03T19:15:00.000Z", "OmU"],
			["2016-05-04T19:15:00.000Z", "OmU"],
			["2016-05-05T22:15:00.000Z", "OmU"]
		]],
		["54eda1df6831381d72230000", [
			["2016-05-08T11:30:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/56fa92e969f5b52f11a76701",
	"eventId": "114728",
	"id": "a528dbf4",
	"title": "Pelo Malo - Bad Hair",
	"countries": ["Ven", "Pe", "Arg", "D"],
	"year": "2014",
	"description": "In venezolanischen Ghettos ist wenig Platz für Sentimentalitäten. Noch weniger Platz ist für den Wunsch des vorpubertären Juniors nach glatten Haaren, hat er doch die krause Mähne des verstorbenen Vaters geerbt. Mutter Marta befürchtet hinter dem Wunsch nach Verschönerung noch Schlimmeres – der Sohn könnte schwul sein. Ein starkes Familiendrama, in dem sensible Beobachtungen stereotype Gewissheiten ausstechen.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56fa92e969f5b52f11a76701/show_retina_pelomalo_plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56fa92e969f5b52f11a76701/normal_retina_pelomalo_trailerpreview.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fa92dd69f5b52f11a766fe/normal_retina_pelo_malo1.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fa92dd69f5b52f11a766fe/pelo_malo1.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fa92dd69f5b52f11a766ff/normal_retina_pelo_malo2.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fa92dd69f5b52f11a766ff/pelo_malo2.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fa92dd69f5b52f11a76700/normal_retina_pelo_malo3.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fa92dd69f5b52f11a76700/pelo_malo3.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://vimeo.com/152764865",
		"ORIGINAL": "https://www.youtube.com/watch?v=lxOZtOyNkTQ"
	},
	"director": ["Mariana Rondón"],
	"fsk": "12",
	"length": "93 min",
	"program": [
		["54eef979683138488b0c0000", [
			["2016-05-03T18:15:00.000Z", "OmU"],
			["2016-05-04T18:15:00.000Z", "OmU"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/56fbdbf261444007dc8eaa2c",
	"eventId": "114746",
	"id": "c2e5ea93",
	"title": "Rabbi Wolff",
	"countries": ["D"],
	"year": "2015",
	"description": "Schon in ihrem großen Publikumserfolg IM HIMMEL, UNTER DER ERDE hat Dokumentarfilmerin Britta Wauer den wunderbaren RABBI WOLFF vorgestellt. Das einzigartige Leben und Wirken des seit einigen Jahren stets 85-Jährigen zwischen Flucht aus Nazi-Deutschland, Journalismus in London, Pferderennen in Ascot und Landesrabbinat Mecklenburg-Vorpommern schrie bzw. lachte förmlich nach ausführlicherer Betrachtung.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56fbdbf261444007dc8eaa2c/show_retina_rabbiwolff_plakat.72.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56fbdbf261444007dc8eaa2c/normal_retina_Banner.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbdbf061444007dc8eaa29/normal_retina_rabbiwolff1.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbdbf061444007dc8eaa29/rabbiwolff1.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbdbf061444007dc8eaa2a/normal_retina_rabbiwolff8.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbdbf061444007dc8eaa2a/rabbiwolff8.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbdbf061444007dc8eaa2b/normal_retina_rabbi_wolff6.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbdbf061444007dc8eaa2b/rabbi_wolff6.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=cZzuiYpXEFE"
	},
	"director": ["Britta Wauer"],
	"fsk": "0",
	"length": "90 min",
	"program": [
		["54ed9e276831381d72150000", [
			["2016-05-03T17:45:00.000Z"],
			["2016-05-04T17:45:00.000Z"],
			["2016-05-05T14:00:00.000Z"],
			["2016-05-06T14:00:00.000Z"],
			["2016-05-07T14:00:00.000Z"],
			["2016-05-08T14:00:00.000Z"],
			["2016-05-09T14:00:00.000Z"],
			["2016-05-10T14:00:00.000Z"],
			["2016-05-11T14:00:00.000Z"]
		]],
		["54eda1df6831381d72230000", [
			["2016-05-03T18:00:00.000Z"],
			["2016-05-04T18:00:00.000Z"],
			["2016-05-05T13:45:00.000Z"],
			["2016-05-05T18:00:00.000Z"],
			["2016-05-06T13:45:00.000Z"],
			["2016-05-06T18:00:00.000Z"],
			["2016-05-07T13:45:00.000Z"],
			["2016-05-07T18:00:00.000Z"],
			["2016-05-08T13:45:00.000Z"],
			["2016-05-08T18:00:00.000Z"],
			["2016-05-09T13:45:00.000Z"],
			["2016-05-09T18:00:00.000Z"],
			["2016-05-10T13:45:00.000Z"],
			["2016-05-10T18:00:00.000Z"],
			["2016-05-11T13:45:00.000Z"],
			["2016-05-11T18:00:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/569d0127646330161e080000",
	"eventId": "114700",
	"id": "248fc079",
	"title": "Raum",
	"countries": ["CAN", "IRL"],
	"year": "2015",
	"description": "Ma ist eine Mutter wie viele andere: Sie zieht Jack liebevoll auf, spielt mit ihm, erzählt ihm Geschichten. Doch die beiden sind gefangen auf 9m². Ma hat in diesem Raum ein ganzes Universum erschaffen, damit Jack ein erfülltes Leben führen kann. Doch als sie Jacks Fragen nicht mehr beantworten kann und schließlich an die Grenzen ihrer eigenen Belastbarkeit stößt, beschließen sie eine riskante Flucht. Nach dem Roman von Emma Donoghue.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/569d0127646330161e080000/show_retina_RAUM_Hauptplakat_1400.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/569d0127646330161e080000/normal_retina_room_trailerpreview.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e18f4761444009e3af095b/normal_retina_room-1.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e18f4761444009e3af095b/room-1.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e18f4761444009e3af095c/normal_retina_Room-2.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e18f4761444009e3af095c/Room-2.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e18f4761444009e3af095d/normal_retina_room-3.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e18f4761444009e3af095d/room-3.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=JdAzntatwwg",
		"ORIGINAL": "https://www.youtube.com/watch?v=E_Ci-pAL4eE"
	},
	"camera": ["Danny Cohen"],
	"director": ["Lenny Abrahamson"],
	"fsk": "12",
	"length": "118 min",
	"screenplay": ["Emma Donoghue"],
	"program": [
		["54eef979683138488b0c0000", [
			["2016-05-03T17:40:00.000Z", "OmU"],
			["2016-05-04T17:40:00.000Z", "OmU"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/5718b9426144406057ce4fff",
	"eventId": "114951",
	"id": "dfb9ebe3",
	"title": "Rico, Oskar und der Diebstahlstein",
	"countries": ["Deutschland"],
	"year": "2016",
	"description": "Der dritte Teil aus der Trilogie um den tiefbegabten Rico und seinen ebenso cleveren wie wunderlichen Freund Oskar durfte natürlich nicht allzu lange auf sich warten lassen. Diesmal gilt es für die Hobby-Detektive, das Rätsel um einen verschwundenen Stein aus jener Steinsammlung zu lösen, die Rico vom knurrigen Nachbarn Fitze geerbt hat. Den hatten sie gerade erst tot im Treppenhaus aufgefunden.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/5718b9426144406057ce4fff/show_retina_RZ_RicoOskarUndDerDiebstahlstein_Poster_Stein_1400.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/5718b9426144406057ce4fff/normal_retina_rico_diebstahl_trailerpreview.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5718b93e6144406057ce4ffc/normal_retina_rods_1.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5718b93e6144406057ce4ffc/rods_1.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5718b93e6144406057ce4ffd/normal_retina_rods_2.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5718b93e6144406057ce4ffd/rods_2.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5718b93e6144406057ce4ffe/normal_retina_rods_3.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5718b93e6144406057ce4ffe/rods_3.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=KQkM2Efwaas"
	},
	"fsk": "0",
	"length": "94 min",
	"program": [
		["54ed9e276831381d72150000", [
			["2016-05-03T14:00:00.000Z"],
			["2016-05-03T16:00:00.000Z"],
			["2016-05-04T14:00:00.000Z"],
			["2016-05-04T16:00:00.000Z"],
			["2016-05-05T14:15:00.000Z"],
			["2016-05-05T16:15:00.000Z"],
			["2016-05-06T14:15:00.000Z"],
			["2016-05-06T16:15:00.000Z"],
			["2016-05-07T14:15:00.000Z"],
			["2016-05-07T16:15:00.000Z"],
			["2016-05-08T14:15:00.000Z"],
			["2016-05-08T16:15:00.000Z"],
			["2016-05-09T14:15:00.000Z"],
			["2016-05-09T16:15:00.000Z"],
			["2016-05-10T14:15:00.000Z"],
			["2016-05-10T16:15:00.000Z"],
			["2016-05-11T14:15:00.000Z"],
			["2016-05-11T16:15:00.000Z"]
		]],
		["54eda1df6831381d72230000", [
			["2016-05-03T14:00:00.000Z"],
			["2016-05-03T16:00:00.000Z"],
			["2016-05-04T14:00:00.000Z"],
			["2016-05-04T16:00:00.000Z"],
			["2016-05-05T14:15:00.000Z"],
			["2016-05-05T16:15:00.000Z"],
			["2016-05-06T14:15:00.000Z"],
			["2016-05-06T16:15:00.000Z"],
			["2016-05-07T14:15:00.000Z"],
			["2016-05-07T16:15:00.000Z"],
			["2016-05-08T14:15:00.000Z"],
			["2016-05-08T16:15:00.000Z"],
			["2016-05-09T14:15:00.000Z"],
			["2016-05-09T16:15:00.000Z"],
			["2016-05-10T14:15:00.000Z"],
			["2016-05-10T16:15:00.000Z"],
			["2016-05-11T14:15:00.000Z"],
			["2016-05-11T16:15:00.000Z"]
		]],
		["54eeff36683138488b240000", [
			["2016-05-03T14:00:00.000Z"],
			["2016-05-03T16:00:00.000Z"],
			["2016-05-04T14:00:00.000Z"],
			["2016-05-04T16:00:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/56e82c3f69f5b509d7de92d1",
	"eventId": "114720",
	"id": "6f69b55c",
	"title": "Schellen-Ursli",
	"countries": ["Schweiz"],
	"year": "2015",
	"description": "Zu Urslis Leidwesen hat er für den „Chalandamarz“, das Fest, an dem der Winter von den Dorfbuben mit lautem Glockengeläut vertrieben wird, das kleinste Glöckchen zugeteilt bekommt. Deswegen wird er als „Schellen- Ursli“ verlacht. Aus Wut über diese Schmach beschliesst er, das Unmögliche zu wagen, was sich nicht einmal ein Erwachsener zutrauen würde. Er will mitten im Winter, bei Schnee und Eis, Nacht und Nebel, die grosse Kuhglocke im Maiensäss holen. Dort auf der Alp hat er zusammen mit seinen Eltern den Sommer verbracht. Der Aufstieg wird zum spannenden Abenteuer, bei dem er manch bedrohlicher Gefahr ausgesetzt ist. Frühmorgens zurück im Tal wird er im Dorf triumphal gefeiert und darf mit der grössten Glocke den „Chalandamarz“ Umzug anführen.“",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56e82c3f69f5b509d7de92d1/show_retina_SchellenUrsli_Plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56e82c3f69f5b509d7de92d1/normal_retina_schellenursli_trailerpreview.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e82c3669f5b509d7de92ce/normal_retina_SchellenUrsli04.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e82c3669f5b509d7de92ce/SchellenUrsli04.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e82c3669f5b509d7de92cf/normal_retina_SchellenUrsli05.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e82c3669f5b509d7de92cf/SchellenUrsli05.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e82c3669f5b509d7de92d0/normal_retina_SchellenUrsli12.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56e82c3669f5b509d7de92d0/SchellenUrsli12.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=AcZMS1THptY"
	},
	"director": ["Xavier Koller"],
	"fsk": "0",
	"length": "100 min",
	"screenplay": ["Stefan Jäger", "Xavier Koller"]
}, {
	"link": "https://www.yorck.de/filme/5714dbd869f5b54191cbeb20",
	"eventId": "115217",
	"id": "e47550e2",
	"title": "Schrotten!",
	"countries": ["Deutschland"],
	"year": "2016",
	"description": "Zwei Brüder planen einen raffinierten Raubzug, um den familiären Schrottplatz zu retten. Ein gelungener Comedy-Wurf mit flottem Tempo, vergnüglichen Wendungen sowie lässig lakonischen Sprüchen!",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/5714dbd869f5b54191cbeb20/show_retina_Schrotten_plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/5714dbd869f5b54191cbeb20/normal_retina_schrotten_trailerpreview.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5714dbd569f5b54191cbeb1d/normal_retina_05_Schrotten_Pressefoto_c_PortAuPrincePictures.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5714dbd569f5b54191cbeb1d/05_Schrotten_Pressefoto_c_PortAuPrincePictures.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5714dbd569f5b54191cbeb1e/normal_retina_04_Schrotten_Pressefoto_c_PortAuPrincePictures.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5714dbd569f5b54191cbeb1e/04_Schrotten_Pressefoto_c_PortAuPrincePictures.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5714dbd569f5b54191cbeb1f/normal_retina_schrotten3.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/5714dbd569f5b54191cbeb1f/schrotten3.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://vimeo.com/158229359"
	},
	"camera": ["Carol Burandt von Kameke"],
	"composer": ["zimmermitaussicht", "Daniel Hoffknecht &amp; Gary(Marlowe"],
	"director": ["Max Zähle"],
	"fsk": "6",
	"length": "102 min",
	"screenplay": ["Max Zähle"],
	"program": [
		["54ec8ea868313813e3190000", [
			["2016-05-05T15:00:00.000Z"],
			["2016-05-05T19:50:00.000Z"],
			["2016-05-05T22:10:00.000Z"],
			["2016-05-06T17:30:00.000Z"],
			["2016-05-06T19:50:00.000Z"],
			["2016-05-06T22:10:00.000Z"],
			["2016-05-07T17:30:00.000Z"],
			["2016-05-07T19:50:00.000Z"],
			["2016-05-07T22:10:00.000Z"],
			["2016-05-08T17:30:00.000Z"],
			["2016-05-08T19:50:00.000Z"],
			["2016-05-08T22:10:00.000Z"],
			["2016-05-09T17:30:00.000Z"],
			["2016-05-09T19:50:00.000Z"],
			["2016-05-09T22:10:00.000Z"],
			["2016-05-10T17:30:00.000Z"],
			["2016-05-10T19:50:00.000Z"],
			["2016-05-10T22:10:00.000Z"],
			["2016-05-11T17:30:00.000Z"],
			["2016-05-11T19:50:00.000Z"],
			["2016-05-11T22:10:00.000Z"]
		]],
		["54ed9e276831381d72150000", [
			["2016-05-05T16:15:00.000Z"],
			["2016-05-05T18:30:00.000Z"],
			["2016-05-05T20:50:00.000Z"],
			["2016-05-05T22:30:00.000Z"],
			["2016-05-06T16:15:00.000Z"],
			["2016-05-06T18:30:00.000Z"],
			["2016-05-06T20:50:00.000Z"],
			["2016-05-06T22:30:00.000Z"],
			["2016-05-07T16:15:00.000Z"],
			["2016-05-07T18:30:00.000Z"],
			["2016-05-07T20:50:00.000Z"],
			["2016-05-07T22:30:00.000Z"],
			["2016-05-08T16:15:00.000Z"],
			["2016-05-08T18:30:00.000Z"],
			["2016-05-08T20:50:00.000Z"],
			["2016-05-09T14:00:00.000Z"],
			["2016-05-09T16:15:00.000Z"],
			["2016-05-09T18:30:00.000Z"],
			["2016-05-09T20:50:00.000Z"],
			["2016-05-09T22:30:00.000Z"],
			["2016-05-10T14:00:00.000Z"],
			["2016-05-10T16:15:00.000Z"],
			["2016-05-10T18:30:00.000Z"],
			["2016-05-10T20:50:00.000Z"],
			["2016-05-10T22:30:00.000Z"],
			["2016-05-11T14:00:00.000Z"],
			["2016-05-11T16:15:00.000Z"],
			["2016-05-11T18:30:00.000Z"],
			["2016-05-11T20:50:00.000Z"],
			["2016-05-11T22:30:00.000Z"]
		]],
		["54eda1df6831381d72230000", [
			["2016-05-05T14:00:00.000Z"],
			["2016-05-05T18:15:00.000Z"],
			["2016-05-05T20:30:00.000Z"],
			["2016-05-06T14:00:00.000Z"],
			["2016-05-06T18:15:00.000Z"],
			["2016-05-06T20:30:00.000Z"],
			["2016-05-07T14:00:00.000Z"],
			["2016-05-07T18:15:00.000Z"],
			["2016-05-07T20:30:00.000Z"],
			["2016-05-08T14:00:00.000Z"],
			["2016-05-08T18:15:00.000Z"],
			["2016-05-08T20:30:00.000Z"],
			["2016-05-09T14:00:00.000Z"],
			["2016-05-09T18:15:00.000Z"],
			["2016-05-09T20:30:00.000Z"],
			["2016-05-10T14:00:00.000Z"],
			["2016-05-10T18:15:00.000Z"],
			["2016-05-10T20:30:00.000Z"],
			["2016-05-11T14:00:00.000Z"],
			["2016-05-11T18:15:00.000Z"],
			["2016-05-11T20:30:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/55b1f69f6831380687000000",
	"eventId": "100227",
	"id": "37241683",
	"title": "Sneak FAF",
	"countries": [""],
	"description": "Die Überraschungspremiere vor offiziellem Deutschlandstart im Filmtheater am Friedrichshain. Nur der Filmtitel wird vorher nicht verraten! Vorher zeigen wir einen Kurzfilm.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/55b1f69f6831380687000000/show_retina_Sneak_Preview.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/55b1f69f6831380687000000/normal_retina_Banner.jpg",
	"program": [
		["54ed9e276831381d72150000", [
			["2016-05-09T23:00:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/55b1f6e86831387cc4000000",
	"eventId": "110912",
	"id": "12ed23c9",
	"title": "Sneak OmU",
	"countries": [""],
	"description": "Die Überraschungspreview vor dem offiziellen Bundesstart - jetzt auch in der Originalversion mit Untertiteln. Neukölln's weekly original language surprise preview.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/55b1f6e86831387cc4000000/show_retina_Sneak_Preview.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/55b1f6e86831387cc4000000/normal_retina_Banner.jpg",
	"program": [
		["54eda6996831381d723a0000", [
			["2016-05-03T23:00:00.000Z", "OmU"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/564ef7146162613a7c000000",
	"eventId": "100222",
	"id": "25b2ed6e",
	"title": "Sneak Passage",
	"countries": [""],
	"description": "Die Überraschungspremiere vor offiziellem Deutschlandstart im Neuköllner Passage Kino. Nur der Filmtitel wird vorher nicht verraten!",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/564ef7146162613a7c000000/show_retina_Sneak_Preview.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/564ef7146162613a7c000000/normal_retina_Sneak_Preview_banner.jpg",
	"fsk": "18",
	"program": [
		["54eda6996831381d723a0000", [
			["2016-05-03T23:00:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/56d5b3ab6144400c0b10eec3",
	"eventId": "114712",
	"id": "81d453ff",
	"title": "Son of Saul",
	"countries": ["Ungarn"],
	"year": "2015",
	"description": "Der 38-jährige ungarische Regisseur László Nemes kommt aus einer Familie, die teils dem Holocaust zum Opfer fiel. Der Unmöglichkeit seines Unterfangens, das Unsagbare vollständig und wahrheitsgetreu abzubilden, ist er sich von Anfang an bewusst. Bei SON OF SAUL, seinem ersten Langfilm, beschränkt er sich auf den Blickwinkel seines Protagonisten Saul (Géza Röhrig). Der ungarische Jude ist als Teil eines Sonderkommandos in Auschwitz-Birkenau Handlanger der Nazis: Er muss die Gefangenen in die Gaskammern treiben, die Leichen in die Krematorien transportieren und die Kleidung der Opfer auf Wertgegenstände durchsuchen. Als er unter den Leichnamen seinen unehelichen Sohn zu erkennen glaubt, hat er nur noch ein Ziel: sein Kind nach jüdischem Ritus zu bestatten. Und das während um ihn herum Mitglieder des Sonderkommandos einen Aufstand planen.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56d5b3ab6144400c0b10eec3/show_retina_sonofsaul_plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56d5b3ab6144400c0b10eec3/normal_retina_sonofsaul_trailerbild.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56dfe5a169f5b52747de9253/normal_retina_sos_1.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56dfe5a169f5b52747de9253/sos_1.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56dfe5a169f5b52747de9254/normal_retina_sos12_1400.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56dfe5a169f5b52747de9254/sos12_1400.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56dfe5a169f5b52747de9255/normal_retina_sos2.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56dfe5a169f5b52747de9255/sos2.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=uh2toNTE7rA",
		"ORIGINAL": "https://www.youtube.com/watch?v=uh2toNTE7rA"
	},
	"camera": ["Mátyás Erdély "],
	"composer": ["László Melis"],
	"director": ["László Nemes"],
	"fsk": "16",
	"length": "107 min",
	"screenplay": ["László Nemes &amp; Clara Royer"]
}, {
	"link": "https://www.yorck.de/filme/56cc191e69f5b51564e00437",
	"eventId": "114663",
	"id": "891434b0",
	"title": "Spotlight",
	"countries": ["USA"],
	"year": "2016",
	"description": "Regisseur Thomas McCarthy erzählt die Geschichte um ein investigatives Redaktionsteam des Boston Globe, das von 2001 bis 2003 den flächendeckenden Kindesmissbrauch in der katholischen Kirche rund um den örtlichen Bischoff enthüllte. Scham und Traumatisierung auf der einen Seite, ein System des Schweigens und der Kollaboration auf der anderen erschwerten die Nachforschungen beträchtlich.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56cc191e69f5b51564e00437/show_retina_Plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56cc191e69f5b51564e00437/normal_retina_Banner.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc22d969f5b5155ce0044a/normal_retina_1.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc22d969f5b5155ce0044a/1.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc22d969f5b5155ce0044b/normal_retina_2.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc22d969f5b5155ce0044b/2.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc22f569f5b50c37e003a0/normal_retina_3.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc22f569f5b50c37e003a0/3.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc22f569f5b50c37e003a1/normal_retina_4.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc22f569f5b50c37e003a1/4.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc22f569f5b50c37e003a2/normal_retina_5.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc22f569f5b50c37e003a2/5.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc236469f5b50c37e003a5/normal_retina_6.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc236469f5b50c37e003a5/6.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc236469f5b50c37e003a6/normal_retina_7.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc236469f5b50c37e003a6/7.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc236469f5b50c37e003a7/normal_retina_8.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56cc236469f5b50c37e003a7/8.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=ExV9xS2RHT4",
		"ORIGINAL": "https://www.youtube.com/watch?v=yXymzwz0V2g"
	},
	"director": ["Tom McCarthy"],
	"fsk": "0",
	"length": "128 min",
	"program": [
		["54eda6996831381d723a0000", [
			["2016-05-03T20:00:00.000Z", "OmUD"],
			["2016-05-04T17:15:00.000Z", "OmUD"],
			["2016-05-04T20:00:00.000Z", "OmUD"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/569518f93962360724020000",
	"eventId": "114086",
	"id": "471798c8",
	"title": "The Big Short",
	"countries": ["USA"],
	"year": "2016",
	"description": "Fünf Billionen Dollar – eine Zahl mit zwölf Nullen – waren am Ende der Finanzkrise von 2008 vernichtet! Zehntausende Menschen verloren wegen fauler Darlehen ihre Häuser, Millionen wurden arbeitslos. Und die Folgen: keine. Doch: genau ein Banker musste ins Gefängnis, alle anderen scheffelten in den Folgejahren schon wieder Boni in Millionenhöhe. Doch hier geht es nicht bzw. nicht nur um Banker, sondern vor allem um eine Gesellschaft, die sich lieber von seichter Unterhaltung einlullen lässt, als sich um das zu kümmern, was wirklich zählt.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/569518f93962360724020000/show_retina_Plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/569518f93962360724020000/normal_retina_Banner.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56f3f26a69f5b52acf155dcc/normal_retina_The-Big-Short-Gallery-04.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56f3f26a69f5b52acf155dcc/The-Big-Short-Gallery-04.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56f3f26a69f5b52acf155dcd/normal_retina_The-Big-Short-Gallery-06.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56f3f26a69f5b52acf155dcd/The-Big-Short-Gallery-06.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56f3f26a69f5b52acf155dce/normal_retina_thebigshort_2.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56f3f26a69f5b52acf155dce/thebigshort_2.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=K74aFp7Fx8g",
		"ORIGINAL": "https://www.youtube.com/watch?v=vgqG3ITMv1Q"
	},
	"camera": ["Barry Ackroyd"],
	"composer": ["Nicholas Britell"],
	"director": ["Adam McKay"],
	"fsk": "6",
	"length": "131 min",
	"screenplay": ["Adam McKay &amp;  Charles Randolph  nach dem Buch von Michael Lewis"]
}, {
	"link": "https://www.yorck.de/filme/571e32ad69f5b539bbcbefae",
	"eventId": "115346",
	"id": "27a43951",
	"title": "The House at the End of Time",
	"countries": ["Venezuela"],
	"year": "2013",
	"description": "ne Familie erlebt in ihrem Haus den ultimativen Terror. Die Kinder verschwinden auf unerklärliche Weise, der Vater kommt unter ominösen Umständen ums Leben und Hausfrau Dulce (Ruddy Rodríguez) wird für das Chaos zur Verantwortung gezogen. Sie sucht nach Antworten und findet heraus, dass ein gut gehütetes Geheimnis um das vermeintlich sichere Heim rankt …",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/571e32ad69f5b539bbcbefae/show_retina_The_House_at_the_End_of_Time_-_Poster.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/571e32ad69f5b539bbcbefae/normal_retina_houseoftheend_trailerpreview.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571e32ab69f5b539bbcbefab/normal_retina_house2_endoftime.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571e32ab69f5b539bbcbefab/house2_endoftime.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571e32ab69f5b539bbcbefac/normal_retina_house1_endoftime.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571e32ab69f5b539bbcbefac/house1_endoftime.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571e32ab69f5b539bbcbefad/normal_retina_the-house-at-the-end-of-time3.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/571e32ab69f5b539bbcbefad/the-house-at-the-end-of-time3.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=odAF7jd9rWU",
		"ORIGINAL": "https://vimeo.com/94573600"
	},
	"director": ["Alejandor Hidalgo"],
	"fsk": "16",
	"length": "105 min"
}, {
	"link": "https://www.yorck.de/filme/57065ffd69f5b55f7f5861f9",
	"eventId": "114843",
	"id": "6ac1c6ba",
	"title": "The Jungle Book",
	"countries": ["USA"],
	"year": "2016",
	"description": "Offiziell wird \"The Jungle Book\" zwar als Live-Action-Film vermarktet, also als Realfilm, doch eigentlich muss man ihn als Animationsfilm bezeichnen: Jedes Tier, aber auch jeder Baum, jede Pflanze, jeder Grashalm entstand im Computer und ist von atemberaubender Perfektion. Die technische Qualität der Bilderwelten, die Regisseur Jon Favreau und seine Hundert-, ach was, Tausendschaften an Computertechnikern hier auffahren ist von einer Qualität, wie man sie selten gesehen hat. In brillanten Farben erstrahlt der Dschungel, der hier eine stilisierte Phantasiewelt voller exotischer Pflanzen, mächtiger Baumriesen, Wasserfällen und dramatischer Landschaften ist, bevölkert von Tieren aller Art, von Wölfen und Elefanten, über Disneytypische knuffige Wesen, bis hin zu den bekannten Figuren aus dem Original: Die Schlange Kaa, der Bär Baloo und Louis, der Affenkönig.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/57065ffd69f5b55f7f5861f9/show_retina_JungleBook_plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/57065ffd69f5b55f7f5861f9/normal_retina_junglebook_trailerpreview.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/57065ffb69f5b55f7f5861f6/normal_retina_The-Jungle-Book-051_bf_0330_comp_v0266_right.87666.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/57065ffb69f5b55f7f5861f6/The-Jungle-Book-051_bf_0330_comp_v0266_right.87666.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/57065ffb69f5b55f7f5861f7/normal_retina_The-Jungle-Book_016_wc_0250_comp_v0439_right.86405.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/57065ffb69f5b55f7f5861f7/The-Jungle-Book_016_wc_0250_comp_v0439_right.86405.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/57065ffb69f5b55f7f5861f8/normal_retina_The-Jungle-Book-020_mj_0060_comp_v0935_right.87223.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/57065ffb69f5b55f7f5861f8/The-Jungle-Book-020_mj_0060_comp_v0935_right.87223.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://youtu.be/Bld0668dGns",
		"ORIGINAL": "https://www.youtube.com/watch?v=C4qgAaxB_pc"
	},
	"director": ["Jon Favreau"],
	"fsk": "6",
	"length": "105 min",
	"program": [
		["54ed9e276831381d72150000", [
			["2016-05-03T15:50:00.000Z"],
			["2016-05-03T18:20:00.000Z"],
			["2016-05-03T21:15:00.000Z"],
			["2016-05-04T15:50:00.000Z"],
			["2016-05-04T18:20:00.000Z"],
			["2016-05-04T21:15:00.000Z"]
		]],
		["54eda1df6831381d72230000", [
			["2016-05-03T14:15:00.000Z"],
			["2016-05-03T16:30:00.000Z"],
			["2016-05-03T19:00:00.000Z"],
			["2016-05-03T21:15:00.000Z"],
			["2016-05-04T14:15:00.000Z"],
			["2016-05-04T16:30:00.000Z"],
			["2016-05-04T19:00:00.000Z"],
			["2016-05-04T21:15:00.000Z"]
		]],
		["54eda5536831381d72330000", [
			["2016-05-03T18:20:00.000Z", "OmUD"],
			["2016-05-04T18:20:00.000Z", "OmUD"]
		]],
		["54eef979683138488b0c0000", [
			["2016-05-03T17:00:00.000Z", "OmUD"],
			["2016-05-03T18:30:00.000Z", "OV"],
			["2016-05-03T21:00:00.000Z", "OV"],
			["2016-05-04T17:00:00.000Z", "OmUD"],
			["2016-05-04T18:30:00.000Z", "OV"],
			["2016-05-04T21:00:00.000Z", "OV"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/56d5ab4c69f5b53a05259cd4",
	"eventId": "114309",
	"id": "18362586",
	"title": "Trumbo",
	"countries": ["USA"],
	"year": "2015",
	"description": "TRUMBO vermeidet erfolgreich jede betuliche Denkmalpflege und gerät ebenso wenig in die häufige Genre-Falle eines brav bebilderten Wikipedia-Eintrags. Der Held ist dabei so facettenreich wie psychologisch plausibel konstruiert.\nDer charismatische BREAKING BAD-Kultdarsteller Bryan Cranston läuft einmal mehr zu grandioser Hochform auf. Von Helen Mirren als bissiger Klatschkolumnistin und Kommunistenfresserin ganz zu schweigen!",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56d5ab4c69f5b53a05259cd4/show_retina_Trumbo_plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56d5ab4c69f5b53a05259cd4/normal_retina_trumbo_trailer_preview.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56deed9969f5b51d9ade91c8/normal_retina_trumbo-1.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56deed9969f5b51d9ade91c8/trumbo-1.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56deed9969f5b51d9ade91c9/normal_retina_trumbo-04.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56deed9969f5b51d9ade91c9/trumbo-04.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56deed9969f5b51d9ade91ca/normal_retina_trumbo-05.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56deed9969f5b51d9ade91ca/trumbo-05.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=-y76nzFnh_c",
		"ORIGINAL": "https://vimeo.com/136153757"
	},
	"camera": ["Jim Denault"],
	"director": ["Jay Roach"],
	"fsk": "6",
	"length": "124 min",
	"screenplay": ["John McNamara"],
	"program": [
		["54eef979683138488b0c0000", [
			["2016-05-03T20:30:00.000Z", "OmU"],
			["2016-05-04T20:30:00.000Z", "OmU"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/56fbcb3469f5b52f321bd653",
	"eventId": "114740",
	"id": "6931cbed",
	"title": "Unter dem Sand",
	"countries": ["DK", "D"],
	"year": "2014",
	"description": "Mai 1945 – die Kapitulation der deutschen Wehrmacht liegt auf dem Tisch, die Hinterlassenschaften des Kriegswahns aber liegen anderswo. Beispielsweise unter dem Sand des dänischen Nordseestrands in Form von 45.000 Tretminen. Unter Führung des raubeinigen Sergeant Rasmussen wird eine Gruppe minderjähriger Kriegsgefangener als Räumkommando eingesetzt. Ungewöhnlicher Blickwinkel, spannend wie ein Thriller.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56fbcb3469f5b52f321bd653/show_retina_UNTER_DEM_SAND_Plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56fbcb3469f5b52f321bd653/normal_retina_unterdemsand_trailerpreview.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbcb3269f5b52f321bd650/normal_retina_unterdemsand1.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbcb3269f5b52f321bd650/unterdemsand1.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbcb3269f5b52f321bd651/normal_retina_UNTER_DEM_SAND_Bild_11.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbcb3269f5b52f321bd651/UNTER_DEM_SAND_Bild_11.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbcb3269f5b52f321bd652/normal_retina_UNTER_DEM_SAND_Bild_07.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbcb3269f5b52f321bd652/UNTER_DEM_SAND_Bild_07.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=B675sfkcUHU"
	},
	"fsk": "12",
	"length": "100 min",
	"program": [
		["54eda1df6831381d72230000", [
			["2016-05-08T11:15:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/56fbd76061444007d98eaa28",
	"eventId": "114750",
	"id": "b38cfae2",
	"title": "Wild",
	"countries": ["D"],
	"year": "2016",
	"description": "Auf dem Weg zur Arbeit hat Ania eine seltsame Begegnung. Mitten im Park steht sie einem Wolf gegenüber. Sie sehen sich direkt in die Augen – und es kommt ihr so vor, als wäre ihr bisheriges Leben nur ein Spiel gewesen. Der Moment lässt sie nicht mehr los, genau wie der Gedanke den Wolf wieder zu finden und nie mehr gehen zu lassen. Ania wird zur Jägerin, legt Fährten und schafft es das wilde Tier zu fangen. Sie sperrt es in ihrer Hochhauswohnung´ein und sprengt sämtliche Fesseln ihres bisherigen bürgerlichen Lebens. Erstaunlicherweise finden die Menschen um sie herum daran Gefallen, besonders ihr Chef Boris, der ihre Nähe sucht wie nie zuvor. Fast scheint es, als teilten sie alle eine ähnliche, geheime wilde Sehnsucht.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56fbd76061444007d98eaa28/show_retina_WILD_Plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56fbd76061444007d98eaa28/normal_retina_wild_trailerpreview.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbd75e61444007d98eaa25/normal_retina_wild1.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbd75e61444007d98eaa25/wild1.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbd75e61444007d98eaa26/normal_retina_wild2.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbd75e61444007d98eaa26/wild2.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbd75e61444007d98eaa27/normal_retina_wild3.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56fbd75e61444007d98eaa27/wild3.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=nu1eQm-xo2M"
	},
	"camera": ["Reinhold Vorschneider"],
	"composer": ["Fetisch Bergmann"],
	"director": ["Nicolette Krebitz"],
	"fsk": "16",
	"length": "90 min",
	"screenplay": ["Nicolette Krebitz"],
	"program": [
		["54ed9e276831381d72150000", [
			["2016-05-03T14:30:00.000Z"],
			["2016-05-03T20:40:00.000Z"],
			["2016-05-04T14:30:00.000Z"],
			["2016-05-04T20:40:00.000Z"]
		]],
		["54ed9ff26831381d721c0000", [
			["2016-05-03T22:00:00.000Z"],
			["2016-05-04T22:00:00.000Z"]
		]],
		["54eda1df6831381d72230000", [
			["2016-05-03T18:45:00.000Z"],
			["2016-05-03T21:00:00.000Z"],
			["2016-05-04T18:45:00.000Z"],
			["2016-05-04T21:00:00.000Z"],
			["2016-05-05T18:50:00.000Z"],
			["2016-05-06T18:50:00.000Z"],
			["2016-05-07T18:50:00.000Z"],
			["2016-05-08T18:50:00.000Z"],
			["2016-05-09T18:50:00.000Z"],
			["2016-05-10T18:50:00.000Z"],
			["2016-05-11T18:50:00.000Z"]
		]],
		["54eda6996831381d723a0000", [
			["2016-05-03T16:10:00.000Z"],
			["2016-05-03T18:30:00.000Z"],
			["2016-05-03T20:45:00.000Z"],
			["2016-05-04T16:10:00.000Z"],
			["2016-05-04T18:30:00.000Z"],
			["2016-05-04T20:45:00.000Z"]
		]]
	]
}, {
	"link": "https://www.yorck.de/filme/56deae446144405e570eb3a3",
	"eventId": "114702",
	"id": "b68db6e7",
	"title": "Zoomania",
	"countries": ["USA"],
	"year": "2016",
	"description": "Disneys neuester Geniestreich. Zootopia ist eine nur von Tieren bevölkerte Stadt, in der praktisch alle Klimazonen der Welt samt Fauna und Flora vertreten sind. Das tierische Großstadtleben unterscheidet sich ansonsten nicht allzu sehr vom menschlichen Pendant und so muss Kaninchenpolizistin Judy Hopps den großmäuligen Fuchs Nick Wilde jagen, der ein Verbrechen begangen haben soll.",
	"cover": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/poster_image/56deae446144405e570eb3a3/show_retina_zoomania_plakat.jpg",
	"hero": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie/trailer_preview_image/56deae446144405e570eb3a3/normal_retina_zoomania.jpg",
	"gallery": [{
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def3c869f5b51d9dde91e1/normal_retina_zootopia-295.0_008.00_0113.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def3c869f5b51d9dde91e1/zootopia-295.0_008.00_0113.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def3e869f5b51d9ade91d7/normal_retina_zootopia-200.0_015.00_0154.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def3e869f5b51d9ade91d7/zootopia-200.0_015.00_0154.jpg"
	}, {
		"normal": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def422614440101faf0730/normal_retina_zootopia-140.0_017.00_0070.jpg",
		"big": "https://d6ff5x4cg2kom.cloudfront.net/system/uploads/movie_more_image/image/56def422614440101faf0730/zootopia-140.0_017.00_0070.jpg"
	}],
	"trailers": {
		"DEUTSCH": "https://www.youtube.com/watch?v=GIshH9EXIUA"
	},
	"fsk": "0",
	"length": "108 min",
	"program": [
		["54ed9e276831381d72150000", [
			["2016-05-05T14:00:00.000Z"],
			["2016-05-06T14:00:00.000Z"],
			["2016-05-07T14:00:00.000Z"],
			["2016-05-08T14:00:00.000Z"]
		]],
		["54eda1df6831381d72230000", [
			["2016-05-05T13:30:00.000Z"],
			["2016-05-06T13:30:00.000Z"],
			["2016-05-07T13:30:00.000Z"],
			["2016-05-08T13:30:00.000Z"]
		]],
		["54eef979683138488b0c0000", [
			["2016-05-03T20:15:00.000Z", "OmU"],
			["2016-05-04T20:15:00.000Z", "OmU"]
		]]
	]
}];

const cref = {
	"id": new Map([
		["Delphi Filmpalast", "54ed8d1968313849e8010000"],
		["Cinema Paris", "54ed9d086831381d720f0000"],
		["Kant Kino", "54eda1df6831381d72230000"],
		["Babylon ", "54ec8ea868313813e3190000"],
		["Yorck", "54eeff36683138488b240000"],
		["Kino International", "54ed9ff26831381d721c0000"],
		["Neues Off", "54eda3cb6831381d722b0000"],
		["Passage", "54eda6996831381d723a0000"],
		["Rollberg", "54eef979683138488b0c0000"],
		["Filmtheater am Friedrichshain", "54ed9e276831381d72150000"],
		["Odeon", "54eda5536831381d72330000"],
		["Sommerkino Kulturforum", "54eefd0b683138488b190000"],
		["Capitol Dahlem", "54ed9a996831381d72060000"]
	]),
	"name": new Map([
		["54ed8d1968313849e8010000", "Delphi Filmpalast"],
		["54ed9d086831381d720f0000", "Cinema Paris"],
		["54eda1df6831381d72230000", "Kant Kino"],
		["54ec8ea868313813e3190000", "Babylon"],
		["54eeff36683138488b240000", "Yorck"],
		["54ed9ff26831381d721c0000", "Kino International"],
		["54eda3cb6831381d722b0000", "Neues Off"],
		["54eda6996831381d723a0000", "Passage"],
		["54eef979683138488b0c0000", "Rollberg"],
		["54ed9e276831381d72150000", "Filmtheater am Friedrichshain"],
		["54eda5536831381d72330000", "Odeon"],
		["54eefd0b683138488b190000", "Sommerkino Kulturforum"],
		["54ed9a996831381d72060000", "Capitol Dahlem"]
	])
};

const cmx = () => {
	/* accumulate movies */
	const sc = {};

	movies.map(movie => {
		if (!movie.program) return;

		movie.program.forEach(entry => {
			sc[entry[0]] = sc[entry[0]] || {
				movies: []
			};

			/*
				name id times
			*/

			sc[entry[0]].movies.push({
				movieName: movie.title,
				movieId: movie.eventId,
				times: entry[1].map(a => +a)
			});
		});
	});

	console.log(util.inspect(sc, {depth:null}))

	/* build */

	const cx = {
		district: null,
		geometry: null
	};
};

cmx()