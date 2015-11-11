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

data = [{
    "detail": false,
    "connection": [6],
    "device": [],
    "setup": [[2,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable."
    ]
}, {
    "detail": false,
    "connection": [4],
    "device": [],
    "setup": [[2,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable."
    ]
}, {
    "detail": false,
    "connection": [5, 4],
    "device": [],
    "setup": [[2,1], [2,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable.",
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable."
    ]
}, {
    "detail": false,
    "connection": [2],
    "device": [],
    "setup": [[2,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable."
    ]
}, {
    "detail": false,
    "connection": [2, 8],
    "device": [],
    "setup": [[2,1], [2,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable.",
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable."
    ]
}, {
    "detail": false,
    "connection": [2, 7],
    "device": [],
    "setup": [[2,1], [2,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable.",
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable."
    ]
}, {
    "detail": false,
    "connection": [1],
    "device": [],
    "setup": [[2,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to TV with {{item.connection[no]}} cable."
    ]
}, {
    "detail": false,
    "connection": [4, 4],
    "device": [3],
    "setup": [[2,3], [3,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to VCR with {{item.connection[no]}} cable.",
        "Connect {{item.device[0]}} to TV with {{item.connection[no]}} cable.",
        "Cycle input on TV to appropriate AV input.",
        "Note: VCR may need to be on for satellite signal to be view on TV. Satellite receiver and VCR will share same AV input."
    ]
}, {
    "detail": false,
    "connection": [4, 5, 4, 5],
    "device": [3],
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
    "connection": [6, 6],
    "device": [3],
    "setup": [[2,3], [3,1]],
    "instructions": [
        "Connect {{optionSel.model | ternary:'DIRECTV'}} to VCR with {{item.connection[no]}} cable.",
        "Connect {{item.device[0]}} to TV with {{item.connection[no]}} cable.",
        "Cycle input on TV to appropriate AV input.",
        "Note: VCR may need to be on for satellite signal to be view on TV. Satellite receiver and VCR will share same AV input."
    ]
}, {
    "detail": false,
    "connection": [1],
    "device": [4],
    "setup": [[2,1], [3,1]],
}, {
    "detail": false,
    "connection": [8, 2, 8, 2],
    "device": [4],
    "setup": [[2,1], [2,1], [3,1], [3,1]],
}, {
    "detail": false,
    "connection": [7, 2, 7, 2],
    "device": [4],
    "setup": [[2,1], [2,1], [3,1], [3,1]],
}, {
    "detail": false,
    "connection": [4],
    "device": [4],
    "setup": [[2,1], [3,1]],
}, {
    "detail": false,
    "connection": [4, 5, 4, 5],
    "device": [4],
    "setup": [[2,1], [2,1], [3,1], [3,1]],
}, {
    "detail": false,
    "connection": [1],
    "device": [5],
    "setup": [[2,3], [3,1]],
}, {
    "detail": false,
    "connection": [8, 2],
    "device": [5],
    "setup": [[2,3], [2,1]],
}, {
    "detail": false,
    "connection": [7, 2],
    "device": [5],
    "setup": [[2,3], [2,1]],
}, {
    "detail": false,
    "connection": [4, 4],
    "device": [5],
    "setup": [[2,3], [2,1]],
}, {
    "detail": false,
    "connection": [1],
    "device": [6],
    "setup": [[2,3], [3,1]],
}, {
    "detail": false,
    "connection": [8, 2],
    "device": [6],
    "setup": [[2,3], [3,1]],
}, {
    "detail": false,
    "connection": [7, 2],
    "device": [6],
    "setup": [[2,3], [3,1]],
}, {
    "detail": false,
    "connection": [4, 4],
    "device": [6],
    "setup": [[2,3], [3,1]],
}, {
    "detail": false,
    "connection": [1, 1, 1],
    "device": [4, 6],
    "setup": [[4,1], [2,4], [3,4]]
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
    "model": "HR54",
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
    "model": "C31",
    "compatible": {
        1: true,
        2: true,
        3: true,
        4: false,
        5: false,
        6: false,
        7: false,
        8: true
    }
}, {
    "model": "C41",
    "compatible": {
        1: true,
        2: true,
        3: true,
        4: false,
        5: false,
        6: false,
        7: false,
        8: true
    }
}, {
    "model": "C51",
    "compatible": {
        1: true,
        2: true,
        3: true,
        4: false,
        5: false,
        6: false,
        7: false,
        8: true
    }
}, {
    "model": "H20",
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
}, {
    "model": "HG1X",
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
}]
