/**
 * Created by cd on 2017/10/31.
 */

var $ = require('jquery');

console.log('Hello world!');

$('#btn1').on('click', function(){
    $.get('/api', function(data){
        $('#result').html(data);
    })
});
$('#btn2').on('click', function(){
    $.get('/api/data', function(data){
        $('#result').html(data.a);
    })
});
$('#btn3').on('click', function(){
    $.get('/api/test', function(data){
        $('#result').html(data.b);
    })
});