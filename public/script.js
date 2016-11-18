var quotes = '';
$.get('/quotes', function(data){
quotes = data;
$('#quote').text(quotes);
});
