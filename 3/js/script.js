/*===========================================================*/
/*機能編 5-1-16クリックしたら円形背景が拡大（上から）*/
/*===========================================================*/

$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});

/*===========================================================*/
/*機能編 8-1-8リンクボタンをクリックしたら形状が変化*/
/*===========================================================*/

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 100){//上から100pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// #page-topをクリックした際の設定
$('#page-top').click(function () {
	var scroll = $(window).scrollTop(); //スクロール値を取得
	if(scroll > 0){
		$(this).addClass('floatAnime');//クリックしたらfloatAnimeというクラス名が付与
        $('body,html').animate({
            scrollTop: 0
        }, 800,function(){//スクロールの速さ。数字が大きくなるほど遅くなる
            $('#page-top').removeClass('floatAnime');//上までスクロールしたらfloatAnimeというクラス名を除く
        });	
	}
    return false;//リンク自体の無効化
});


/*===========================================================*/
/*機能編 6-1-1横移動させて全画面で見せる*/
/*===========================================================*/
	$('.slider').slick({
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
		speed:500,//スライドの動きのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 1,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
		arrows:false,//左右の矢印なし
		//prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		//nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		//dots: true,//下部ドットナビゲーションの表示
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});

/*===========================================================*/
/*機能編 6-1-8複数画像を流して見せる*/
/*===========================================================*/

	$('.slider2').slick({
		arrows: false,//左右の矢印はなし
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
		speed: 6900,//スライドのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
		pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
		cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
		slidesToShow: 4,//スライドを画面に4枚見せる
		slidesToScroll: 1,//1回のスライドで動かす要素数
		responsive: [
			{
			breakpoint: 769,//モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 2,//スライドを画面に2枚見せる
			}
		},
		{
			breakpoint: 426,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1.5,//スライドを画面に1.5枚見せる
			}
		}
	]
	});

/*===========================================================*/
/*印象編 4 最低限おぼえておきたい動き*/
/*===========================================================*/

function fadeAnime(){
    
    //4-1 ふわっ（その場で）
    $('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
		}else{
		$(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
		}
		});
    //4-1 ふわっ（下から）
	$('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
		}else{
		$(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
		}
		});

	//4-2 パタッ（左上へ）
	$('.flipLeftTopTrigger').each(function(){ //flipLeftTopTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('flipLeftTop');// 画面内に入ったらflipLeftTopというクラス名を追記
		}else{
		$(this).removeClass('flipLeftTop');// 画面外に出たらflipLeftTopというクラス名を外す
		}
		});
    
    //4-2 パタッ（右上へ）
    $('.flipRightTopTrigger').each(function(){ //flipRightTopTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('flipRightTop');// 画面内に入ったらflipRightTopというクラス名を追記
		}else{
		$(this).removeClass('flipRightTop');// 画面外に出たらflipRightTopというクラス名を外す
		}
		});
	
	// 4-4 ボンッ（拡大）
	$('.zoomInTrigger').each(function(){ //zoomInTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('zoomIn');// 画面内に入ったらzoomInというクラス名を追記
		}else{
		$(this).removeClass('zoomIn');// 画面外に出たらzoomInというクラス名を外す
		}
		});	
}

/*===========================================================*/
/*印象編　9-2　PNG アニメーション（APNG）*/
/*===========================================================*/

APNG.ifNeeded().then(function () {
	var images = document.querySelectorAll(".apng-image");
	for (var i = 0; i < images.length; i++) APNG.animateImage(images[i]);
});

/*===========================================================*/
/*関数をまとめる*/
/*===========================================================*/

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    PageTopAnime();//機能編 8-1-8	リンクボタンをクリックしたら形状が変化の関数を呼ぶ
	fadeAnime();//印象編 4 最低限おぼえておきたい動きの関数を呼ぶ
});


// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
	
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
	$("#splash").delay(1500).fadeOut('slow',function(){
        
		$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
		
        var h = $(window).height();//ブラウザの高さを取得
		$(".splashbg").css({
			"border-width":h,//ボーダーの太さにブラウザの高さを代入
			"animation-name":"backBoxAnime"//animation-nameを定義
		});	

        PageTopAnime();//機能編 8-1-8	リンクボタンをクリックしたら形状が変化の関数を呼ぶの関数を呼ぶ
    
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

    /*===========================================================*/
    /*機能編 4-2-9背景色が四角に拡大（四隅へ）*/
    /*===========================================================*/
    
    //=====ここから背景が伸びた後に動かしたいJSをまとめる
    $('.splashbg').on('animationend', function() {        
        fadeAnime();//印象編 4 最低限おぼえておきたい動きの関数を呼ぶ
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
    
});// ここまでページが読み込まれたらすぐに動かしたい場合の記述