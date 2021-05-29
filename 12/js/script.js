/*===========================================================*/
/*機能編 4-1-5 ロゴアウトラインアニメーション*/
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
/*印象編 8-10 テキストがタイピング風に出現*/
/*===========================================================*/

// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
        var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 100;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}

/*===========================================================*/
/*印象編 5-5 雪が降る*/
/*===========================================================*/
/*雪1*/
particlesJS("pt1", {
  "particles": {
    "number": {
      "value": 150,/*この数値を変更すると雪の数が増減できる*/
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",/*形状は画像を指定*/
      "stroke": {
        "width": 3,
        "color": "#fff"
      },
      "image": {
        "src": "img/snow.png",/*画像を指定*/
        "width": 120,
        "height": 120
      }
    },
    "opacity": {
      "value": 0.7,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
    },
    "move": {
      "enable": true,
      "speed": 3,/*この数値を小さくするとゆっくりな動きになる*/
      "direction": "bottom",/*下に向かって落ちる*/
      "random": true,/*動きはランダム*/
      "straight": false,/*動きをとどめない*/
      "out_mode": "out",/*画面の外に出るように描写*/
      "bounce": false,/*跳ね返りなし*/
      "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": false,
      },
      "resize": true
    }
  },
  "retina_detect": true
});	

/*雪2*/
particlesJS("pt2", {
  "particles": {
    "number": {
      "value": 150,/*この数値を変更すると雪の数が増減できる*/
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",/*形状は画像を指定*/
      "stroke": {
        "width": 3,
        "color": "#fff"
      },
      "image": {
        "src": "img/snow.png",/*画像を指定*/
        "width": 120,
        "height": 120
      }
    },
    "opacity": {
      "value": 0.7,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
    },
    "move": {
      "enable": true,
      "speed": 3,/*この数値を小さくするとゆっくりな動きになる*/
      "direction": "bottom",/*下に向かって落ちる*/
      "random": true,/*動きはランダム*/
      "straight": false,/*動きをとどめない*/
      "out_mode": "out",/*画面の外に出るように描写*/
      "bounce": false,/*跳ね返りなし*/
      "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": false,
      },
      "resize": true
    }
  },
  "retina_detect": true
});	


/*===========================================================*/
/*印象編 5-6 桜が散る ※落ち葉の画像に変更しています*/
/*===========================================================*/
particlesJS("pt3", {
	"particles":{
		"number":{
			"value":15,/*この数値を変更すると落ち葉の数が増減できる*/
			"density":{
				"enable":true,
				"value_area":1121.6780303333778
			}
		},
		"color":{
			"value":"#fff"
		},
		"shape":{
			"type":"image",/*形状は画像を指定*/
			"stroke":{
				"width":0,
			},
			"image":{
				"src":"img/flower.png",/*画像を指定*/
				"width":190,
				"height":204
			}
		},
		"opacity":{
			"value":0.06409588744762158,
			"random":true,
			"anim":{
				"enable":false,
				"speed":1,
				"opacity_min":0.1,
				"sync":false
			}
		},
		"size":{
			"value":12,
			"random":true,/*サイズをランダムに*/
			"anim":{
				"enable":false,
				"speed":4,
				"size_min":0.1,
				"sync":false
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":7,/*この数値を小さくするとゆっくりな動きになる*/
			"direction":"bottom-right",/*右下に向かって落ちる*/
			"random":false,/*動きはランダムにしない*/
			"straight":false,/*動きをとどめない*/
			"out_mode":"out",/*画面の外に出るように描写*/
			"bounce":false,/*跳ね返りなし*/
			"attract":{
				"enable":false,
				"rotateX":281.9177489524316,
				"rotateY":127.670995809726
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
			},
			"onclick":{
				"enable":false,
			},
			"resize":true
		}
	},
	"retina_detect":false
});

/*落ち葉2*/
particlesJS("pt4", {
	"particles":{
		"number":{
			"value":15,/*この数値を変更すると落ち葉の数が増減できる*/
			"density":{
				"enable":true,
				"value_area":1121.6780303333778
			}
		},
		"color":{
			"value":"#fff"
		},
		"shape":{
			"type":"image",/*形状は画像を指定*/
			"stroke":{
				"width":0,
			},
			"image":{
				"src":"img/flower.png",/*画像を指定*/
				"width":190,
				"height":204
			}
		},
		"opacity":{
			"value":0.06409588744762158,
			"random":true,
			"anim":{
				"enable":false,
				"speed":1,
				"opacity_min":0.1,
				"sync":false
			}
		},
		"size":{
			"value":12,
			"random":true,/*サイズをランダムに*/
			"anim":{
				"enable":false,
				"speed":4,
				"size_min":0.1,
				"sync":false
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":7,/*この数値を小さくするとゆっくりな動きになる*/
			"direction":"bottom-right",/*右下に向かって落ちる*/
			"random":false,/*動きはランダムにしない*/
			"straight":false,/*動きをとどめない*/
			"out_mode":"out",/*画面の外に出るように描写*/
			"bounce":false,/*跳ね返りなし*/
			"attract":{
				"enable":false,
				"rotateX":281.9177489524316,
				"rotateY":127.670995809726
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
			},
			"onclick":{
				"enable":false,
			},
			"resize":true
		}
	},
	"retina_detect":false
});

/*落ち葉3*/
particlesJS("pt5", {
	"particles":{
		"number":{
			"value":15,/*この数値を変更すると落ち葉の数が増減できる*/
			"density":{
				"enable":true,
				"value_area":1121.6780303333778
			}
		},
		"color":{
			"value":"#fff"
		},
		"shape":{
			"type":"image",/*形状は画像を指定*/
			"stroke":{
				"width":0,
			},
			"image":{
				"src":"img/flower.png",/*画像を指定*/
				"width":190,
				"height":204
			}
		},
		"opacity":{
			"value":0.06409588744762158,
			"random":true,
			"anim":{
				"enable":false,
				"speed":1,
				"opacity_min":0.1,
				"sync":false
			}
		},
		"size":{
			"value":12,
			"random":true,/*サイズをランダムに*/
			"anim":{
				"enable":false,
				"speed":4,
				"size_min":0.1,
				"sync":false
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":7,/*この数値を小さくするとゆっくりな動きになる*/
			"direction":"bottom-right",/*右下に向かって落ちる*/
			"random":false,/*動きはランダムにしない*/
			"straight":false,/*動きをとどめない*/
			"out_mode":"out",/*画面の外に出るように描写*/
			"bounce":false,/*跳ね返りなし*/
			"attract":{
				"enable":false,
				"rotateX":281.9177489524316,
				"rotateY":127.670995809726
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
			},
			"onclick":{
				"enable":false,
			},
			"resize":true
		}
	},
	"retina_detect":false
});

/*落ち葉4*/
particlesJS("pt6", {
	"particles":{
		"number":{
			"value":15,/*この数値を変更すると落ち葉の数が増減できる*/
			"density":{
				"enable":true,
				"value_area":1121.6780303333778
			}
		},
		"color":{
			"value":"#fff"
		},
		"shape":{
			"type":"image",/*形状は画像を指定*/
			"stroke":{
				"width":0,
			},
			"image":{
				"src":"img/flower.png",/*画像を指定*/
				"width":190,
				"height":204
			}
		},
		"opacity":{
			"value":0.06409588744762158,
			"random":true,
			"anim":{
				"enable":false,
				"speed":1,
				"opacity_min":0.1,
				"sync":false
			}
		},
		"size":{
			"value":12,
			"random":true,/*サイズをランダムに*/
			"anim":{
				"enable":false,
				"speed":4,
				"size_min":0.1,
				"sync":false
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":7,/*この数値を小さくするとゆっくりな動きになる*/
			"direction":"bottom-right",/*右下に向かって落ちる*/
			"random":false,/*動きはランダムにしない*/
			"straight":false,/*動きをとどめない*/
			"out_mode":"out",/*画面の外に出るように描写*/
			"bounce":false,/*跳ね返りなし*/
			"attract":{
				"enable":false,
				"rotateX":281.9177489524316,
				"rotateY":127.670995809726
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
			},
			"onclick":{
				"enable":false,
			},
			"resize":true
		}
	},
	"retina_detect":false
});


/*==================================================
/*印象編 6-3 スクロールすると画面分割した左右がそれぞれ動く*/
/*===================================*/

$('#wrapper').multiscroll({
	sectionsColor: ['#0f7fa7', '#504237', '#504237','#504237', '#504237', '#504237'],//セクションごとの背景色設定
	anchors: ['area1', 'area2', 'area3','area4','area5','area6'],//セクションとリンクするページ内アンカーになる名前
	menu: '#menu',//上部ナビゲーションのメニュー設定
	navigation: true,//右のナビゲーション出現、非表示は false
	//navigationTooltips:['Area1', 'Area2', 'Area3','Area4','Area5'],//右のナビゲーション現在地時に入るテキスト
	//loopTop: true,//最初のセクションを上にスクロールして最後のセクションまでスクロールするかどうかを定義します。
	loopBottom: true,//最後のセクションを下にスクロールして最初のセクションまでスクロールするかどうかを定義します。
    //※以下は今回のプラグインの組み合わせのみで使用。ページの途中でリロードしてもトップのタイピング出現
    afterLoad: function(anchorLink, index){
		if(index == 1){
			TextTypingAnime();
		}	
	}

    
});

/*==================================================
/*関数をまとめる*/
/*===================================*/

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	TextTypingAnime();//印象編 8-10テキストがタイピング風に出現する関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述


// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
    
    //機能編 4-1-5 ロゴアウトラインアニメーション
    $("#splash_logo").delay(3000).fadeOut('slow');//ロゴを3秒（3000ms）待機してからフェードアウト

    stroke.play();//SVGアニメーションの実行
  
    //=====ここからローディングエリア（splashエリア）をフェードアウトした後に動かしたいJSをまとめる    
    $("#splash").delay(3000).fadeOut(800,function(){//ローディング画面を3秒（3000ms）待機してからフェードアウト
    
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与 
	
    //印象編 8-10テキストがタイピング風に出現
	var element = $(".TextTyping");
	element.each(function () {
		var text = $(this).html();
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});
	TextTypingAnime();/* アニメーション用の関数を呼ぶ*/

}); //=====ここまでローディングエリア（splashエリア）を0.8秒でフェードアウトした後に動かしたいJSをまとめる
    
});// ここまでページが読み込まれたらすぐに動かしたい場合の記述
