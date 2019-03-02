//ambil data dari API web
axios
.get('https://swapi.co/api/people/')
.then(function(response){
    // console.log(response.data)
    var ambilData = response.data // ex.: { user: 'Your User'}
    ambilData.results.forEach(function(el){
    document.querySelector('#target').insertAdjacentHTML('beforeend',
    '<td>'+el.name+'</td>'+'<td>'+el.height+'</td>'
    +'<td>'+el.mass+'</td>'+'<td>'+el.hair_color+'</td>'
    +'<td>'+el.skin_color+'</td>'+'<td>'+el.eye_color+'</td>'
    +'<td>'+el.birth_year+'</td>'+'<td>'+el.gender+'</td>'
    )

    });

// konfigurasi search box
    $(document).ready(function(){
        $(".search_input").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#target tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
    
});
