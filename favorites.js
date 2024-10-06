$(document).ready(function(){
    $('.carousel-slick').slick({
      infinite: true, 
      slidesToShow: 3, 
      slidesToScroll: 1, 
      autoplay: true, 
      autoplaySpeed: 2000, 
      responsive: [
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 2 
          }
        },
        {
          breakpoint: 480, //
          settings: {
            slidesToShow: 4 
          }
        }
      ]
    });
  });



  
  // Maps

  var map = L.map('map').setView([51.505, -0.09], 13);

  
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  
  var locations = [
      {lat: 51.5, lon: -0.09},  
      {lat: 51.51, lon: -0.1 },
      {lat: 51.49, lon: -0.08 },
      {lat: 51.48, lon: -0.11 }
  ];

  
  locations.forEach(function(location) {
      L.marker([location.lat, location.lon])
        .addTo(map)
        .bindPopup(location.popup)
        .closePopup();
  });
  


  