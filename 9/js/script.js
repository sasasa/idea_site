/*===========================================================*/
/*機能編  5-1-9スクロール途中でヘッダーが消え、上にスクロールすると復活*/
/*===========================================================*/

var beforePos = 0;//スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
    var elemTop = $('#service').offset().top;//#serviceの位置まできたら
	var scroll = $(window).scrollTop();
    //ヘッダーの出し入れをする
    if(scroll == beforePos) {
		//IE11対策で処理を入れない
    }else if(elemTop > scroll || 0 > scroll - beforePos){
		//ヘッダーが上から出現する
		$('#header').removeClass('UpMove');	//#headerにUpMoveというクラス名を除き
		$('#header').addClass('DownMove');//#headerにDownMoveのクラス名を追加
    }else {
		//ヘッダーが上に消える
        $('#header').removeClass('DownMove');//#headerにDownMoveというクラス名を除き
		$('#header').addClass('UpMove');//#headerにUpMoveのクラス名を追加
    }
    
    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}
/*===========================================================*/
/*機能編  5-1-21 クリックしたら円形背景が拡大（右下から）*/
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
/*機能編  9-1-5 スクロールをするとエリアの高さに合わせて線が伸びる*/
/*===========================================================*/

//線が伸びるための設定を関数でまとめる
function ScrollTimelineAnime(){
	$('.timeline li').each(function(){// それぞれのli要素の
		var elemPos = $(this).offset().top;// 上からの高さ取得
		var scroll = $(window).scrollTop();// スクロール値取得
		var windowHeight = $(window).height();// windowの高さ取得
		var startPoint = 500; //線をスタートさせる位置を指定※レイアウトによって調整してください
		if (scroll >= elemPos - windowHeight-startPoint){				
			var H = $(this).outerHeight(true)//liの余白と高さを含めた数値を取得
			//スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
			var percent = (scroll+startPoint - elemPos) / (H/2) *100;//liの余白と高さの半分で線を100％に伸ばす

			// 100% を超えたらずっと100%を入れ続ける
			if(percent  > 100){
				percent  = 100;
			}
			// ボーダーの長さをセット
			$(this).children('.border-line').css({
				height: percent + "%", //CSSでパーセント指定
			});
		} 
	});
}

/*===========================================================*/
/*機能編 8-1-9	スクロールの速さが変化*/
/*===========================================================*/

// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 1500,"easeInOutQuint");//ページトップスクロールの速さ※数字が大きいほど遅くなる, easingプラグインでアニメーション速度に変化
	//linear、swing、jswing、easeInQuad、easeOutQuad、easeInOutQuad、easeInCubic、easeOutCubic、easeInOutCubic、easeInQuart、easeOutQuart、easeInOutQuart、easeInQuint、easeOutQuint、easeInOutQuint、easeInSine、easeOutSine、easeInOutSine、easeInExpo、easeOutExpo、easeInOutExpo、easeInCirc、easeOutCirc、easeInOutCirc、easeInElastic、easeOutElastic、easeInOutElastic、easeInBack、easeOutBack、easeInOutBack、easeInBounce、easeOutBounce、easeInOutBounceなどから選択可能
    return false;//リンク自体の無効化
});

/*===========================================================*/
/*機能編  6-1-3 ゆっくりズームアウトさせながら全画面で見せる*/
/*===========================================================*/
//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: './img/main_01.jpg'},
				{ src: './img/main_02.jpg'},
				{ src: './img/main_03.jpg'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: './img/main_sp01.jpg' },
				{ src: './img/main_sp02.jpg' },
				{ src: './img/main_sp03.jpg' }
			];
		}

//Vegas全体の設定

$('#slider').vegas({
		overlay: false,//画像の上に網線やドットのオーバーレイパターン画像を指定しない。
		transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
		transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 10000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
		animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
		slides: responsiveImage,//画像設定を読む
        timer:false,//プログレスバー非表示
	});

/*===========================================================*/
/*印象編 4-13 ランダムに現れる（CSS x jQuery）*/
/*===========================================================*/

// 動きのきっかけの起点となるアニメーションの名前を定義
function moveAnimation(){	
//スクロールしたらランダムに出現	
	var randomElm2 = $(".randomScroll");								//親要素取得
	var randomElm2Child = $(randomElm2).children();					//親の子要素を取得
	randomScrollAnime();
	function randomScrollAnime(){
		var elemPos = $(".randomScroll").offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			if(randomElm2Child.length >0 ){ 									//配列数以上であれば処理をおこなう
				var rnd = Math.floor(Math.random() * randomElm2Child.length); //配列数から表示する数値をランダムで取得
				var moveData = "flipDown";//アニメーション名＝CSSのクラス名を指定
				if(animeFlag){ 											//スクロールする度に動作するのでアニメーションが終わるまで処理をさせないようにする
					animeFlag = false; 									//アニメーション処理が終わるまで一時的にfalseにする
					$(randomElm2Child[rnd]).addClass(moveData); 				//アニメーションのクラスを追加
					setTimeout(function(){
						animeFlag = true; 								//次の処理をおこなうためにtrueに変更
						randomScrollAnime(); 							//自身の処理を繰り返す
					},200);												//0.2秒間隔で。※ランダムのスピード調整はこの数字を変更させる
					randomElm2Child.splice(rnd,1); 							//アニメーション追加となった要素を配列から削除
				}
			}
			
		}else{
			animeFlag = true;
		}
		
	}
}

	var animeFlag = true;//スクロールする度に動作するのでアニメーションが終わるまで処理をさせないようにするための定義

/*===========================================================*/
/* 印象編 4 最低限おぼえておきたい動き*/
/*===========================================================*/

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){
    // 4-1 ふわっ（下から）
    
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
    //4-1 ふわっ（左から）
	$('.fadeLeftTrigger').each(function(){ //fadeLeftTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
		}else{
		$(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
		}
		});
    //4-1 ふわっ（右から）
	$('.fadeRightTrigger').each(function(){ //fadeRightTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
		}else{
		$(this).removeClass('fadeRight');// 画面外に出たらfadeRightというクラス名を外す
		}
		});	
}

/*===========================================================*/
/* 関数をまとめる*/
/*===========================================================*/

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	ScrollTimelineAnime();//機能編 9-1-5 スクロールをするとエリアの高さに合わせて線が伸びる関数を呼ぶ
	ScrollAnime();//機能編 5-1-9スクロール途中でヘッダーが消え、上にスクロールすると復活の関数を呼ぶ
	moveAnimation();//印象編 4-13 ランダムに現れる（CSS x jQuery）
	fadeAnime();//印象編 4 最低限おぼえておきたい動きの関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
	
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述    
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
            ScrollTimelineAnime();//機能編 9-1-5 スクロールをするとエリアの高さに合わせて線が伸びる関数を呼ぶ
            ScrollAnime();//機能編 5-1-9スクロール途中でヘッダーが消え、上にスクロールすると復活の関数を呼ぶ
            moveAnimation();//印象編 4-13 ランダムに現れる（CSS x jQuery）	
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
   //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg1').on('animationend', function() {    
        fadeAnime();//印象編 4 最低限おぼえておきたい動きの関数を呼ぶ
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
        
});
