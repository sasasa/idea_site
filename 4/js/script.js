/*===========================================================*/
/*機能編 8-1-1ページの先頭にスムーススクロールする*/
/*===========================================================*/
// #page-topをクリックした際の設定
$('#page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});

/*===========================================================*/
/*機能編 5-1-13 クリックしたらナビが左から右に出現*/
/*===========================================================*/

$(".openbtn").click(function () {//ボタンがクリックされたら
$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  $("#g-nav li").toggleClass('smooth');//li に smoothクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  $("#g-nav li").removeClass('smooth');//li のsmoothクラスを除去
});

/*===========================================================*/
/*機能編  9-5-1 数字のカウントアップ・ダウン*/
/*===========================================================*/

$('#count-up-area').on('inview', function(event, isInView) {
if (isInView) {
  //要素が見えたときに実行する処理
  $("#count-up-area .count-up").each(function(){
    $(this).prop('Counter',0).animate({//0からカウントアップ
              Counter: $(this).text()
          }, {
      // スピードやアニメーションの設定
              duration: 3000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
              easing: 'swing',//動きの種類。他にもlinearなど設定可能
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
  });
}
});


/*===========================================================*/
/*機能編  9-5-2 棒グラフ（縦）9-5-6 円グラフ*/
/*===========================================================*/

//値をグラフに表示させる
Chart.plugins.register({
  afterDatasetsDraw: function (chart, easing) {
      var ctx = chart.ctx;

      chart.data.datasets.forEach(function (dataset, i) {
          var meta = chart.getDatasetMeta(i);
          if (!meta.hidden) {
              meta.data.forEach(function (element, index) {
                  // 値の表示
                  ctx.fillStyle = 'rgb(0, 0, 0,0.8)';//文字の色
                  var fontSize = 12;//フォントサイズ
                  var fontStyle = 'normal';//フォントスタイル
                  var fontFamily = 'Arial';//フォントファミリー
                  ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                  var dataString = dataset.data[index].toString();
        
                  // 値の位置
                  ctx.textAlign = 'center';//テキストを中央寄せ
                  ctx.textBaseline = 'middle';//テキストベースラインの位置を中央揃え

                  var padding = 5;//余白
                  var position = element.tooltipPosition();
                  ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
  
              });
          }
      });
  }
});

//円グラフ
$('#chart01').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
if (isInView) {

var ctx=document.getElementById("chart01");//グラフを描画したい場所のid
var chart=new Chart(ctx,{
type:'pie',//グラフのタイプ
data:{//グラフのデータ
labels:["電磁波","原子スペクトル","光の速度","熱放射",],//データの名前
datasets:[{
    label:"実験の種類",//グラフのタイトル
    backgroundColor:["#05c3c5","#059ac5", "#0576c5","#0556c5"],//グラフの背景色
    data:["20","30","10","40",]//データ
  }]
},

options:{//グラフのオプション
maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
legend:{
  display:true//グラフの説明を表示
},
tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
  callbacks:{
      label: function (tooltipItem, data) {
    return data.labels[tooltipItem.index]+ ": "+ data.datasets[0].data[tooltipItem.index] + "%";//%を最後につける
  }
  },		
},
title:{//上部タイトル表示の設定
  display: true,
  fontSize:14,
  text: '実験の種類 単位：%'
},
}
});
      
}
});

//棒グラフ
$('#chart02').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
if (isInView) {

var ctx02=document.getElementById("chart02");//グラフを描画したい場所のid
ctx02.height = 300;//グラフの高さ
var chart02=new Chart(ctx02,{
type:'bar',//グラフのタイプ
data:{//グラフのデータ
labels:["令和3年度","令和4年度","令和5年度",],//データの名前
datasets:[{
    label:"施設見学者数",//グラフのタイトル
    backgroundColor:"#00b7b8",//グラフの色
    data:["2808","1476","1713",]//横列に並ぶデータ
  }]
},
options:{//グラフのオプション
maintainAspectRatio: false,   //元のキャンバスのアスペクト比維持を無効
legend:{
  display: false//グラフの説明を非表示
},
tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
  callbacks:{
      label: function(tooltipItems, data) {
          if(tooltipItems.yLabel == "0"){
              return "";
          }
          return data.datasets[tooltipItems.datasetIndex].label + "：" + tooltipItems.yLabel + "人";//人を最後につける
      }
  }
},
title:{//上部タイトル表示の設定
  display: true,
  fontSize:14,
  text: '施設見学数　単位：人'
},
scales:{
  yAxes:[//グラフ縦軸（Y軸）設定
    {
      ticks:{
        beginAtZero:true,//0からスタート
        suggestedMax: 1000,//最大が1000
        suggestedMin: 0,//最小が0
        stepSize: 500,//100づつ数値が刻まれる
        callback: function(value){
          return  value +  '人'//数字＋人で表示					
      }
    }
  }
],
  xAxes:[//グラフ縦軸（X軸）設定
    {
      barPercentage:0.5,//バーの太さ
    }
  ]
}
}
});
  
}
});   


/*===========================================================*/
/* 印象編 8-8 テキストがランダムに出現*/
/*===========================================================*/
var Obj = {
loop: false,
minDisplayTime: 2000,// アニメーションの間隔時間
initialDelay:100, // アニメーション開始までの遅延時間
autoStart: true,
in: {
  effect: 'fadeInUp',//animate.css の中にある採用したい動きのクラス名
  delayScale: 1,// 遅延時間の指数
  delay: 100,// 文字ごとの遅延時間
  sync: false,// アニメーションをすべての文字に同時適用するかどうか
  shuffle: true,// 文字表示がランダムな順に表示されるかどうか
},
out: {// 終了時のアニメーション設定をしたい場合はここに追記
}
}
var element
//初期設定
function RandomInit() {
element= $(".randomAnime");
$(element[0]).textillate(Obj);
}

function RandomAnimeControl() {
  var elemPos = $(element[1]).offset().top - 50;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();

  if (scroll >= elemPos - windowHeight) {
    $(element[1]).textillate(Obj);
  }
}

/*===========================================================*/
/* 印象編 5-4 幾何学模様*/
/*===========================================================*/

particlesJS("particles-js",{
"particles":{
  "number":{
    "value":38,/*この数値を変更すると幾何学模様の数が増減できる*/
    "density":{
      "enable":true,
      "value_area":800
    }
  },
  "color":{
    "value":"#11a0ad"/*色*/
  },
  "shape":{
    "type":"polygon",/*形状はpolygonを指定*/
    "stroke":{
      "width":0,
    },
"polygon":{
  "nb_sides":3//多角形の角の数
},
"image":{
  "width":190,
  "height":100
}
},
  "opacity":{
  "value":0.664994832269074,
  "random":false,
  "anim":{
    "enable":true,
    "speed":2.2722661797524872,
    "opacity_min":0.08115236356258881,
    "sync":false
  }
  },
  "size":{
    "value":3,
    "random":true,
    "anim":{
      "enable":false,
      "speed":40,
      "size_min":0.1,
      "sync":false
    }
  },
  "line_linked":{
    "enable":true,
    "distance":150,
    "color":"#11a0ad",
    "opacity":0.6,
    "width":1
  },
  "move":{
    "enable":true,
    "speed":6,/*この数値を小さくするとゆっくりな動きになる*/
    "direction":"none",/*方向指定なし*/
    "random":false,/*動きはランダムにしない*/
    "straight":false,/*動きをとどめない*/
    "out_mode":"out",/*画面の外に出るように描写*/
    "bounce":false,/*跳ね返りなし*/
    "attract":{
      "enable":false,
      "rotateX":600,
      "rotateY":961.4383117143238
    }
  }
},
"interactivity":{
  "detect_on":"canvas",
  "events":{
    "onhover":{
      "enable":false,
      "mode":"repulse"
    },
"onclick":{
  "enable":false
},
"resize":true
  }
},
"retina_detect":true
});

/*===========================================================*/
/* 印象編 4 最低限おぼえておきたい動き*/
/*===========================================================*/

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){
  //4-1 ふわっ（上から）
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
  
  // 4-7 にゅーん（滑らかに変形して出現）	
$('.smoothTrigger').each(function(){ //smoothTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
  $(this).addClass('smooth');// 画面内に入ったらsmoothというクラス名を追記
  }else{
  $(this).removeClass('smooth');// 画面外に出たらsmoothというクラス名を外す
  }
  });	

}

/*===========================================================*/
/*  印象編　5-11 波打つ（1つ重なりあり）*/
/*===========================================================*/

var unit = 100,
  canvasList, // キャンバスの配列
  info = {}, // 全キャンバス共通の描画情報
  colorList; // 各キャンバスの色情報

/**
* Init function.
* 
* Initialize variables and begin the animation.
*/
function init() {
  info.seconds = 0;
  info.t = 0;
  canvasList = [];
  colorList = [];
  // canvas1個めの色指定
  canvasList.push(document.getElementById("waveCanvas"));
  colorList.push(['#11a0ad', '#11a0ad']);//重ねる波の色設定
// 各キャンバスの初期化
for(var canvasIndex in canvasList) {
      var canvas = canvasList[canvasIndex];
      canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
      canvas.height = 200;//波の高さ
      canvas.contextCache = canvas.getContext("2d");
  }
  // 共通の更新処理呼び出し
  update();
}

function update() {
  for(var canvasIndex in canvasList) {
      var canvas = canvasList[canvasIndex];
      // 各キャンバスの描画
      draw(canvas, colorList[canvasIndex]);
  }
  // 共通の描画情報の更新
  info.seconds = info.seconds + .014;
  info.t = info.seconds*Math.PI;
  // 自身の再起呼び出し
  setTimeout(update, 35);
}

/**
* Draw animation function.
* 
* This function draws one frame of the animation, waits 20ms, and then calls
* itself again.
*/
function draw(canvas, color) {
  // 対象のcanvasのコンテキストを取得
  var context = canvas.contextCache;
  // キャンバスの描画をクリア
  context.clearRect(0, 0, canvas.width, canvas.height);

  //波の重なりを描画 drawWave(canvas, color[数字], 透過, 波の幅のzoom,波の開始位置の遅れ )
  drawWave(canvas, color[0], 0.5, 3, 0);//0.5⇒透過具合50%、3⇒数字が大きいほど波がなだらか
  drawWave(canvas, color[1], 0.4, 2, 250);
//    drawWave(canvas, color[2], 0.2, 1.6, 100);
}

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(canvas, color, alpha, zoom, delay) {
  var context = canvas.contextCache;
  context.fillStyle = color;//塗りの色
  context.globalAlpha = alpha;
  context.beginPath(); //パスの開始
  drawSine(canvas, info.t / 0.5, zoom, delay);
  context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
  context.lineTo(0, canvas.height); //パスをCanvasの左下へ
  context.closePath() //パスを閉じる
  context.fill(); //波を塗りつぶす
}

/**
* Function to draw sine
* 
* The sine curve is drawn in 10px segments starting at the origin. 
* drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawSine(canvas, t, zoom, delay) {
  var xAxis = Math.floor(canvas.height/2);
  var yAxis = 0;
  var context = canvas.contextCache;
  // Set the initial x and y, starting at 0,0 and translating to the origin on
  // the canvas.
  var x = t; //時間を横の位置とする
  var y = Math.sin(x)/zoom;
  context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

  // Loop to draw segments (横幅の分、波を描画)
  for (i = yAxis; i <= canvas.width + 10; i += 10) {
      x = t+(-yAxis+i)/unit/zoom;
      y = Math.sin(x - delay)/3;
      context.lineTo(i, unit*y+xAxis);
  }
}

init();

/*===========================================================*/
/* 関数をまとめる*/
/*===========================================================*/

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  fadeAnime();//印象編 4 最低限おぼえておきたい動きの関数を呼ぶ
RandomAnimeControl();//印象編 8-8 テキストがランダムに出現、アニメーション用の関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  
/*===========================================================*/
/*機能編  4-1-2 プログレスバー＋数字カウントアップ*/
/*===========================================================*/

//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
duration: 1000,//時間指定(1000＝1秒)
strokeWidth: 0.2,//進捗ゲージの太さ
color: '#00b7b8',//進捗ゲージのカラー
trailWidth: 0.2,//ゲージベースの線の太さ
trailColor: '#ccc',//ゲージベースの線のカラー
text: {//テキストの形状を直接指定				
  style: {//天地中央に配置
    position: 'absolute',
    left: '50%',
    top: '50%',
    padding: '0',
    margin: '-30px 0 0 0',//バーより上に配置
    transform:'translate(-50%,-50%)',
    'font-size':'1rem',
    color: '#00b7b8',
  },
  autoStyleContainer: false //自動付与のスタイルを切る
},
step: function(state, bar) {
  bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します

  //=====ここからローディングエリア（splashエリア）を0.8秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(500).fadeOut(800,function(){//#splashエリアをフェードアウトした後にアニメーションを実行
  
$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
      
  fadeAnime();//印象編 4 最低限おぼえておきたい動きの関数を呼ぶ
RandomInit(); //印象編 8-8 テキストがランダムに出現、初期設定を読み込み
RandomAnimeControl();//印象編 8-8 テキストがランダムに出現、アニメーション用の関数を呼ぶ
  }); 
  //=====ここまでローディングエリア（splashエリア）を0.8秒でフェードアウトした後に動かしたいJSをまとめる
  
});   
  
});// ここまでページが読み込まれたらすぐに動かしたい場合の記述
  
