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
    "connection": ["Composite"],
    "device": [],
    "setup": [[2,1]]
}, {
    "detail": false,
    "connection": ["S-Video", "Composite"],
    "device": [],
    "setup": [[2,1], [2,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable.",
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable."
    ]
}, {
    "detail": false,
    "connection": ["Component"],
    "device": [],
    "setup": [[2,1]]
}, {
    "detail": false,
    "connection": ["Component", "Digital Coax Audio"],
    "device": [],
    "setup": [[2,1], [2,1]]
}, {
    "detail": false,
    "connection": ["Component", "Digital Audio (Optical)"],
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
    "connection": ["Composite", "Composite"],
    "device": ["VCR"],
    "setup": [[2,3], [3,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to VCR with {{item.connection[no]}} cable.",
        "Connect {{item.device[0]}} to TV with {{item.connection[no]}} cable.",
        "Cycle input on TV to appropriate AV input.",
        "Note: VCR may need to be on for satellite signal to be view on TV. Satellite receiver and VCR will share same AV input."
    ]
}, {
    "detail": false,
    "connection": ["Composite", "S-Video", "Composite", "S-Video"],
    "device": ["VCR"],
    "setup": [[2,3], [2,3], [3,1], [3,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to VCR with {{item.connection[no]}} cable.",
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to VCR with {{item.connection[no]}} cable.",
        "Connect {{item.device[0]}} to TV with {{item.connection[no]}} cable.",
        "Connect {{item.device[0]}} to TV with {{item.connection[no]}} cable.",
        "Cycle input on TV to appropriate AV input.",
        "Note: VCR may need to be on for satellite signal to be view on TV. Satellite receiver and VCR will share same AV input."
    ]
}, {
    "detail": false,
    "connection": ["Coaxial", "Coaxial"],
    "device": ["VCR"],
    "setup": [[2,3], [3,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to VCR with {{item.connection[no]}} cable.",
        "Connect {{item.device[0]}} to TV with {{item.connection[no]}} cable.",
        "Cycle input on TV to appropriate AV input.",
        "Note: VCR may need to be on for satellite signal to be view on TV. Satellite receiver and VCR will share same AV input."
    ]
}, {
    "detail": false,
    "connection": ["HDMI"],
    "device": ["Blu-ray/DVD"],
    "setup": [[2,1], [3,1]],
}, {
    "detail": false,
    "connection": ["Digital Coax Audio", "Component", "Digital Coax Audio", "Component"],
    "device": ["Blu-ray/DVD"],
    "setup": [[2,1], [2,1], [3,1], [3,1]],
}, {
    "detail": false,
    "connection": ["Digital Audio (Optical)", "Component", "Digital Audio (Optical)", "Component"],
    "device": ["Blu-ray/DVD"],
    "setup": [[2,1], [2,1], [3,1], [3,1]],
}, {
    "detail": false,
    "connection": ["Composite"],
    "device": ["Blu-ray/DVD"],
    "setup": [[2,1], [3,1]],
}, {
    "detail": false,
    "connection": ["Composite", "S-Video", "Composite", "S-Video"],
    "device": ["Blu-ray/DVD"],
    "setup": [[2,1], [2,1], [3,1], [3,1]],
}, {
    "detail": false,
    "connection": ["HDMI"],
    "device": ["Sound Bar"],
    "setup": [[2,3], [3,1]],
}, {
    "detail": false,
    "connection": ["Digital Coax Audio", "Component"],
    "device": ["Sound Bar"],
    "setup": [[2,3], [2,1]],
}, {
    "detail": false,
    "connection": ["Digital Audio (Optical)", "Component"],
    "device": ["Sound Bar"],
    "setup": [[2,3], [2,1]],
}, {
    "detail": false,
    "connection": ["Composite", "Composite"],
    "device": ["Sound Bar"],
    "setup": [[2,3], [2,1]],
}, {
    "detail": false,
    "connection": ["HDMI"],
    "device": ["Audio Receiver"],
    "setup": [[2,3], [3,1]],
}, {
    "detail": false,
    "connection": ["Digital Coax Audio", "Component"],
    "device": ["Audio Receiver"],
    "setup": [[2,3], [3,1]],
}, {
    "detail": false,
    "connection": ["Digital Audio (Optical)", "Component"],
    "device": ["Audio Receiver"],
    "setup": [[2,3], [3,1]],
}, {
    "detail": false,
    "connection": ["Composite", "Composite"],
    "device": ["Audio Receiver"],
    "setup": [[2,3], [3,1]],
}, {
    "detail": false,
    "connection": ["HDMI", "HDMI", "HDMI"],
    "device": ["Blu-ray/DVD", "Audio Receiver"],
    "setup": [[4,1], [2,4], [3,4]]
}]

receiverData = [{
    "model": "D11",
    "compatible": {
        "HDMI": false,
        "Component": false,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": true,
        "Digital Audio (Optical)": false,
        "Digital Coax Audio ": false
    }
}, {
    "model": "D12",
    "compatible": {
        "HDMI": false,
        "Component": false,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": true,
        "Digital Audio (Optical)": false,
        "Digital Coax Audio": false
    }
}, {
    "model": "HR34",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "HR44",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "C31",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": true,
        "Composite": false,
        "S-Video": false,
        "Coaxial": false,
        "Digital Audio (Optical)": false,
        "Digital Coax Audio": true
    }
}, {
    "model": "C41",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": true,
        "Composite": false,
        "S-Video": false,
        "Coaxial": false,
        "Digital Audio (Optical)": false,
        "Digital Coax Audio": true
    }
}, {
    "model": "H20",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": false
    }
}, {
    "model": "H21",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "H23",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "H24",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": false,
        "Coaxial": false,
        "Digital Audio (Optical)": false,
        "Digital Coax Audio": true
    }
}, {
    "model": "H25",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": true,
        "Composite": true,
        "S-Video": false,
        "Coaxial": false,
        "Digital Audio (Optical)": false,
        "Digital Coax Audio": true
    }
}, {
    "model": "HR20",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "HR21",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "HR22",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "HR23",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "HR24",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "R15",
    "compatible": {
        "HDMI": false,
        "Component": false,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": true,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": false
    }
}, {
    "model": "R16",
    "compatible": {
        "HDMI": false,
        "Component": false,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": true,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": false
    }
}, {
    "model": "TiVo",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}, {
    "model": "HG1X",
    "compatible": {
        "HDMI": true,
        "Component": true,
        "10-Pin Mini Din": false,
        "Composite": true,
        "S-Video": true,
        "Coaxial": false,
        "Digital Audio (Optical)": true,
        "Digital Coax Audio": true
    }
}]
