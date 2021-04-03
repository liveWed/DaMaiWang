import Mock from 'mockjs'
// 城市
function getCity() {
    let data = [];
    const Romdon = Mock.Romdon;
    for (let i = 0; i < 20; i++) {
        data[i] = Mock.mock("@city(true)")
    }
    return data;
}
// 模拟图片地址
function imgUrl() {
    let data = []
    let imgStr = 'img/base/big'
    let imgRe = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '1.jpg']
    for (let i = 0; i < imgRe.length; i++) {
        let dat = {};
        const Romdon = Mock.Random();
        dat = {

        }
        data.push()

    }
    return data;
}
// 底部数据
function flootData() {
    let ids = 0;
    let data = [
        {
            id: ids++,
            texts: [
                '订购方式',
                '在线订购',
                '电话订购',
                '上门订购',
                '大客户团体订购',
                '大麦网超级订购'
            ]
        },
        {
            id: ids++,
            texts: [
                '配送方式',
                '送货上门',
                '电子发票',
                '上门自取',
                '大麦自助机换票'
            ]
        },
        {
            id: ids++,
            texts: [
                '支付方式',
                '在线支付',
                '柜台支付'
            ]
        },
        {
            id: ids++,
            texts: [
                '大麦网微信'
            ],
            url: 'img/p_code.jpg'
        },
        {
            id: ids++,
            texts: [
                '大麦触屏版'
            ],
            url: 'img/p_code.jpg'
        },
        {
            id: ids++,
            texts: [
                '账号安全',
                '找回密码',
                '账户注册',
                '账户绑定',
                'SSL安全证书'
            ]
        },
        {
            id: ids++,
            texts: [
                '退货方式',
                '退换货以及缺货说明',
                '发票帮助',
                '订票服务条款'
            ]
        },
        {
            id: ids++,
            texts: [
                '特色服务',
                '演出订阅'
            ]
        }
    ];
    let companyss = ['公司介绍', '品牌识别', '企业荣誉', '隐私声明', '联系及合作', '招聘信息', '网站地图', '友情链接', '公司大事记']
    //存放关于公司信息
    let company = [
        {
            names: '公司名称',
            dec: '|',
            theHref: '#'
        }
    ]
    for (let i = 0; i < companyss.length; i++) {
        if (i == companyss.length - 1) {
            company.push({
                names: companyss[i],
                dec: '',
                theHref: '#'
            })
        } else {
            company.push({
                names: companyss[i],
                dec: '|',
                theHref: '#'
            })
        }

    }
    let imgUrl = ['img/footer/chengxin.png', 'img/footer/dzyy.png', 'img/footer/pci.png', 'img/footer/piao.png', 'img/footer/siteseal_gd_3.gig', 'img/footer/xin.png']
    let object = { dat: data, companys: company, imgUrls: imgUrl }
    return object;

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
// 戏曲
//猜你喜欢
Mock.mock('/api/getxiquimg', 'get', xiquimg(imgItems));
//精彩聚集 热门排行
Mock.mock('/api/getxiquimg1', 'get', xiquimg(imgItems1));
Mock.mock('/api/getxiquimg2', 'get', xiquimg(imgItems2));
Mock.mock('/api/getxiquimg3', 'get', xiquimg(imgItems3));
//   dy bottom
// 
Mock.mock('/api/getCity', 'get', getCity);
// 图片地址
Mock.mock('/api/getImgUrl', 'get', imgUrl);
// 底部数据
Mock.mock('/api/flootersData', 'get', flootData)