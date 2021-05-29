/*===========================================================*/
/*機能編 4-1-5ロゴアウトラインアニメーション*/
/*===========================================================*/

//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 10,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE,//動きの加速減速設定
},
function(){
         $("#mask").attr("class", "done");//描画が終わったらdoneというクラスを追加
}
);

/*===========================================================*/
/*機能編 5-1-17 クリックしたら円形背景が拡大（下から）*/
/*===========================================================*/

$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
    $("#main-nav dl").toggleClass('telactive');//電話エリアにtelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
    $("#main-nav dl").removeClass('telactive');//電話エリアのtelactiveクラスを除去
});

/*===========================================================*/
/*機能編 8-1-6ページの指定の高さを超えたら出現し、フッター手前で止まる*/
/*===========================================================*/
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {

		var scroll = $(window).scrollTop(); //スクロール値を取得
		if (scroll >= 200){//200pxスクロールしたら
			$('#page-top').removeClass('DownMove');		// DownMoveというクラス名を除去して
			$('#page-top').addClass('UpMove');			// UpMoveというクラス名を追加して出現
		}else{//それ以外は
			if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
				$('#page-top').removeClass('UpMove');	//  UpMoveというクラス名を除去し
				$('#page-top').addClass('DownMove');	// DownMoveというクラス名を追加して非表示
			}
		}
		
		var wH = window.innerHeight; //画面の高さを取得
		var footerPos =  $('#footer').offset().top; //footerの位置を取得
		if(scroll+wH >= (footerPos+10)) {
			var pos = (scroll+wH) - footerPos+10 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
			$('#page-top').css('bottom',pos);	//#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
		}else{//それ以外は
			if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名がついていたら
				$('#page-top').css('bottom','10px');// 下から10pxの位置にページリンクを指定
			}
		}
}

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

/*===========================================================*/
/*機能編 6-1-2 フェードイン・アウトさせて全画面で見せる*/
/*===========================================================*/

$('.slider').slick({
		fade:true,//切り替えをフェードで行う。初期値はfalse。
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
		speed:1000,//スライドの動きのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 1,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
		arrows: false,//左右の矢印なし
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});

/*===========================================================*/
/*  印象編 4 最低限おぼえておきたい動き */
/*===========================================================*/

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){
 
	// 4-6 じわっ（ぼかしから出現）
	
	$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
		}else{
		$(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
		}
		});	
    
    //4-8 スーッ（枠線が伸びて出現）

    $('.lineTrigger').each(function(){ //lineTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('lineanime');// 画面内に入ったらlineanimeというクラス名を追記
		}else{
			$(this).removeClass('lineanime');// 画面外に出たらlineanimeというクラス名を外す
		}
	});	
    
}

/*===========================================================*/
/*印象編 9-4-1 SVG アニメーション*/
/*===========================================================*/

//SVGの初期設定

var logoVivus1;//1つめのSVG設定

//1～3のSVG初期設定
function VivusInit(){
	//1つめのSVG初期設定
	logoVivus1 = new Vivus('logo',
		{
			start: 'autostart',//アニメーションの自動再生
			type: 'scenario',// アニメーションのタイプを設定
			pathTimingFunction: Vivus.EASE,//動きの加速減速設定
		},
		function(obj){
			$("#logo").attr("class", "done");//描画が終わったらdoneというクラスを追加
		}
	);
	logoVivus1.stop();	
	
}

//スクロールをしたらSVGが出現する設定
function VivusAnime(){
	//スクロールをしたら1つめのSVGが出現する設定
	var elemPos = $('#logo').offset().top - 20;//要素より、20px上の位置まで来たら出現
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight) {
		logoVivus1.play(1);//描画される速さ。数が大きくなるほど速い
	}
}

/*===========================================================*/
/* 関数をまとめる */
/*===========================================================*/

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime();//印象編 4 最低限おぼえておきたい動きの関数を呼ぶ
    PageTopAnime();//機能編 8-1-6 ページの指定の高さを超えたら出現し、フッター手前で止まる関数を呼ぶ
	VivusAnime();//印象編 9-4-1 SVG アニメーションの関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
    
    //機能編 4-1-5 ロゴアウトラインアニメーション
    $("#splash_logo").delay(3000).fadeOut('slow');//ロゴを3秒（3000ms）待機してからフェードアウト

    stroke.play();//印象編 9-4-1 SVG アニメーションの実行
  
    //=====ここからローディングエリア（splashエリア）をフェードアウトした後に動かしたいJSをまとめる    
    $("#splash").delay(3000).fadeOut(800,function(){//ローディング画面を3秒（3000ms）待機してからフェードアウト
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
    PageTopAnime();//機能編 8-1-6 ページの指定の高さを超えたら出現し、フッター手前で止まる関数を呼ぶ
	VivusInit(); //印象編 9-4-1 SVG アニメーション初期設定
	VivusAnime();//印象編 9-4-1 SVG アニメーションの関数を呼ぶ
    }); //=====ここまでローディングエリア（splashエリア）を0.8秒でフェードアウトした後に動かしたいJSをまとめる
    
   /*===========================================================*/
    /*機能編 4-2-3	背景色が伸びる（右から左） */
    /*===========================================================*/

    //=====ここから背景が伸びた後に動かしたいJSをまとめる
    $('.splashbg').on('animationend', function() {
      fadeAnime();//印象編 4 最低限おぼえておきたい動きの関数を呼ぶ 
     });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
});
