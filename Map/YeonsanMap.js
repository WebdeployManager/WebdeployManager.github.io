var mapContainer10 = document.getElementById('Dongrae'),
  mapOption9 = {
    center: new kakao.maps.LatLng(35.206173005596091, 129.08043963814242),
    level: 3, // 지도의 확대 레벨
  };

var map9 = new kakao.maps.Map(mapContainer9, mapOption9);

var markerPosition10 = new kakao.maps.LatLng(
  35.209481924828935,
  129.0081822023491
);

var marker9 = new kakao.maps.Marker({
  position: markerPosition10,
});

marker9.setMap(map9);
