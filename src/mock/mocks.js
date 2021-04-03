import Mock from 'mockjs'
// 城市
function getCity(){
    let data = [];
    const Romdon = Mock.Romdon;
    for(let i = 0; i < 20; i ++){
        data[i] = Mock.mock("@city(true)")
    }
    return data;
}
// 模拟图片地址
function imgUrl(){
    let data = []
    let imgStr = 'img/base/big'
    let imgRe = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','1.jpg']
    for (let i = 0; i < imgRe.length; i++) {
        let dat = {};
        const Romdon = Mock.Random;
        dat={
            imgSrc : imgStr + imgRe[i],
            // 模拟标题
            titles : Romdon.ctitle(1,6),
            //模拟文字片段
            // graph : Romdon.cparagraph(1,2),
            // 模拟数字
            pice : Mock.mock({
                "number|1-300" : 300
            })
        }
        data.push(dat)
        
    }
    return data;
}
// 内容
function cion(){
    let foot = ['1F','2F','3F','4F','5F'];
    const Romdon = Mock.Random;
    let imgStr = 'img/base/calendar';
    let lastStr = '.png';
    let imgUrls = [];
    let tit = [];
    let year = [];
    let addr = [];
    let data = [];
    let texts = ['戏剧达人','体育赛事','古典舞蹈','儿童亲子','摇滚在路上']
    for(let i =0 ; i < 5;i ++){
        tit.push(Romdon.ctitle(1,6));
        year.push( Romdon.date("yyyy-MM-dd")) ;
        addr.push(addr[i] = Mock.mock('@city(true)'));
        imgUrls.push(imgStr +"0"+ [(i+1) + ""] + lastStr);
    }
    for (let index = 0; index < foot.length; index++) {
        let obj = {};
        obj = {
            foots : foot[index],
            text : texts[index],
            imgUrl : imgUrls,
            titles : tit,
            times : year,
            address : addr,
            numbers :  Mock.mock({
                "number|100-800" : 800
            })
        }
        data.push(obj);
        
    }
    return data;
}
// 热播排行
function hotTop(){
    var data = [];
    const Random = Mock.Random;
    for (let i = 0; i < 10; i++) {
        data[i] = Random.cparagraph(1)
    }
    return data;
}
//戏曲页图片 dy top
var imgItems = [
    '/img/base/cardimg2.jpg',
    '/img/base/cardimg3.jpg',
    '/img/base/cardimg4.jpg',
    '/img/base/cardimg1.jpg',
    '/img/base/cardimg5.jpg',
    '/img/base/cardimg6.jpg',
];
var imgItems1 = [
    '/img/base/child1.png',
    '/img/base/child2.png',
    '/img/base/child3.png',
    '/img/base/child4.png',
    '/img/base/child5.png',
    '/img/base/child6.png',
];
var imgItems2 = [
    '/img/base/child1.png',
    '/img/base/child2.png',
    '/img/base/child3.png',
    '/img/base/child4.png',
    '/img/base/child5.png',
    '/img/base/child6.png',
];
var imgItems3 = [
    '/img/base/cardimg2.jpg',
    '/img/base/cardimg3.jpg',
    '/img/base/cardimg4.jpg',
    '/img/base/cardimg1.jpg',
    '/img/base/cardimg5.jpg',
    '/img/base/cardimg6.jpg',
    '/img/base/cardimg6.jpg',
];
function xiquimg(num) {
    let data = []
    for (let index = 0; index < num.length; index++) {
        let nums = Math.floor(Math.random() * num.length);
        const element = num[nums];
        data.push(element)
    }

    return data
}

// 底部数据
function flootData(){
    let ids = 0;
    let data=[
        {
            id:ids++,
            texts : [
                '订购方式',
                '在线订购',
                '电话订购',
                '上门订购',
                '大客户团体订购',
                '大麦网超级订购'
            ]
        },
        {
            id:ids++,
            texts : [
                '配送方式',
                '送货上门',
                '电子发票',
                '上门自取',
                '大麦自助机换票'
            ]
        },
        {
            id:ids++,
            texts : [
                '支付方式',
                '在线支付',
                '柜台支付'
            ]
        },
        {
            id:ids++,
            texts : [
                '大麦网微信'
            ],
            url : 'img/p_code.jpg'
        },
        {
            id:ids++,
            texts : [
                '大麦触屏版'       
            ],
            url : 'img/p_code.jpg'
        },
        {
            id:ids++,
            texts : [
                '账号安全',
                '找回密码',
                '账户注册',
                '账户绑定',
                'SSL安全证书'
            ]
        },
        {
            id:ids++,
            texts : [
                '退货方式',
                '退换货以及缺货说明',
                '发票帮助',
                '订票服务条款'
            ]
        },
        {
            id:ids++,
            texts : [
                '特色服务',
                '演出订阅'
            ]
        }
    ];
    let companyss = ['公司介绍','品牌识别','企业荣誉','隐私声明','联系及合作','招聘信息','网站地图','友情链接','公司大事记']
    //存放关于公司信息
    let company=[
        {
            names : '公司名称',
            dec : '|',
            theHref : '#'
        }
    ]
    for (let i = 0; i < companyss.length; i++) {
        if(i == companyss.length - 1){
            company.push({
                names : companyss[i],
                dec : '',
                theHref : '#'
            })
        }else{
            company.push({
                names : companyss[i],
                dec : '|',
                theHref : '#'
            })
        }
        
    }
    let imgUrl = ['img/footer/chengxin.png','img/footer/dzyy.png','img/footer/pci.png','img/footer/piao.png','img/footer/siteseal_gd_3.gig','img/footer/xin.png']
    let object = {dat : data , companys : company,imgUrls : imgUrl}
    return object;
}
//体育页数据1
function tableDate(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <6; i++) {
        let user = {
            id: i + 1,
            url:[
                "img/base/big1.jpg",
                "img/base/big4.jpg",
                "img/base/big3.jpg",
                "img/base/big2.jpg",
                "img/base/big5.jpg",
                "img/base/cardimg1.jpg"
            ],
            name:Random.csentence(10),
            RMB: Random.natural(100, 500),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData','get',tableDate)

//体育页数据2
function tableDate1(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <6; i++) {
        let user = {
            sj:Random.date('yyyy-MM-dd'),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData1','get',tableDate1)

//体育页数据3

function getCitys(){
    let data = [];
    const Romdon = Mock.Romdon;
    for(let i = 0; i < 20; i ++){
        let user = {
            id: i + 1,
            url:[
                "img/base/big1.jpg",
                "img/base/big4.jpg",
                "img/base/big3.jpg",
                "img/base/big2.jpg",
                "img/base/big5.jpg",
                "img/base/cardimg1.jpg"
            ],
            name:Random.csentence(10),
            RMB: Random.natural(100, 500),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getCity','get',getCitys);

// 亲子
function tableDates(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <6; i++) {
        let user = {
            id: i + 1,
            url:["img/base/cardimg4.jpg",
            "img/base/cardimg1.jpg",
            "img/base/cardimg3.jpg",
            "img/base/cardimg4.jpg",
            "img/base/cardimg1.jpg",
            "img/base/cardimg3.jpg",
            ],
            name:Random.csentence(7),
            RMB: Random.natural(0, 10),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData','get',tableDates)


function tableDates1(){
    let data = [];
    for (let i = 0; i <6; i++) {
        let user = {
            juji:[
                    "img/base/cardimg1.jpg",                   
                    "img/base/cardimg3.jpg",                   
                    "img/base/cardimg4.jpg",
                    "img/base/calendar01.png",
                    "img/base/cardimg4.jpg",
                    "img/base/calendar01.png",
                   
        ],
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData1','get',tableDates1)

function tableDate11(){
    let data = [];
    for (let i = 0; i <1; i++) {
        let user = {
            jujizuo:["img/base/big4.jpg",
                                      
                    
        ],
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData11','get',tableDate11)



function tableDate111(){
    let data = [];
    for (let i = 0; i <1; i++) {
        let user = {
            jijuyou:["img/base/big5.jpg",
                                                
        ],
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData111','get',tableDate111)



function tableDate2(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <5; i++) {
        let user = {
            id: i + 1,
            url:["img/base/cardimg4.jpg",
            "img/base/cardimg3.jpg",                   
            "img/base/cardimg4.jpg",
            "img/base/cardimg4.jpg",
            "img/base/big5.jpg",
            ],
            //省
            add:Random.province(),
            //5字
            addd:Random.csentence(5),
            //8字
            ad:Random.csentence(8),
            //时间
            sj:Random.date('yyyy-MM-dd'),
            //市
            shi:Random.county(true),
            //数字
            RMB: Random.natural(0, 10),
            //数字
            A: Random.natural(20, 100),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData2','get',tableDate2)



function tableDate22(){
    let data = [];
    const Random = Mock.Random;
    for (let i = 0; i <6; i++) {
        let user = {
            id: i + 1,
            urll:["img/base/cardimg1.jpg",                   
            "img/base/cardimg3.jpg",                   
            "img/base/cardimg4.jpg",
            "img/base/calendar01.png",
            "img/base/cardimg4.jpg",
            "img/base/calendar01.png",
            ],
            //省
            add:Random.province(),
            //时间
            sj:Random.date('yyyy-MM-dd'),
            //数字
            RMB: Random.natural(0, 10),
            //数字
            A: Random.natural(20, 100),
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData22','get',tableDate22)





function tableDate3(){
    let data = [];
    for (let i = 0; i <1; i++) {
        let user = {
            renmenzuo:["img/base/cardimg2.jpg",
                                                
        ],
        };
        data.push(user);
    }
    return data;
}
Mock.mock('/api/getData3','get',tableDate3),



//体育页数据4


function getDats2(){
    let data = [];
    for (let i = 0; i < 6; i++) {
        let user = {
            id: i + 1,
            url:[
                "img/base/child1.png",
                "img/base/child2.png",
                "img/base/child2.png",
                "img/base/child4.png",
                "img/base/child5.png",
                "img/base/child6.png",
            ],
            name: Random.csentence(10),
            RMB: Random.natural(100, 500),
            riqi: Random.date(),
            shijian: Random.time('HH:mm:ss')
            // => "03:57:53"
        };
        data.push(user);
    }
}
// 为定义错五
// Mock.mock('/api/getData2','get',getDats2);

// // 戏曲
//猜你喜欢
Mock.mock('/api/getxiquimg', 'get', xiquimg(imgItems));
//精彩聚集 热门排行
Mock.mock('/api/getxiquimg1', 'get', xiquimg(imgItems1));
Mock.mock('/api/getxiquimg2', 'get', xiquimg(imgItems2));
Mock.mock('/api/getxiquimg3', 'get', xiquimg(imgItems3));
Mock.mock('/api/getCity','get',getCity);
// 图片地址
Mock.mock('/api/getImgUrl','post',imgUrl);
// 底部数据
Mock.mock('/api/flootersData','get',flootData);
//首頁内容
Mock.mock('/api/getCion','get',cion);
// 热播排行
Mock.mock('/api/gethotTop','get',hotTop)