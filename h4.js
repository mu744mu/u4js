<script>
           var updateTypingT = false;
            var animateCSST = false;
            var loginT = false;
            var loginOlT = false;
            var ritT = false;
            
            animateCSST = true;
            
            updateTypingT = true;
            var typing = false;
            var lastTypingTime;
            const updateTyping = function(id)  {
                if (!typing) {
                    typing = true;
                    socket.emit('typing',id);
                }
                lastTypingTime = (new Date()).getTime();
                setTimeout(function() {
                    var typingTimer = (new Date()).getTime();
                    var timeDiff = typingTimer - lastTypingTime;
                    if (timeDiff >= 1000 && typing) {
                        socket.emit('stopTyping',id);
                        typing = false;
                    }
                }, 1000);
            }
            
            
var Walltop = [];
function checkTopWall() {
    var leng;
    Walltop = Walltop.sort((a,b) => b.top - a.top);
    leng = 3;
        $(".topWall3 div").addClass("toptop").css("backgroundImage","").find("span").text("")
    $(".topWall10").html("")
    Walltop.forEach(function(i,x){
        if(x<3){
            var it = $(".topWall3 .top"+(x+1));
            it.removeClass("toptop")
            it.css("backgroundImage","url("+i.pic+")")
            console.log(it.css("backgroundImage"),i.pic)
            it.find("span").text(i.topic)
        } else {
            
            var it = $(`<div class="fl top" >
                            <span class="corner fl dots">`+(x+1)+`</span>
                            <img style="background-image: url('`+i.pic+`');" class="fitimg fl u-pic">
                            <div class="fl">
                                <span class="corner dots topic"></span>
                                <div class="fr">
                                    <span title="اجمالي عدد منشوراتك" class="fr fa fa-pencil-square-o">`+i.pc+`</span>
                                    <span title="اجمالي عدد التعليقات التي حصلت عليها منشوراتك" class="fr fa fa-commenting-o" style="margin: -6px 4px 0;width: 33%;">`+i.com+`</span>
                                    <span title="اجمالي عدد الايكات التي حصلت عليها منشوراتك" class="fr fa fa-thumbs-up">`+i.like+`</span>
                                </div>
                            </div>
                        </div>`).appendTo(".topWall10");
            it.find(".topic").text(i.topic)
            leng += 1;
        }
    })
    for (var i = 0;i<(10-leng);i++){
        var ht = `<div class="fl top toptop" >
                    <span class="corner fl dots">`+(i+(leng+1))+`</span>
                    <img style="" class="fitimg fl u-pic">
                    <div class="fl">
                        <span class="corner dots topic"></span>
                        <div class="fr">
                            <span class="fr fa fa-pencil-square-o"></span>
                            <span class="fr fa fa-commenting-o" style="margin: -6px 4px 0;width: 33%;"></span>
                            <span class="fr fa fa-thumbs-up"></span>
                        </div>
                    </div>
                </div>`     
        $(ht).appendTo(".topWall10");
    }
    $('.dpnl').show();
}
        </script>
        <style>
            .ustop .u-pic {
                width: 45px!important;
                height: 45px!important;
            }
            .ustop .ustat {
                height: 45px!important;
            }
            .wisam::-webkit-scrollbar {
                height: 4px;
            }
            .wisam::-webkit-scrollbar-thumb {
              background: #f3a219; 
            }
            .wisam::-webkit-scrollbar-thumb:hover {
              background: #b97503; 
            }
            .top1 .label-primary, .top1 .btn-primary {
                background-color: #f3a219!important;
            }
            .top2 .label-primary, .top2 .btn-primary {
                background-color: #959696!important;
            }
            .top3 .label-primary, .top3 .btn-primary {
                background-color: #d68352!important;
            }
            .top1 .primaryborder ,.top1 .borderg,.top1 hr{
                border-color: #f3a219!important;
            }            
            .top2 .primaryborder ,.top2 .borderg,.top2 hr{
                border-color: #959696!important;
            }            
            .top3 .primaryborder ,.top3 .borderg,.top3 hr{
                border-color: #d68352!important;
            }            
            .mony {
                width: max-content;
                border-radius: 0 3px 3px 0;
                margin: 2px 0;
                background-image: url(https://khlej.net/upload/file_1645510340_gkYOrbTo29J73Ui.png);
                height: 25px;
                background-position: 3%;
                text-align: left;
                color: #e64d21;
                font-size: 20px !important;
                line-height: 25px;
                padding: 0 5px 0 25px;
                font-family: monospace,serif;
                border: 1px solid;
            }
            
            .loginDiv{
                float: right;
                width: 99%;
                margin-right: -200%;
                margin-top: 20px;
                background-color: #f93634;
                -webkit-animation: daa 7s 1 linear;
                -moz-animation: daa 7s 1 linear;
                -o-animation: daa 7s 1 linear;
                animation: daa 7s 1 linear; 
                -webkit-animation-fill-mode: forwards; 
                -moz-animation-fill-mode: forwards; 
                -o-animation-fill-mode: forwards; 
                animation-fill-mode: forwards;
                -webkit-animation-delay: 1s;
                -moz-animation-delay: 1s;
                -o-animation-delay: 1s;
                animation-delay: 1s;
                border: 2px solid #af020b;
                border-radius: 25px 0 0 25px;
                background-image: url(https://khlej.net/upload/file_1645510652_wyDkqdeJENofhg3.png);
                background-repeat: no-repeat;
                background-size: contain;
            }
            .loginItms{
                position: absolute;
                overflow: hidden;
                right: 2px;
                top: 30px;
                width: 250px;
            }
            .loginImg{
                float: right;
                width: 36px;
                height: 36px;
                border: 1px solid #ed5555;
                margin: 1px;
                background-size: contain;
                background-repeat: no-repeat;
                border-radius: 10px;
            }
            .loginLogo{
                float: right;
                margin: 1px;
                margin-top: -20px
            }
            .loginIco{
                float: right;
                margin: 0px 1px 1px;
                max-height: 18px;
                background-color: white;
                padding: 1px;
                border-radius: 2px;
            }
            .loginFlog{
                float: left;
                margin: 2px 0 5px 5px;
                max-height: 15px;
            }
            .loginUserName{
                font-variant: petite-caps;
                font-size: 16px!important;
                float: right;
                max-width: 170px;
                min-width: 100px;
                text-align: right;
                text-shadow: -1px 1px 2px #fff;
                color: #842c2a;
                white-space: nowrap;
                overflow: hidden!important;
                text-overflow: ellipsis;
            }
            @keyframes daa{
                0%{margin-right: -100%;}
                5%{margin-right: 0%;}
                20%,40%,60%,80%,95%{border-color: #b9941c;margin-right: 0%;}
                30%,50%,70%,90%{border-color: #af020b;margin-right: 0%;}
                100%{border-color: #af020b;margin-right: -100%;}
            }		
            @-webkit-keyframes daa{
                0%{margin-right: -100%;}
                5%{margin-right: 0%;}
                20%,40%,60%,80%,95%{border-color: #b9941c;margin-right: 0%;}
                30%,50%,70%,90%{border-color: #af020b;margin-right: 0%;}
                100%{border-color: #af020b;margin-right: -100%;}
            }
            @-moz-keyframes daa{
                0%{margin-right: -100%;}
                5%{margin-right: 0%;}
                20%,40%,60%,80%,95%{border-color: #b9941c;margin-right: 0%;}
                30%,50%,70%,90%{border-color: #af020b;margin-right: 0%;}
                100%{border-color: #af020b;margin-right: -100%;}
            }
            @-o-keyframes daa{
                0%{margin-right: -100%;}
                5%{margin-right: 0%;}
                20%,40%,60%,80%,95%{border-color: #b9941c;margin-right: 0%;}
                30%,50%,70%,90%{border-color: #af020b;margin-right: 0%;}
                100%{border-color: #af020b;margin-right: -100%;}
            }






            





            

        </style>




        <style>
            * {
                font-family: serif;
                font-weight: bold;
                text-shadow: none!important;
                font-size: 15px !important;
            }
            .ae {
                border: 1px solid black;
                border-radius: 2px;
                margin: 1px;
                float: left; 
                padding: 6px 2px;
            }
            .pmsgc {
                background-color: rgba(0, 77, 255, 0.08)!important;
            }
            .hmsg {
                background-color: linen!important;
            
            }
            .rating-box {
                color: #a2a2a2;
                text-shadow: 0px 1px 10px black;
                margin: -19px auto 2px auto;
                height: 20px;
            }
            .rating-star {
                font-size: 20px !important;
                width: 15px;
                height: 20px;
                padding: 0 2px;
                position: relative;
                display: block;
                float: left;
            }
            .full-star:before {
                color: #f2b01e;
                content: "\2605";
                position: absolute;
                left: 0;
                overflow: hidden;
            }
            .empty-star:before {
                content: "\2605";
                position: absolute;
                left: 0;
                overflow: hidden;
            }
            .half-star:before {
                color: #f2b01e;
                content: "\2605";
                width: 60%;
                position: absolute;
                left: 0;
                overflow: hidden;
            }
            .half-star:after {
                content: '\2605';
                position: absolute;
                left: 9px;
                width: 75%;
                text-indent: -0.7rem;
                overflow: hidden;
            }
            .sco .form{
                width: 100%;
                position: relative;
                height: 40px;
                background: blue;
                overflow: hidden;
                margin: 5px 0;
            }
            .sco .form input{
                width: 100%;
                height: 100%;
                color: #595f6e;
                padding-top: 10px;
                border: none;
                outline: none;
            }
            .sco .form label{
                position: absolute;
                bottom: 0px;
                right: 0%;
                width: 100%;
                /*		height: 100%;*/
                color: #616161;
                pointer-events: none;
                border-bottom: 2px solid #eee;
            }
            .sco .form label::after{
                content: "";
                position: absolute;
                bottom: -1px;
                right: 0px;
                width: 100%;
                /*		height: 100%;*/
                pointer-events: none;
                border-bottom: 2px solid #616161;
                transform: translateX(100%);
                transition:transform 0.5s ease;
            }
            .sco .content-name{
                position: absolute;
                bottom: 5px;
                right: 0px;
                transition: all 0.5s ease;
            }
            .sco .form input:focus + .label-name .content-name,
            .sco .form input:valid + .label-name .content-name{
                transform: translateY(-140%);
                font-size: 12px;
                color: #5fa8d3
            }
            .sco .form input:focus + .label-name::after,
            .sco .form input:valid + .label-name::after{
                transform: translateY(0%);
            }
            #topWall div span:before {
                float: left;
                font-weight: 100!important;
            }
            .topWall3 {
                margin-top: 5px;
                width: 100%;
                height: 150px;
                background: url(https://khlej.net/upload/file_1645510197_yIfCTRWgn0J12DB.png) white;
                background-size: 100% auto;
                background-repeat: no-repeat;
                background-position: bottom;
            }
            .topWall3>div{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: 2px solid;
                background-size: contain;
            }
            .topWall3>div>span{
                margin-top: 62px;
                padding: 0px 1px;
                text-align: center;
                margin-left: -10%;
                min-width: 120%;
                border-radius: 3px;
                text-overflow: clip;
                border-right: none!important;
                border-left: none!important;
                border-top: none!important;
                font-size: 13px !important;
            }
            .topWall3 .toptop {
                background-color: rgba(0, 0, 0, 0.1);
            }
            .topWall3 .toptop span.corner.dots {
                background-color: rgba(0, 0, 0, 0.1);
                height: 20px;
                border-radius: 0;
                border: none;
            }


            .topWall10 {
                width: 100%;
                height: 75%;
                margin-top: 5px;
                border-top: 2px solid;
            }
            .topWall10>div.top {
                width: 99%;
                margin: 0px 1px -1px 2px!important;
                padding: 1px;
                border-bottom: 2px solid;
            }
            .topWall10>div.top>span.dots {
                padding: 0px;
                width: 18px;
                text-align: center;
                margin: 15px 2px 0px;
                border-top: 1px solid;
                border-bottom: 1px solid;
                border-radius: 1px;
            }
            .topWall10>div.top>img {
                margin-bottom: 4px;
                border-radius: 50%;
                border: 1px solid;
                width: 45px;
                height: 45px;
                margin-left: 1px;
                margin-top: 2px;
                background-color: white;
            }
            .topWall10>div.top>div {
                width: 70%;
                margin-top: 6px;
            }
            .topWall10>div.top>div>span.dots {
                padding: 0px 2px;
            }
            .topWall10>div.top>div>div {
                width: 100%;
            }
            .topWall10>div.top>div>div>span {
                margin-top: -6px;
                padding: 1px 4px;
                width: 31%;
                text-align: center;
                border-bottom: 1px solid;
            }


            .topWall10>div.toptop>div>span.dots {
                background-color: rgba(0, 0, 0, 0.1);
                border-radius: 0;
                width: 100%;
                margin-left: 4px;
                height: 20px;
            }
            .topWall10>div.toptop>img {
                background-color: rgba(0, 0, 0, 0.1);
                border: none;
            }
            .topWall10>div.toptop>div>div>span {
                background-color: rgba(0, 0, 0, 0.1);
                color: rgb(229 229 229);
                margin-top: -3px!important;
            }
            .topWall10>div.toptop>span.dots {
                background-color: rgba(0, 0, 0, 0.1);
                color: #ffffff;
                text-shadow: -2px 1px 2px black!important;
                border-color: #9b9b9b;
            }
            .topWall10>div.toptop>div>div {
                width: 96%;
                margin-left: 6px;
            }

            
        </style>
        <style>
            .divColorLo{
                display: none;
                width: 100%;
                background-color: white;
                margin: auto auto;
                position: absolute;
                right: 0;
                left: 0;
                top: 0;
                z-index: 999;
                padding: 2px 0;
                border-bottom: 1px solid #d0d0d0;
            }
            .dots2{
                padding: 9px!important;
                width: 20px;
                height: 20px;
                border-radius: 5px;
                border: 1px solid #d0d0d0;
            }
            .inpDiv{
                float: right;
                width: 25%;
                padding: 0;
                margin: 0;
                text-align: center;
            }
            .broadcasters {
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                margin-left: 2px;
                color: #ffffff;
                border: 1px solid#f9f9f9!important;
                border-radius: 0px;
                background-color: #4c6a8c!important;
                background-image: url(https://i.imgur.com/eqGvZEC.gif)!important;
                font-family: 'Almarai', sans-serif;
            }
            .broadcasters>div {
                width: 100%;
                max-width: 260px;
                margin: 1px;
                float: left;
            }
            .broadcasters>div>.prod {
                float: left;
                width: 45px;
                height: 45px;
                border: 2px solid #989594;
                margin: 0 1px;
                text-align: center;
                border-radius: 50%;
                color: #000;
                background-color: white;
                background-image: url(https://k.top4top.io/p_1871wwqvi1.gif);
            }
            .broadcasters>div>.muted:after {
                position: absolute;
                top: 50%;
                height: 2px;
                background: #000;
                content: "";
                width: inherit;
                display: block;
                transform: rotate(135deg);
            }
            .broadcasters>.mutAll {
                background: #fff;
                width: 37px;
                height: 37px;
                border-radius: 50%;
                padding: 0.2rem;
                display: inline-block;
                float: right;
                margin-right: 0.2rem;
                margin-top: 0.2rem;
                border: 1px solid;
                box-shadow: 0 0 5px 0 #5d5d5d;
                cursor: pointer;
                background-size: contain;
                background-image: url(https://ita7a.com/sico/1645506548279.png);
            }
            .broadcasters>.mutAll.muted {
                background-image: url(https://ita7a.com/sico/1645506738242.png);
            }
            .broadcasters>div>.prod>.fa-microphone {
                font-size: 22px !important;
                text-align: center;
                margin-top: 2px;
                font-weight: 100!important;
            }
            .broadcasters>div>.prod>.number{
                display: block;
            }
            .broadcasters>div>.prod>hr{
                display: none!important;
                margin: -2px 0 0;
                border-top-color: #d9534f;
            }
            .broadcasters .evant>i{
                font-style: normal;
                color: #ffffff;
                width: 100%;
                float: left;
                text-align: center;
                margin-top: 2px;
                background-color: #ffffffc7;
                padding: 0px 8px;
                border: 1px solid;
            }
            span.usid.fr {
                line-height: 9px;
                margin: 0!important;
            }
            .fitimg {
                background-size: cover!important;
            }
        </style>
    </head>
var _0xd93b=["\x6C\x65\x6E\x67\x74\x68","\x2E\x62\x72\x6F\x61\x64\x63\x61\x73\x74\x65\x72\x73\x20\x64\x69\x76\x20\x73\x70\x61\x6E\x5B\x64\x61\x74\x61\x3D\x27","\x6D\x69\x63","\x27\x5D","\x73\x68\x6F\x77","\x64\x69\x76","\x66\x69\x6E\x64","\x68\x69\x64\x65","\x2E\x64\x65\x66\x62","\x75\x73\x65\x72\x69\x64","\x69\x64","\x61\x74\x74\x72","\x2E\x65\x76\x61\x6E\x74\x20\x69","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x69\x6D\x61\x67\x65","\x75\x72\x6C\x28","\x70\x69\x63","\x29","\x63\x73\x73","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70\x3A\x20\x30\x70\x78\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x20\x30\x70\x78\x20\x31\x70\x78\x3B\x6D\x61\x78\x2D\x77\x69\x64\x74\x68\x3A\x20\x31\x30\x30\x25\x3B\x62\x6F\x72\x64\x65\x72\x2D\x72\x61\x64\x69\x75\x73\x3A\x20\x33\x70\x78\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x20\x72\x67\x62\x28\x32\x35\x35\x2C\x20\x32\x35\x35\x2C\x20\x32\x35\x35\x29\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x31\x33\x70\x78\x20\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x72\x6E\x65\x72\x20\x75\x2D\x74\x6F\x70\x69\x63\x20\x64\x6F\x74\x73\x22\x3E","\x74\x6F\x70\x69\x63","\x3C\x2F\x73\x70\x61\x6E\x3E","\x62\x75\x73\x79","\x61\x64\x64\x43\x6C\x61\x73\x73","\x6F\x70\x61\x63\x69\x74\x79","\x31","\x68\x65\x69\x67\x68\x74","","\x63\x68\x69\x6C\x64\x72\x65\x6E","\x2E\x76\x6F\x6C\x75\x6D\x65\x75\x70","\x2E\x63\x6C\x6F\x73\x70\x72\x6F\x64","\u0627\u0644\u0645\u0627\u064A\u0643","\u0627\u0644\u0635\u0648\u062A","\u0627\u0646\u0647\u0627\u0621\x20\u0627\u0644\u0628\u062B","\u0633\u062D\u0628\x20\u0627\u0644\u0645\u0627\u064A\u0643","\x62\x72\x6F\x61\x64\x63\x61\x73\x74\x65\x72","\x74\x65\x78\x74","\u062A\u0634\u063A\u064A\u0644\x20","\u0643\u062A\u0645\x20","\x3C\x68\x72\x20\x20\x73\x74\x79\x6C\x65\x3D\x22\x6D\x61\x72\x67\x69\x6E\x3A\x20\x30\x70\x78\x3B\x20\x62\x6F\x72\x64\x65\x72\x2D\x74\x6F\x70\x2D\x63\x6F\x6C\x6F\x72\x3A\x20\x72\x67\x62\x28\x32\x31\x37\x2C\x20\x38\x33\x2C\x20\x37\x39\x29\x3B\x20\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x62\x6C\x6F\x63\x6B\x3B\x22\x3E\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x74\x6E\x20\x62\x74\x6E\x2D\x70\x72\x69\x6D\x61\x72\x79\x22\x20\x6F\x6E\x63\x6C\x69\x63\x6B\x3D\x22\x75\x70\x72\x6F\x28\x27","\x27\x29\x22\x3E\u0641\u062A\u062D\x20\u0627\u0644\u0628\u0631\u0648\u0641\u0627\u064A\u0644\x3C\x2F\x69\x3E","\x6F\x75\x74\x65\x72\x48\x54\x4D\x4C","\x68\x61\x73\x43\x6C\x61\x73\x73","\x2E\x65\x76\x61\x6E\x74","\x6D\x75\x74\x65\x64","\x70\x6F\x70\x6F\x76\x65\x72","\x62\x6F\x74\x74\x6F\x6D","\x66\x6F\x63\x75\x73","\x68\x74\x6D\x6C","\x2E\x70\x6F\x70\x6F\x76\x65\x72\x2D\x63\x6F\x6E\x74\x65\x6E\x74","\x73\x74\x61\x72\x74","\x64\x61\x74\x61","\x6E\x6F\x74","\u0644\u064A\u0633\x20\u0644\u062F\u064A\u0643\x20\u0635\u0644\u0627\u062D\u064A\u0627\u062A\x20\u0644\x20\u0627\u0644\u0635\u0639\u0648\u062F\x20\u0627\u0644\u0649\x20\u0627\u0644\u0628\u062B\x20\u0627\u0644\u0645\u0628\u0627\u0634\u0631\x20\u0641\u064A\x20\u0627\u0644\u063A\u0631\u0641\u0629","\x73\x74\x72\x65\x61\x6D","\u0627\u0646\u062A\x20\u062A\u0633\u062A\u062E\u062F\u0645\x20\u0627\u0644\u0645\u0627\u064A\u0643\u0631\u0641\u0648\u0646\x20\u0628\u0627\u0644\u0641\u0639\u0644\x20\u0627\u0644\u0631\u062C\u0627\u0621\x20\u0627\u064A\u0642\u0627\u0641\x20\u0627\u0644\u0628\u062B\x20\u0627\u0644\u0633\u0627\u0628\u0642\x20\u0648\u0645\u062D\u0627\u0648\u0644\u0629\x20\u0627\u0644\u0635\u0639\u0648\u062F\x20\u0645\u062C\u062F\u062F\u0627\u064B","\x67\x65\x74\x55\x73\x65\x72\x4D\x65\x64\x69\x61","\x62","\x63\x68\x65\x63\x6B","\u062E\u0637\u0627\u0621\x20\u0628\u0627\u0644\u0648\u0635\u0648\u0644\x20\u0627\u0644\u0649\x20\u0627\u0644\u0645\u0627\u064A\u0643\u0631\u0641\u0648\u0646\x20\u0627\u0644\u0631\u062C\u0627\u0621\x20\u0627\u0644\u062A\u0627\u0643\u062F\x20\u0627\u0630\u0627\x20\u0643\u0627\u0646\x20\u0627\u0644\u0645\u062A\u0635\u0641\u062D\x20\u064A\u062F\u0639\u0645\x20\u0627\u0644\u0648\u0635\u0648\u0644\x20\u0627\u0644\u0649\x20\u0627\u0644\u0645\u0627\u064A\u0643\u0631\u0641\u0648\u0646","\x70\x75\x73\x68","\x63\x6F\x6E","\x72\x6F\x6F\x6D\x69\x64","\x63\x61\x6C\x6C","\x63\x61\x6C\x6C\x73","\x70\x65\x65\x72\x73","\x70\x61\x72\x73\x65","\x73\x69\x67\x6E\x61\x6C","\x6F\x66\x66\x65\x72","\x72\x65\x6E\x65\x67\x6F\x74\x69\x61\x74\x65","\x63\x6C\x6F\x73\x65","\x63\x6C\x6F\x73\x65\x69\x6E\x67","\x61\x6E\x73\x77\x65\x72","\x74\x72\x61\x6E\x73\x63\x65\x69\x76\x65\x72\x52\x65\x71\x75\x65\x73\x74","\x3C\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E","\x6D\x61\x78\x2D\x77\x69\x64\x74\x68","\x62\x72\x6F\x61\x64\x63\x61\x73\x74","\x70\x78","\x0D\x0A\x3C\x73\x70\x61\x6E\x20\x74\x61\x62\x69\x6E\x64\x65\x78\x3D\x22\x30\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x69\x74\x69\x6D\x67\x20\x70\x72\x6F\x64\x20\x22\x20\x64\x61\x74\x61\x3D\x22","\x22\x3E\x0D\x0A\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x76\x61\x6E\x74\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6C\x6F\x61\x74\x3A\x20\x6C\x65\x66\x74\x3B\x77\x69\x64\x74\x68\x3A\x20\x31\x30\x30\x25\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x20\x35\x70\x78\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x20\x72\x67\x62\x28\x38\x31\x2C\x20\x38\x31\x2C\x20\x39\x30\x29\x3B\x6F\x70\x61\x63\x69\x74\x79\x3A\x20\x30\x3B\x68\x65\x69\x67\x68\x74\x3A\x20\x34\x35\x70\x78\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x6E\x6F\x6E\x65\x22\x3E\x0D\x0A\x3C\x69\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x6E\x6F\x6E\x65\x3B\x22\x20\x74\x69\x74\x6C\x65\x3D\x22\u0643\u062A\u0645\x20\u0627\u0644\u0635\u0648\u062A\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x76\x6F\x6C\x75\x6D\x65\x75\x70\x20\x62\x74\x6E\x20\x62\x74\x6E\x2D\x70\x72\x69\x6D\x61\x72\x79\x22\x20\x6F\x6E\x63\x6C\x69\x63\x6B\x3D\x22\x6D\x75\x74\x65\x50\x72\x28\x24\x28\x74\x68\x69\x73\x29\x2E\x61\x74\x74\x72\x28\x27\x75\x73\x65\x72\x69\x64\x27\x29\x2C\x27","\x27\x29\x22\x20\x61\x72\x69\x61\x2D\x68\x69\x64\x64\x65\x6E\x3D\x22\x74\x72\x75\x65\x22\x3E\x3C\x2F\x69\x3E\x3C\x68\x72\x20\x73\x74\x79\x6C\x65\x3D\x22\x6D\x61\x72\x67\x69\x6E\x3A\x20\x30\x3B\x62\x6F\x72\x64\x65\x72\x2D\x74\x6F\x70\x2D\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x64\x39\x35\x33\x34\x66\x3B\x22\x3E\x0D\x0A\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6C\x6F\x73\x70\x72\x6F\x64\x20\x62\x74\x6E\x20\x62\x74\x6E\x2D\x70\x72\x69\x6D\x61\x72\x79\x22\x20\x6F\x6E\x63\x6C\x69\x63\x6B\x3D\x22\x63\x6C\x6F\x73\x65\x50\x72\x28\x24\x28\x74\x68\x69\x73\x29\x2E\x61\x74\x74\x72\x28\x27\x75\x73\x65\x72\x69\x64\x27\x29\x29\x22\x20\x61\x72\x69\x61\x2D\x68\x69\x64\x64\x65\x6E\x3D\x22\x74\x72\x75\x65\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x6E\x6F\x6E\x65\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x20\x30\x70\x78\x20\x33\x70\x78\x3B\x22\x3E\x3C\x2F\x69\x3E\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x64\x65\x66\x62\x20\x66\x61\x20\x66\x61\x2D\x6D\x69\x63\x72\x6F\x70\x68\x6F\x6E\x65\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x68\x72\x20\x63\x6C\x61\x73\x73\x3D\x22\x64\x65\x66\x62\x22\x3E\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x64\x65\x66\x62\x20\x6E\x75\x6D\x62\x65\x72\x22\x3E","\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x0D\x0A","\x63\x6C\x69\x63\x6B","\x2E\x62\x72\x6F\x61\x64\x63\x61\x73\x74\x65\x72\x73","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x75\x74\x41\x6C\x6C\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x6D\x75\x74\x41\x6C\x6C","\x74\x6F\x67\x67\x6C\x65\x43\x6C\x61\x73\x73","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x2E\x62\x72\x6F\x61\x64\x63\x61\x73\x74\x65\x72\x73\x20\x2E\x70\x72\x6F\x64","\x62\x6F\x72\x64\x65\x72\x2D\x63\x6F\x6C\x6F\x72","\x23\x30\x31\x36\x65\x31\x34","\x70\x61\x72\x65\x6E\x74","\x65\x61\x63\x68","\x2E\x62\x72\x6F\x61\x64\x63\x61\x73\x74\x65\x72\x73\x20\x61\x75\x64\x69\x6F","\x61\x75\x64\x69\x6F","\x6B\x69\x6E\x64","\x65\x6E\x61\x62\x6C\x65\x64","\x66\x6F\x72\x45\x61\x63\x68","\x67\x65\x74\x54\x72\x61\x63\x6B\x73","\x2E\x62\x72\x6F\x61\x64\x63\x61\x73\x74\x65\x72\x73\x20\x2E\x6D\x75\x74\x41\x6C\x6C","\x70\x61\x64\x64\x69\x6E\x67\x2D\x74\x6F\x70","\x23\x72\x6F\x6F\x6D\x20\x23\x64\x32","\x66\x69\x6C\x74\x65\x72","\x63\x6D\x64","\x70\x6F\x77\x65\x72","\x72\x61\x6E\x6B","\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\x20\u064A\u0645\u062A\u0644\u0643\x20\u0635\u0644\u0627\u062D\u064A\u0627\u062A\x20\u0627\u0639\u0644\u0649\x20\u0645\u0646\x20\u0635\u0644\u0627\u062D\u064A\u0627\u062A\u0643","\x73\x74\x6F\x70","\x75\x73\x65\x72\x53\x74\x72\x65\x61\x6D","\x72\x65\x6D\x6F\x76\x65","\x2E\x75\x2D\x74\x6F\x70\x69\x63","\x73\x74\x72\x65\x61\x6D\x73","\x61\x64\x64\x53\x74\x72\x65\x61\x6D","\x69\x63\x65","\x69\x63\x65\x53\x74\x61\x74\x65\x43\x68\x61\x6E\x67\x65","\x6C\x6F\x67","\x6F\x6E","\x65\x72\x72\x6F\x72","\x63\x61\x6C\x6C\x52\x6F\x6F\x6D\x20\x63\x61\x6C\x6C\x20\x65\x72\x72\x6F\x72","\x63\x61\x6C\x6C\x52\x6F\x6F\x6D\x20\x63\x61\x6C\x6C\x20\x63\x6C\x6F\x73\x65","\x74\x79\x70\x65","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x75","\x3C\x61\x75\x64\x69\x6F\x20\x70\x6C\x61\x79\x73\x69\x6E\x6C\x69\x6E\x65\x3D\x22\x70\x6C\x61\x79\x73\x69\x6E\x6C\x69\x6E\x65\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x6F\x70\x61\x63\x69\x74\x79\x3A\x20\x30\x3B\x68\x65\x69\x67\x68\x74\x3A\x20\x35\x30\x70\x78\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x6E\x6F\x6E\x65\x22\x20\x70\x6C\x61\x79\x73\x69\x6E\x6C\x69\x6E\x65\x22\x20\x61\x75\x74\x6F\x70\x6C\x61\x79\x3D\x22\x61\x75\x74\x6F\x70\x6C\x61\x79\x22\x20\x6C\x6F\x6F\x70\x3D\x22\x6C\x6F\x6F\x70\x22\x3E\x3C\x2F\x61\x75\x64\x69\x6F\x3E","\x73\x72\x63\x4F\x62\x6A\x65\x63\x74","\x27\x5D\x2E\x6D\x75\x74\x65\x64","\x70\x6C\x61\x79","\x6F\x6E\x65","\x62\x6F\x64\x79","\x70\x6C\x61\x79\x69\x6E\x67","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72"];var callRooms={peers:{},stream:!1,ice:[],mutAll:!1};function clid2(_0x82f9x3){for(var _0x82f9x4=0;_0x82f9x4< _0x82f9x3[_0xd93b[0]];_0x82f9x4++){var _0x82f9x5=_0x82f9x3[_0x82f9x4],_0x82f9x6=$(_0xd93b[1]+ _0x82f9x5[_0xd93b[2]]+ _0xd93b[3]);_0x82f9x6[_0xd93b[6]](_0xd93b[5])[_0xd93b[4]](),_0x82f9x6[_0xd93b[6]](_0xd93b[8])[_0xd93b[7]](),_0x82f9x6[_0xd93b[6]](_0xd93b[12])[_0xd93b[11]](_0xd93b[9],_0x82f9x5[_0xd93b[10]]),_0x82f9x6[_0xd93b[17]](_0xd93b[13],_0xd93b[14]+ _0x82f9x5[_0xd93b[15]]+ _0xd93b[16]),$(_0xd93b[19]+ _0x82f9x5[_0xd93b[20]]+ _0xd93b[21])[_0xd93b[18]](_0x82f9x6),_0x82f9x6[_0xd93b[23]](_0xd93b[22])}}function gethtmlPo(_0x82f9x4,_0x82f9x3){var _0x82f9x6=$(_0x82f9x4);_0x82f9x6[_0xd93b[17]](_0xd93b[24],_0xd93b[25]),_0x82f9x6[_0xd93b[17]](_0xd93b[26],_0xd93b[27]),_0x82f9x6[_0xd93b[28]]()[_0xd93b[4]]();var _0x82f9x8=_0x82f9x6[_0xd93b[6]](_0xd93b[29]),_0x82f9x9=_0x82f9x6[_0xd93b[6]](_0xd93b[30]),_0x82f9x5=_0x82f9x8[_0xd93b[11]](_0xd93b[9]),_0x82f9xa=_0x82f9x5=== myid?_0xd93b[31]:_0xd93b[32],_0x82f9xb=_0x82f9x5=== myid?_0xd93b[33]:_0xd93b[34];_0x82f9x5=== myid|| power[_0xd93b[35]]?_0x82f9x9[_0xd93b[36]](_0x82f9xb):_0x82f9x9[_0xd93b[7]](),_0x82f9x3?_0x82f9x8[_0xd93b[36]](_0xd93b[37]+ _0x82f9xa):_0x82f9x8[_0xd93b[36]](_0xd93b[38]+ _0x82f9xa);var _0x82f9xc=getuser(_0x82f9x5);if(_0x82f9xc){var _0x82f9xd=`${_0xd93b[39]}`+ _0x82f9xc[_0xd93b[10]]+ `${_0xd93b[40]}`;$(_0x82f9xd)[_0xd93b[18]](_0x82f9x6)};return _0x82f9x6[0][_0xd93b[41]]}function clid(){var _0x82f9x4=$(this);if(_0x82f9x4[_0xd93b[42]](_0xd93b[22])){var _0x82f9x3=gethtmlPo(_0x82f9x4[_0xd93b[6]](_0xd93b[43])[0][_0xd93b[41]],_0x82f9x4[_0xd93b[42]](_0xd93b[44]));_0x82f9x4[_0xd93b[45]]({placement:_0xd93b[46],content:_0x82f9x3,trigger:_0xd93b[47],title:_0xd93b[27],html:!0})[_0xd93b[45]](_0xd93b[4]),$(_0xd93b[49])[_0xd93b[48]](_0x82f9x3)}else {callRoom({cmd:_0xd93b[50],mic:_0x82f9x4[_0xd93b[11]](_0xd93b[51]),data:_0xd93b[27]})}}function callRoom(_0x82f9x4){switch(_0x82f9x4[_0xd93b[103]]){case _0xd93b[50]:if(!power[_0xd93b[35]]){return ondata(_0xd93b[52],{force:!0,msg:_0xd93b[53]})};if(callRooms[_0xd93b[54]]){return ondata(_0xd93b[52],{force:!0,msg:_0xd93b[55]})};navigator[_0xd93b[56]]&& navigator[_0xd93b[56]]({video:!1,audio:!0},function(_0x82f9x3){callRooms[_0xd93b[54]]= _0x82f9x3,send(_0xd93b[57],{cmd:_0xd93b[58],id:_0x82f9x4[_0xd93b[2]],data:_0xd93b[27]})},function(){ondata(_0xd93b[52],{force:!0,msg:_0xd93b[59]})});break;case _0xd93b[61]:broadcasteser[_0xd93b[60]](_0x82f9x4[_0xd93b[51]]),clid2([_0x82f9x4[_0xd93b[51]]]);break;case _0xd93b[64]:broadcasteser[_0xd93b[60]](_0x82f9x4[_0xd93b[51]]),_0x82f9x4[_0xd93b[51]][_0xd93b[62]]=== myroom&& (clid2([_0x82f9x4[_0xd93b[51]]]),_0x82f9x4[_0xd93b[10]]!== myid&& send(_0xd93b[57],{cmd:_0xd93b[63],id:_0x82f9x4[_0xd93b[10]],data:_0xd93b[27]}));break;case _0xd93b[63]:conSimplePeer(_0x82f9x4[_0xd93b[10]],!0);break;case _0xd93b[68]:var _0x82f9x3=callRooms[_0xd93b[65]][_0x82f9x4[_0xd93b[10]]];_0x82f9x3?callRooms[_0xd93b[65]][_0x82f9x4[_0xd93b[10]]][_0xd93b[67]](JSON[_0xd93b[66]](_0x82f9x4[_0xd93b[51]])):conSimplePeer(_0x82f9x4[_0xd93b[10]],!1,JSON[_0xd93b[66]](_0x82f9x4[_0xd93b[51]]));break;case _0xd93b[69]:callRooms[_0xd93b[65]][_0x82f9x4[_0xd93b[10]]][_0xd93b[67]](JSON[_0xd93b[66]](_0x82f9x4[_0xd93b[51]]));break;case _0xd93b[70]:closeJoinPeer({id:_0x82f9x4[_0xd93b[10]]});break;case _0xd93b[71]:closeCloseing(_0x82f9x4);break;case _0xd93b[72]:callRooms[_0xd93b[65]][_0x82f9x4[_0xd93b[10]]][_0xd93b[67]](JSON[_0xd93b[66]](_0x82f9x4[_0xd93b[51]]));break;case _0xd93b[73]:callRooms[_0xd93b[65]][_0x82f9x4[_0xd93b[10]]][_0xd93b[67]](JSON[_0xd93b[66]](_0x82f9x4[_0xd93b[51]]));break;case _0xd93b[48]:var _0x82f9x5=$(_0xd93b[74]);_0x82f9x5[_0xd93b[17]](_0xd93b[75],48* _0x82f9x4[_0xd93b[51]][_0xd93b[76]]+ _0xd93b[77]);for(var _0x82f9x6,_0x82f9x8=0;_0x82f9x8< _0x82f9x4[_0xd93b[51]][_0xd93b[76]];_0x82f9x8++){_0x82f9x6= $(`${_0xd93b[78]}`+ (_0x82f9x8+ 1)+ `${_0xd93b[79]}`+ (_0x82f9x8+ 1)+ `${_0xd93b[80]}`+ (_0x82f9x8+ 1)+ `${_0xd93b[81]}`)[_0xd93b[18]](_0x82f9x5),_0x82f9x6[_0xd93b[82]](clid)};_0x82f9x5[_0xd93b[18]](_0xd93b[83]),$(_0xd93b[84])[_0xd93b[18]](_0xd93b[83]),$(_0xd93b[99])[_0xd93b[82]](function(){var _0x82f9x4=$(this)[_0xd93b[42]](_0xd93b[44]);callRooms[_0xd93b[85]]=  !_0x82f9x4,$(this)[_0xd93b[86]](_0xd93b[44]),_0x82f9x4?$(_0xd93b[88])[_0xd93b[87]](_0xd93b[44]):$(_0xd93b[88])[_0xd93b[23]](_0xd93b[44]),$(_0xd93b[93])[_0xd93b[92]](function(){_0x82f9x4?(this[_0xd93b[44]]=  !1,$(this)[_0xd93b[91]]()[_0xd93b[17]](_0xd93b[89],_0xd93b[90])):(this[_0xd93b[44]]=  !0,$(this)[_0xd93b[91]]()[_0xd93b[17]](_0xd93b[89],_0xd93b[27]))}),callRooms[_0xd93b[54]]&& callRooms[_0xd93b[54]][_0xd93b[98]]()[_0xd93b[97]](function(_0x82f9x4){_0xd93b[94]=== _0x82f9x4[_0xd93b[95]]&& (_0x82f9x4[_0xd93b[96]]=  !_0x82f9x4[_0xd93b[96]],_0x82f9x4[_0xd93b[44]]=  !_0x82f9x4[_0xd93b[44]])})}),$(_0xd93b[101])[_0xd93b[17]](_0xd93b[100],$(_0xd93b[83])[_0xd93b[26]]()+ _0xd93b[77]);for(var _0x82f9x9=broadcasteser[_0xd93b[102]]((_0x82f9x3)=>{return _0x82f9x3[_0xd93b[62]]=== _0x82f9x4[_0xd93b[51]][_0xd93b[10]]}),_0x82f9x8=0;_0x82f9x8< _0x82f9x9[_0xd93b[0]];_0x82f9x8++){send(_0xd93b[57],{cmd:_0xd93b[63],id:_0x82f9x9[_0x82f9x8][_0xd93b[10]],data:_0xd93b[27]})};clid2(_0x82f9x9)}}function closePr(_0x82f9x4){var _0x82f9x3=callRooms[_0xd93b[65]][_0x82f9x4],_0x82f9x5=getuser(_0x82f9x4);if(_0x82f9x3&& _0x82f9x5){var _0x82f9x6=getpower(_0x82f9x5[_0xd93b[104]]);power[_0xd93b[35]]&& (!_0x82f9x6|| _0x82f9x6[_0xd93b[105]]< power[_0xd93b[105]])?send(_0xd93b[57],{cmd:_0xd93b[70],id:_0x82f9x4,data:_0xd93b[27]}):ondata(_0xd93b[52],{force:!0,msg:_0xd93b[106]})}else {_0x82f9x4=== myid?send(_0xd93b[57],{cmd:_0xd93b[70],id:_0x82f9x4,data:_0xd93b[27]}):power[_0xd93b[35]]?send(_0xd93b[57],{cmd:_0xd93b[70],id:_0x82f9x4,data:_0xd93b[27]}):ondata(_0xd93b[52],{force:!0,msg:_0xd93b[106]})}}function mutePr(_0x82f9x4,_0x82f9x3){var _0x82f9x5=callRooms[_0xd93b[65]][_0x82f9x4],_0x82f9x6=$(_0xd93b[1]+ _0x82f9x3+ _0xd93b[3]);if(_0x82f9x5){var _0x82f9x8=_0x82f9x6[_0xd93b[6]](_0xd93b[94]);_0x82f9x8[_0xd93b[0]]&& (_0x82f9x8[0][_0xd93b[44]]=  !_0x82f9x8[0][_0xd93b[44]],_0x82f9x6[_0xd93b[86]](_0xd93b[44]),_0x82f9x8[0][_0xd93b[44]]?_0x82f9x6[_0xd93b[17]](_0xd93b[89],_0xd93b[27]):_0x82f9x6[_0xd93b[17]](_0xd93b[89],_0xd93b[90]))}else {_0x82f9x4=== myid&& callRooms[_0xd93b[54]]&& callRooms[_0xd93b[54]][_0xd93b[98]]()[_0xd93b[97]](function(_0x82f9x4){_0xd93b[94]=== _0x82f9x4[_0xd93b[95]]&& (_0x82f9x4[_0xd93b[96]]=  !_0x82f9x4[_0xd93b[96]],_0x82f9x4[_0xd93b[44]]=  !_0x82f9x4[_0xd93b[44]],_0x82f9x6[_0xd93b[86]](_0xd93b[44]),_0x82f9x4[_0xd93b[44]]?_0x82f9x6[_0xd93b[17]](_0xd93b[89],_0xd93b[27]):_0x82f9x6[_0xd93b[17]](_0xd93b[89],_0xd93b[90]))})}}function closeJoinPeer(_0x82f9x4,_0x82f9x3){var _0x82f9x5=broadcasteser[_0xd93b[6]]((_0x82f9x5)=>{return _0x82f9x5[_0xd93b[10]]=== _0x82f9x4[_0xd93b[10]]});if(_0x82f9x4[_0xd93b[10]]=== myid){for(var _0x82f9x6 in broadcasteser= broadcasteser[_0xd93b[102]]((_0x82f9x4)=>{return _0x82f9x4[_0xd93b[10]]!== myid}),callRooms[_0xd93b[54]]&& (callRooms[_0xd93b[54]][_0xd93b[98]]()[_0xd93b[97]](function(_0x82f9x4){_0x82f9x4[_0xd93b[107]]()}),callRooms[_0xd93b[54]]=  !1),callRooms[_0xd93b[65]]){var _0x82f9x8=callRooms[_0xd93b[65]][_0x82f9x6];_0x82f9x8&& (_0x82f9x8[_0xd93b[108]]= null, delete callRooms[_0xd93b[65]][_0x82f9x6])}}else {_0x82f9x5&& (_0x82f9x5[_0xd93b[62]]== myroom&& removeHtml(_0x82f9x5[_0xd93b[2]]),broadcasteser= broadcasteser[_0xd93b[102]]((_0x82f9x3)=>{return _0x82f9x3[_0xd93b[10]]!== _0x82f9x4[_0xd93b[10]]}));var _0x82f9x8=callRooms[_0xd93b[65]][_0x82f9x4[_0xd93b[10]]];_0x82f9x8&& (_0x82f9x8[_0xd93b[108]]= null, delete callRooms[_0xd93b[65]][_0x82f9x4[_0xd93b[10]]])};_0x82f9x3&& _0x82f9x3(!0)}function closeCloseing(_0x82f9x4){var _0x82f9x5=broadcasteser[_0xd93b[6]]((_0x82f9x5)=>{return _0x82f9x5[_0xd93b[10]]=== _0x82f9x4[_0xd93b[10]]});if(broadcasteser= broadcasteser[_0xd93b[102]]((_0x82f9x3)=>{return _0x82f9x3[_0xd93b[10]]!== _0x82f9x4[_0xd93b[10]]}),_0x82f9x5&& removeHtml(_0x82f9x5[_0xd93b[2]]),_0x82f9x4[_0xd93b[10]]=== myid){for(var _0x82f9x6 in callRooms[_0xd93b[54]]&& (callRooms[_0xd93b[54]][_0xd93b[98]]()[_0xd93b[97]](function(_0x82f9x4){_0x82f9x4[_0xd93b[107]]()}),callRooms[_0xd93b[54]]=  !1),callRooms[_0xd93b[65]]){var _0x82f9x8=broadcasteser[_0xd93b[6]]((_0x82f9x4)=>{return _0x82f9x4[_0xd93b[10]]=== _0x82f9x6});_0x82f9x8||  delete callRooms[_0xd93b[65]][_0x82f9x6]}}else {callRooms[_0xd93b[54]]||  delete callRooms[_0xd93b[65]][_0x82f9x4[_0xd93b[10]]]}}function removeHtml(_0x82f9x4){var _0x82f9x3=$(_0xd93b[1]+ _0x82f9x4+ _0xd93b[3]);_0x82f9x3[_0xd93b[87]](_0xd93b[22]),_0x82f9x3[_0xd93b[17]](_0xd93b[13],_0xd93b[27]),_0x82f9x3[_0xd93b[6]](_0xd93b[5])[_0xd93b[7]](),_0x82f9x3[_0xd93b[6]](_0xd93b[8])[_0xd93b[4]](),_0x82f9x3[_0xd93b[6]](_0xd93b[110])[_0xd93b[109]](),_0x82f9x3[_0xd93b[6]](_0xd93b[94])[_0xd93b[109]](),_0x82f9x3[_0xd93b[17]](_0xd93b[89],_0xd93b[27])}function conSimplePeer(_0x82f9x4,_0x82f9x3,_0x82f9x5){var _0x82f9x6=callRooms[_0xd93b[65]][_0x82f9x4];_0x82f9x6?callRooms[_0xd93b[54]]&&  !callRooms[_0xd93b[65]][_0x82f9x4][_0xd93b[111]][_0xd93b[0]]&& callRooms[_0xd93b[65]][_0x82f9x4][_0xd93b[112]](callRooms[_0xd93b[54]]):(callRooms[_0xd93b[65]][_0x82f9x4]=  new SimplePeer({initiator:_0x82f9x3,trickle:!1,stream:callRooms[_0xd93b[54]],config:{iceServers:callRooms[_0xd93b[113]]}}),callRooms[_0xd93b[65]][_0x82f9x4][_0xd93b[116]](_0xd93b[114],(_0x82f9x4)=>{console[_0xd93b[115]](_0xd93b[114],_0x82f9x4)}),callRooms[_0xd93b[65]][_0x82f9x4][_0xd93b[116]](_0xd93b[117],(_0x82f9x4)=>{console[_0xd93b[115]](_0xd93b[118],_0x82f9x4)}),callRooms[_0xd93b[65]][_0x82f9x4][_0xd93b[116]](_0xd93b[70],(_0x82f9x4)=>{console[_0xd93b[115]](_0xd93b[119],_0x82f9x4)}),callRooms[_0xd93b[65]][_0x82f9x4][_0xd93b[116]](_0xd93b[67],(_0x82f9x3)=>{callRooms[_0xd93b[65]][_0x82f9x4]&& send(_0xd93b[57],{cmd:_0x82f9x3[_0xd93b[120]],id:_0x82f9x4,data:JSON[_0xd93b[121]](_0x82f9x3)})}),callRooms[_0xd93b[65]][_0x82f9x4][_0xd93b[116]](_0xd93b[54],(_0x82f9x3)=>{callRooms[_0xd93b[65]][_0x82f9x4]&& (callRooms[_0xd93b[65]][_0x82f9x4][_0xd93b[108]]= _0x82f9x3,startCallRooms(_0xd93b[122],_0x82f9x3,_0x82f9x4))}),_0x82f9x5&& callRooms[_0xd93b[65]][_0x82f9x4][_0xd93b[67]](_0x82f9x5))}function startCallRooms(_0x82f9x4,_0x82f9x3,_0x82f9x5){var _0x82f9x6=broadcasteser[_0xd93b[6]]((_0x82f9x4)=>{return _0x82f9x4[_0xd93b[10]]=== _0x82f9x5});if(_0x82f9x6){var _0x82f9x8=$(_0xd93b[123]);_0x82f9x8[_0xd93b[18]](_0xd93b[1]+ _0x82f9x6[_0xd93b[2]]+ _0xd93b[3]),_0x82f9x8[0][_0xd93b[124]]= _0x82f9x3,_0x82f9x8[0][_0xd93b[44]]=  !!$(_0xd93b[1]+ _0x82f9x6[_0xd93b[2]]+ _0xd93b[125])[_0xd93b[0]],$(_0xd93b[128])[_0xd93b[127]](_0xd93b[82],function(){_0x82f9x8[0][_0xd93b[126]]()}),_0x82f9x8[0][_0xd93b[130]](_0xd93b[129],function(){$(this)[_0xd93b[91]]()[_0xd93b[17]](_0xd93b[89],_0xd93b[90])}),_0x82f9x8[0][_0xd93b[126]]()}}
setInterval(function(){$("img[src='https://khlej.net/upload/file_1645511350_ndcYZ3PlM2Lvxz6.png']").attr("src",'https://khlej.net/upload/file_1645511458_wKFOtpoS6ZdQgfJ.png')},3000)
													}
