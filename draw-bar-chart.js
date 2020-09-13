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
  xAxisLabels(num);
}

function xAxisLabels(num) {
  d
}