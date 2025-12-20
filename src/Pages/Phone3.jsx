import React, { useEffect, useState } from 'react'
import { MenuContext } from '../App'
import { useContext } from 'react'
import phone3Hero from "../assets/phone3-assets/phone3.jpg"
import Footer from '../components/Footer'
import { Link } from 'react-router'
import glyphinterVideo from "../assets/phone3-assets/videos/glyph_interface.mp4"
import essentialVideo from "../assets/phone3-assets/videos/essential.mp4"
import cameraVideo from "../assets/phone3-assets/videos/pro_camera.mp4"
import osvideo from "../assets/phone3-assets/videos/nothingos.mp4"

import design1 from "../assets/phone3-assets/design.jpg"
import design2 from "../assets/phone3-assets/design_back2.jpg"
import design3 from "../assets/phone3-assets/design_back3.jpg"
import performancePic from "../assets/phone3-assets/performance.jpg"
import specsPic from "../assets/phone3-assets/specs.svg"
import SpecBoxImg from '../assets/phone3-assets/specbox1.jpg'
import everythingpic from "../assets/phone3-assets/everything-you-need.jpg"



import truelensPic from "../assets/phone3-assets/truelens.jpg"
import displayPic from "../assets/phone3-assets/display.png"
import cameraPic from "../assets/phone3-assets/camera.jpg"
import mirrorPic from "../assets/phone3-assets/glyph_mirror.jpg"

import boxIcon from "../assets/phone3-assets/icons/box-icon.svg";
import dimensionIcon from "../assets/phone3-assets/icons/dimension-icon.svg";
import opIcon from "../assets/phone3-assets/icons/op-icon.svg"
import sensorIcon from "../assets/phone3-assets/icons/sensor-icon.svg"
import bluetoothIcon from "../assets/phone3-assets/icons/bluetooth-icon.svg"
import audioIcon from "../assets/phone3-assets/icons/audio-icon.svg"
import mediaIcon from "../assets/phone3-assets/icons/media-icon.svg"
import batteryIcon from "../assets/phone3-assets/icons/battery-icon.svg"
import displayIcon from "../assets/phone3-assets/icons/display-icons.svg"
import cameraIcon from "../assets/phone3-assets/icons/camera-icon.svg"
import processorIcon from "../assets/phone3-assets/icons/processor-icon.svg"
import colorIcon from "../assets/phone3-assets/icons/colors-icon.svg"
import closeIcon from "../assets/phone3-assets/icons/close-svgrepo-com.svg"
import arrow from "../assets/phone3-assets/icons/arrow.svg"

//phone colors
import whitephone from "../assets/phone3-assets/phone3-white-icon.png"
import blackphone from "../assets/phone3-assets/phone3-black-icon.png"


//buy phone icons
import buyphoneinterfaceIcon from "../assets/phone3-assets/icons/buyphone-interface.svg"
import buyphonecameraIcon from "../assets/phone3-assets/icons/buyphone-camera.svg"
import buyphonesearchIcon from "../assets/phone3-assets/icons/buyphone-search.svg"


//gsap imports
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

//others section images
import o1 from "../assets/phone3-assets/others1.jpg"
import o2 from '../assets/phone3-assets/others2.jpg'
import o3 from "../assets/phone3-assets/others3.jpg"

const Phone3 = () => {
    const menu = useContext(MenuContext)
    const [prevPosition, changePosition] = useState(window.pageYOffset);
    const [subMenuVis, updateSubmenuVis] = useState(true)
    const [showSpec, specVisibility] = useState(false)
    useEffect(() => {
        function handleScroll() {
            let currentPosition = window.pageYOffset;
            if (currentPosition > prevPosition) {
                console.log("page down")
                changePosition(currentPosition);
                updateSubmenuVis(false)

            } else {
                console.log("page up")
                changePosition(currentPosition)
                updateSubmenuVis(true)
            }

        }

        try {
            window.addEventListener("scroll", handleScroll);
        }
        catch (err) {
            console.log("something went wrong")
        }

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })
    return (
        <>
            <div className={menu || showSpec ? "home-control" : "home"}>
                <div className=' phone3-hero'>
                    <HeroBg img={phone3Hero} />
                    <SpecBox specVisibility={specVisibility} showSpec={showSpec} />
                    <EssentialPc />
                    <StackedCardsPC />
                    <GlpyhInterfacePc />
                    <PerformancePc />
                    <ProCameraPC />
                </div>

                <BuyPhone3 subMenuVis={subMenuVis} />
                <div className='pc-sub-widgets-box'>
                    <PcSubWidgetsBox />
                </div>
                <div className='mob-sub-widgets-box'>
                    <MobSubWidgets specVisibility={specVisibility} showSpec={showSpec} />
                </div>
                <Phone3Others />
                {
                    showSpec && <Phone3Specs specVisibility={specVisibility} />
                }

                <Footer />
            </div>

        </>




    )
}

export default Phone3

const HeroBg = (props) => {
    return (
        <div className='w-full h-[120vh]'>
            <img src={props.img} alt="" className='w-full h-full object-cover' />
        </div>
    )
}

const BuyPhone3 = ({ subMenuVis }) => {
    const [color, changeColor] = useState("white");
    const [size, changeSize] = useState("12+256gb");
    const [colorDialogue, updateColorDialogue] = useState(false)
    const [sizeDialogue, updateSizeDialogue] = useState(false)
    return (
        <div className={subMenuVis ? " buy-phone3" : " hide-phone3"}>
            <div className='flex w-full py-2  border justify-between'>
                <div className=' h-full text-slate-200 flex flex-col justify-between items-start gap-[45px]'>
                    <h2 className='capitalize font-medium text-[1.05rem]'>phone (3)</h2>
                    <ul className='uppercase text-[0.7rem] md:text-[0.8rem] tracking-wider flex flex-col gap-2'>
                        <li className='flex items-center gap-2'>
                            <span className='block w-[1.2rem] h-[1.2rem] '>
                                <img src={buyphoneinterfaceIcon} alt="" />
                            </span>
                            new GLYPH interface
                        </li>
                        <li className='flex items-center gap-2 '>
                            <span className='block w-[1.2rem] h-[1.2rem]  '>
                                <img src={buyphonesearchIcon} alt="" />
                            </span>
                            new essential search</li>
                        <li className='flex justify-center items-center gap-2 '>
                            <span className='block w-[1.2rem] h-[1.2rem] '>
                                <img src={buyphonecameraIcon} alt="" />
                            </span>
                            four 50MP cameras system
                        </li>
                    </ul>
                </div>
                <div className='w-[35%] h-[145px] border'>
                    <img src={color === "white" ? whitephone : blackphone} alt="" className='w-full h-full object-contain' />
                </div>
            </div>
            <div className='w-full  relative flex justify-between uppercase font-medium'>
                <div className='w-[49%] py-3  bg-zinc-600 relative grid place-items-center text-slate-200 rounded-[7px] cursor-pointer text-[0.9rem] phone3-options' onClick={() => updateColorDialogue(!colorDialogue)}>
                    <p >{color}</p>

                    {
                        colorDialogue &&
                        <div className='w-[100%]  phone3-dialogue overflow-hidden text-[0.8rem]' >
                            <p className='w-full pl-3 py-[5px] hover:bg-zinc-400 ' onClick={() => changeColor("white")}>white</p>
                            <p className='w-full pl-3 py-[5px] hover:bg-zinc-400 ' onClick={() => changeColor("black")}>black</p>
                        </div>
                    }
                </div>


                <div className='w-[49%] p-3  bg-zinc-600 relative rounded-[7px] grid place-items-center text-slate-200 cursor-pointer  phone3-options text-[0.9rem] ' onClick={() => updateSizeDialogue(!sizeDialogue)}>
                    <p >{size}</p>
                    {
                        sizeDialogue &&
                        <div className='w-[100%] py-2 phone3-size pl-3 text-[0.8rem] hover:bg-zinc-400  ' onClick={() => {
                            changeSize(size === "12+256gb" ? "16+512gb" : "12+256gb")
                        }}>
                            {size === "12+256gb" ? "16+512gb" : "12+256gb"}
                        </div>
                    }
                </div>
            </div>

            {/* buy button section*/}
            <Link className='w-full py-3 mt-2 bg-zinc-100  grid place-items-center rounded-[7px] uppercase text-[0.9rem] font-semibold hover:bg-zinc-300'>
                flipkart
            </Link>
        </div>
    )
}

const SpecBox = ({ specVisibility, showSpec }) => {
    return (
        <div className='spec-box pc-widgets' onClick={() => specVisibility(!showSpec)}>
            <div className='w-full h-full rounded-[10px] overflow-hidden'>
                <img src={specsPic} alt="" className='w-full h-full object-contain' />
            </div>
        </div>
    )
}

{/* pc widgets starts*/ }
const EssentialPc = () => {
    return (
        <div className='essential-box pc-widgets '>
            <div className='w-full h-full rounded-[10px] overflow-hidden'>
                <video src={essentialVideo} muted={true} loop={true} className='w-full h-full object-cover ' autoPlay={true} />
            </div>
        </div>
    )
}

const StackedCardsPC = () => {
    return (
        <div className='stacked-card-pc pc-widgets'>
            <div className='stacked-card1 overflow-hidden'>
                <img src={design1} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='stacked-card2 overflow-hidden'>
                <img src={design2} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='stacked-card3 overflow-hidden'>
                <img src={design3} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

const GlpyhInterfacePc = () => {
    return (
        <div className='glyph-inter-pc pc-widgets'>
            <div className='w-full h-full rounded-[10px] overflow-hidden'>
                <video src={glyphinterVideo} muted={true} loop={true} className='w-full h-full object-cover ' autoPlay={true} />
            </div>

        </div>
    )
}
const PerformancePc = () => {
    return (
        <div className='performance-pc pc-widgets'>
            <div className='w-full h-full rounded-[10px] overflow-hidden'>
                <img src={performancePic} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}
const DisplayPC = () => {
    return (
        <div className='display-pc pc-widgets '>
            <div className='w-full h-full rounded-[10px] overflow-hidden'>
                <img src={displayPic} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}
const CameraPc = () => {
    return (
        <div className='camera-pc pc-widgets'>
            <div className='w-full h-full rounded-[10px] overflow-hidden'>
                <img src={cameraPic} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}
const EverythingYouNeedPC = () => {
    return (
        <div className='everything-pc pc-widgets'>
            <div className='w-full h-full rounded-[10px] overflow-hidden'>
                <img src={everythingpic} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}
const NothingOsPc = () => {
    return (
        <div className='nothing-os-pc pc-widgets'>
            <div className='w-full h-full rounded-[10px] overflow-hidden'>
                <video src={osvideo} muted={true} loop={true} className='w-full h-full object-cover ' autoPlay={true} />
            </div>
        </div>
    )
}
const GlpyhMirrorPC = () => {
    return (
        <div className='glyph-mirror-pc pc-widgets'>
            <div className='w-full h-full rounded-[10px] overflow-hidden'>
                <img src={mirrorPic} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}
const TrueLensPc = () => {
    return (
        <div className='true-lens-pc pc-widgets'>
            <div className='w-full h-full overflow-hidden rounded-[10px]'>
                <img src={truelensPic} alt="" className='w-full h-full object-cover' />
            </div>

        </div>
    )
}
const ProCameraPC = () => {
    return (
        <div className='pro-camera-pc pc-widgets'>
            <div className='w-full h-full rounded-[10px] overflow-hidden'>
                <video src={cameraVideo} muted={true} loop={true} className='w-full h-full object-cover ' autoPlay={true} />
            </div>
        </div>
    )
}
const PcSubWidgetsBox = () => {
    return (
        <div className='w-full h-[110vh] bg-neutral-800 relative'>
            <DisplayPC />
            <CameraPc />
            <EverythingYouNeedPC />
            <NothingOsPc />
            <GlpyhMirrorPC />
            <TrueLensPc />
        </div>
    )
}
{/* pc widgets ends*/ }




const Phone3Specs = ({ specVisibility }) => {
    const specData = [
        {
            id: 0,
            title: "in th box",
            picURL: "",
            icon: boxIcon
        },
        {
            id: 1,
            title: "colors",
            picURL: null,
            data: [
                {
                    colors: ["white", "black"],
                },
                {
                    capacity: ["12+128gb", "12+256gb"]
                }
            ],
            icon: colorIcon
        },
        {
            id: 2,
            title: "processor",
            subtitle: "Qualcom snapdragon",
            picURL: "",
            data: [
                {
                    cpu: ["Qualcomm Snapdragon 8S Gen 4", "4 nm TSMC process", "Qualcomm® Kryo™, 8-core, up to 3.21 GHz", "1 Prime core, up to 3.2 GHz (Cortex-X4)"],
                },
                {
                    gpu: ["Qualcomm® Adreno™ 825"]
                },
                {
                    npu: ["Qualcomm® Hexagon™ NPU", "Qualcomm® AI Engine"]
                },
                {
                    isp: ["Qualcomm Spectra™ 18-bit Triple AI ISP"]
                }
            ],
            icon: processorIcon
        },
        {
            id: 3,
            title: "dimension",
            picURL: "",
            data: [
                {
                    height: ["160mm"],
                },
                {
                    width: ["79mm"]
                },
                {
                    depth: ["8.9mm"]
                }
            ],
            icon: dimensionIcon
        },
        {
            id: 4,
            title: "camera",
            picURL: "",
            data: [
                {
                    title2: "main camera",
                    resolution: "50mp",
                    apperture: "f/0.55",
                    sensor: "1/1.3",
                    features: [
                        "OIS & EIS",
                        "Auto focus, 2x2 OCL PDAF",
                        "2x in-sensor zoom"
                    ]
                },
                {
                    title2: "periscope camera",
                    resolution: "50mp",
                    apperture: "f/0.55",
                    sensor: "1/1.3",
                    features: [
                        "OIS & EIS",
                        "Auto focus, 2x2 OCL PDAF",
                        "2x in-sensor zoom"
                    ]
                },
                {
                    title2: "ultra wide camera",
                    resolution: "50mp",
                    apperture: "f/2.2",
                    sensor: "1/2.67",
                    features: [
                        "8.2 degree fov",

                    ]
                },
                {
                    title2: "front camera",
                    resolution: "50mp",
                    apperture: "f/2.2",
                    sensor: "1/2.67",
                    features: [
                        "114 degree fov",

                    ]
                }

            ],
            icon: cameraIcon
        },
        {
            id: 5,
            title: "display",
            picURL: "",
            data: [
                {
                    title2: "display",
                    size: "6.67 amoled",
                    screenmaterial: "cornering glorilla glass",
                    resolution: "1260 x 2800",
                    color_depth: "10-bit"

                },
                {
                    title2: "brightness",
                    Peakbrightness: "4500 nits",
                    outdoor_brightness: "1600 nits",
                    Typical_brightness: "800 nits",

                },
                {
                    title2: "refresh rate",
                    Adaptive_refresh_rate: "120 hz",
                    Touch_sampling_rate: "1000 hz"


                }

            ],
            icon: displayIcon
        },
        {
            id: 6,
            title: "battery & charging",
            picURL: "",
            data: [
                {
                    colors: ["white", "black"],
                },
                {
                    capacity: ["12+128gb", "12+256gb"]
                }
            ],
            icon: batteryIcon
        },
        {
            id: 7,
            title: "multimedia",
            picURL: "",
            data: [
                {
                    "Audio Supported Formats": ["Playback: MP3, AAC, AAC+, WMA, AMR-NB, AMR-WB, WAV, FLAC, APE, OGG, MID, M4A, IMY", "Recording: WAV, AAC, AMR"],
                },
                {
                    "Video Supported Formats": ["Playback: MKV, MOV, MP4, H.265 (HEVC), AVI, WMV, TS, 3GP, FLV, WEBM ", "Recording: MP4"]
                },
                {
                    "Image Supported Formats": ["Playback: JPEG, PNG, BMP, GIF, WEB, HEIF, HEIC, DNG", "Output: JPEG, DNG"]
                }
            ],
            icon: mediaIcon
        },
        {
            id: 8,
            title: "audio",
            picURL: "",
            data: [
                {
                    "Audio": ["3 high-definition mics", "Symmetric stereo speakers"],
                },

            ],
            icon: audioIcon
        },
        {
            id: 9,
            title: "conectivity",
            picURL: "",
            data: [
                {
                    "sim card type": ["Nano-SIM (4FF), Dual SIM"],
                },
                {
                    "e sim": ["support"]
                },
                {
                    "sim mode": ["Dual SIM, 4G/5G DSDS/DRDSDS, CSFB/VOLTE/VONR "]
                },
                {
                    "2g gsm": ["GSM 850, 900, DCS, PCS"]
                },
                {
                    "3G UMTS (WCDMA) bands": ["UMTS B1, 2, 4, 5, 6, 8, 19"]
                },
                {
                    "4G LTE bands": ["1, 2, 3, 4, 5, 7, 8, 12, 17, 18, 19, 20, 25, 26, 28, 30, 34, 38, 39, 40, 41, 42, 48, 66, 71 "]
                },
                {
                    "5G NR bands": ["n1, n2, n3, n5, n7, n8, n12, n20, n25, n28, n30, n38, n40, n41, n48, n66, n71, n77, n78 - SA/NSA "]
                },
                {
                    "Wi-Fi": ["Wi-Fi 7, 802.11 a/b/g/n/ac/ax/be, 2.4G/5G/6G Tri-band, 2x2 MIMO and MU-MIMO, Wi-Fi Direct, Hotspot "]
                },
                {
                    "Bluetooth": ["6.0"]
                },
                {
                    "Location": ["L1+L5 dual-band A-GPS, GLONASS, BDS, GALILEO, QZSS, NavIC and SBAS"]
                },
                {
                    "nfc": ["support"]
                }
            ],
            icon: bluetoothIcon
        },
        {
            id: 10,
            title: "sensor",
            picURL: "",
            data: [
                {
                    "sim card type": ["Nano-SIM (4FF), Dual SIM"],
                },
                {
                    "e sim": ["support"]
                },
                {
                    "sim mode": ["Dual SIM, 4G/5G DSDS/DRDSDS, CSFB/VOLTE/VONR "]
                },
                {
                    "2g gsm": ["GSM 850, 900, DCS, PCS"]
                },
                {
                    "3G UMTS (WCDMA) bands": ["UMTS B1, 2, 4, 5, 6, 8, 19"]
                },
                {
                    "4G LTE bands": ["1, 2, 3, 4, 5, 7, 8, 12, 17, 18, 19, 20, 25, 26, 28, 30, 34, 38, 39, 40, 41, 42, 48, 66, 71 "]
                },
                {
                    "5G NR bands": ["n1, n2, n3, n5, n7, n8, n12, n20, n25, n28, n30, n38, n40, n41, n48, n66, n71, n77, n78 - SA/NSA "]
                },
                {
                    "Wi-Fi": ["Wi-Fi 7, 802.11 a/b/g/n/ac/ax/be, 2.4G/5G/6G Tri-band, 2x2 MIMO and MU-MIMO, Wi-Fi Direct, Hotspot "]
                },
                {
                    "Bluetooth": ["6.0"]
                },
                {
                    "Location": ["L1+L5 dual-band A-GPS, GLONASS, BDS, GALILEO, QZSS, NavIC and SBAS"]
                },
                {
                    "nfc": ["support"]
                }
            ],
            icon: sensorIcon
        },
        {
            id: 9,
            title: "operating system",
            picURL: "",
            data: [
                {
                    "operating syste,": ["Nothing OS 4 powered by Android 16"],
                },
                {
                    "software support": ["5 years of Android updates", "7 years of security patches", "*The Nothing Phone (3) will get updates for 7 years starting from when the device first became available on nothing.tech. This includes five years of Android updates and seven years of security updates in addition to corrective and functionality updates."]
                },

            ],
            icon: opIcon
        }



    ]
    const [position, changePosition] = useState(0);

    function handleClick() {

        specVisibility(false)
    }
    function handleExpansion(index) {
        if (position !== index) {
            changePosition(index)
        }
        else {
            changePosition(-1)
        }

    }
    return (
        <div className='phone3-specs' onClick={() => handleClick()}>
            <div className='w-[90%] md:w-[40%] h-full mx-auto cursor-pointer border border-black p-2 phone3-specbox' onClick={(e) => e.stopPropagation()}>
                {/*this is spec bar section */}
                <div className='w-full py-2 spec-title-bar mb-[3px] flex items-center justify-center relative text-slate-200 uppercase'>
                    <span className='absolute left-3 w-[19px] h-[19px]  ' onClick={() => specVisibility(false)}>
                        <img src={closeIcon} alt="" className='w-full h-full object-cover' />
                    </span>
                    <p>specs</p>
                </div>
                {
                    specData.map((item, index) => {
                        return (
                            <div className='w-full  bg-slate-500  spec-child-box  text-slate-200 rounded-md' >
                                <div onClick={() => handleExpansion(index)} className='h-[45px] flex gap-1 items-center capitalize relative px-4 '>
                                    <span className='w-[20px] h-[20px]'>
                                        <img src={item.icon} alt="" className='w-full h-full object-cover' />
                                    </span>
                                    <span className='text-[1.2rem] font-medium'>{item.title}</span>
                                    <span className={`w-[20px] h-[20px] absolute right-2 ${position === index ? "phone3-arrow-down" : "phone3-arrow-up"}`}>
                                        <img src={arrow} alt="" className='w-full h-full object-cover' />
                                    </span>
                                </div>
                                {
                                    position === index ? <Phone3SpecsChildNodes index={index} item={item} /> : ""
                                }
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
const Phone3SpecsChildNodes = ({ index, item }) => {
    return (
        index === 0 ?
            <div className='w-[100%]  spec-child-ghost-box px-4 py-2'>
                <div className='w-full md:h-[400px] h-[70vw] overflow-hidden rounded-[10px] '>
                    <img src={SpecBoxImg} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='py-[10px]'>
                    <p className='py-2 capitalize'>in the box</p>
                    <ul className='text-[0.8rem] uppercase font-light'>
                        <li>Nothing phone3</li>
                        <li>Nothing Cable (c-c) 100 cm</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum.</li>
                    </ul>
                </div>
            </div> :
            item.title == "camera" || item.title == "display" ?

                <div className='  uppercase spec-child-ghost-box px-4 py-2'>
                    {

                        item.data.map((item, index) => {
                            return (
                                <div className='mb-2' key={index}>
                                    <p className='py-2 text-[0.9rem] capitalize'>{item.title2}</p>
                                    <div className=' flex text-[0.8rem]'>
                                        <span className='w-[50%]'>{Object.keys(item)[1]}</span>
                                        <span className='w-[50%]'>{item[Object.keys(item)[1]]}</span>
                                    </div>
                                    <div className=' flex  text-[0.8rem]'>
                                        <span className='w-[50%]'>{Object.keys(item)[2]}</span>
                                        <span className='w-[50%]'>{item[Object.keys(item)[2]]}</span>
                                    </div>
                                    <div className=' flex  text-[0.8rem] items-start'>
                                        <span className='w-[50%]'>{Object.keys(item)[3]}</span>
                                        <span className='w-[50%] '>{item[Object.keys(item)[3]]}</span>
                                    </div>
                                    <div className=' flex  text-[0.8rem]'>
                                        <span className='w-[50%]'>{Object.keys(item)[4]}</span>
                                        <div className=' w-[50%] '>
                                            <p className=''>{item[Object.keys(item)[4]]}</p>
                                        </div>

                                    </div>
                                    {/* {
                                        item["features"] ? 

                                            <div className='flex  text-[0.8rem]'>
                                                <p className='w-[50%]'>{Object.keys(item)[4]}</p>
                                                <div className='w-[50%] flex flex-col border'>
                                                    {
                                                        item.features.map((feature, index) => {
                                                            return (

                                                                <p>{feature}</p>

                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>:
                                            ""
                                    } */}
                                </div>
                            )
                        })
                    }
                </div> :
                <div className='w-full  spec-child-ghost-box px-4 py-2'>
                    {/* <p>{item.title}</p> */}
                    {item.subtitle ? <p>{item.subtitle}</p> : ""}
                    <div className=''>
                        {
                            item.data.map((pack, index) => {
                                let name = Object.keys(pack)[0]

                                console.log(pack[name])

                                return (
                                    <div className='flex mb-2 text-[0.8rem] uppercase' key={index}>
                                        <div className=' w-[50%] '>{name}</div>
                                        <div className='flex flex-col  w-[50%]'>
                                            {
                                                pack[name].map((i, index) => {
                                                    return (
                                                        <div className='mb-1' key={index}>
                                                            <p>{i}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>

                </div>
    )

}


const MobSubWidgets = ({ specVisibility, showSpec }) => {
    const mobMedia = [
        [
            {
                id: 0,
                title: "specs",
                url: specsPic
            },
            {
                id: 1,
                title: "performance",
                url: performancePic
            },
            {
                id: 2,
                title: "design",
                url: [design1, design2, design3]
            },
            {
                id: 3,
                title: "everything you need",
                url: everythingpic
            },
            {
                id: 4,
                title: "camera in action",
                url: cameraPic
            }
        ],
        [

            {
                id: 0,
                title: "glyph interface",
                url: glyphinterVideo,
                opacity: 1
            },
            {
                id: 1,
                title: "AMOLED display",
                url: displayPic,
                opacity: 1
            },
            {
                id: 2,
                title: "essential",
                url: essentialVideo,
                opacity: 1
            },
            {
                id: 3,
                title: "everything you need",
                url: everythingpic,
                opacity: 1
            },
            {
                id: 4,
                title: "camera in action",
                url: cameraPic,
                opacity: 0
            },
            {
                id: 5,
                title: "glyph mirror",
                url: mirrorPic,
                opacity: 1
            }
        ]
    ]
    return (
        <div className='w-[95%] h-full  mx-auto py-4 text-slate-200'>


            <div className='grid w-full h-full p-2 grid-cols-3 gap-2  text-sm '>
                {
                    mobMedia[0].map((item, index) => {
                        if (index === 2) {
                            return (
                                <div className='w-full   flex flex-col mob-sub-widgets' key={index}>
                                    <div className='w-full h-[25vw] overflow-hidden grid place-items-center relative'>
                                        <div className='mob-design-card mob-design-card1 overflow-hidden'>
                                            <img src={item.url[0]} alt="" className='h-full w-full object-cover' />
                                        </div>
                                        <div className='mob-design-card mob-design-card2 overflow-hidden'>
                                            <img src={item.url[1]} alt="" className='h-full w-full object-cover' />
                                        </div>
                                        <div className='mob-design-card mob-design-card3 overflow-hidden'>
                                            <img src={item.url[2]} alt="" className='h-full w-full object-cover' />
                                        </div>
                                    </div>
                                    <div className='text-center capitalize py-2 grid place-items-center'>{item.title}</div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className='w-full   flex flex-col mob-sub-widgets'
                                    onClick={() => { index == 0 ? specVisibility(!showSpec) : "" }} key={index}>
                                    <div className='w-full h-[25vw]  overflow-hidden rounded-lg'>
                                        <img src={item.url ? item.url : ""} alt="no pic" className='h-full w-full object-cover' />
                                    </div>
                                    <div className='text-center capitalize py-2 grid place-items-center'>{item.title}</div>
                                </div>
                            )
                        }
                    })
                }

            </div>


            {/*mid section */}
            <div className='w-full h-full  p-2 flex gap-2'>
                <div className='w-[32%]  flex flex-col '>
                    <div className='w-full h-[25vw] bg-pink-500 overflow-hidden rounded-lg'>
                        <video src={cameraVideo} loop={true} muted={true} autoPlay={true} />
                    </div>
                    <div className='text-center capitalize py-2'>A pro camera system</div>
                </div>
                <div className='w-[60%]  flex flex-col '>
                    <div className='w-full h-[45vw] bg-pink-500 overflow-hidden rounded-lg'>
                        <img src={truelensPic} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='text-center capitalize py-2'>true lens 4</div>
                </div>
            </div>

            {/*last section */}

            <div className='grid w-full h-full p-2 grid-cols-3 gap-2  text-sm text-slate-200'>
                {
                    mobMedia[1].map((item, index) => {

                        if (item.id !== 4) {
                            return (
                                <div className={`w-full   flex flex-col opacity-1`}>
                                    <div className='w-full h-[25vw]  rounded-lg overflow-hidden'>
                                        {
                                            (item.id === 0 || item.id === 2) ? <video src={item.url} muted={true} loop={true} autoPlay={true} controls={false} /> : <img src={item.url} alt="" className='w-full h-full object-cover' />
                                        }
                                    </div>
                                    <div className='text-center capitalize py-2'>{item.title}</div>
                                </div>
                            )

                        }
                        else {
                            return (
                                <div className='w-full   flex flex-col opacity-0'>
                                    <div className='w-full h-[25vw] '></div>
                                    <div className='text-center capitalize py-2'>glyph mirror</div>
                                </div>
                            )
                        }

                    })
                }
                {/* <div className='w-full  bg-red-400 flex flex-col'>
                    <div className='w-full h-[25vw] bg-blue-400'></div>
                    <div className='text-center capitalize py-2'>glyph mirror</div>
                </div>
                <div className='w-full  bg-red-400 flex flex-col'>
                    <div className='w-full h-[25vw] bg-blue-400'></div>
                    <div className='text-center capitalize py-2'>performance</div>
                </div>
                <div className='w-full  bg-red-400 flex flex-col'>
                    <div className='w-full h-[25vw] bg-blue-400'></div>
                    <div className='text-center capitalize py-2'>design</div>
                </div>
                <div className='w-full  bg-red-400 flex flex-col'>
                    <div className='w-full h-[25vw] bg-blue-400'></div>
                    <div className='text-center capitalize py-2'>everything you need</div>
                </div>
                <div className='w-full  bg-red-400 flex flex-col opacity-0'>
                    <div className='w-full h-[25vw] bg-blue-400'></div>
                    <div className='text-center capitalize py-2'> </div>
                </div>
                <div className='w-full  bg-red-400 flex flex-col'>
                    <div className='w-full h-[25vw] bg-blue-400'></div>
                    <div className='text-center capitalize py-2'>camera in action</div>
                </div> */}
            </div>
        </div>
    )
}


const Phone3Others = () => {
    gsap.registerPlugin(ScrollTrigger);


    useGSAP(() => {


        gsap.set("#orange", { clipPath: "inset(0% 0% 0% 100%)", })
        gsap.set("#blue", { clipPath: "inset(0% 0% 0% 100%)", })


        gsap.to("#orange",
            {
                clipPath: "inset(0% 0% 0% 0%)",
                snap: true,
                scrollTrigger: {
                    trigger: "#orange",
                    start: "top -10%",
                    end: "bottom bottom",
                    scrub: 2,

                },
                onComplete: () => {
                    gsap.to("#blue",
                        {
                            clipPath: "inset(0% 0% 0% 0%)",
                            snap: true,
                            scrollTrigger: {
                                trigger: "#blue",
                                start: "top top",
                                end: "bottom bottom",
                                scrub: 2
                            }
                        }
                    )
                }
            })


    }, [])
    return (
        <div className='phone-3-others'>
            <div className='phone3-others-parent'>
                <div className=' phone3-others-photo' id="green">
                    <img src={o1} className='w-full h-full object-cover object-center' />
                </div>
                <div className=' phone3-others-photo' id="orange">
                    <img src={o2} className='w-full h-full object-cover object-center' />
                </div>
                <div className=' phone3-others-photo' id="blue">
                    <img src={o3} className='w-full h-full object-cover object-center' />
                </div>

            </div>
        </div>
    )
}