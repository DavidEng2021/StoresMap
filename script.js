const cloud1 = document.querySelector(".one");
cloud1.addEventListener("mouseover", () => {
    cloud1.style.opacity = 0;
    setTimeout(function () {
        cloud1.style.display = 'none';
    }, 1100);
})
const cloud2 = document.querySelector(".two");
cloud2.addEventListener("mouseover", () => {
    cloud2.style.opacity = 0;
    setTimeout(function () {
        cloud2.style.display = 'none';
    }, 1100);
})

const DataBase = [
    [
        "來自大安區最新鮮的蘋果，小農自產，用愛栽培!",
        25.033,
        121.543,
        "/pics/apple.svg",
        30,
        30,
        '<b style="font-size:20px">蘋果</b><br>有機的堅持、真心有機的農夫、生活有機的美學，這是關於一群以友善大地的自然農耕改變台灣的農夫故事。一群連結著土地、生態、農夫、餐桌的社群，建立起的有機人文新市集。有機的堅持、真心有機的農夫、生活有機的美學，這是關於一群以友善大地的自然農耕改變台灣的農夫故事。一群連結著土地、生態、農夫、餐桌的社群，建立起的有機人文新市集。有機的堅持、真心有機的農夫、生活有機的美學，這是關於一群以友善大地的自然農耕改變台灣的農夫故事。一群連結著土地、生態、農夫、餐桌的社群，建立起的有機人文新市集。<a href=#><b>開啟此商家商城頁面<b><a/>',
        '<img class="picture"  src="/pics/markerNo1.jpg"></img>'
    ],
    ["台北好茄子，五十年老品牌!",
        25.033,
        121.900,
        "/pics/svgrepo.svg",
        30,
        30,
        '<b style="font-size:20px">茄子</b><br>友善大地、尊重生命、支持健康、公平交易、生活美學，從心念出發創造一個相互支持的有機農夫市集成立於2012年。<a href=#><b>開啟此商家商城頁面<b><a/>',
        '<img class="picture" src="/pics/markerNo2.jpg"></img>'
    ],
    ["基隆木瓜，又大又香!",
        25.128362188248076,
        121.73907743938136,
        "/pics/papaya.svg",
        30,
        30,
        '<b style="font-size:20px">木瓜</b><br>這是關於一群以友善大地的自然農耕改變台灣的農夫故事，意味著一群連結著土地、生態、農夫、餐桌的社群，將醞釀著更深的力量，農夫們，靠著自己的力量站起來，重新建立起一個別開生面的有機人文新市集。<a href=#><b>開啟此商家商城頁面<b><a/>',
        '<img class="picture" src="/pics/markerNo3.jpg"></img>'
    ],
    ["新竹風城草莓，最狂最甜!",
        24.728867841250032,
        121.09491077516721,
        "/pics/berry.svg",
        30,
        30,
        '<b style="font-size:20px">草莓</b><br>水，是涵養大地、農作和生命的甘露，結合水花園的休憩與市集的人文風格，來到水花園農夫市集，將享受到鬧中取靜的清涼自在，與每一個別具特色的真心有機快樂農夫閒話食材與農事，更是假日全家休閒、採買、交友、長知識的歡樂活動。<a href=#><b>開啟此商家商城頁面<b><a/>',
        '<img class="picture" src="pics/markerNo4.jpg"></img>'
    ],
    ["花蓮桃子，世外桃源!",
        24.011401485831065,
        121.6139498605499,
        "/pics/peach.svg",
        30,
        30,
        '<b style="font-size:20px">桃子</b><br>有機的堅持、真心有機的農夫、生活有機的美學，這是關於一群以友善大地的自然農耕改變台灣的農夫故事。一群連結著土地、生態、農夫、餐桌的社群，建立起的有機人文新市集。<a href=#><b>開啟此商家商城頁面<b><a/>',
        '<img class="picture" src="/pics/markerNo5.jpg"></img>'
    ],
    ["苗栗蔬菜大王，產地直送!",
        24.546851361478247,
        120.8466642726602,
        "/pics/salad.svg",
        30,
        30,
        '<b style="font-size:20px">蔬菜</b><br>這是關於一群以友善大地的自然農耕改變台灣的農夫故事，意味著一群連結著土地、生態、農夫、餐桌的社群，將醞釀著更深的力量，農夫們，靠著自己的力量站起來，重新建立起一個別開生面的有機人文新市集。<a href=#><b>開啟此商家商城頁面<b><a/>',
        '<img class="picture" src="/pics/markerNo6.jpg"></img>'
    ],
];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 23.862, lng: 121.013 },
        zoom: 8,
        mapId: '195385c38c63e7fe',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    });

    //存放多個地圖標示
    const markers = DataBase;


    for (let i = 0; i < markers.length; i++) {
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
            position: { lat: currMarker[1], lng: currMarker[2] },
            map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
            },
            animation: google.maps.Animation.DROP,
            // info顯示資訊
            infoText: currMarker[6],
            infoPic: currMarker[7]
        });

        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0]
        });

        marker.addListener('click', () => {
            infowindow.open(map, marker);
            // info顯示資訊
            const farmer = document.querySelector('.farmer')
            const pic = document.querySelector('.image');
            const text = document.querySelector('.text');
            text.innerHTML = marker.infoText;
            pic.innerHTML = marker.infoPic;
            if (text.innerText != '點選左邊地圖觀看網站合作店家!') {
                farmer.style.top = "-260px";
            };

        });

    }

};

const serBtn = document.querySelector('.searchBtn');

serBtn.addEventListener('click', () => {
    const serBar = document.querySelector('.searchBar');
    serItem = serBar.value;
    const DataBase2 = [];
    DataBase.map(store => {
        if (store[0].includes(serItem))
            DataBase2.push(store);
    })
    const pic = document.querySelector('.image');
    const text = document.querySelector('.text');
    text.innerHTML = DataBase2[0][6];
    pic.innerHTML = DataBase2[0][7];

});

// 以下蓋板網頁

// const popup = document.querySelector('.form');
const container = document.querySelector('.containerpopup');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
window.onload = function(){
    setTimeout(function(){
        container.style.display='flex';
        overlay.style.display='block';
    }, 1000);    
}

const x =document.getElementById('x');
x.addEventListener('click', ()=>{
    container.style.display='none';
    overlay.style.display='none';
    // container.style.pointerEvents='none';
    // overlay.style.pointerEvents='none';
    popup.style.pointerEvents='none';

});


var w = document.getElementById('wei').value;
var h = document.getElementById('hih').value;
var a = document.getElementById('age').value;

var BMI = Math.round(w / (h / 100 * h / 100));

var sow = document.querySelector('#sow:checked');
var swe = document.querySelector('#swe:checked');
var bit = document.querySelector('#bit:checked');


var advice = document.getElementById('advice2');
if(advice.value===undefined){
    document.querySelector('.advice1').classList.add("disPlayNone");
}//如果對話框內沒有內容則不顯示
    

var button = document.getElementById('button');

var costomer = { BMI:0 , age:'', prefer:''};

button.addEventListener('click', function () {
    var costomer = { BMI:0 , age:0, prefer:''};//每次點擊前歸零
    var w = document.getElementById('wei');
    var h = document.getElementById('hih');
    var a = document.getElementById('age');
    
    var BMI = Math.round(w.value / (h.value / 100 * h.value / 100));

    var c1 = document.querySelector('#sow:checked');
    var c2 = document.querySelector('#swe:checked');
    var c3 = document.querySelector('#bit:checked');
    
    var c =[c1,c2,c3];
    costomer.BMI = BMI;
    costomer.age = a.value;
    for(i=0; i<3; i++){
        if(c[i]!=null){
        costomer.prefer+=c[i].value;
        }
    }
    console.log(costomer); //建立了一個客戶資料 可以用json形式丟到db中

    //用年齡和BMI值以及口味偏好過濾
    var cos = costomer;
    const adv=document.getElementById('advice2');
    
    //沒有輸入資料的情況
    if(cos.age==="" || w===null || h===null){
        adv.innerHTML=('資料不完整喔!');
    }else{

    //20歲以下情況
    if(cos.age<=20 && cos.BMI<18.5){
        adv.innerHTML=('BMI過低，太瘦了!發育期間可多吃高熱量、高營養的蔬果，如蘋果、釋迦 <a href="#">前往購買<a/>');
    };
    if(cos.age<=20 && 24>cos.BMI && cos.BMI>=18.5){
        adv.innerHTML=('BMI標準!發育期間仍可多吃高蛋白質、高鐵質的蔬果，如芭樂、菠菜 <a href="#"> 前往購買<a/>');
    };
    if(cos.age<=20 && cos.BMI>24){
        adv.innerHTML=('BMI過高喔!雖然是發育期間但須克制熱量攝取，建議低熱量蔬果，如葡萄柚、香蕉 <a href="#">前往購買<a/>');
    };
    //20歲到30歲
    if(cos.age>20 && 30>=cos.age && cos.BMI<18.5){
        adv.innerHTML=('BMI過低，太瘦了!年輕人打拼之餘別忘補充高營養的蔬果，如蘋果、釋迦 <a href="#">前往購買<a/>');
    };
    if(cos.age>20 && 30>=cos.age && 24>cos.BMI && cos.BMI>=18.5){
        adv.innerHTML=('BMI標準!年輕人追夢最需要鈣、葉酸（維生素 B9）、鐵，可多吃甘藍菜、花椰菜、菠菜 <a href="#"> 前往購買<a/>');
    };
    if(cos.age>20 && 30>=cos.age && cos.BMI>24){
        adv.innerHTML=('BMI過高喔!年輕人埋頭工作也要記得動一動，建議低熱量蔬果，如葡萄柚、香蕉 <a href="#">前往購買<a/>');
    };
    //30歲到60歲
    if(cos.age>30 && 60>=cos.age && cos.BMI<18.5){
        adv.innerHTML=('BMI過低，太瘦了!是該保養身體的年紀了，工作之餘別忘補充高營養的蔬果，如蘋果、釋迦 <a href="#">前往購買<a/>');
    };
    if(cos.age>30 && 60>=cos.age && 24>cos.BMI && cos.BMI>=18.5){
        adv.innerHTML=('BMI標準!衝刺事業不忘健康，建議抗氧化蔬果，如藍莓、草莓 <a href="#"> 前往購買<a/>');
    };
    if(cos.age>30 && 60>=cos.age && cos.BMI>24) adv.innerHTML=('BMI過高喔!沒有青春可以揮霍，需特別注意健康，建議低熱量蔬果，如葡萄柚、香蕉 <a href="#">前往購買<a/>');
    //60歲以上
    if(cos.age>60 && cos.BMI<18.5){
        adv.innerHTML=('BMI過低，太瘦了!迎接退休需注意營養吸收，建議補充維他命D <a href="#">前往購買<a/>');
    };
    if(cos.age>60 && 24>cos.BMI && cos.BMI>=18.5){
        adv.innerHTML=('BMI標準!要有多彩退休生活，建議補充鈣質，和維他命 <a href="#"> 前往購買<a/>');
    };
    if(cos.age>60 && cos.BMI>24){
        adv.innerHTML=('BMI過高!高齡肥胖非常危險，建議控制糖分攝取，可吃木瓜、柚子、芭樂 <a href="#">前往購買<a/>');
    };
};

    document.querySelector('.advice1').classList.remove("disPlayNone");
});