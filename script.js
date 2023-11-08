var tdb = document.querySelectorAll("#con td");
var number = document.querySelectorAll("#number td"),
  pc = document.querySelector(".pc"),
  mistake = document.querySelector(".mistake"),
  span = document.querySelector(".timer"),
  retry = document.querySelector("button"),
  td = [],
  b,
  m = 0,
  fo,
  second = 0,
  x = 0,
  expert = [
    "",
    "9",
    "",
    "",
    "",
    "",
    "3",
    "",
    "8",
    "",
    "",
    "3",
    "5",
    "9",
    "",
    "6",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "7",
    "",
    "",
    "",
    "",
    "2",
    "8",
    "",
    "",
    "",
    "",
    "5",
    "",
    "1",
    "",
    "3",
    "",
    "",
    "",
    "",
    "",
    "4",
    "",
    "",
    "",
    "",
    "6",
    "",
    "8",
    "1",
    "5",
    "",
    "",
    "",
    "2",
    "7",
    "",
    "",
    "",
    "",
    "",
    "9",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "1",
    "",
    "",
    "6",
    "",
  ],
  finishExpert = [
    "2",
    "9",
    "1",
    "7",
    "6",
    "4",
    "3",
    "5",
    "8",
    "7",
    "4",
    "3",
    "5",
    "9",
    "8",
    "6",
    "1",
    "2",
    "6",
    "5",
    "8",
    "1",
    "3",
    "2",
    "7",
    "4",
    "9",
    "9",
    "6",
    "2",
    "8",
    "7",
    "1",
    "4",
    "3",
    "5",
    "8",
    "1",
    "5",
    "3",
    "4",
    "9",
    "2",
    "7",
    "6",
    "4",
    "3",
    "7",
    "2",
    "5",
    "6",
    "9",
    "8",
    "1",
    "5",
    "8",
    "6",
    "4",
    "2",
    "7",
    "1",
    "9",
    "3",
    "1",
    "7",
    "9",
    "6",
    "8",
    "3",
    "5",
    "2",
    "4",
    "3",
    "2",
    "4",
    "9",
    "1",
    "5",
    "8",
    "6",
    "7",
  ];
for (let i = 0; i < 81; i++) {
  tdb[i].addEventListener("click", function () {
    x = i;
    for (let i = 0; i < 81; i++) {
      tdb[i].style.backgroundColor = "rgba(255, 255, 0, 0)";
      this.style.backgroundColor = "rgba(255, 255, 0, 0.2)";

      if (tdb[i].innerHTML == this.innerHTML && tdb[i].innerHTML) {
        tdb[i].style.backgroundColor = "rgba(255, 255, 0, 0.2)";
      }
      fo = this;
      fo.style.backgroundColor = "rgba(236, 236, 209, 0.4)";
    }
  });
}
function input(e) {
  for (let i = 0; i < 81; i++) {
    tdb[i].style.backgroundColor = "rgba(255, 255, 0, 0)";

    if (tdb[i].innerHTML == e && tdb[i].innerHTML) {
      tdb[i].style.backgroundColor = "rgba(255, 255, 0, 0.3)";
      fo.style.backgroundColor = "rgba(255, 255, 209, 0.4)";
    }
  }

  if (fo.innerHTML != finishExpert[x]) {
    fo.style.color = "red";
    m++;
    mistake.innerHTML = `mistake ${m}/3`;
    m > 2 ? (pc.style.display = "block") : 0;
  } else {
    fo.style.color = "yellow";
  }
}
document.addEventListener("keypress", function (e) {
  if (Number(e.key)) {
    fo.innerHTML = e.key;
    input(e.key);
  }
});
for (let i = 0, j = 0; i < 81, j < 9; i += 9, j++) {
  tdb[i + 2].style.borderRight = "1px solid yellow";
  tdb[i + 6].style.borderLeft = "1px solid yellow";
  tdb[j + 18].style.borderBottom = "1px solid yellow";
  tdb[j + 45].style.borderBottom = "1px solid yellow";
  number[j].addEventListener("click", function () {
    fo.innerHTML = j + 1;
    input(j + 1);
  });
}
for (let k = 0; k < 81; k++) {
  tdb[k].innerHTML = expert[k];
}

retry.addEventListener("click", function () {
  for (let i = 0; i < 81; i++) {
    tdb[i].style.backgroundColor = "rgba(255, 255, 0, 0)";
  }
  second = 0;
  pc.style.display = "none";
  m = 0;
  for (let k = 0; k < 81; k++) {
    tdb[k].innerHTML = expert[k];
  }
});

console.log(parseInt("123", 10));

function timer() {
  ++second;
  span.innerHTML = `${pad(parseInt(second / 60))}:${pad(second % 60)}`;
  function pad(val) {
    var fullval = val + "";
    return fullval.length < 2 ? (fullval = "0" + val) : val;
  }
}
setInterval(timer, 1000);

/*
,r = [[],
[],
[],
[],
[],
[],
[],
[],
[]] 

,c = [[],
[],
[],
[],
[],
[],
[],
[],
[]]

function fill(){ 
  b = 
  [[td[0],td[1],td[2],  td[9], td[10],td[11],td[18],td[19],td[20]],
  [td[3],td[4],td[5],   td[12],td[13],td[14],td[21],td[22],td[23]],
  [td[6],td[7],td[8],   td[15],td[16],td[17],td[24],td[25],td[26]],
  [td[27],td[28],td[29],td[36],td[37],td[38],td[45],td[46],td[47]],
  [td[30],td[31],td[32],td[39],td[40],td[41],td[48],td[49],td[50]],
  [td[33],td[34],td[35],td[42],td[43],td[44],td[51],td[52],td[53]],
  [td[54],td[55],td[56],td[63],td[64],td[65],td[72],td[73],td[74]],
  [td[57],td[58],td[59],td[66],td[67],td[68],td[75],td[76],td[77]],
  [td[60],td[61],td[62],td[69],td[70],td[71],td[78],td[79],td[80]]]
  
  
      for (let i = 0; i < 9; i++) {
  r[0][i]=td[i]
  r[1][i]=td[i+9]
  r[2][i]=td[i+18]
  r[3][i]=td[i+27]
  r[4][i]=td[i+36]
  r[5][i]=td[i+45]
  r[6][i]=td[i+54]
  r[7][i]=td[i+63]
  r[8][i]=td[i+72]
  }
  
    for (let i = 0, r=0; i < 81,r<9; i+=9,r++) {
    
    c[0][r]=td[i]
    c[1][r]=td[i+1]
    c[2][r]=td[i+2]
    c[3][r]=td[i+3]
    c[4][r]=td[i+4]
    c[5][r]=td[i+5]
    c[6][r]=td[i+6]
    c[7][r]=td[i+7]
    c[8][r]=td[i+8]   
    }
  }*/
