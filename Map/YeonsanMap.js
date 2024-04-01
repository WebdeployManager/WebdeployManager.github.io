var mapContainer10 = document.getElementById('Yeonsan'),
  mapOption10 = {
    center: new kakao.maps.LatLng(35.18695519405669, 129.0844469352805),
    level: 3, // 지도의 확대 레벨
  };

var map10 = new kakao.maps.Map(mapContainer10, mapOption10);

var markerPosition10 = new kakao.maps.LatLng(
  35.18695519405669,
  129.0844469352805
);

var marker10 = new kakao.maps.Marker({
  position: markerPosition10,
});

marker10.setMap(map10);
