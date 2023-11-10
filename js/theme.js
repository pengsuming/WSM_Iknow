$('#slider-div').slick("unslick");
$('#slider-div').slick('slickAdd',"<div>새로운 아이템</div>");
$('#slider-div').slick('slickRemove',0);	//특정 인덱스 번호에 있는 slider 삭제

$('#slider-div').slick('slickRemove',false);	//false이면 맨 마지막 슬라이더 삭제
$('#slider-div').slick('slickRemove',true);	// true이면 맨 앞 슬라이더 삭제
$('#slider-div').slick('slickCurrentSlide');   // 가장 첫번째에 있는 슬라이드는 0번이다. 
$('#slider-div').slick('slickPause');    // 정지
$('#slider-div').slick('slickPlay');    // 시작
$('#slider-div').slick('goTo', 1);    // slick('goTo', index ) index는 0부터 시작이다.