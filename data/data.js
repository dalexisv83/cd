deviceLgnd = {
	3: "VCR",
	4: "Blu-ray/DVD",
	5: "Sound Bar",
	6: "Audio Receiver"
}

connectionLgnd = {
	1: "HDMI",
	2: "Component",
	3: "10-Pin Mini Din",
	4: "Composite",
	5: "S-Video",
	6: "Coaxial",
	7: "Digital Audio (Optical)",
	8: "Digital Coax Audio",
}

instructionLgnd = {
    1: "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no] | convert:connectionLegend}} cable",
    2: "Connect {{item.device[0] | convert:deviceLegend}} to TV with {{item.connection[no] | convert:connectionLegend}} cable",
    3: "Connect TV to {{item.device[0] | convert:deviceLegend}} with {{item.connection[no] | convert:connectionLegend}} cable",
    4: "Connect {{optionSel.model | ternary:'DIRECTV'}} to {{item.device[0] | convert:deviceLegend}} with {{item.connection[no] | convert:connectionLegend}} cable",
    5: "Connect {{optionSel.model | ternary:'DIRECTV'}} to {{item.device[1] | convert:deviceLegend}} with {{item.connection[no] | convert:connectionLegend}} cable",
    6: "Connect {{item.device[0] | convert:deviceLegend}} to {{item.device[1] | convert:deviceLegend}} with {{item.connection[no] | convert:connectionLegend}} cable",
    7: "Connect {{item.device[1] | convert:deviceLegend}} to TV with {{item.connection[no] | convert:connectionLegend}} cable",
    8: "Connect TV to {{item.device[1] | convert:deviceLegend}} with {{item.connection[no] | convert:connectionLegend}} cable",
}

notesLgnd = {
    1: "Cycle video source on TV to appropriate input.",
    2: "Note: VCR may need to be on for satellite signal to be view on TV. {{optionSel.model | ternary:'DIRECTV'}} and VCR will share same input.",
    3: "Cycle audio source on {{item.device[0] | convert:deviceLegend}} to appropriate input",
    4: "Cycle audio source on {{item.device[1] | convert:deviceLegend}} to appropriate input",
    5: "Note: Use ARC* HDMI if possible. Both TV and {{item.device[1] | convert:deviceLegend}} must be labeled \"ARC\" to work. TV will stay on HDMI ARC input, customer will cycle inputs on Audio Receiver to access all their device(s)",
    6: "If {{item.device[1] | convert:deviceLegend}} is not <a href=\"http://agentanswercenter.directv.com/en-us/res/programming/hdcp_copyright_prevents_viewing.html\" target=\"_blank\">HDCP compliant</a>, connect device with component cables."
}

data = [{
    "detail": false,
    "connection": [6],
    "device": [],
    "setup": [[2,1]],
    "instructions": [1]
}, {
    "detail": false,
    "connection": [4],
    "device": [],
    "setup": [[2,1]],
    "instructions": [1]
}, {
    "detail": false,
    "connection": [5,4],
    "device": [],
    "setup": [[2,1], [2,1]],
    "instructions": [1,1]
}, {
    "detail": false,
    "connection": [2],
    "device": [],
    "setup": [[2,1]],
    "instructions": [1]
}, {
    "detail": false,
    "connection": [2,8],
    "device": [],
    "setup": [[2,1], [2,1]],
    "instructions": [1,1]
}, {
    "detail": false,
    "connection": [2,7],
    "device": [],
    "setup": [[2,1], [2,1]],
    "instructions": [1,1]
}, {
    "detail": false,
    "connection": [1],
    "device": [],
    "setup": [[2,1]],
    "instructions": [1]
}, { // Start VCR
    "detail": false,
    "connection": [4,4],
    "device": [3],
    "setup": [[2,3], [3,1]],
    "instructions": [4,2],
    "notes": [1,2]
}, {
    "detail": false,
    "connection": [4,5,4,5],
    "device": [3],
    "setup": [[2,3], [2,3], [3,1], [3,1]],
    "instructions": [4,4,2,2],
    "notes": [1,2]
}, {
    "detail": false,
    "connection": [6,6],
    "device": [3],
    "setup": [[2,3], [3,1]],
    "instructions": [4,2],
    "notes": [1,2]
}, { // Start Blu-ray/DVD
    "detail": false,
    "connection": [1,1],
    "device": [4],
    "setup": [[2,1], [3,1]],
    "instructions": [1,2],
    "notes": [1]
}, {
    "detail": false,
    "connection": [2,8,2,8],
    "device": [4],
    "setup": [[2,1], [2,1], [3,1], [3,1]],
    "instructions": [1,1,2,2],
    "notes": [1]
}, {
    "detail": false,
    "connection": [2,7,2,7],
    "device": [4],
    "setup": [[2,1], [2,1], [3,1], [3,1]],
    "instructions": [1,1,2,2],
    "notes": [1]
}, {
    "detail": false,
    "connection": [4,4],
    "device": [4],
    "setup": [[2,1], [3,1]],
    "instructions": [1,2],
    "notes": [1]
}, {
    "detail": false,
    "connection": [4,5,4,5],
    "device": [4],
    "setup": [[2,1], [2,1], [3,1], [3,1]],
    "instructions": [1,1,2,2],
    "notes": [1]
}, { // Start Sound Bar
    "detail": false,
    "connection": [1,1],
    "device": [5],
    "setup": [[2,3], [3,1]],
    "instructions": [4,2],
    "notes": [1,3]
}, {
    "detail": false,
    "connection": [2,7],
    "device": [5],
    "setup": [[2,1], [2,3]],
    "instructions": [1,4],
    "notes": [1,3]
}, {
    "detail": false,
    "connection": [2,8],
    "device": [5],
    "setup": [[2,1], [2,3]],
    "instructions": [1,4],
    "notes": [1,3]
}, {
    "detail": false,
    "connection": [4,4],
    "device": [5],
    "setup": [[2,1], [2,3]],
    "instructions": [1,4],
    "notes": [1,3]
}, { // Start Audio Receiver
    "detail": false,
    "connection": [1,1],
    "device": [6],
    "setup": [[2,3], [3,1]],
    "instructions": [4,2],
    "notes": [1,3,5]
}, {
    "detail": false,
    "connection": [2,7],
    "device": [6],
    "setup": [[2,1], [2,3]],
    "instructions": [1,4],
    "notes": [1,3]
}, {
    "detail": false,
    "connection": [2,8],
    "device": [6],
    "setup": [[2,1], [2,3]],
    "instructions": [1,4],
    "notes": [1,3]
}, {
    "detail": false,
    "connection": [4,4],
    "device": [6],
    "setup": [[2,1], [2,3]],
    "instructions": [1,4],
    "notes": [1,3]
}, { // Start Blu-ray/DVD + Audio Receiver
    "detail": false,
    "connection": [1,1,1],
    "device": [4,6],
    "setup": [[2,4], [3,4], [4,1]],
    "instructions": [5,6,7],
    "notes": [1,4,5,6]
}, {
    "detail": false,
    "connection": [2,7,2,7,7],
    "device": [4,6],
    "setup": [[2,1], [2,4], [3,1], [3,4], [1,4]],
    "instructions": [1,5,2,6,8],
    "notes": [1,4]
}, {
    "detail": false,
    "connection": [2,8,2,8,8],
    "device": [4,6],
    "setup": [[2,1], [2,4], [3,1], [3,4], [1,4]],
    "instructions": [1,5,2,6,8],
    "notes": [1,4]
}, { // Start Blu-ray/DVD + Sound Bar
    "detail": false,
    "connection": [1,1,1],
    "device": [4,5],
    "setup": [[2,4], [3,4], [4,1]],
    "instructions": [5,6,7],
    "notes": [1,4,5,6]
}, {
    "detail": false,
    "connection": [2,7,2,7,7],
    "device": [4,5],
    "setup": [[2,1], [2,4], [3,1], [3,4], [1,4]],
    "instructions": [1,5,2,6,8],
    "notes": [1,4]
}, {
    "detail": false,
    "connection": [2,8,2,8,8],
    "device": [4,5],
    "setup": [[2,1], [2,4], [3,1], [3,4], [1,4]],
    "instructions": [1,5,2,6,8],
    "notes": [1,4]
}]

receiverData = [{
    "model": "D11",
    "compatible": {
        1: false,
        2: false,
        3: false,
        4: true,
        5: true,
        6: true,
        7: false,
        8: false
    }
}, {
    "model": "D12",
    "CCK": true,
    "compatible": {
        1: false,
        2: false,
        3: false,
        4: true,
        5: true,
        6: true,
        7: false,
        8: false
    }
}, {
    "model": "HR34",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: false,
        4: true,
        5: true,
        6: false,
        7: true,
        8: true
    }
}, {
    "model": "HR44",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: false,
        4: true,
        5: false,
        6: false,
        7: true,
        8: true
    }
}, {
    "model": "HR54",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: false,
        4: true,
        5: false,
        6: false,
        7: true,
        8: true
    }
}, {
    "model": "C31",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: true,
        4: true,
        5: false,
        6: false,
        7: false,
        8: true
    }
}, {
    "model": "C41",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: true,
        4: true,
        5: false,
        6: false,
        7: false,
        8: true
    }
}, {
    "model": "C51",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: true,
        4: true,
        5: false,
        6: false,
        7: false,
        8: true
    }
}, {
    "model": "C61",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: true,
        4: true,
        5: false,
        6: false,
        7: false,
        8: true
    }
}, {
    "model": "C61K",
    "CCK": true,
    "compatible": {
        1: true,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: true,
        8: true
    }
}, {
    "model": "H20",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: false,
        4: true,
        5: true,
        6: false,
        7: true,
        8: false
    }
}, {
    "model": "H21",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: false,
        4: true,
        5: true,
        6: false,
        7: true,
        8: true
    }
}, {
    "model": "H23",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: false,
        4: true,
        5: true,
        6: false,
        7: true,
        8: true
    }
}, {
    "model": "H24",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: false,
        4: true,
        5: false,
        6: false,
        7: false,
        8: true
    }
}, {
    "model": "H25",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: true,
        4: true,
        5: false,
        6: false,
        7: false,
        8: true
    }
}, {
    "model": "H44",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: true,
        4: true,
        5: false,
        6: false,
        7: false,
        8: true
    }
}, {
    "model": "HR20",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: false,
        4: true,
        5: true,
        6: false,
        7: true,
        8: true
    }
}, {
    "model": "HR21",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: false,
        4: true,
        5: true,
        6: false,
        7: true,
        8: true
    }
}, {
    "model": "HR22",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: false,
        4: true,
        5: true,
        6: false,
        7: true,
        8: true
    }
}, {
    "model": "HR23",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: false,
        4: true,
        5: true,
        6: false,
        7: true,
        8: true
    }
}, {
    "model": "HR24",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: false,
        4: true,
        5: true,
        6: false,
        7: true,
        8: true
    }
}, {
    "model": "R15",
    "compatible": {
        1: false,
        2: false,
        3: false,
        4: true,
        5: true,
        6: true,
        7: true,
        8: false
    }
}, {
    "model": "R16",
    "CCK": true,
    "compatible": {
        1: false,
        2: false,
        3: false,
        4: true,
        5: true,
        6: true,
        7: true,
        8: false
    }
}, {
    "model": "R22",
    "CCK": true,
    "compatible": {
        1: true,
        2: true,
        3: false,
        4: true,
        5: true,
        6: false,
        7: true,
        8: true
    }
}, {
    "model": "TiVo",
    "compatible": {
        1: true,
        2: true,
        3: false,
        4: true,
        5: true,
        6: false,
        7: true,
        8: true
    }
}//, {
//     "model": "HG1X",
//     "compatible": {
//         1: true,
//         2: true,
//         3: false,
//         4: true,
//         5: true,
//         6: false,
//         7: true,
//         8: true
//     }
//}
]
