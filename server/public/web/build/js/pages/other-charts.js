function drawMouseSpeedDemo(){var e,o=500,i=-1,r=-1,t=0,l=[],a=30;$("html").mousemove(function(e){var o=e.pageX,l=e.pageY;i>-1&&(t+=Math.max(Math.abs(o-i),Math.abs(l-r))),i=o,r=l});var h=function(){var i=new Date,r=i.getTime();if(e&&e!=r){var p=Math.round(t/(r-e)*1e3);l.push(p),l.length>a&&l.splice(0,1),t=0,$("#sp-live").sparkline(l,{tooltipSuffix:" pixels per second",type:"line",width:"200",height:"200",chartRangeMax:50,lineColor:"#3498db",fillColor:"rgba(52, 152, 219, 0.2)",lineWidth:"2",spotColor:"#3498db",minSpotColor:"#e74c3c",maxSpotColor:"#1abc9c",highlightLineColor:"#f1c40f",highlightSpotColor:"#2980b9",spotRadius:3})}e=r,setTimeout(h,o)};setTimeout(h,o)}$(document).ready(function(){$("#esp-1").easyPieChart({barColor:"#3498db",trackColor:"#ecf0f1",scaleColor:!1,scaleLength:0,lineCap:"round",lineWidth:10,size:140}),$("#esp-2").easyPieChart({barColor:"#3498db",trackColor:"#ecf0f1",scaleColor:!1,scaleLength:0,lineCap:"round",lineWidth:10,size:140,onStep:function(e,o,i){$(this.el).find(".percent").text(Math.round(i))}}),$("#esp-3").easyPieChart({barColor:"#3498db",trackColor:"#ecf0f1",scaleColor:"#3498db",scaleLength:10,lineCap:"round",lineWidth:10,size:140}),drawMouseSpeedDemo(),$("#sp-line").sparkline([8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10],{type:"line",width:"200",height:"200",lineColor:"#3498db",fillColor:"rgba(52, 152, 219, 0.2)",lineWidth:"2",spotColor:"#3498db",minSpotColor:"#e74c3c",maxSpotColor:"#1abc9c",highlightLineColor:"#f1c40f",highlightSpotColor:"#2980b9",spotRadius:3}),$("#sp-bar").sparkline([10,8,9,3,5,8],{type:"bar",height:"200",barWidth:"30",barSpacing:3,barColor:"#3498db"}),$("#sp-negative").sparkline([-3,1,2,0,3,-1],{type:"bar",height:"200",barWidth:"30",barSpacing:3,barColor:"#3498db",negBarColor:"#ecf0f1"}),$("#sp-stacked-bar").sparkline([[0,2],[2,4],[4,2],[4,1],[3,2],[1,3]],{type:"bar",height:"200",barWidth:"30",barSpacing:3,stackedBarColor:["#3498db","#34495e"]}),$("#sp-composite-1").sparkline([8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10],{type:"line",width:"200",height:"200",lineColor:"#3498db",fillColor:!1,lineWidth:"2",spotColor:"#3498db",minSpotColor:"#e74c3c",maxSpotColor:"#1abc9c",highlightLineColor:"#f1c40f",highlightSpotColor:"#2980b9",spotRadius:3,changeRangeMin:0,chartRangeMax:10}),$("#sp-composite-1").sparkline([4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7],{type:"line",composite:!0,width:"200",height:"200",lineColor:"#3498db",fillColor:!1,lineWidth:"2",spotColor:"#3498db",minSpotColor:"#e74c3c",maxSpotColor:"#1abc9c",highlightLineColor:"#f1c40f",highlightSpotColor:"#2980b9",spotRadius:3,changeRangeMin:0,chartRangeMax:10}),$("#sp-composite-2").sparkline([4,6,7,7,4,3,2,1,4],{type:"bar",height:"200",barWidth:"30",barSpacing:3,barColor:"rgba(52, 152, 219, 0.2)"}),$("#sp-composite-2").sparkline([4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7],{type:"line",composite:!0,width:"200",height:"200",lineColor:"#3498db",fillColor:!1,lineWidth:"2",spotColor:"#3498db",minSpotColor:"#e74c3c",maxSpotColor:"#1abc9c",highlightLineColor:"#f1c40f",highlightSpotColor:"#2980b9",spotRadius:3}),$("#sp-discrete-1").sparkline([4,6,7,7,4,3,2,1,4,4,5,6,7,6,6,2,4,5],{type:"discrete",height:"200",width:"200",lineColor:"#3498db"}),$("#sp-discrete-2").sparkline([4,6,7,7,4,3,2,1,4],{type:"discrete",height:"200",width:"200",lineColor:"#3498db",thresholdColor:"#34495e",thresholdValue:4}),$("#sp-tristate").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1],{type:"tristate",height:"200",barWidth:"15",barSpacing:3,posBarColor:"#3498db",negBarColor:"#34495e",zeroBarColor:"#ecf0f1"}),$("#sp-box").sparkline([4,27,34,52,54,59,61,68,78,82,85,87,91,93,100],{type:"box",height:"50",width:"200",boxLineColor:"#3498db",boxFillColor:"rgba(52, 152, 219, 0.2)",whiskerColor:"#3498db",medianColor:"#3498db"}),$("#sp-pie-1").sparkline([20,50,80],{type:"pie",height:"200",width:"200",sliceColors:["#ecf0f1","#34495e","#3498db"]}),$("#sp-pie-2").sparkline([20,50,80],{type:"pie",height:"200",width:"200",sliceColors:["#ecf0f1","#34495e","#3498db"],borderWidth:5,borderColor:"rgba(52, 152, 219, 0.5)"}),$("#sp-bullet-1").sparkline([10,12,12,9,7],{type:"bullet",height:"50",width:"200",targetColor:"#3498db",performanceColor:"#34495e",rangeColors:["#ecf0f1","#bdc3c7","#95a5a6"]}),$("#sp-bullet-2").sparkline([10,12,14,9,7],{type:"bullet",height:"50",width:"200",targetColor:"#3498db",performanceColor:"#34495e",rangeColors:["#ecf0f1","#bdc3c7","#95a5a6"]})});