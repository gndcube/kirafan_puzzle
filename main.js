enchant();
enchant.ENV.USE_TOUCH_TO_START_SCENE=false;
console.clear();

var TIME=240; //タイム

var BACK="./images/bg.png";
var KIRARA="./images/1st_twicon01_kirara.png";
var LAMP="./images/1st_twicon02_lamp.png";
var POLKA="./images/1st_twicon05_polka.png";
var CORK="./images/1st_twicon06_cork.png";
var KANNA="./images/1st_twicon07_kanna.png";
var LEINE="./images/1st_twicon08_leine.png";

var ARCHIVE="./images/1st_twicon09_archive.png";
var KUROMON="./images/1st_twicon10_kuromon.png";
var SUGAR="./images/1st_twicon11_sugar.png";
var CESAME="./images/1st_twicon12_cesame.png";
var CARDAMOM="./images/1st_twicon13_cardamom.png";
var SALT="./images/1st_twicon14_salt.png";
var GINGER="./images/1st_twicon15_ginger.png";
var FENNEL="./images/1st_twicon16_fennel.png";
var HAKKA="./images/1st_twicon17_hakka.png";

var YUZUKO="./images/1st_twicon20_yuzuko.png";
var YUI_S="./images/1st_twicon21_yui_s.png";
var YORIKO="./images/1st_twicon22_yoriko.png";
var CHIYA="./images/1st_twicon36_chiya.png";
var KON="./images/1st_twicon37_kon.png";
var KOUME_C="./images/1st_twicon38_koume_c.png";
var NONO="./images/1st_twicon39_nono.png";
var HARUKA_T="./images/1st_twicon42_haruka_t.png";
var YU="./images/1st_twicon43_yu.png";
var HANA="./images/1st_twicon47_hana.png";
var KAMURI="./images/1st_twicon48_kamuri.png";
var TAMATE="./images/1st_twicon49_tamate.png";
var YUI_H="./images/1st_twicon55_yui_h.png";
var AZUSA="./images/1st_twicon56_azusa.png";

var KAREN="./images/1st_twicon27_karen.png";
var SHINOBU="./images/1st_twicon28_shinobu.png";
var TAMAKI="./images/1st_twicon32_tamaki.png";
var KAYO="./images/1st_twicon33_kayo.png";
var KAOSU="./images/1st_twicon52_kaosu.png";
var COCOA="./images/1st_twicon58_cocoa.png";
var CHINO="./images/1st_twicon59_chino.png";

var YUKI="./images/1st_twicon29_yuki.png";
var KURUMI="./images/1st_twicon30_kurumi.png";
var YURI="./images/1st_twicon31_yuri.png";
var RIN="./images/1st_twicon50_rin.png";
var MERRY="./images/1st_twicon46_merry.png";
var NARU="./images/1st_twicon51_naru.png";
var HANAKO="./images/1st_twicon53_hanako.png";
var HIBARI="./images/1st_twicon54_hibari.png";
var HARUKA_O="./images/1st_twicon57_haruka_o.png";

var YUNO="./images/1st_twicon18_yuno.png";
var MIYAKO="./images/1st_twicon19_miyako.png";
var TORU="./images/1st_twicon23_toru.png";
var RUN="./images/1st_twicon24_run.png";
var YUKO="./images/1st_twicon25_yuko.png";
var NAGI="./images/1st_twicon26_nagi.png";
var AOBA="./images/1st_twicon34_aoba.png";
var HIFUMI="./images/1st_twicon35_hifumi.png";
var YASUNA="./images/1st_twicon40_yasuna.png";
var SONYA="./images/1st_twicon41_sonya.png";
var MAIKA="./images/1st_twicon44_maika.png";
var MAFUYU="./images/1st_twicon45_mafuyu.png";
var KOHANE="./images/1st_twicon60_kohane.png";

var CLEA="./images/clea.png";

//ランダムな数値生成
var randint=function(min,max){
    return window.Math.floor(Math.random()*(max-min+1))+min;
};

window.onload=function(){
    var game=new Core(640,640);
    game.fps=20;

    game.preload(BACK);
    game.preload(KIRARA);
    game.preload(LAMP);
    game.preload(POLKA);
    game.preload(CORK);
    game.preload(KANNA);
    game.preload(LEINE);

    game.preload(ARCHIVE);
    game.preload(KUROMON);
    game.preload(SUGAR);
    game.preload(CESAME);
    game.preload(CARDAMOM);	
    game.preload(SALT);
    game.preload(GINGER);
    game.preload(FENNEL);
    game.preload(HAKKA);

    game.preload(YUZUKO);
    game.preload(YUI_S);
    game.preload(YORIKO);
    game.preload(CHIYA);
    game.preload(KON);
    game.preload(KOUME_C);
    game.preload(NONO);
    game.preload(HARUKA_T);
    game.preload(YU);
    game.preload(HANA);
    game.preload(KAMURI);
    game.preload(TAMATE);
    game.preload(YUI_H);
    game.preload(AZUSA);

    game.preload(KAREN);
    game.preload(SHINOBU);
    game.preload(TAMAKI);
    game.preload(KAYO);
    game.preload(KAOSU);
    game.preload(COCOA);
    game.preload(CHINO);

    game.preload(YUKI);
    game.preload(KURUMI);
    game.preload(YURI);
    game.preload(RIN);
    game.preload(MERRY);
    game.preload(NARU);
    game.preload(HANAKO);
    game.preload(HIBARI);
    game.preload(HARUKA_O);

    game.preload(YUNO);
    game.preload(MIYAKO);
    game.preload(TORU);
    game.preload(RUN);
    game.preload(YUKO);
    game.preload(NAGI);
    game.preload(AOBA);
    game.preload(HIFUMI);
    game.preload(YASUNA);
    game.preload(SONYA);
    game.preload(MAIKA);
    game.preload(MAFUYU);
    game.preload(KOHANE);

    game.preload(CLEA);

    game.onload=function(){
        //ルートシーン
        var scene=game.rootScene;
        scene.backgroundColor="black";  //背景色
        
        //空のエンティティクラス
        var EmptyEntity=Class.create(Entity,{
            initialize:function(X,Y,width,height){
                Entity.call(this);
                this.moveTo(X,Y);
                this.width=width;
                this.height=height;
            },
            coloring:function(color,opacity){
                this.backgroundColor=color;
                this.opacity=opacity;
            }
        });

        //ウィンドウクラス
        var Window=Class.create(Group,{
            initialize:function(X,Y,width,height){
                Group.call(this);
                this.entity=new EmptyEntity(X,Y,width,height);
                this.entity.coloring("white",1);
                this.addChild(this.entity);
                this.entity2=new EmptyEntity(X+2,Y+2,width-4,height-4);
                this.entity2.coloring("black",1);
                this.addChild(this.entity2);
            },
            coloringFront:function(color,opacity){
                this.entity2.coloring(color,opacity);
            },
            coloringBack:function(color,opacity){
            	this.entity.coloring(color,opacity);
            }
        });
        
        //ゲームラベルクラス
        var GameLabel=Class.create(Label,{
            initialize:function(text,X,Y,px,color){
                Label.call(this,text);
                this.moveTo(X,Y);
                this.font=px+"px 'ＭＳ ゴシック','Consolas','Monaco'";
                this.color=color;
            }
        });

        //ゲームスプライトクラス
        var GameSprite=Class.create(Sprite,{
            initialize:function(X,Y,width,height,image){
                Sprite.call(this,width,height);
                this.image=game.assets[image];
                this.moveTo(X,Y);
            }
        });

        //アイコン
        var Icon=Class.create(GameSprite,{
        	initialize:function(icon_image,pt_y,pt_x,height){
                GameSprite.call(this,64*pt_x,64*(pt_y-height),64,64,icon_image);
                this.pt_x=pt_x;
                this.pt_y=pt_y;
                this.tl.moveBy(0,64*height,0.1*game.fps*height);
            },
            changeImage:function(icon_image){
            	this.image=game.assets[icon_image];
            	this.tl.scaleTo(1.1,1.1,0.1*game.fps).delay(0.1*game.fps).scaleTo(1,1,0.1*game.fps);
            },
            moveDown:function(height){
            	this.tl.moveBy(0,64*height,0.1*game.fps*height);
            	this.pt_y+=height;
            },
            end:function(){
            	this.tl.scaleTo(1.5,1.5,0.15*game.fps).and().fadeTo(0.6,0.15*game.fps).then(function(){
            		this.parentNode.removeChild(this);
            	});
            },
            ontouchstart:function(){
            	this.parentNode.touchIcon(this.pt_y,this.pt_x);
            }
        });

        //フィルターボタン
        var FilterButton=Class.create(Group,{
        	initialize:function(X,Y,filter,id,number){
        		Group.call(this);
        		this.filter=filter;
        		this.id=id;
        		this.number=number;

        		this.addChild(new Window(X,Y,70,36));
        		this.label=new GameLabel((this.filter?"ON":"OFF"),X+12,Y+7,24,(this.filter?"#ff8888":"#aaddff"));
        		this.addChild(this.label);
        		this.entity=new EmptyEntity(X,Y,70,36);
        		this.entity.ontouchstart=function(){this.parentNode.change();};
        		this.addChild(this.entity);
        	},
        	change:function(){
        		if(!this.filter||this.parentNode.checkNumber(this.id)){
        			this.filter=!this.filter;
        			this.label.text=(this.filter?"ON":"OFF");
        			this.label.color=(this.filter?"#ff8888":"#aaddff");
        			this.parentNode.change(this.filter,this.id,this.number);
        		}
        	}
        });

       	//ゲーム制御クラス
        var Control=Class.create(Group,{
        	initialize:function(){
        		Group.call(this);
        		var i;

        		this.touch_flag=false; //アイコンタッチ可能
        		this.vs_bonus=false; //七賢者撃破ボーナス
        		this.kirara_bonus=false; //きららボーナス
        		this.kirara_num; //きららボーナス時に消える番号

        		//ボード
        		this.board=new Array(9);
        		for(i=0;i<9;i++){
        			this.board[i]=new Array(8);
        		}
        		this.icon=new Group();
        		this.icon.touchIcon=function(i,j){this.parentNode.touchIcon(i,j);};
        		this.addChild(this.icon);

        		//判定テーブル
        		this.table=new Array(9);
        		for(i=0;i<9;i++){
        			this.table[i]=new Array(8);
        		}

        		//ツール
        		this.tool=[POLKA,POLKA,POLKA];
        		this.tool_sprite=[];
        		for(i=2;i>=0;i--){
        			this.tool_sprite[i]=new GameSprite(528+20*i,280-12*i,64,64,this.tool[i]);
        			this.tool_sprite[i].opacity=0;
        			this.addChild(this.tool_sprite[i]);
        		}

        		//連鎖ラベル
        		this.chain_label=new GameLabel(null,440,600,24,"white");
        		this.addChild(this.chain_label);

        		//VS
        		this.vs_sprite=new GameSprite(548,140,64,64,vs_list[0]);
        		this.vs_sprite.opacity=0;
        		this.hp_label=new GameLabel(null,580,113,24,"white");
        		this.addChild(this.hp_label);
        		this.addChild(this.vs_sprite);

        		//スコアラベル
        		this.score_label=new GameLabel(null,120,600,24,"white");
        		this.addChild(this.score_label);

        		//タイムラベル
        		this.time_label=new GameLabel(null,560,60,24,"white");
        		this.addChild(this.time_label);

        		//フィルターON総数
        		this.filter_num=new Array(4);
        		for(i=0;i<4;i++){this.filter_num[i]=chara_list[i].length;}

        		this.showOP();
        	},
        	showOP:function(){ //スタート画面
        		this.op_group=new Group();
        		this.addChild(this.op_group);

        		this.op_group.addChild(new Window(156,155,200,70));
        		this.op_group.addChild(new GameLabel("START",156+45,155+18,36,"white"));
        		this.start_entity=new EmptyEntity(156,155,200,70);
        		this.start_entity.ontouchstart=function(){this.parentNode.parentNode.closeOP();};
        		this.op_group.addChild(this.start_entity);

        		this.op_group.addChild(new Window(156,355,200,70));
        		this.op_group.addChild(new GameLabel("SETTING",156+21,355+18,36,"white"));
        		this.setting_entity=new EmptyEntity(156,355,200,70);
        		this.setting_entity.ontouchstart=function(){this.parentNode.parentNode.showSetting();};
        		this.op_group.addChild(this.setting_entity);
        	},
        	closeOP:function(){ //スタート画面閉じる
        		var i;

        		this.removeChild(this.op_group);

        		for(i=0;i<3;i++){
        			this.tool_sprite[i].opacity=1;
        		}
        		this.vs_sprite.opacity=1;

        		this.ready();
        	},
        	showSetting:function(){ //設定画面
        		var i,l;

        		this.setting_group=new Group();
        		this.addChild(this.setting_group);

        		this.setting_bg=new EmptyEntity(0,0,640,640);
        		this.setting_bg.coloring("black",0.7);
        		this.setting_group.addChild(this.setting_bg);
				this.setting_group.addChild(new GameLabel("FILTER",250,13,36,"white"));

				//タイトルラベル
				for(i=0,l=chara_list[0].length;i<l;i++){
					this.setting_group.addChild(new GameLabel(chara_list[0][i].name,5,80+45*i,24,"white"));
				}
				for(i=0,l=chara_list[1].length;i<l;i++){
					this.setting_group.addChild(new GameLabel(chara_list[1][i].name,325,80+45*i,24,"white"));
				}
				for(i=0,l=chara_list[2].length;i<l;i++){
					this.setting_group.addChild(new GameLabel(chara_list[2][i].name,5,340+45*i,24,"white"));
				}
				for(i=0,l=chara_list[3].length;i<l;i++){
					this.setting_group.addChild(new GameLabel(chara_list[3][i].name,325,340+45*i,24,"white"));
				}

				//戻るボタン
				this.setting_entity=new EmptyEntity(0,0,640,640);
        		this.setting_entity.ontouchstart=function(){this.parentNode.parentNode.removeChild(this.parentNode);};
        		this.setting_group.addChild(this.setting_entity);

        		//ON-OFFボタン
				this.button_entity=new EmptyEntity(210,62,90,240);
				this.button_entity.coloring("gray",0.6);
				this.setting_group.addChild(this.button_entity);
				this.button_entity2=new EmptyEntity(530,62,90,196);
				this.button_entity2.coloring("gray",0.6);
				this.setting_group.addChild(this.button_entity2);
				this.button_entity3=new EmptyEntity(210,322,90,285);
				this.button_entity3.coloring("gray",0.6);
				this.setting_group.addChild(this.button_entity3);
				this.button_entity4=new EmptyEntity(530,322,90,285);
				this.button_entity4.coloring("gray",0.6);
				this.setting_group.addChild(this.button_entity4);
				for(i=0,l=chara_list[0].length;i<l;i++){
					this.setting_group.addChild(new FilterButton(220,74+45*i,chara_list[0][i].filter,0,i));
				}
				for(i=0,l=chara_list[1].length;i<l;i++){
					this.setting_group.addChild(new FilterButton(540,74+45*i,chara_list[1][i].filter,1,i));
				}
				for(i=0,l=chara_list[2].length;i<l;i++){
					this.setting_group.addChild(new FilterButton(220,334+45*i,chara_list[2][i].filter,2,i));
				}
				for(i=0,l=chara_list[3].length;i<l;i++){
					this.setting_group.addChild(new FilterButton(540,334+45*i,chara_list[3][i].filter,3,i));
				}
				this.setting_group.checkNumber=function(id){return this.parentNode.checkFilter(id);};
				this.setting_group.change=function(filter,id,number){this.parentNode.changeFilter(filter,id,number);};
        	},
        	checkFilter:function(id){
        		return this.filter_num[id]>1;
        	},
        	changeFilter:function(filter,id,num){
        		chara_list[id][num].filter=filter;
        		this.filter_num[id]+=(filter?1:-1);
        	},
        	ready:function(){
        		var i,j,k,l,m;

        		//ボードの初期化
        		for(i=0;i<9;i++){
        			for(j=0;j<8;j++){
        				this.board[i][j]=0;
        			}
        		}

        		//ツール更新
        		for(i=0;i<3;i++){
        			this.updateTool();
        		}

        		//連鎖
        		this.chain_num=0;
        		this.chain_label.text=this.chain_num;

        		//VS
        		this.vs=0;
        		this.vs_hp=this.getHp();
        		this.hp_label.text=this.vs_hp;
        		this.vs_sprite.image=game.assets[vs_list[this.vs]];

        		//スコア
        		this.score=0;
        		this.score_label.text=this.score;

        		//タイム
        		this.time=TIME*game.fps;
        		this.time_label.text=Math.floor(this.time/game.fps);

        		//フィルター
        		this.icon_list=new Array(4);
        		for(i=0;i<4;i++){
        			this.icon_list[i]=[];
        			for(j=0,l=chara_list[i].length;j<l;j++){
        				if(chara_list[i][j].filter){
        					for(k=0,m=chara_list[i][j].member.length;k<m;k++){
        						this.icon_list[i].push(chara_list[i][j].member[k]);
        					}
        				}
        			}
        		}

        		this.drop_list=[9,9,9,9,9,9,9,9]; //ドロップ必要数
        		this.drop(); //ドロップ
        	},
        	getHp:function(){ //七賢者のHPを返す
        		return 20+3*this.vs;
        	},
        	updateTool:function(){ //ツールの更新
        		var i=randint(0,99),num;
        		var list=[KIRARA,LAMP,POLKA,CORK,KANNA,LEINE];

        		if(this.chain_num>30){
        			if(i<25){num=0;} //きらら(25%)
        			else if(i<75){num=1;} //ランプ(50%)
        			else{num=randint(2,5);} //その他(各6.25%)
        		}
        		else if(this.chain_num>10){
        			if(i<10){num=0;} //きらら(10%)
        			else if(i<40){num=1;} //ランプ(30%)
        			else{num=randint(2,5);} //その他(各15%)
        		}
        		else{
        			if(i<3){num=1;} //きらら(3%)
        			else if(i<10){num=2;} //ランプ(7%)
        			else{num=randint(2,5);} //その他(各22.5%)
        		}

        		this.tool[0]=this.tool[1];
        		this.tool[1]=this.tool[2];
        		this.tool[2]=list[num]; //追加
        		this.tool_sprite[0].image=game.assets[this.tool[0]];
        		this.tool_sprite[1].image=game.assets[this.tool[1]];
        		this.tool_sprite[2].image=game.assets[this.tool[2]];
        	},
        	decideIcon:function(){
        		var num;
        		var i=randint((this.kirara_bonus?50:0),99);

        		if(this.vs_bonus||i<90){
        			num=randint(1,4);
        			if(this.kirara_bonus&&this.kirara_num<=4){
        				while(this.kirara_num==num){num=randint(1,4);} //きららボーナス時タッチした種類を出さない
        			}
        		}
        		else{num=6;} //七賢者(10%(きららボーナス時は20%))

        		return num;
        	},
        	decideIconImage:function(num){
        		var icon_image;
        		if(num<=4){icon_image=this.icon_list[num-1][randint(0,this.icon_list[num-1].length-1)];}
        		else if(num==6){icon_image=((randint(0,1)==1)?vs_list[this.vs]:KUROMON);}
        		return icon_image;
        	},
        	drop:function(){
        		var max=0;
        		for(var i=0;i<8;i++){
        			var l=this.drop_list[i];
        			if(l>max){max=l;}
        			for(var j=l-1;j>=0;j--){
        				this.board[j][i]=this.decideIcon();
        				this.icon.addChild(new Icon(this.decideIconImage(this.board[j][i]),j,i,l));
					}
        		}
        		this.tl.delay((0.1*max+0.1)*game.fps).then(function(){
        			this.erase();
        		});
        	},
        	checkComplete:function(i,j,num){ //同じ種類が3つ以上揃ったかどうか判定
        		num++;
        		this.array.push([i,j]);
        		this.table[i][j]=1; //調査済みにする
        		if(i!==0&&this.table[i-1][j]===0&&this.board[i][j]==this.board[i-1][j]){num=this.checkComplete(i-1,j,num);} //上
        		if(i!==8&&this.table[i+1][j]===0&&this.board[i][j]==this.board[i+1][j]){num=this.checkComplete(i+1,j,num);} //下
        		if(j!==0&&this.table[i][j-1]===0&&this.board[i][j]==this.board[i][j-1]){num=this.checkComplete(i,j-1,num);} //左
        		if(j!==7&&this.table[i][j+1]===0&&this.board[i][j]==this.board[i][j+1]){num=this.checkComplete(i,j+1,num);} //右
        		return num;
        	},
        	addScore:function(score){
        		this.score+=score;
        		this.score_label.text=this.score;
        	},
        	erase:function(){
        		var i,j,l,num,flag=false;

        		//判定テーブル初期化
        		for(i=0;i<9;i++){
        			for(j=0;j<8;j++){
        				this.table[i][j]=0;
        			}
        		}

        		//揃ったか判定
        		for(i=0;i<9;i++){
        			for(j=0;j<8;j++){
        				if(this.board[i][j]===0){continue;} //既に消されているならスキップ
        				this.array=[];
        				num=this.checkComplete(i,j,0); //同じ種類が3つ以上揃ったかどうか判定
						if(num>=3||this.board[i][j]==5){ //3つ以上かきらら達
							for(var k=0,l=this.array.length;k<l;k++){
								if(this.board[this.array[k][0]][this.array[k][1]]==6){ //七賢者
									this.vs_hp--;
								}
								this.board[this.array[k][0]][this.array[k][1]]=0;
								this.addScore(this.chain_num); //スコア追加
							}
							flag=true;
						}
        			}
        		}

        		//七賢者のHP
        		if(this.vs_hp<=0){
        			//残りの七賢者を消す
        			for(i=0;i<9;i++){
        				for(j=0;j<8;j++){
        					if(this.board[i][j]==6){this.board[i][j]=0;}
        				}
        			}

        			this.addScore(1000+1000*this.vs); //スコア追加
        			this.vs_bonus=true; //ボーナスステージ

        			//次の七賢者へ
        			this.vs=(this.vs+1)%8;
        			this.vs_hp=this.getHp();
       				this.vs_sprite.image=game.assets[vs_list[this.vs]];
       			}
       			this.hp_label.text=this.vs_hp;

        		//消す
        		if(flag){
        			for(i=0,l=this.icon.childNodes.length;i<l;i++){
        				if(this.board[this.icon.childNodes[i].pt_y][this.icon.childNodes[i].pt_x]===0){
        					this.icon.childNodes[i].end();
        				}
        			}

        			this.chain_num++; //連鎖数増加
        			this.chain_label.text=this.chain_num;
        			if(this.vs_bonus&&this.chain_num>=10+this.vs*2&&this.vs>0){this.vs_bonus=false;} //VSボーナス終了
        			if(this.chain_num==10){this.kirara_bonus=false;} //きららボーナス終了

        			this.tl.delay(0.1*game.fps).then(function(){
        				this.moveIcon();
        			});
        		}
        		else{
        			this.vs_bonus=false; //七賢者ボーナス終了
        			this.kirara_bonus=false; //きららボーナス終了
        			if(this.time<=0){this.end();}
        			else{this.touch_flag=true;}
        		}
        	},
        	moveIcon:function(){
        		var i,j,k,l,m;

        		//どの位移動するか
        		this.drop_list=[0,0,0,0,0,0,0,0];
        		var drop_array=[];
        		for(i=8;i>=0;i--){
        			for(j=0;j<8;j++){
        				if(this.board[i][j]===0){this.drop_list[j]++;} //消えたものカウント
        				else{
        					for(k=i+1;k<9;k++){
    							if(this.board[k][j]!==0){break;}
        					}
        					if(k!=i+1){
        						this.board[k-1][j]=this.board[i][j];
        						this.board[i][j]=0;
        						drop_array.push([i,j,k-1-i]);
        					}
        				}
        			}
        		}

        		//移動
        		for(i=0,l=this.icon.childNodes.length;i<l;i++){
        			for(j=0,m=drop_array.length;j<m;j++){
        				if(this.icon.childNodes[i].pt_y==drop_array[j][0]&&this.icon.childNodes[i].pt_x==drop_array[j][1]){
        					this.icon.childNodes[i].moveDown(drop_array[j][2]);
        					drop_array.splice(j,1);
        					break;
        				}
        			}
        		}

        		this.drop(); //ドロップ
        	},
        	touchIcon:function(pt_y,pt_x){
        		if(!this.touch_flag){return;}
        		else{this.touch_flag=false;}

        		var change_array=[],icon_image;
        		var i,j,l,m;

        		//きらら
        		if(this.tool[0]==KIRARA){
        			icon_image=KIRARA;
        			this.kirara_num=this.board[pt_y][pt_x];
        			for(i=0;i<9;i++){
        				for(j=0;j<8;j++){
        					if(this.board[i][j]==this.kirara_num){
        						this.board[i][j]=5;
        						change_array.push([i,j]);
        					}
        				}
        			}
        			this.kirara_bonus=true;
        		}

        		//ランプ
        		if(this.tool[0]==LAMP){
        			icon_image=LAMP;
        			num=this.board[pt_y][pt_x];
        			for(i=0;i<9;i++){
        				for(j=0;j<8;j++){
        					if(this.board[i][j]==num){
        						this.board[i][j]=5;
        						change_array.push([i,j]);
        					}
        				}
        			}
        		}

        		//ポルカ
        		else if(this.tool[0]==POLKA){
        			icon_image=POLKA;
        			for(i=pt_y-1;i<=pt_y+1;i++){
        				if(i<0||i>8){continue;}
        				for(j=pt_x-1;j<=pt_x+1;j++){
        					if(j<0||j>7){continue;}
        					this.board[i][j]=5;
        					change_array.push([i,j]);
        				}
        			}
        		}

        		//コルク
        		else if(this.tool[0]==CORK){
        			icon_image=CORK;
        			for(i=pt_y-2;i<=pt_y+2;i++){
        				if(i<0||i>8){continue;}
        				if(i==pt_y){
        					for(j=pt_x-2;j<=pt_x+2;j++){
        						if(j<0||j>7){continue;}
        						this.board[i][j]=5;
        						change_array.push([i,j]);
        					}
        				}
        				else{
        					this.board[i][pt_x]=5;
        					change_array.push([i,pt_x]);
        				}
        			}
        		}

        		//カンナ
        		if(this.tool[0]==KANNA){
        			icon_image=KANNA;
        			for(i=0;i<9;i++){
        				if(i==pt_y){
        					for(j=pt_x-1;j<=pt_x+1;j++){
        						if(j<0||j>7){continue;}
        						this.board[i][j]=5;
        						change_array.push([i,j]);
        					}
        				}
        				else{
        					this.board[i][pt_x]=5;
        					change_array.push([i,pt_x]);
        				}
        			}
        		}

        		//ライネ
        		if(this.tool[0]==LEINE){
        			icon_image=LEINE;
        			for(j=0;j<8;j++){
        				this.board[pt_y][j]=5;
        				change_array.push([pt_y,j]);
        			}
        		}

        		//変更
        		for(i=0,l=this.icon.childNodes.length;i<l;i++){
        			for(j=0,m=change_array.length;j<m;j++){
        				if(this.icon.childNodes[i].pt_y==change_array[j][0]&&this.icon.childNodes[i].pt_x==change_array[j][1]){
        					this.icon.childNodes[i].changeImage(icon_image);
        					change_array.splice(j,1);
        					break;
        				}
        			}
        		}

        		this.updateTool(); //ツール更新

        		this.chain_num=0; //連鎖リセット
        		this.chain_label.text=this.chain_num;
        		this.tl.delay(0.5*game.fps).then(function(){this.erase();});
        	},
        	end:function(){
        		this.touch_flag=false;

        		this.end_group=new Group();
        		this.addChild(this.end_group);

        		this.end_group.addChild(new Window(520,520,110,50));
        		this.end_group.addChild(new GameLabel("RESTART",520+4,520+15,24,"white"));
        		this.restart_entity=new EmptyEntity(520,520,110,50);
        		this.restart_entity.ontouchstart=function(){this.parentNode.parentNode.closeEnd();};
        		this.end_group.addChild(this.restart_entity);

        		this.end_group.addChild(new Window(520,580,110,50));
        		this.end_group.addChild(new GameLabel("SETTING",520+4,580+15,24,"white"));
        		this.setting_entity=new EmptyEntity(520,580,110,50);
        		this.setting_entity.ontouchstart=function(){this.parentNode.parentNode.showSetting();};
				this.end_group.addChild(this.setting_entity);
        	},
        	closeEnd:function(){
        		this.removeChild(this.end_group);
        		while(this.icon.childNodes.length>0){this.icon.removeChild(this.icon.childNodes[0]);}

        		this.ready();
        	},
        	onenterframe:function(){
        		if(this.time>0){
        			this.time--;
        			this.time_label.text=Math.floor(this.time/game.fps);
        		}

        		if(this.touch_flag&&this.time<=0){
        			this.end();
        		}
        	}
        });

        //キャラ一覧
        var chara_list=[[
        		//きらら＆ミラク
        		{name:"ゆゆ式",filter:true,member:[YUZUKO,YUI_S,YORIKO]},
        		{name:"うらら迷路帖",filter:true,member:[CHIYA,KON,KOUME_C,NONO]},
        		{name:"桜Trick",filter:true,member:[HARUKA_T,YU]},
        		{name:"スロウスタート",filter:true,member:[HANA,KAMURI,TAMATE]},
        		{name:"けいおん！",filter:true,member:[YUI_H,AZUSA]}],[
        		//MAX
        		{name:"きんいろモザイク",filter:true,member:[KAREN,SHINOBU]},
        		{name:"ステラのまほう",filter:true,member:[TAMAKI,KAYO]},
        		{name:"こみっくがーるず",filter:true,member:[KAOSU]},
        		{name:"ごちうさ",filter:true,member:[COCOA,CHINO]}],[
        		//フォワード
        		{name:"がっこうぐらし！",filter:true,member:[YUKI,KURUMI,YURI]},
        		{name:"ゆるキャン△",filter:true,member:[RIN]},
        		{name:"夢喰いメリー",filter:true,member:[MERRY]},
        		{name:"ハナヤマタ",filter:true,member:[NARU]},
        		{name:"あんハピ♪",filter:true,member:[HANAKO,HIBARI]},
        		{name:"はるかなレシーブ",filter:true,member:[HARUKA_O]}],[
        		//キャラット
        		{name:"ひだまりスケッチ",filter:true,member:[YUNO,MIYAKO]},
        		{name:"Aチャンネル",filter:true,member:[TORU,RUN,YUKO,NAGI]},
        		{name:"NEW GAME!",filter:true,member:[AOBA,HIFUMI]},
        		{name:"キルミーベイベー",filter:true,member:[YASUNA,SONYA]},
        		{name:"ブレンド・S",filter:true,member:[MAIKA,MAFUYU]},
        		{name:"アニマエール!",filter:true,member:[KOHANE]}]
        ];
        var vs_list=[SUGAR,CESAME,CARDAMOM,SALT,GINGER,FENNEL,HAKKA,ARCHIVE];

        //背景
        var back=new GameSprite(0,0,640,640,BACK);
        scene.addChild(back);
        var clea=new GameSprite(640-140,640-280,167,300,CLEA); //クレア
        scene.addChild(clea);

        //エンティティ
        var entity=new EmptyEntity(0,0,64*8,64*9); //アイコン
        entity.coloring("black",0.5);
        scene.addChild(entity);
        var entity2=new EmptyEntity(522,220,115,130); //NEXT
        entity2.coloring("black",0.5);
        scene.addChild(entity2);
        scene.addChild(new GameLabel("NEXT",528,223,24,"white")) //NEXTラベル
        var entity3=new EmptyEntity(350,590,150,40); //連鎖
        entity3.coloring("black",0.5);
        scene.addChild(entity3);
        scene.addChild(new GameLabel("CHAIN:",352,600,24,"white")) //CHAINラベル
        var entity4=new EmptyEntity(522,110,115,100); //VS
        entity4.coloring("black",0.5);
        scene.addChild(entity4);
        scene.addChild(new GameLabel("VS",528,113,24,"white")) //VSラベル
        var entity5=new EmptyEntity(30,590,290,40); //SCORE
        entity5.coloring("black",0.5);
        scene.addChild(entity5);
        scene.addChild(new GameLabel("SCORE:",32,600,24,"white")) //SCOREラベル
        var entity6=new EmptyEntity(522,20,115,80); //TIME
        entity6.coloring("black",0.5);
        scene.addChild(entity6);
        scene.addChild(new GameLabel("TIME",528,23,24,"white")) //TIMEラベル

        //制御クラス
        scene.addChild(new Control());
    };
    game.start();
};
