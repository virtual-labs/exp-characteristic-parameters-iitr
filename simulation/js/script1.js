
var isstartedsimulation=false;


// Components hide show code here
function breadboard() {
    var x = document.getElementById("board");
    x.style.visibility = "visible";

    var instance = new BoardController();

    instance.setJsPlumbInstance(jsPlumb);
    instance.initDefault();
    instance.setCircuitContainer('mid');

    //breadboard definition 
    {
     

        instance.addEndPoint('black',4,1, 'board', 'row1', 'r1',  [0, 0, 0, -1, 59,   24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r2',  [0, 0, 0, -1, 72.5, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r4',  [0, 0, 0, -1, 99.5, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r5',  [0, 0, 0, -1, 113,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r3',  [0, 0, 0, -1, 86,   24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r9',  [0, 0, 0, -1, 180.5,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r11', [0, 0, 0, -1, 221,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r8',  [0, 0, 0, -1, 167,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r6',  [0, 0, 0, -1, 140,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r10', [0, 0, 0, -1, 194,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r14', [0, 0, 0, -1, 261.5,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r15', [0, 0, 0, -1, 275,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r7',  [0, 0, 0, -1, 153.5,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r16', [0, 0, 0, -1, 302,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r12', [0, 0, 0, -1, 234.5,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r19', [0, 0, 0, -1, 342.5,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r20', [0, 0, 0, -1, 356,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r18', [0, 0, 0, -1, 329,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r21', [0, 0, 0, -1, 383,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r17', [0, 0, 0, -1, 315.5,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r13', [0, 0, 0, -1, 248,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r22', [0, 0, 0, -1, 398,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r23', [0, 0, 0, -1, 410,  24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r24', [0, 0, 0, -1, 423.5,24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row1', 'r25', [0, 0, 0, -1, 437, 24], 'black');

        instance.addEndPoint('black',4,1, 'board', 'row2', 'r27', [0, 0, 0, 1, 72.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r26', [0, 0, 0, 1, 59, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r30', [0, 0, 0, 1, 113, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r28', [0, 0, 0, 1, 86, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r32', [0, 0, 0, 1, 153.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r31', [0, 0, 0, 1, 140, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r29', [0, 0, 0, 1, 99.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r35', [0, 0, 0, 1, 194, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r34', [0, 0, 0, 1, 180.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r36', [0, 0, 0, 1, 221, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r33', [0, 0, 0, 1, 167.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r37', [0, 0, 0, 1, 234.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r38', [0, 0, 0, 1, 248, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r39', [0, 0, 0, 1, 261.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r41', [0, 0, 0, 1, 302, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r40', [0, 0, 0, 1, 275, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r42', [0, 0, 0, 1, 315.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r43', [0, 0, 0, 1, 329, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r45', [0, 0, 0, 1, 356, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r44', [0, 0, 0, 1, 342.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r46', [0, 0, 0, 1, 383, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r47', [0, 0, 0, 1, 396.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r49', [0, 0, 0, 1, 423.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r50', [0, 0, 0, 1, 437, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row2', 'r48', [0, 0, 0, 1, 410, 38], 'black');



        instance.addEndPoint('black',4,1, 'board', 'row3', 'r51', [0, 0, 0, -1, 478, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r52', [0, 0, 0, -1, 491.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r55', [0, 0, 0, -1, 532, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r54', [0, 0, 0, -1, 518.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r53', [0, 0, 0, -1, 505, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r56', [0, 0, 0, -1, 559, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r57', [0, 0, 0, -1, 572.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r58', [0, 0, 0, -1, 586, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r59', [0, 0, 0, -1, 599.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r61', [0, 0, 0, -1, 640, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r62', [0, 0, 0, -1, 653.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r60', [0, 0, 0, -1, 613, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r63', [0, 0, 0, -1, 667, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r64', [0, 0, 0, -1, 680.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r66', [0, 0, 0, -1, 721, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r67', [0, 0, 0, -1, 734.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r65', [0, 0, 0, -1, 694, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r68', [0, 0, 0, -1, 748, 24], 'black');
        instance.addEndPoint('black',4, 1,'board', 'row3', 'r69', [0, 0, 0, -1, 761.5, 24],'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r72', [0, 0, 0, -1, 815.5, 24],'black');
        instance.addEndPoint('black',4, 1,'board', 'row3', 'r71', [0, 0, 0, -1, 802, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r70', [0, 0, 0, -1, 775, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r73', [0, 0, 0, -1, 829, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r75', [0, 0, 0, -1, 856, 24], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row3', 'r74', [0, 0, 0, -1, 842.5, 24],'black');

          instance.addEndPoint('black',4,1, 'board', 'row4', 'r77', [0, 0, 0, 1, 491.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r78', [0, 0, 0, 1, 505, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r81', [0, 0, 0, 1, 559, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r76', [0, 0, 0, 0, 478, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r82', [0, 0, 0, 1, 572.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r79', [0, 0, 0, 1, 518.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r80', [0, 0, 0, 1, 532, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r84', [0, 0, 0, 1, 599.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r86', [0, 0, 0, 1, 640, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r85', [0, 0, 0, 1, 613, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r87', [0, 0, 0, 1, 653.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r89', [0, 0, 0, 1, 680.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r88', [0, 0, 0, 1, 667, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r91', [0, 0, 0, 1, 721, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r83', [0, 0, 0, 1, 586, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r90', [0, 0, 0, 1, 694, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r92', [0, 0, 0, 1, 734.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r96', [0, 0, 0, 1, 802, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r95', [0, 0, 0, 1, 775, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r94', [0, 0, 0, 1, 761.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r93', [0, 0, 0, 1, 748, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r97', [0, 0, 0, 1, 815.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r99', [0, 0, 0, 1, 842.5, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r98', [0, 0, 0, 1, 829, 38], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row4', 'r100', [0, 0, 0, 1, 856, 38], 'black');


        instance.addEndPoint('black',4,1, 'board', 'row5', 'r101', [0, 0, 0, -1, 59.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r102', [0, 0, 0, -1, 73, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r103', [0, 0, 0, -1, 86.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r104', [0, 0, 0, -1, 100, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r105', [0, 0, 0, -1, 113.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r106', [0, 0, 0, -1, 140.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r108', [0, 0, 0, -1, 167.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r110', [0, 0, 0, -1, 194.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r107', [0, 0, 0, -1, 154, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r109', [0, 0, 0, -1, 181, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r111', [0, 0, 0, -1, 221.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r112', [0, 0, 0, -1, 235, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r113', [0, 0, 0, -1, 248.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r115', [0, 0, 0, -1, 275.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r114', [0, 0, 0, -1, 262, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r117', [0, 0, 0, -1, 316, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r118', [0, 0, 0, -1, 329.5, 267],'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r116', [0, 0, 0, -1, 302.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r119', [0, 0, 0, -1, 343, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r120', [0, 0, 0, -1, 356.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r121', [0, 0, 0, -1, 383.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r122', [0, 0, 0, -1, 397, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r124', [0, 0, 0, -1, 424, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r123', [0, 0, 0, -1, 410.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row5', 'r125', [0, 0, 0, -1, 437.5, 267], 'black');


        instance.addEndPoint('black',4,1, 'board', 'row6', 'r127', [0, 0, 0, 1, 73, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r126', [0, 0, 0, 1, 59.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r129', [0, 0, 0, 1, 100, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r128', [0, 0, 0, 1, 86.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r130', [0, 0, 0, 1, 113.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r131', [0, 0, 0, 1, 140.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r132', [0, 0, 0, 1, 154, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r133', [0, 0, 0, 1, 167.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r134', [0, 0, 0, 1, 181, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r136', [0, 0, 0, 1, 221.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r135', [0, 0, 0, 1, 194.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r137', [0, 0, 0, 1, 235, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r138', [0, 0, 0, 1, 248.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r140', [0, 0, 0, 1, 275.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r142', [0, 0, 0, 1, 316, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r139', [0, 0, 0, 1, 262, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r141', [0, 0, 0, 1, 302.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r143', [0, 0, 0, 1, 329.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r145', [0, 0, 0, 1, 356.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r144', [0, 0, 0, 1, 343, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r147', [0, 0, 0, 1, 397, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r146', [0, 0, 0, 1, 383.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r148', [0, 0, 0, 1, 410.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r149', [0, 0, 0, 1, 424, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row6', 'r150', [0, 0, 0, 1, 437.5, 281], 'black');
 


        instance.addEndPoint('black',4,1, 'board', 'row7', 'r151', [0, 0, 0, -1, 478, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r152', [0, 0, 0, -1, 491.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r155', [0, 0, 0, -1, 532, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r153', [0, 0, 0, -1, 505, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r157', [0, 0, 0, -1, 572.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r156', [0, 0, 0, -1, 559, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r154', [0, 0, 0, -1, 518.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r160', [0, 0, 0, -1, 613, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r162', [0, 0, 0, -1, 653.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r161', [0, 0, 0, -1, 640, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r159', [0, 0, 0, -1, 599.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r158', [0, 0, 0, -1, 586, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r163', [0, 0, 0, -1, 667, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r164', [0, 0, 0, -1, 680.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r165', [0, 0, 0, -1, 694, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r166', [0, 0, 0, -1, 721, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r168', [0, 0, 0, -1, 748, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r167', [0, 0, 0, -1, 734.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r169', [0, 0, 0, -1, 761.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r170', [0, 0, 0, -1, 775, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r171', [0, 0, 0, -1, 802, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r172', [0, 0, 0, -1, 815.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r174', [0, 0, 0, -1, 842.5, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r173', [0, 0, 0, -1, 829, 267], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row7', 'r175', [0, 0, 0, -1, 856, 267], 'black');

        instance.addEndPoint('black',4,1, 'board', 'row8', 'r176', [0, 0, 0, 0, 478, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r177', [0, 0, 0, -1, 491.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r180', [0, 0, 0, -1, 532, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r178', [0, 0, 0, -1, 505, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r182', [0, 0, 0, -1, 572.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r181', [0, 0, 0, -1, 559, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r179', [0, 0, 0, -1, 518.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r187', [0, 0, 0, -1, 653.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r183', [0, 0, 0, -1, 586, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r186', [0, 0, 0, -1, 640, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r185', [0, 0, 0, -1, 613, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r184', [0, 0, 0, -1, 599.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r188', [0, 0, 0, -1, 667, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r189', [0, 0, 0, -1, 680.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r191', [0, 0, 0, -1, 721, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r190', [0, 0, 0, -1, 694, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r192', [0, 0, 0, -1, 734.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r193', [0, 0, 0, -1, 748, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r194', [0, 0, 0, -1, 761.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r196', [0, 0, 0, -1, 802, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r195', [0, 0, 0, -1, 775, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r197', [0, 0, 0, -1, 815.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r198', [0, 0, 0, -1, 829, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r199', [0, 0, 0, -1, 842.5, 281], 'black');
        instance.addEndPoint('black',4,1, 'board', 'row8', 'r200', [0, 0, 0, -1, 856, 281], 'black');

 
    }
}



function ic741() {
    var x = document.getElementById("ic741");
    x.style.visibility = "visible";

    var ic741 = new BoardController();
    ic741.setJsPlumbInstance(jsPlumb);
    ic741.setCircuitContainer('mid');

    {
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_8', 'ic741_81', [0, 0, 1, -1, 11, 5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_8', 'ic741_82', [0, 0, 1, -1, 11, 18.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_8', 'ic741_83', [0, 0, 1, -1, 11, 32], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_8', 'ic741_84', [0, 0, 1, -1, 11, 45.5], 'purple');
  //      ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_VCC', 'ic7404_VCC5', [0, 0, 1, -1, 5, 54], 'red');

        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_7', 'ic741_71', [0, 0, 1, -1, 24.5, 5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_7', 'ic741_72', [0, 0, 1, -1, 24.5, 18.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_7', 'ic741_73', [0, 0, 1, -1, 24.5, 32], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_7', 'ic741_74', [0, 0, 1, -1, 24.5, 45.5], 'purple');
     //  ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_6A', 'ic7404_6A05', [0, 0, 1, -1, 18.5, 54], 'red');

        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_6', 'ic741_61', [0, 0, 1, -1, 38, 5], 'purple');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_6', 'ic741_62', [0, 0, 1, -1, 38, 18.5], 'purple');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_6', 'ic741_63', [0, 0, 1, -1, 38, 32], 'purple');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_6', 'ic741_64', [0, 0, 1, -1, 38, 45.5], 'purple');
   //     ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_6Y', 'ic7404_6Y05', [0, 0, 1, -1, 32, 54], 'red');

        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_5', 'ic741_51', [0, 0, 1, -1, 51.5, 5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_5', 'ic741_52', [0, 0, 1, -1, 51.5, 18.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_5', 'ic741_53', [0, 0, 1, -1, 51.5, 32], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_5', 'ic741_54', [0, 0, 1, -1, 51.5, 45.5], 'purple');
 
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_1', 'ic741_11', [0, 0, 1, -1, 11, 112.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_1', 'ic741_12', [0, 0, 1, -1, 11, 126], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_1', 'ic741_13', [0, 0, 1, -1, 11, 139.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_1', 'ic741_14', [0, 0, 1, -1, 11, 153], 'purple');

   //     ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_1Y', 'ic7404_1Y01', [0, 0, 1, -1, 18.5, 94], 'red');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_2', 'ic741_21', [0, 0, 1, -1, 24.5, 112.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_2', 'ic741_22', [0, 0, 1, -1, 24.5, 126], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_2', 'ic741_23', [0, 0, 1, -1, 24.5, 139.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_2', 'ic741_24', [0, 0, 1, -1, 24.5, 153], 'purple');

      //  ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_2A', 'ic7404_2A01', [0, 0, 1, -1, 32, 94], 'red');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_3', 'ic741_31', [0, 0, 1, -1, 38, 112.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_3', 'ic741_32', [0, 0, 1, -1, 38, 126], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_3', 'ic741_33', [0, 0, 1, -1, 38, 139.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_3', 'ic741_34', [0, 0, 1, -1, 38, 153], 'purple');

   //     ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_2Y', 'ic7404_2Y01', [0, 0, 1, -1, 45.5, 94], 'red');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_4', 'ic741_41', [0, 0, 1, -1, 51.5, 112.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_4', 'ic741_42', [0, 0, 1, -1, 51.5, 126], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_4', 'ic741_43', [0, 0, 1, -1, 51.5, 139.5], 'purple');
        ic741.addEndPoint('purple',4.2,1, 'ic741', 'ic741_4', 'ic741_44', [0, 0, 1, -1, 51.5, 153], 'purple');

   }
}



function supply() {
    var x = document.getElementById("supply");
    x.style.visibility = "visible";
    
    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');
 
{
    supply.addEndPoint('red',7,1, 'supply', 'VCC', 'VCC', [0, 0, 0, 0, 66, 68], 'red');
    supply.addEndPoint('green',7,1, 'supply', 'GND', 'GND', [0, 0, 0, 0, 112, 68], 'green');
    supply.addEndPoint('blue',7,1, 'supply', 'VEE', 'VEE', [0, 0, 0, 0, 156, 68], 'blue');
}
}
function capacitor() {
    var x = document.getElementById("cap");
    x.style.visibility = "visible";
    var cap = new BoardController();
    cap.setJsPlumbInstance(jsPlumb);
    cap.setCircuitContainer('mid');
    //cap.makeDraggable('cap');
   // draggable('cap', 'mid');

  {//  led.addEndPoint(4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'red');
    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_C1', 'cap_C101', [0, 0, 1, -1, 27, 128], 'purple');
    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_C1', 'cap_C102', [0, 0, 1, -1, 27, 142], 'purple');
    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_C1', 'cap_C103', [0, 0, 1, -1, 27, 156], 'purple');
    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_C1', 'cap_C104', [0, 0, 1, -1, 27, 168], 'purple');

    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_A1', 'cap_A101', [0, 0, 1, -1, 0.5, 128], 'purple');
    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_A1', 'cap_A102', [0, 0, 1, -1, 0.5, 142], 'purple');
    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_A1', 'cap_A103', [0, 0, 1, -1, 0.5, 156], 'purple');
    cap.addEndPoint('purple',4.2,1, 'cap', 'cap_A1', 'cap_A104', [0, 0, 1, -1, 0.5, 168], 'purple');
 
}
}
function capacitor1() {
    var x = document.getElementById("cap1");
    x.style.visibility = "visible";
    var cap1 = new BoardController();
    cap1.setJsPlumbInstance(jsPlumb);
    cap1.setCircuitContainer('mid');
    //cap1.makeDraggable('cap1');
    //draggable('cap1', 'mid');
{
  //  led.addEndPoint(4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'red');
    cap1.addEndPoint('purple',4.2,1, 'cap1', 'cap_C11', 'cap_C111', [0, 0, 1, -1, 30, 128], 'purple');
    cap1.addEndPoint('purple',4.2,1, 'cap1', 'cap_C11', 'cap_C112', [0, 0, 1, -1, 30, 142], 'purple');
    cap1.addEndPoint('purple',4.2,1, 'cap1', 'cap_C11', 'cap_C113', [0, 0, 1, -1, 30, 156], 'purple');
    cap1.addEndPoint('purple',4.2,1, 'cap1', 'cap_C11', 'cap_C114', [0, 0, 1, -1, 30, 168], 'purple');


    cap1.addEndPoint('purple',4.2,1, 'cap1', 'cap_A11', 'cap_A111', [0, 0, 1, -1, 3, 128], 'purple');
    cap1.addEndPoint('purple',4.2,1, 'cap1', 'cap_A11', 'cap_A112', [0, 0, 1, -1, 3, 142], 'purple');
    cap1.addEndPoint('purple',4.2,1, 'cap1', 'cap_A11', 'cap_A113', [0, 0, 1, -1, 3, 156], 'purple');
    cap1.addEndPoint('purple',4.2,1, 'cap1', 'cap_A11', 'cap_A114', [0, 0, 1, -1, 3, 168], 'purple');

}
}
function capacitor2() {
    var x = document.getElementById("cap2");
    x.style.visibility = "visible";
    var cap2 = new BoardController();
    cap2.setJsPlumbInstance(jsPlumb);
    cap2.setCircuitContainer('mid');
    //cap2.makeDraggable('cap2');
    //draggable('cap2', 'mid');
{
  //  led.addEndPoint(4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'red');
    cap2.addEndPoint('purple',4.2,1, 'cap2', 'cap_C21', 'cap_C211', [0, 0, 1, -1, 30, 128], 'purple');
    cap2.addEndPoint('purple',4.2,1, 'cap2', 'cap_C21', 'cap_C212', [0, 0, 1, -1, 30, 142], 'purple');
    cap2.addEndPoint('purple',4.2,1, 'cap2', 'cap_C21', 'cap_C213', [0, 0, 1, -1, 30, 156], 'purple');
    cap2.addEndPoint('purple',4.2,1, 'cap2', 'cap_C21', 'cap_C214', [0, 0, 1, -1, 30, 168], 'purple');


    cap2.addEndPoint('purple',4.2,1, 'cap2', 'cap_A21', 'cap_A211', [0, 0, 1, -1, 3, 128], 'purple');
    cap2.addEndPoint('purple',4.2,1, 'cap2', 'cap_A21', 'cap_A212', [0, 0, 1, -1, 3, 142], 'purple');
    cap2.addEndPoint('purple',4.2,1, 'cap2', 'cap_A21', 'cap_A213', [0, 0, 1, -1, 3, 156], 'purple');
    cap2.addEndPoint('purple',4.2,1, 'cap2', 'cap_A21', 'cap_A214', [0, 0, 1, -1, 3, 168], 'purple');

}
}
function resistor1() {
    var x = document.getElementById("resistance1");
    x.style.visibility = "visible";
    var resistance1= new BoardController();
    resistance1.setJsPlumbInstance(jsPlumb);
    resistance1.setCircuitContainer('mid');
    //resistance1.makeDraggable('resistance1');
    //draggable('resistance1', 'mid');
{
  //  led.addEndPoint(4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'red');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C101', [0, 0, 1, -1, 11, -47], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C102', [0, 0, 1, -1, 11, -33], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C103', [0, 0, 1, -1, 11, -19], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C104', [0, 0, 1, -1, 11, -5], 'purple');

    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A101', [0, 0, 1, -1, 11, 61], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A102', [0, 0, 1, -1, 11, 75], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A103', [0, 0, 1, -1, 11, 89], 'purple');
    resistance1.addEndPoint('purple',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A104', [0, 0, 1, -1, 11, 103], 'purple');
}
}
function resistor2() {
    var x = document.getElementById("resistance2");
    x.style.visibility = "visible";
    var resistance2= new BoardController();
    resistance2.setJsPlumbInstance(jsPlumb);
    resistance2.setCircuitContainer('mid');
    //resistance2.makeDraggable('resistance2');
    //draggable('resistance2', 'mid');

  //  led.addEndPoint(4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'red');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C101', [0, 0, 1, -1, 8, -47], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C102', [0, 0, 1, -1, 8, -33], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C103', [0, 0, 1, -1, 8, -19], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C104', [0, 0, 1, -1, 8, -5], 'purple');

    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A101', [0, 0, 1, -1, 8, 61], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A102', [0, 0, 1, -1, 8, 75], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A103', [0, 0, 1, -1, 8, 89], 'purple');
    resistance2.addEndPoint('purple',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A104', [0, 0, 1, -1, 8, 103], 'purple');
  
}
function resistor3() {
    var x = document.getElementById("resistance3");
    x.style.visibility = "visible";
    var resistance3= new BoardController();
    resistance3.setJsPlumbInstance(jsPlumb);
    resistance3.setCircuitContainer('mid');
    //resistance3.makeDraggable('resistance3');
   // draggable('resistance3', 'mid');

  //  led.addEndPoint(4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'red');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C101', [0, 0, 1, -1, 11, -47], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C102', [0, 0, 1, -1, 11, -33], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C103', [0, 0, 1, -1, 11, -19], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C104', [0, 0, 1, -1, 11, -5], 'purple');

    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A101', [0, 0, 1, -1, 11, 61], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A102', [0, 0, 1, -1, 11, 75], 'purple');
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A103', [0, 0, 1, -1, 11, 89], 'purple'); 
    resistance3.addEndPoint('purple',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A104', [0, 0, 1, -1, 11, 103], 'purple');

}
function resistor4() {
    var x = document.getElementById("resistance4");
    x.style.visibility = "visible";
    var resistance4= new BoardController();
    resistance4.setJsPlumbInstance(jsPlumb);
    resistance4.setCircuitContainer('mid');
    //resistance4.makeDraggable('resistance4');
    //draggable('resistance4', 'mid');

  //  led.addEndPoint(4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'red');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C101', [0, 0, 1, -1, 11, -47], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C102', [0, 0, 1, -1, 11, -33], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C103', [0, 0, 1, -1, 11, -19], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C104', [0, 0, 1, -1, 11, -5], 'purple');

    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A101', [0, 0, 1, -1, 11, 61], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A102', [0, 0, 1, -1, 11, 75], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A103', [0, 0, 1, -1, 11, 89], 'purple');
    resistance4.addEndPoint('purple',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A104', [0, 0, 1, -1, 11, 103], 'purple');

}
function resistor5() {
    var x = document.getElementById("resistance5");
    x.style.visibility = "visible";
    var resistance5= new BoardController();
    resistance5.setJsPlumbInstance(jsPlumb);
    resistance5.setCircuitContainer('mid');
    //resistance5.makeDraggable('resistance5');
    //draggable('resistance5', 'mid');

  //  led.addEndPoint(4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'red');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C101', [0, 0, 1, -1, 11, -47], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C102', [0, 0, 1, -1, 11, -33], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C103', [0, 0, 1, -1, 11, -19], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C104', [0, 0, 1, -1, 11, -5], 'purple');

    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A101', [0, 0, 1, -1, 11, 61], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A102', [0, 0, 1, -1, 11, 75], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A103', [0, 0, 1, -1, 11, 89], 'purple');
    resistance5.addEndPoint('purple',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A104', [0, 0, 1, -1, 11, 103], 'purple');
  
}
function multimeter()
{

    var x1=  document.getElementById("shape");
    x1.style.visibility="visible";
    var multimeter = new BoardController();
    multimeter.setJsPlumbInstance(jsPlumb);
    multimeter.setCircuitContainer('mid');


    multimeter.addEndPoint('red',7,1, 'shape', 'multimeter_VCC', 'multimeter_VCC1', [0, 0, 1,-1, 882, 13], 'red');
    multimeter.addEndPoint('black',7,1, 'shape', 'multimeter_GND', 'multimeter_GND1', [0, 0, 1, -1, 847,13], 'black');
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it

    function resetCircuit()
         {   


       if(confirm("Do you want to reset?")){
           window.location.reload();
        }
    

         }

   
            
function radiobutton1()

{    
     var a= document.getElementById("showanother");
     a.style.visibility="hidden"; 
    
     var y= document.getElementById("chooseone");
     y.style.visibility="hidden";

    
     var x= document.getElementById("Components");
     x.style.visibility="visible";
   
     const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});

  
    var left = document.getElementById("First_Data"); 
     left.style.display ="block";

     document.getElementById('r1').innerHTML = "R<sub>F</sub>";

  document.getElementById("resistancebutton").addEventListener("click", function(){
   resistor1();
});
  
  document.getElementById("capbutton").addEventListener("click", function(){
   capacitor();
});
   document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit();
});
      document.getElementById("switchbutton").addEventListener("click", function(){
   multimeter();
   
}); 
    document.getElementById("startbutton").addEventListener("click", function(){
    var x=document.getElementById("display");
    x.style.visibility="visible";
    animate();
});
       document.getElementById("addtable").addEventListener("click", function(){
calculate1();
}); 
        document.getElementById("breadbutton").addEventListener("click", function(){
   breadboard();
   
  });
             document.getElementById("ic2button").addEventListener("click", function(){
   ic741();
   
  });
              document.getElementById("supplybutton").addEventListener("click", function(){
   supply();
   
  });
    
    
}
           
function radiobutton2()
{
     var a= document.getElementById("showanother");
     a.style.visibility="hidden";
   
    var y= document.getElementById("chooseone");
   y.style.visibility="hidden";

   const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});

  
    var left = document.getElementById("First_Data"); 
     left.style.display ="block";

     var left = document.getElementById("first_insrt"); 
     left.style.display ="none";
     var left = document.getElementById("second_insrt"); 
     left.style.display ="block";
   var x= document.getElementById("Components");
   x.style.visibility="visible";
   document.getElementById('r1').innerHTML = "R<sub>1</sub>";
  document.getElementById("resistancebutton").addEventListener("click", function(){
   resistor1();
});
  
   document.getElementById("breadbutton").addEventListener("click", function(){
   breadboard();
   
  });
  document.getElementById("capbutton").addEventListener("click", function(){
   capacitor();
});
   document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit1();
});
     document.getElementById("startbutton").addEventListener("click", function(){
   var x=document.getElementById("display");
  x.style.visibility="visible";
  animate1();

});
        document.getElementById("switchbutton").addEventListener("click", function(){
   multimeter();
   
}); 
               document.getElementById("addtable").addEventListener("click", function(){
calculate2();
}); 
                            document.getElementById("ic2button").addEventListener("click", function(){
   ic741();
   
  });
                              document.getElementById("supplybutton").addEventListener("click", function(){
   supply();
   
  });
        
}


function parameter()
{ var z=document.getElementById("sel2").value;
    if(z=="first")
    {
         var popup=document.getElementById("showanother");
         popup.style.visibility="visible";
         
         //newly added
         var y= document.getElementById("chooseone");
         y.style.visibility="hidden";

    }
    else if(z=="none")
    {
        alert("you choose nothing.");
    }
    else if(z=="second")
    {  
      //var a= document.getElementById("heading");
   //a.style.visibility="visible";
    // document.getElementById("instruction").disabled=false;
   
    var y= document.getElementById("chooseone");
   y.style.visibility="hidden";
   // document.getElementById('heading').innerHTML = "Measurement of input offset current";
     document.getElementById('capbutton').innerHTML = "Capacitors";
     document.getElementById('resistancebutton').innerHTML = "Resistors";


     const First = document.getElementById('First');
     const close_btn = document.getElementById('close-btn');
     const First_data = document.getElementById('First_Data');
     
     First.addEventListener('click', () => {
         First_data.classList.toggle('visible')
     });
     
     close_btn.addEventListener('click', () => {
         First_data.classList.remove('visible')
     });
     
       
         var left = document.getElementById("First_Data"); 
          left.style.display ="block";
     
          var a = document.getElementById("first_insrt"); 
          a.style.display ="none";
          var b = document.getElementById("second_insrt"); 
          b.style.display ="none";

          var c = document.getElementById("third_insrt"); 
          c.style.display ="block";
          
       var x= document.getElementById("Components");
   x.style.visibility="visible";
   document.getElementById("resistancebutton").addEventListener("click", function(){
   resistor1();
   resistor2();
     document.getElementById('r2').innerHTML = "R<sub>1</sub>";
     document.getElementById('r1').innerHTML = "R<sub>F</sub>";


});
    document.getElementById("capbutton").addEventListener("click", function(){
   capacitor();
   capacitor1();

});
 document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit2();
});
  document.getElementById("startbutton").addEventListener("click", function(){
   var c=document.getElementById("display");
  c.style.visibility="visible";
  animate2();

});
       document.getElementById("addtable").addEventListener("click", function(){
calculate3();
});
        document.getElementById("breadbutton").addEventListener("click", function(){
   breadboard();
   
  });
     document.getElementById("switchbutton").addEventListener("click", function(){
   multimeter();
   
}); 
                  document.getElementById("ic2button").addEventListener("click", function(){
   ic741();
   
  });
                    document.getElementById("supplybutton").addEventListener("click", function(){
   supply();
   
  });

}

     else if(z=="third")
    {
    	//var b= document.getElementById("heading");
   //b.style.visibility="visible";
    // document.getElementById("instruction").disabled=false;


     var y= document.getElementById("chooseone");
   y.style.visibility="hidden";
     document.getElementById('resistancebutton').innerHTML = "Resistors";

    
    const First = document.getElementById('First');
    const close_btn = document.getElementById('close-btn');
    const First_data = document.getElementById('First_Data');
    
    First.addEventListener('click', () => {
        First_data.classList.toggle('visible')
    });
    
    close_btn.addEventListener('click', () => {
        First_data.classList.remove('visible')
    });
    
      
        var left = document.getElementById("First_Data"); 
         left.style.display ="block";
    
         var a = document.getElementById("first_insrt"); 
         a.style.display ="none";
         var b = document.getElementById("second_insrt"); 
         b.style.display ="none";

         var c = document.getElementById("third_insrt"); 
         c.style.display ="none";

         var d = document.getElementById("fourth_insrt"); 
         d.style.display ="block";
         
    var x= document.getElementById("Components");
   x.style.visibility="visible";
     document.getElementById("resistancebutton").addEventListener("click", function(){
   resistor3();
   resistor4();
   resistor5();
     document.getElementById('r5').innerHTML = "R<sub>F</sub>";
     document.getElementById('r3').innerHTML = "R<sub>1</sub>";
     document.getElementById('r4').innerHTML = "R<sub>2</sub>";



  
    var elem=document.getElementById("resistance5");
    elem.style.cssText = 'position: absolute; top:124px; left:193px;visibility:visible; ';
    
});
      document.getElementById("switchbutton").addEventListener("click", function(){
   multimeter();
   
}); 
     document.getElementById("capbutton").addEventListener("click", function(){
   capacitor2();
});
      document.getElementById("startbutton").addEventListener("click", function(){
   var d=document.getElementById("display");
  d.style.visibility="visible";
  animate3();

});
       document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit3();
});
        document.getElementById("breadbutton").addEventListener("click", function(){
   breadboard();
   
  });
            document.getElementById("addtable").addEventListener("click", function(){
calculate4();
});
                         document.getElementById("ic2button").addEventListener("click", function(){
   ic741();
   
  });
                           document.getElementById("supplybutton").addEventListener("click", function(){
   supply();
   
  });
    }
     else if(z=="fourth")
    {
     // var i= document.getElementById("heading");
     // i.style.visibility="visible";
        var y= document.getElementById("chooseone");
   y.style.visibility="hidden";
 
   const First = document.getElementById('First');
   const close_btn = document.getElementById('close-btn');
   const First_data = document.getElementById('First_Data');
   
   First.addEventListener('click', () => {
       First_data.classList.toggle('visible')
   });
   
   close_btn.addEventListener('click', () => {
       First_data.classList.remove('visible')
   });
   
     
       var left = document.getElementById("First_Data"); 
        left.style.display ="block";
   
        var a = document.getElementById("first_insrt"); 
        a.style.display ="none";
        var b = document.getElementById("second_insrt"); 
        b.style.display ="none";

        var c = document.getElementById("third_insrt"); 
        c.style.display ="none";

        var d = document.getElementById("fourth_insrt"); 
        d.style.display ="none";
    
        var e = document.getElementById("five_insrt"); 
        e.style.display ="block";
   
        var h= document.getElementById("Components");
       h.style.visibility="visible";
  
  document.getElementById("capbutton").innerHTML="A.F. Oscillator";
   document.getElementById("switchbutton").innerHTML="C.R.O";
  document.getElementById("resistancebutton").addEventListener("click", function(){
    

   resistor5();
   
  });
  document.getElementById("breadbutton").addEventListener("click", function(){

   breadboard();
   
  });
  document.getElementById("capbutton").addEventListener("click", function(){
   generator1();
   });

 document.getElementById("switchbutton").addEventListener("click", function(){
     
   cro();
 

   
}); 
    document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit4();
}); 
                 document.getElementById("ic2button").addEventListener("click", function(){
   ic741();
   
  });


         document.getElementById("addtable").addEventListener("click", function(){
calculate5();
});
                  document.getElementById("startbutton").addEventListener("click", function(){
                    var h=document.getElementById(mydiv);
                    myfun();
                      
    
init();
});
                    document.getElementById("supplybutton").addEventListener("click", function(){
                       
   
   supply();
   
  });
}   
}
function cro()
{
	 var x= document.getElementById("cro1");
   x.style.visibility="visible";
   var cro1= new BoardController();
  cro1.setJsPlumbInstance(jsPlumb);
    cro1.setCircuitContainer('mid');
   
    cro1.addEndPoint('black',6,1, 'cro1', 'cro_A1', 'cro1_A101', [0, 0, 1, -1, 159, 134], 'black');
    cro1.addEndPoint('black',6,1, 'cro1', 'cro_C1', 'cro1_C101', [0, 0, 1, -1, 300, 134], 'black');
    
   
    
}
function generator1()
{
	 var x= document.getElementById("generator");
   x.style.visibility="visible";
   
       var generator= new BoardController();
  generator.setJsPlumbInstance(jsPlumb);
  generator.setCircuitContainer('mid');
   

    generator.addEndPoint('black',5,1, 'generator', 'generator_C1', 'generator_C101', [0, 0, 1, -1, 189, 99], 'black');
    generator.addEndPoint('red',5,1, 'generator', 'generator_A1', 'generator_A101', [0, 0, 1, -1, 155, 99], 'red');
}

      var display = new SegmentDisplay("display");
      display.pattern         =  "##.###";  
      display.cornerType      = 2;
      display.displayType     = 7;
      display.displayAngle    = 9;
      display.digitHeight     = 20;
      display.digitWidth      = 12;
      display.digitDistance   = 2;
      display.segmentWidth    = 3;
      display.segmentDistance = 0.5;
      display.colorOn         = "black";
      display.colorOff        = "#C7E5F0";

     

      function animate() {
  
        display.setValue("+0.024");
      //  window.setTimeout('animate()', 100);
      }
      function animate1() {
  
        display.setValue("-0.020");
      
      }

         function animate2() {
  
        display.setValue("+0.003");
      
      }
      function animate3() {
  
        display.setValue("+0.106");
   
      }


function calculate1()
{  var a= prompt("Please enter your calculated inverting bias current in μA ");
console.log(typeof(a));
var b=parseFloat(a);
console.log(typeof(b)); 
if(b>=0.0490 && b<=0.0550){
alert("Correct result.");
    document.getElementById('box1').innerHTML = "Result : Inverting bias current =0.0510 μA. "; }
      else
        {alert("Wrong result. Calculate again");}
}
function calculate2()
{var a= prompt("Please enter your calculated non-inverting bias current in μA(neglacting negative sign) ");
console.log(typeof(a));
var b=parseFloat(a);
console.log(typeof(b)); 
if(b>=0.0420 && b<=0.0430){
//if(b="- 0.0420" ){

alert("Correct result.");
    document.getElementById('box1').innerHTML = "Result : Non-Inverting bias current =-0.0425 μA. "; }
      else
        {alert("Wrong result. Calculate again");}
}
function calculate3()
{var a= prompt("Please enter your calculated input offset current in μA ");
console.log(typeof(a));
var b=parseFloat(a);
console.log(typeof(b)); 
if(b>=0.0060 && b<=0.0067){
alert("Correct result.");
    document.getElementById('box1').innerHTML = "Result : Input Offset Current =0.0063 μA. ";} 
      else
        {alert("Wrong result. Calculate again");}
}
function calculate4()
{var a= prompt("Please enter your calculated input offset volatge in mV  ");
console.log(typeof(a));
var b=parseFloat(a);
console.log(typeof(b)); 
if(b>=1.040 && b<=1.053){
alert("Correct result.");
    document.getElementById('box1').innerHTML = "Result : Input Offset Voltge =1.048 mV";} 
      else
        {alert("Wrong result. Calculate again");}

}
function calculate5()
{var a= prompt("Please enter your calculated slew rate in V/μs  ");
console.log(typeof(a));
var b=parseFloat(a);
console.log(typeof(b)); 
if(b>=0.4 && b<=0.5){
alert("Correct result.");
    document.getElementById('box1').innerHTML = "Result : Slew Rate=0.471V/μs"; }
    else
        {alert("Wrong result. Measure again.");}
}