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
  let toAdd = document.createDocumentFragment();
  // document.getElementById('graph').style['grid-template-columns'] = 'repeat(' + num + ', 1fr)';
  for(let i = 0; i < num; i++) {
    var newDiv = document.createElement('div');
    newDiv.id = 'bar' + i;
    newDiv.className = 'graph-bar';
    toAdd.appendChild(newDiv);
    // $('#graph').append($('<div id="bar' + i +'" class="graph-bar"></div>'));
    // $('#div'+ i).text($('hello' + i));
    console.log('bar' + i);
  } 
  document.appendChild(toAdd);
}

function barValues(arr) {
  let max = arr[0];
  for(let a of arr) {
    if(max < a)
      max = a;
  }

  for(let i = 0; i < arr.length; i++) {
    let temp = document.getElementById('bar' + i);
    console.log(temp);
    let att = document.createAttribute('width');
    att.value = arr[i] / max * 10;
    temp.setAttribute(att);
    temp.innerHTML = "hello" + i;
  }

}

const arr = [1,2,3,4,5,6,7,8,9,10]

createGrid(10);
barValues(arr)
