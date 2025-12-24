import phone3aproback from "./assets/home assests/phone3apro_back.jpg"

import cmfbuds2plusback from "./assets/home assests/cmf_buds2plus_back.jpg"
import headphone1back from "./assets/home assests/heaphone_1_back.jpg"
import phone3aback from "./assets/home assests/phone3a_back.jpg"
import cmfphone2proback from "./assets/home assests/cmfphone2pro_back.jpg"
import earopenback from "./assets/home assests/earopen_back.jpg"
import earback from "./assets/home assests/ear_back.jpg"
import ear_a_back from "./assets/home assests/ear(a)_back.jpg"
import phone2aplus_back from "./assets/home assests/phone2aplus_back.jpg"
import phone2aback from "./assets/home assests/phone2a_back.jpg"



import earopenicon from "./assets/home assests/earopen_icon.png"
import headphone1icon from "./assets/home assests/headphone_1_icon.png"
import phone3aproicon from "./assets/home assests/phone3pro_icon.png"
import phone3aicon from "./assets/home assests/phone-3a_icon.png"
import phone2aicon from "./assets/home assests/phone2a_icon.png"
import phone2aplus_icon from "./assets/home assests/phone2aplus_icon.png"
import earicon from "./assets/home assests/ear_icon.png"
import eara_icon from "./assets/home assests/ear-a_icon.png"
import cmficon from "./assets/home assests/cmf_icon.png"
import cmfbudsicon from "./assets/home assests/cmf_buds_icon.png"

//footer imports
import question from "./assets/footer assets/question-mark-svgrepo-com.svg"
import locationicon from "./assets/footer assets/location-pin-alt-svgrepo-com.svg"
import newsIcon from "./assets/footer assets/inbox-newsletter-svgrepo-com.svg"
import downIcon from "./assets/footer assets/down-arrow-5-svgrepo-com.svg"

//all products data imports
import phone3white from "./assets/all-products-assets/phones/Phone-3-white.png"
import phone3black from "./assets/all-products-assets/phones/Phone-3-black.png"
import phone3alitewhite from "./assets/all-products-assets/phones/phone3a-lite-white.png"
import phone3aliteblack from "./assets/all-products-assets/phones/phone3a-lite-black.png"
import phone3aliteblue from "./assets/all-products-assets/phones/phone3a-lite-blue.png"
import phone3aprogray from "./assets/all-products-assets/phones/Phone-3a-Pro-grey.png"
import phone3aproblack from "./assets/all-products-assets/phones/Phone-3a-Pro-black.png"
import phone3ablue from "./assets/all-products-assets/phones/Phone-3a-blue.png"
import phone3ablack from "./assets/all-products-assets/phones/Phone-3a-black.png"
import phone3awhite from "./assets/all-products-assets/phones/Phone-3a-white.png"
import phone3acomm from "./assets/all-products-assets/phones/Phone-3a-Community-Editon.png"
import cmfphone2proOrange from "./assets/all-products-assets/phones/CMF-Phone-2-Pro-Orange.png"
import cmfphone2proBlack from "./assets/all-products-assets/phones/CMF-Phone-2-Pro-black.png"
import cmfphone2proWhite from "./assets/all-products-assets/phones/CMF-Phone-2-Pro-lightgrey.png"
import cmfphone2proGreen from "./assets/all-products-assets/phones/CMF-Phone-2-Pro-Lightgreen.png"
import cmf1black from "./assets/all-products-assets/phones/CMF-Phone-1-Black.png"
import cmf1orange from "./assets/all-products-assets/phones/CMF-Phone-1-Orange.png"
import cmf1green from "./assets/all-products-assets/phones/CMF-Phone-1-Lightgreen.png"



const data = [


    {
        id: 0,
        title: "headphone(1)",
        background: headphone1back,
        icon: headphone1icon,
        subtitle: "come to play"
    },
    {
        id: 1,
        title: "phone(3a) pro",
        background: phone3aproback,
        icon: phone3aproicon,
        subtitle: "come to play"
    },
    {
        id: 2,
        title: "phone(3a)",
        background: phone3aback,
        icon: phone3aicon,
        subtitle: "come to play"
    },
    {
        id: 3,
        title: "cmf phone 2 pro",
        background: cmfphone2proback,
        icon: cmficon,
        subtitle: "come to play"
    },
    {
        id: 4,
        title: "cmf buds2 plus",
        background: cmfbuds2plusback,
        icon: cmfbudsicon,
        subtitle: "come to play"
    },
    {
        id: 4,
        title: "ear (open)",
        background: earopenback,
        icon: earopenicon,
        subtitle: "Open your world"
    },
    {
        id: 5,
        title: "ear",
        background: earback,
        icon: earicon,
        subtitle: "Sound,evolved"
    },
    {
        id: 6,
        title: "ear(a)",
        background: ear_a_back,
        icon: eara_icon,
        subtitle: "Let's play"
    },

    {
        id: 7,
        title: "phone(2a) plus",
        background: phone2aplus_back,
        icon: phone2aplus_icon,
        subtitle: "Extraordinary"
    },
    {
        id: 8,
        title: "phone(2a)",
        background: phone2aback,
        icon: phone2aicon,
        subtitle: "Powerfully unique"
    }
]

const footerData = [
    {
        url: question,
        title: "support"
    },
    {
        url: locationicon,
        title: "location"
    },
    {
        url: newsIcon,
        title: "newsletter"
    }
]


const allproductsData = {
    "phones": [
        { title: "phone 1",url:phone3white },
        { title: "phone 2",url:phone3black },
        { title: "phone 3",url:phone3alitewhite },
        { title: "phone 4",url:phone3aliteblack },
        { title: "phone 5",url:phone3aliteblue },
        { title: "phone 6",url:phone3aproblack },
        { title: "phone 7" ,url:phone3aprogray},
        { title: "phone 8",url:phone3awhite },
        { title: "phone 9",url:phone3ablack },
        { title: "phone 10",url:phone3ablue },
        { title: "phone 11",url:phone3acomm },
        {title:"phone 12",url:cmfphone2proBlack},
        {title:"phone 13",url:cmfphone2proWhite},
        {title:"phone 14",url:cmfphone2proGreen},
        {title:"phone 15",url:cmfphone2proOrange},
        {title:"phone 16",url:cmf1black},
        {title:"phone 17",url:cmf1green},
        {title:"phone 18",url:cmf1orange}
    ],
    "watches": [
        { title: "watch 1" },
        { title: "watch 2" },
        { title: "watch 3" }
    ],
    "cmf": [
        { title: "cmf 1" },
        { title: "cmf 2" },
        { title: "cmf 3" },
        { title: "cmf 4" },
        { title: "cmf 5" },
        { title: "cmf 6" },
    ],
    "accesories": [
        { title: "accesories 1" },
        { title: "accesories 1" },
        { title: "accesories 1" }
    ],
    "audio": [
        { title: "audio 1" },
        { title: "audio 2" },
        { title: "audio 3" },
        { title: "audio 4" },
        { title: "audio 5" },
        { title: "audio 6" }
    ],

    "all": [
        { title: "phone 1",url:phone3white },
        { title: "phone 2",url:phone3black },
        { title: "phone 3",url:phone3alitewhite },
        { title: "phone 4",url:phone3aliteblack },
        { title: "phone 5",url:phone3aliteblue },
        { title: "phone 6",url:phone3aproblack },
        { title: "phone 7" ,url:phone3aprogray},
        { title: "phone 8",url:phone3awhite },
        { title: "phone 9",url:phone3ablack },
        { title: "phone 10",url:phone3ablue },
        { title: "phone 11",url:phone3acomm },
        {title:"phone 12",url:cmfphone2proBlack},
        {title:"phone 13",url:cmfphone2proWhite},
        {title:"phone 14",url:cmfphone2proGreen},
        {title:"phone 15",url:cmfphone2proOrange},
        {title:"phone 16",url:cmf1black},
        {title:"phone 17",url:cmf1green},
        {title:"phone 18",url:cmf1orange},
        { title: "watch 1" },
        { title: "watch 2" },
        { title: "watch 3" },
        { title: "cmf 1" },
        { title: "cmf 2" },
        { title: "cmf 3" },
        { title: "cmf 4" },
        { title: "cmf 5" },
        { title: "cmf 6" },
         { title: "accesories 1" },
        { title: "accesories 1" },
        { title: "accesories 1" },
        { title: "audio 1" },
        { title: "audio 2" },
        { title: "audio 3" },
        { title: "audio 4" },
        { title: "audio 5" },
        { title: "audio 6" }
    ]


}
export { data, footerData, allproductsData };