function initialize() {
   var mapCanvas = document.getElementById('map');
   var mapOptions = {
      scrollwheel: false,
      center: new google.maps.LatLng(52.20534, 0.12182),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   }
   var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize);
