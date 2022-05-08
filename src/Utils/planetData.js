const random = (a, b) => a + Math.random() * b;


const planetData = [];

const XSCALE = 4;
const ZSCALE = 2;

planetData.push({ //MERCURY
  id: 0,
  color: "#0b5f7a",
  xRadius: (0 + 1.5) * XSCALE,
  zRadius: (0 + 1.5) * ZSCALE,
  size: 0.75,
  speed: 0.1,
  offset: random(0, Math.PI * 2),
});

planetData.push({ //VENUS
  id: 1,
  color: "#00b587",
  xRadius: (1 + 1.5) * XSCALE,
  zRadius: (1 + 1.5) * ZSCALE,
  size: 1.25,
  speed: 0.1,
  offset: random(0, Math.PI * 2),
});


planetData.push({ //Earth
  id: 2,
  color: "#226EDA",
  xRadius: (2 + 1.5) * XSCALE,
  zRadius: (2 + 1.5) * ZSCALE,
  size: 1.5,
  speed: 0.1,
  offset: random(0, Math.PI * 2),
});

planetData.push({ //Mars
  id: 3,
  color: "#CC3333",
  xRadius: (3 + 1.5) * XSCALE,
  zRadius: (3 + 1.5) * ZSCALE,
  size: 1,
  speed: 0.1,
  offset: random(0, Math.PI * 2),
});


planetData.push({ //Jupiter
  id: 4,
  color: "#e36e4b",
  xRadius: (4 + 1.5) * XSCALE,
  zRadius: (4 + 1.5) * ZSCALE,
  size: 2,
  speed: 0.1,
  offset: random(0, Math.PI * 2),
  Name:"About"
});



planetData.push({ //Saturn
  id: 5,
  color: "#50fa56",
  xRadius: (5 + 1.5) * XSCALE,
  zRadius: (5 + 1.5) * ZSCALE,
  size: 2.05,
  speed: 0.1,
  offset: random(0, Math.PI * 2),
  Name: "Projects",
});



planetData.push({ //Uranus
  id: 6,
  color: "#e85ffa",
  xRadius: (6 + 1.5) * XSCALE,
  zRadius: (6 + 1.5) * ZSCALE,
  size: 2,
  speed:0.1,
  offset: random(0, Math.PI * 2),
  Name: "Resume",
});



planetData.push({ //Neptune
  id: 7,
  color: "#3296d9",
  xRadius: (7 + 1.5) * XSCALE,
  zRadius: (7 + 1.5) * ZSCALE,
  size: 1.75,
  speed: 0.1,
  offset: random(0, Math.PI * 2),  
  Name:"Experience"
});

export default planetData;
