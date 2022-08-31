// $(document).ready(function(){
//     $("#myModal").modal('show');
// });


// $(document).ready(function() {
//     setTimeout(function() {
//         $("#myModal").modal('show')
//     }, 1500);
// });

setTimeout(function () {
    $('#myModal').modal('show');
}, 5000);

$(document).ready(function () {
    $('#firstNav').load('../firstNav.html');
    $('#secondNav').load('../secondNav.html');
    $('#caro').load('../carousel.html');
    $('#steps').load('../steps.html');
    $('#cat').load('../categories.html');
    $('#recent').load('../recent.html');
    $('#footer').load('../footer.html');
    
});
