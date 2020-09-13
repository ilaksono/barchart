let obj = {
  height: '10em',
  width: '10em',
};

const drawBarChart = (data, options, element) => {

  changeSize(options.height, options.width, element);
  plotData(data);

}

function changeSize (val1, val2, element) {

  document.getElementById(element).style.height = val1;
  document.getElementById(element).style.width = val2;  
}

function plotData(data) {
  let num = data.length;
  createGrid(num);
  xAxisLabels(num);
}

function xAxisLabels(num) {
}

function createGrid(num) {
  // document.getElementById('graph').style['grid-template-columns'] = 'repeat(' + num + ', 1fr)';
  for(let i = 0; i < num; i++) {
    $('#graph').append($('<div id="bar' + i +'" class="graph-bar"></div>'));
    console.log('bar' + i);
  } 
}

function barValues(arr) {
  let max = arr[0];
  for(let a of arr) {
    if(max < a)
      max = a;
  }

  for(let i = 0; i < arr.length; i++) {
    let temp = document.getElementById('bar' + i);
    temp.createAttribute('width');
    temp.style.width = arr[i] / max;
  }

}

const arr = [1,2,3,4,5,6,7,8,9,10]

createGrid(10);
barValues(arr)
