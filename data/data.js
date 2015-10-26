data = [{
    "detail": false,
    "connection": ["Coaxial"],
    "device": [],
    "setup": [[2,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable."
    ]
}, {
    "detail": false,
    "connection": ["Composite/RCA"],
    "device": [],
    "setup": [[2,1]]
}, {
    "detail": false,
    "connection": ["S-Video", "Composite/RCA"],
    "device": [],
    "setup": [[2,1], [2,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable.",
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable."
    ]
}, {
    "detail": false,
    "connection": ["S-Video"],
    "device": [],
    "setup": [[2,1]]
}, {
    "detail": false,
    "connection": ["Component/RGB/YPrPb"],
    "device": [],
    "setup": [[2,1]]
}, {
    "detail": false,
    "connection": ["Component/RGB/YPrPb", "Digital Coax Audio"],
    "device": [],
    "setup": [[2,1], [2,1]]
}, {
    "detail": false,
    "connection": ["Component/RGB/YPrPb", "Digital Audio (Optical)"],
    "device": [],
    "setup": [[2,1], [2,1]]
}, {
    "detail": false,
    "connection": ["HDMI"],
    "device": [],
    "setup": [[2,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable."
    ]
}, {
    "detail": false,
    "connection": ["Composite/RCA", "Composite/RCA"],
    "device": ["VCR"],
    "setup": [[2,1], [3,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable.",
        "Connect {{item.device[0]}} to TV with {{item.connection[no]}} cable."
    ]
}, {
    "detail": false,
    "connection": ["HDMI", "HDMI", "HDMI"],
    "device": ["Blu-ray", "Audio Receiver"],
    "setup": [[2,1], [3,1], [1,4]]
}]

receiverData = [{
    "model": "D11",
    "compatible": {
        "HDMI": false,
        "Component/RGB/YPrPb": false,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": true,
        "Digital Audio (Optical)": false,
        "Digital Coax Audio ": false
    }
}, {
    "model": "D12",
    "compatible": {
        "HDMI": false,
        "Component/RGB/YPrPb": false,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": true,
        "Digital Audio (Optical)": false,
        "Digital Coax Audio": false
    }
}, {
    "model": "HR34",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": true,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "HR44",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": true,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "C31",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": "Via 10-Pin Mini Din",
        "10-Pin Mini Din": true,
        "Composite/RCA": false,
        "S-Video": false,
        "Coaxial": false,
        "Digital Audio (Optical)": false,
        "Digital Coax Audio": true
    }
}, {
    "model": "C41",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": "Via 10-Pin Mini Din",
        "10-Pin Mini Din": true,
        "Composite/RCA": false,
        "S-Video": false,
        "Coaxial": false,
        "Digital Audio (Optical)": false,
        "Digital Coax Audio": true
    }
}, {
    "model": "H20",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": true,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": false
    }
}, {
    "model": "H21",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": true,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "H23",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": true,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "H24",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": true,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": false,
        "Coaxial": false,
        "Digital Audio (Optical)": false,
        "Digital Coax Audio": true
    }
}, {
    "model": "H25",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": "Via 10-Pin Mini Din",
        "10-Pin Mini Din": true,
        "Composite/RCA": true,
        "S-Video": false,
        "Coaxial": false,
        "Digital Audio (Optical)": false,
        "Digital Coax Audio": true
    }
}, {
    "model": "HR20",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": true,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "HR21",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": true,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "HR22",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": true,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "HR23",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": true,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "HR24",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": true,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "R15",
    "compatible": {
        "HDMI": false,
        "Component/RGB/YPrPb": false,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": true,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": false
    }
}, {
    "model": "R16",
    "compatible": {
        "HDMI": false,
        "Component/RGB/YPrPb": false,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": true,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": false
    }
}, {
    "model": "TiVo",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": true,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "HG1X",
    "compatible": {
        "HDMI": true,
        "Component/RGB/YPrPb": true,
        "10-Pin Mini Din": false,
        "Composite/RCA": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}]


shorts = {"audio":"audio receiver",
    "composite":"composite/rca",
    "component":"component/rgb/yprpb",
    "digitalcoax":"digital coax audio",
    "digitalaudio":"digital audio (optical)"};