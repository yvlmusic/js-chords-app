var _Capo = 0;
	
function capoTemp(t){
	t=t.replace(/C#/g,'L').replace(/D#/g,'N').replace(/F#/g,'Q').replace(/G#/g,'S');
	t=t.replace(/A/g,'H').replace(/Bb/g,'I').replace(/B/g,'J').replace(/C/g,'K').replace(/D/g,'M').replace(/E/g,'O').replace(/F/g,'P').replace(/G/g,'R');
	return t;
}

$(document).ready(function() {		
	$('#capo_plus').click(function(){
		_Capo++;
		if (_Capo==12) _Capo = 0;
		$('#chords, .chrd').each(function(){
			var c = capoTemp($(this).html());
			c=c.replace(/H/g,'Bb').replace(/I/g,'B').replace(/J/g,'C').replace(/K/g,'C#').replace(/L/g,'D').replace(/M/g,'D#').replace(/N/g,'E').replace(/O/g,'F').replace(/P/g,'F#').replace(/Q/g,'G').replace(/R/g,'G#').replace(/S/g,'A');
			$(this).html(c);
		});
		$('#capon').html(_Capo);
		return false;
	});

	$('#capo_minus').click(function(){
		_Capo--;
		if (_Capo == -1) _Capo = 11;
		$('#chords, .chrd').each(function(){
			var c = capoTemp($(this).html());
			c=c.replace(/H/g,'G#').replace(/I/g,'A').replace(/J/g,'Bb').replace(/K/g,'B').replace(/L/g,'C').replace(/M/g,'C#').replace(/N/g,'D').replace(/O/g,'D#').replace(/P/g,'E').replace(/Q/g,'F').replace(/R/g,'F#').replace(/S/g,'G');
			$(this).html(c);
		});
		$('#capon').html(_Capo);
		return false;
	});
});
