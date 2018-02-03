

var LETTERS = ['א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ל','מ','נ','ס','ע','פ','צ','ק','ר','ש','ת'];
//var XML_FILE = "yvl.xml";
//var XML_FILE = "file:///data/data/il.org.yvl.yuval/files/yvl.xml"
var XML_FILE = "chords.xml"
var xml;

jQuery(document).ready(function($) {
	var ul = $("ul#letters");
	for (var i=0; i<LETTERS.length; i++){
		var li =$("<li><button>"+LETTERS[i]+"</button></li>")
		ul.append(li);	
	}

	$('#back_btn').click(function (){
		if($('ul#letters').is(":hidden")){ // letter or song
			if($('ul#songs_list').is(":visible")){ // letter
				$('ul#letters').slideDown(400);
				$('ul#songs_list').hide()
				$(this).hide();
			}
			else { //song
				$('ul#songs_list').slideDown(400);
				$('#song_view').hide()
			}
		}
	});

	$("#letters button").click(function(){
		var ul = $('ul#songs_list')
		ul.show().empty();
		$('ul#letters').slideUp(400);
		$('#back_btn').show();
		var letter = $(this).html();
		xml.find('song').each(function(){
			if ($(this).attr('name')[0] == letter) {
				ul.append("<li title='"+$(this).attr('id')+"'>"+$(this).attr('name')+"</li>");
			}
		});
		ul.find('li').click(function(){
			$('#song_view').show();
			$('ul#songs_list').slideUp(400);		
			var song = xml.find('#'+$(this).attr('title'));
			$('#song_view h2').html(song.attr('name'));
			$('#song_view p').html(song.html().replace(/\|/g,"<br/>"));
			$('#song_view #capon').html('');_Capo = 0;
		});
	});

	$.get(XML_FILE, function() {})
        .done(function(xml_data) {
            xml = $(xml_data);
        })
        .fail(function() {
            document.write("<h1 style='direction:rtl; text-align:right;'>יש להוריד את קובץ האקורדים בעזרת התפריט.</h1>");
        });
});
