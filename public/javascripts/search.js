$('#cars-search').submit('input', function() {
  var search = $(this).serialize();
  if(search === "search=") {
    search = "all"
  }
  $("#paging").css("display","none");
  console.log(search);
  $.get('/cars?' + search, function(data) {
    $('#cars-grid').html('');
    data.forEach(function(car) {

      
        $('#cars-grid').append(`
        <div class="md-col-4" style="margin-left: 5%">
          <a href="../../cars/${ car._id }">
            <img src="../images/${ car.image }" style="width:300px; height:300px;"/>
          </a>            
            <p class="caption" style="text-align: center; font-size: 1.2rem">
              <a href="../../cars/${ car._id }" class="caption"><button class="btn btn-info">${ car.name }<span 
      style = "padding-left: 5px; color: black;">Price: $${ car.price}/day</span></button></a>
            </p>
        </div>
      `);
      
      
    });
  });
});

$('#cars-search').submit(function(event) {
  event.preventDefault();
});


