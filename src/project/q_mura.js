export default {
    "unit": "cm",
    "layers": {
        "Hy99norQg": {
            "id": "Hy99norQg",
            "altitude": 300,
            "order": 0,
            "opacity": 1,
            "name": "layer Hy99norQg",
            "visible": true,
            "vertices": {},
            "lines": {},
            "holes": {},
            "areas": {},
            "items": {},
            "selected": {"vertices": [], "lines": [], "holes": [], "areas": [], "items": []}
        },
        "layer-1": {
            "id": "layer-1",
            "altitude": 0,
            "order": 0,
            "opacity": 1,
            "name": "default",
            "visible": true,
            "vertices": {
                "ByMlhF3oHXg": {
                    "id": "ByMlhF3oHXg",
                    "x": 297,
                    "y": 1802,
                    "prototype": "vertices",
                    "selected": false,
                    "lines": ["Sybg3K3jr7e", "SyBqhsHmg"],
                    "areas": ["B1eSqnsrQe"]
                },
                "B17e2t3srXl": {
                    "id": "B17e2t3srXl",
                    "x": 901,
                    "y": 1802,
                    "prototype": "vertices",
                    "selected": false,
                    "lines": ["Sybg3K3jr7e", "S1_x92iSXl"],
                    "areas": ["B1eSqnsrQe"]
                },
                "SyYxc3sBQg": {
                    "id": "SyYxc3sBQg",
                    "x": 901,
                    "y": 1399,
                    "prototype": "vertices",
                    "selected": false,
                    "lines": ["S1_x92iSXl", "H1Xq3sB7g"],
                    "areas": ["B1eSqnsrQe"]
                },
                "Sye7c3sBme": {
                    "id": "Sye7c3sBme",
                    "x": 297,
                    "y": 1399,
                    "prototype": "vertices",
                    "selected": false,
                    "lines": ["H1Xq3sB7g", "SyBqhsHmg"],
                    "areas": ["B1eSqnsrQe"]
                }
            },
            "lines": {
                "Sybg3K3jr7e": {
                    "id": "Sybg3K3jr7e",
                    "type": "wall",
                    "prototype": "lines",
                    "vertices": ["ByMlhF3oHXg", "B17e2t3srXl"],
                    "holes": [],
                    "selected": false,
                    "properties": {
                        "height": {"length": 300},
                        "thickness": {"length": 20},
                        "textureA": "none",
                        "textureB": "none"
                    }
                },
                "S1_x92iSXl": {
                    "id": "S1_x92iSXl",
                    "type": "wall",
                    "prototype": "lines",
                    "vertices": ["SyYxc3sBQg", "B17e2t3srXl"],
                    "holes": [],
                    "selected": false,
                    "properties": {
                        "height": {"length": 300},
                        "thickness": {"length": 20},
                        "textureA": "none",
                        "textureB": "none"
                    }
                },
                "H1Xq3sB7g": {
                    "id": "H1Xq3sB7g",
                    "type": "wall",
                    "prototype": "lines",
                    "vertices": ["Sye7c3sBme", "SyYxc3sBQg"],
                    "holes": [],
                    "selected": false,
                    "properties": {
                        "height": {"length": 300},
                        "thickness": {"length": 20},
                        "textureA": "none",
                        "textureB": "none"
                    }
                },
                "SyBqhsHmg": {
                    "id": "SyBqhsHmg",
                    "type": "wall",
                    "prototype": "lines",
                    "vertices": ["Sye7c3sBme", "ByMlhF3oHXg"],
                    "holes": [],
                    "selected": false,
                    "properties": {
                        "height": {"length": 300},
                        "thickness": {"length": 20},
                        "textureA": "none",
                        "textureB": "none"
                    }
                }
            },
            "holes": {},
            "areas": {
                "B1eSqnsrQe": {
                    "id": "B1eSqnsrQe",
                    "type": "area",
                    "prototype": "areas",
                    "vertices": ["B17e2t3srXl", "SyYxc3sBQg", "Sye7c3sBme", "ByMlhF3oHXg"],
                    "selected": false,
                    "properties": {"patternColor": "#f5f4f4", "texture": "none"}
                }
            },
            "items": {},
            "selected": {"vertices": [], "lines": [], "holes": [], "areas": [], "items": []}
        }
    },
    "guides": {
        "h1": {
            "id": "h1",
            "type": "horizontal-streak",
            "properties": {"step": 20, "colors": ["#808080", "#ddd", "#ddd", "#ddd", "#ddd"]}
        },
        "v1": {
            "id": "v1",
            "type": "vertical-streak",
            "properties": {"step": 20, "colors": ["#808080", "#ddd", "#ddd", "#ddd", "#ddd"]}
        }
    },
    "selectedLayer": "Hy99norQg",
    "width": 3000,
    "height": 2000,
    "meta": {}
}