//========================================================
//機能編   4-1-6 手書き風ロゴアニメーション
//========================================================

//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 50,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE,//動きの加速減速設定
}
);

//========================================================
//機能編   5-1-20クリックしたら円形背景が拡大（右上から）
//========================================================

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

//========================================================
//機能編   9-6-3 リンクをクリックすると、背景が暗くなり動画や画像やテキストを表示
//========================================================

//テキストを含む一般的なモーダル
$(".btnripple2").modaal({
	overlay_close:true,//モーダル背景クリック時に閉じるか
	before_open:function(){// モーダルが開く前に行う動作
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
});

//========================================================
//  印象編 4 最低限おぼえておきたい動き
//========================================================

function fadeAnime(){
// 4-1 ふわっ（上から）
$('.fadeDownTrigger').each(function(){ //fadeDownTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeDown');// 画面内に入ったらfadeDownというクラス名を追記
		}else{
		$(this).removeClass('fadeDown');// 画面外に出たらfadeDownというクラス名を外す
		}
		});
}

//========================================================
//  印象編 8-5 テキストが流れるように出現（下から上）
//========================================================

function slideAnime(){
	//====上下に動くアニメーションここから===

		$('.upAnime').each(function(){ 
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//上から下へ表示するクラスを付与
				//テキスト要素を挟む親要素（上）とテキスト要素を元位置でアニメーションをおこなう
				$(this).addClass("slideAnimeUpDown"); //要素を上枠外に移動しCSSアニメーションで上から元の位置に移動
				$(this).children(".upAnimeInner").addClass("slideAnimeDownUp");//子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
			}else{
				//上から下へ表示するクラスを取り除く
				$(this).removeClass("slideAnimeUpDown");
				$(this).children(".upAnimeInner").removeClass("slideAnimeDownUp");
				
			}
		});
		
		$('.downAnime').each(function(){
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//下から上へ表示するクラスを付与
				//テキスト要素を挟む親要素（下）とテキスト要素を元位置でアニメーションをおこなう
				$(this).addClass("slideAnimeDownUp");//要素を下枠外に移動しCSSアニメーションで下から元の位置に移動
				$(this).children(".downAnimeInner").addClass("slideAnimeUpDown");//子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
			}else{
				//下から上へ表示するクラスを取り除く
				$(this).removeClass("slideAnimeDownUp");
				$(this).children(".downAnimeInner").removeClass("slideAnimeUpDown");
				
			}
		});
		//====上下に動くアニメーションここまで===
	}

//========================================================
// 関数をまとめる
//========================================================

$(window).on('load',function(){
    
    stroke.play();//印象編 9-4-2 SVGアニメーション
    
	$("#splash_logo").delay(1500).fadeOut('slow');//ロゴを1.5秒（1500ms）待機してからフェードアウト

     //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる      
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトした後に下記を実行
       $('body').addClass('appear');/*機能編 4-2-8 背景色が円形に縮小（中央へ）の関数を呼ぶ*/
	});
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

    //=====ここから背景が伸びた後に動かしたいJSをまとめる   
    $('.splashbg').on('animationend', function() {        
       fadeAnime();/* 印象編 4 最低限おぼえておきたい動きの関数を呼ぶ*/
       slideAnime();/*印象編 8-5 テキストが流れるように出現（下から上）の関数を呼ぶ*/
    });  
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
    
});