$('#cars-search').on('input', function() {
  var search = $(this).serialize();
  if(search === "search=") {
    search = "all"
  }
  $("#paging").css("display","none");
  $.get('/cars?' + search, function(data) {
    $('#cars-grid').html('');
    data.forEach(function(car) {

      
        $('#cars-grid').append(`
        <div class="md-col-4" style="margin-left: 5%">
          <a href="../../cars/${ car._id }">
            <img src="../images/${ car.image }" style="width:300px; height:300px;"/>
          </a>
            
            <p class="caption" style="text-align: center; font-size: 1.2rem">
              <a href="../../cars/${ car._id }" class="caption">${ car.name }</a>
            </p>
        </div>
      `);
      
      
    });
  });
});

$('#cars-search').submit(function(event) {
  event.preventDefault();
});


