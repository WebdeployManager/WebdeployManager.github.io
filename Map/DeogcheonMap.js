var mapContainer4 = document.getElementById('deogcheon'),
  mapOption4 = {
    center: new kakao.maps.LatLng(35.209481924828935, 129.0081822023491),
    level: 2, // 지도의 확대 레벨
  };

var map4 = new kakao.maps.Map(mapContainer4, mapOption4);

var markerPosition4 = new kakao.maps.LatLng(
  35.209481924828935,
  129.0081822023491
);

var marker4 = new kakao.maps.Marker({
  position: markerPosition4,
});

marker4.setMap(map4);
