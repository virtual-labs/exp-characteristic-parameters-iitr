// Instruction Button Code

var connections = [];

 var jsPlumbInstance = null;
 
function BoardController() {
   
    var endPoints = [];

    this.setJsPlumbInstance = function (instance) {
        jsPlumbInstance = instance;
    };

    this.setCircuitContainer = function (drawingContainer) {
        jsPlumbInstance.Defaults.Container = drawingContainer;
    };

    this.initDefault = function () {

        jsPlumbInstance.importDefaults({
            Connector: ["Bezier", { curviness: 20 }],
            PaintStyle: { strokeStyle: 'blue', lineWidth: 3 },
            EndpointStyle: { radius: 4, fillStyle: 'blue' },

            HoverPaintStyle: { strokeStyle: "#728C00" }
        });

        jsPlumbInstance.bind("beforeDrop", function (params) {
            var sourceEndPoint = params.connection.endpoints[0];
            var targetEndPoint = params.dropEndpoint;
            if (!targetEndPoint || !sourceEndPoint) {
                return false;
            }
            var sourceEndPointgroup = sourceEndPoint.getParameter('groupName');
            var targetEndPointgroup = targetEndPoint.getParameter('groupName');

            if (sourceEndPointgroup == targetEndPointgroup) {
                alert("Already connected internally");
                return false;
            } else {
                return true;
            }
        });

        jsPlumbInstance.bind("dblclick", function (conn) {
            jsPlumb.detach(conn);
            return false;
        });
     

        jsPlumbInstance.bind("jsPlumbConnection", function (conn) {
            var source = conn.connection.endpoints[0].getParameter('endPointName')
            connections[source] = conn.connection;

        });
    };

    this.addEndPoint = function (stroke,radius,maxConnection, divID, groupName, endPointName, anchorArray,color) {
        var endpointOptions = {
            isSource: true,
            isTarget: true,
            anchor: anchorArray,
            maxConnections: maxConnection,
            parameters: {
                "divID": divID,
                "endPointName": endPointName,
                "groupName": groupName,
                "type": 'output',
                "acceptType": 'input'
            },
            
            paintStyle: { radius: radius, fillStyle: color },
            connectorStyle :{strokeStyle:stroke, lineWidth:3}
        };

        jsPlumbInstance.addEndpoint(divID, endpointOptions);

        setEndpoint(endPointName, endpointOptions);
    };

    var setEndpoint = function (endPointName, endpointOptions) {
        endPoints[endPointName] = {
            "endPointName": endpointOptions.parameters.endPointName,
            "groupName": endpointOptions.parameters.groupName,
            "divID": endpointOptions.parameters.divID
        };

    };

    this.makeDraggable = function (selector) {
        jsPlumbInstance.draggable(selector, {
            stop: function () {
                var x = $(selector).position().left;
                jsPlumbInstance.repaint(selector);
            }
        });
    };


}


function draggable(item, container) {
    var dragItem = document.querySelector("#" + item);
    var container = document.querySelector("#" + container);

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if (e.target === dragItem) {
            active = true;
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;

        active = false;
    }

    function drag(e) {
        if (active) {

            e.preventDefault();

            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, dragItem);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
} 



var theorem1=false;
  

function checkCircuit() {
   
    var g = new Graph(28);

  
  
    var groups = ['row2','row3','row4','row6','row7','row8','resistance1_C1','resistance1_A1','multimeter_VCC','multimeter_GND','cap_C1','cap_A1'  ,'VCC', 'GND','VEE', 'ic741_5', 'ic741_6', 'ic741_7', 'ic741_8', 'ic741_1', 'ic741_3', 'ic741_2', 'ic741_4', 'row1', 'row5'];
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
   
console.log("###noofedges->"+g.numberofedges);

    if(g.isConnected("ic741_7","VCC")&& g.isConnected("ic741_3",'GND')){
        console.log("IC 555 connected to supply");
        if(g.isConnected("multimeter_GND","GND")){
            console.log("multimeter connected to supply")
                if(g.isConnected("ic741_4","VEE")){
           
            console.log("ic 4 not  connected to ")  

              if  (g.isConnected("ic741_2","resistance1_C1")&&g.isConnected("ic741_6","resistance1_A1")&&g.isConnected("ic741_2","cap_C1")&&g.isConnected("ic741_6","cap_A1")&&g.isConnected("multimeter_VCC","ic741_6"))
              {
                alert("Right connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("addtable").disabled=false;
            }
            

             else if(g.isConnected("ic741_2","resistance1_C1")&&g.isConnected("ic741_6","resistance1_A1")&&g.isConnected("ic741_2","cap_A1")&&g.isConnected("ic741_6","cap_C1")&&g.isConnected("multimeter_VCC","ic741_6")){alert("Right connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("checkbutton").disabled=true;document.getElementById("addtable").disabled=false;
            }else if(g.isConnected("ic741_2","resistance1_A1")&&g.isConnected("ic741_6","resistance1_C1")&&g.isConnected("ic741_2","cap_A1")&&g.isConnected("ic741_6","cap_C1")&&g.isConnected("multimeter_VCC","ic741_6")){alert("Right connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("checkbutton").disabled=true;document.getElementById("addtable").disabled=false;
            }else if(g.isConnected("ic741_2","resistance1_A1")&&g.isConnected("ic741_6","resistance1_C1")&&g.isConnected("ic741_2","cap_C1")&&g.isConnected("ic741_6","cap_A1")&&g.isConnected("multimeter_VCC","ic741_6")){alert("Right connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("checkbutton").disabled=true;document.getElementById("addtable").disabled=false;
            
            
            }else if(theorem1 != true){
                alert("Wrong Connections");
            }  
            }else{
            alert("Pin-4 not connected to supply")
      }
        }else{
            alert("Multimeter not connected to GND")
      }
    }else{
        alert("IC not connected to supply");
    }


console.log("executed")
}

function checkCircuit1() {
   
    var g = new Graph(29);

  
  
    var groups = ['row2','row3','row4','row6','row7','row8','resistance1_C1','resistance1_A1','multimeter_VCC','multimeter_GND','cap_C1','cap_A1'  ,'VEE','VCC', 'GND', 'ic741_5', 'ic741_6', 'ic741_7', 'ic741_8', 'ic741_1', 'ic741_3', 'ic741_2', 'ic741_4', 'row1', 'row5'];
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
   


    if(g.isConnected("ic741_7","VCC")){
        console.log("IC 555 connected to supply");
        if(g.isConnected("multimeter_GND","GND")){
            console.log("multimeter connected to supply")
           if(g.isConnected("ic741_6","ic741_2")){
            console.log("SHORT connected to supply")
                if(g.isConnected("ic741_4","VEE")){
            console.log("SHORT connected to supply")

              if(g.isConnected("ic741_3","resistance1_C1")&&g.isConnected("GND","resistance1_A1")&&g.isConnected("ic741_3","cap_C1")&&g.isConnected("GND","cap_A1")&&g.isConnected("multimeter_VCC","ic741_6")){alert("Right connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("checkbutton").disabled=true;document.getElementById("addtable").disabled=false;
            }
            

             else if(g.isConnected("ic741_3","resistance1_C1")&&g.isConnected("GND","resistance1_A1")&&g.isConnected("ic741_3","cap_A1")&&g.isConnected("GND","cap_C1")&&g.isConnected("multimeter_VCC","ic741_6")){alert("Right connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("checkbutton").disabled=true;document.getElementById("addtable").disabled=false;
            }else if(g.isConnected("ic741_3","resistance1_A1")&&g.isConnected("GND","resistance1_C1")&&g.isConnected("ic741_3","cap_A1")&&g.isConnected("GND","cap_C1")&&g.isConnected("multimeter_VCC","ic741_6")){alert("Right connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("checkbutton").disabled=true;document.getElementById("addtable").disabled=false;
            }else if(g.isConnected("ic741_3","resistance1_A1")&&g.isConnected("GND","resistance1_C1")&&g.isConnected("ic741_3","cap_C1")&&g.isConnected("GND","cap_A1")&&g.isConnected("multimeter_VCC","ic741_6")){alert("Right connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("checkbutton").disabled=true;document.getElementById("addtable").disabled=false;
            
            
            }else if(theorem1 != true){
                alert("Wrong Connections");
            } 
            }else{
            alert("Connect Pin-4  properly");
      } 
            }else{
            alert("Pin-2 and Pin-6 are not short properly.");
      } 
            
        }else{
            alert("Multimeter not connected to GND");
      }
    }else{
        alert("IC not connected to supply");
    }


console.log("executed")
}

function checkCircuit2() {
   
    var g = new Graph(32);

  
  
    var groups = ['row2','row3','row4','row6','row7','row8','resistance1_C1','resistance1_A1','resistance2_C1','resistance2_A1','multimeter_VCC','multimeter_GND','cap_C1','cap_A1' ,'cap_C11','cap_A11' ,'VEE','VCC', 'GND', 'ic741_5', 'ic741_6', 'ic741_7', 'ic741_8', 'ic741_1', 'ic741_3', 'ic741_2', 'ic741_4', 'row1',  'row5'];
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
   


    if(g.isConnected("ic741_7","VCC")){
        console.log("IC 555 connected to supply");
        if(g.isConnected("multimeter_GND","GND")){
            console.log("multimeter connected to supply")
         
                if(g.isConnected("ic741_4","VEE")){
                
            console.log("SHORT connected to supply")

if(((g.isConnected("resistance1_A1","ic741_2")&&g.isConnected("resistance1_C1","ic741_6"))||(g.isConnected("resistance1_A1","ic741_6")&&g.isConnected("resistance1_C1","ic741_2")))
    &&((g.isConnected("cap_A1","ic741_2")&&g.isConnected("cap_C1","ic741_6"))||(g.isConnected("cap_C1","ic741_2")&&g.isConnected("cap_A1","ic741_6")))
    &&((g.isConnected("resistance2_A1","ic741_3")&&g.isConnected("resistance2_C1","GND"))||(g.isConnected("resistance2_C1","ic741_3")&&g.isConnected("resistance2_A1","GND")))
    &&((g.isConnected("cap_A11","ic741_3")&&g.isConnected("cap_C11","GND"))||(g.isConnected("cap_C11","ic741_3")&&g.isConnected("cap_A11","GND")))&&g.isConnected("multimeter_VCC","ic741_6")){alert("Right connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("checkbutton").disabled=true;document.getElementById("addtable").disabled=false;}

            else if(theorem1 != true){
                alert("Wrong Connections");
            } 
            }else{
            alert("Connect Pin-4 prperly");
      } 
            
            
        }else{
            alert("Multimeter not connected to GND");
      }
    }else{
        alert("IC not connected to supply");
    }


console.log("executed")
}

function checkCircuit3() {
   
    var g = new Graph(33);

  
  
    var groups = ['row2','row3','row4','row6','row7','row8','resistance3_C1','resistance3_A1','resistance4_C1','resistance4_A1','resistance5_C1','resistance5_A1','multimeter_VCC','multimeter_GND','cap_C21','cap_A21'  ,'VEE','VCC', 'GND', 'ic741_5', 'ic741_6', 'ic741_7', 'ic741_8', 'ic741_1', 'ic741_3', 'ic741_2', 'ic741_4', 'row1', 'row5'];
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
   


    if(g.isConnected("ic741_7","VCC")){
        console.log("IC 555 connected to supply");
        if(g.isConnected("multimeter_GND","GND")){
            console.log("multimeter connected to supply")
         
                if(g.isConnected("ic741_4","VEE")){
                
            console.log("SHORT connected to supply")

if(((g.isConnected("resistance5_A1","ic741_2")&&g.isConnected("resistance5_C1","ic741_6"))||(g.isConnected("resistance5_A1","ic741_6")&&g.isConnected("resistance5_C1","ic741_2")))
    &&((g.isConnected("cap_A21","ic741_2")&&g.isConnected("cap_C21","ic741_6"))||(g.isConnected("cap_C21","ic741_2")&&g.isConnected("cap_A21","ic741_6")))
    &&((g.isConnected("resistance4_A1","ic741_3")&&g.isConnected("resistance4_C1","GND"))||(g.isConnected("resistance4_C1","ic741_3")&&g.isConnected("resistance4_A1","GND")))
    &&((g.isConnected("resistance3_A1","ic741_2")&&g.isConnected("resistance3_C1","GND"))||(g.isConnected("resistance3_A1","GND")&&g.isConnected("resistance3_C1","ic741_2")))&&g.isConnected("multimeter_VCC","ic741_6")){alert("Right connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("checkbutton").disabled=true;document.getElementById("addtable").disabled=false;}


 else if(((g.isConnected("resistance5_A1","ic741_2")&&g.isConnected("resistance5_C1","ic741_6"))||(g.isConnected("resistance5_A1","ic741_6")&&g.isConnected("resistance5_C1","ic741_2")))
    &&((g.isConnected("cap_A21","ic741_2")&&g.isConnected("cap_C21","ic741_6"))||(g.isConnected("cap_C21","ic741_2")&&g.isConnected("cap_A21","ic741_6")))
    &&((g.isConnected("resistance3_A1","ic741_3")&&g.isConnected("resistance3_C1","GND"))||(g.isConnected("resistance3_C1","ic741_3")&&g.isConnected("resistance3_A1","GND")))
    &&((g.isConnected("resistance4_A1","ic741_2")&&g.isConnected("resistance4_C1","GND"))||(g.isConnected("resistance4_A1","GND")&&g.isConnected("resistance4_C1","ic741_2")))&&g.isConnected("multimeter_VCC","ic741_6")){alert("Right connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("checkbutton").disabled=true;document.getElementById("addtable").disabled=false;}





            else if(theorem1 != true){
                alert("Wrong Connections");
            } 
            }else{
            alert("Connect Pin 4 properly");
      } 
            
            
        }else{
            alert("Multimeter not connected to GND");
      }
    }else{
        alert("IC not connected to supply");
    }


console.log("executed")
}


function checkCircuit4() {
   
    var g = new Graph(28);

  
  
    var groups = ['row2','row3','row4','row6','row7','row8','resistance5_C1','resistance5_A1'  ,'VEE','VCC','generator_C1','generator_A1','cro_C1','cro_A1', 'GND', 'ic741_5', 'ic741_6', 'ic741_7', 'ic741_8', 'ic741_1', 'ic741_3', 'ic741_2', 'ic741_4', 'row1', 'row5'];
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
   


    if(g.isConnected("ic741_7","VCC")){
        console.log("IC 555 connected to supply");
    
         
                if(g.isConnected("ic741_4","VEE")){
               
            console.log("SHORT connected to supply");
             if(g.isConnected("generator_C1","GND")){
               
            console.log("SHORT connected to supply");

if(g.isConnected("resistance5_A1","ic741_6")&&g.isConnected("resistance5_C1","GND")
    &&g.isConnected("ic741_6","ic741_2")&&g.isConnected("generator_A1","ic741_3")
    &&g.isConnected("cro_C1","ic741_6")&&g.isConnected("generator_A1","cro_A1")){alert("Right connections.Now click on show output voltage button to observe wave on CRO.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("checkbutton").disabled=true;document.getElementById("addtable").disabled=false;}

 else if(g.isConnected("resistance5_C1","ic741_6")&&g.isConnected("resistance5_A1","GND")
    &&g.isConnected("ic741_6","ic741_2")&&g.isConnected("generator_A1","ic741_3")
    &&g.isConnected("cro_C1","ic741_6")&&g.isConnected("generator_A1","cro_A1")){alert("Right connections.Now click on show output voltage button to observe wave on CRO.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("checkbutton").disabled=true;document.getElementById("addtable").disabled=false;}

 
            else if(theorem1 != true){
                alert("Wrong Connections");
            } 
            }else{
            alert("Connect A.F. Oscillator to GND properly");
      } 
            }else{
            alert("Connect pin-4 properly");
      } 
          }else{
        alert("IC not connected to supply");
    }


console.log("executed")
}























