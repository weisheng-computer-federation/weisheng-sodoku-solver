'use strict';
let soku = [[], [], [], [], [], [], [], [], []];
let sokuAns, row, n, g;
let notes = [[[true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true]], [[true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true]], [[true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true]], [[true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true]], [[true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true]], [[true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true]], [[true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true]], [[true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true]], [[true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true]]];
let numLeft = [[9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]];
window.onload = () => {
    for (let i = 0, table = document.body.querySelector("table"); i < 9; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 9; j++) {
            let th = document.createElement('th');
            th.innerHTML =
                `<input id="r${i}c${j}" type="text" maxlength="1" onfocus="this.select()" onKeyUp = "value = value.replace(/[^1-9]/g,'');if(value != ''){this.blur();}InputSoku();">`; //阻止输入除1-9以外的字符,输入后取消光标
            tr.append(th);
        }
        table?.append(tr);
    }
    setInterval(InputSoku, 1000); //防输入字母
};
// function getGrid(row:number,col:number){
//     return parseInt(row/3)*3+parseInt(col/3)+1;
// }
function Check() {
    let valid = true;
    let used;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            document.querySelector(`table tr:nth-child(${i + 1}) th:nth-child(${j + 1})`).style.background = "";
        } //清除所有错误，方便重填
        used = [false, false, false, false, false, false, false, false, false, false];
        for (let j = 0; j < 9; j++) {
            if (soku[i][j] != 0) {
                if (used[soku[i][j]] == false)
                    used[soku[i][j]] = true;
                else {
                    valid = false;
                    // (<HTMLInputElement>document.querySelector(`table tr:nth-child(${i+1})`)).style.background="pink";//整行高亮
                    for (let k = 0; k < 9; k++) {
                        if (soku[i][k] == soku[i][j]) {
                            document.querySelector(`table tr:nth-child(${i + 1}) th:nth-child(${k + 1})`).style.background = "red";
                        }
                    }
                    document.querySelector(`table tr:nth-child(${i + 1}) th:nth-child(${j + 1})`).style.background = "red";
                }
            }
        }
    }
    for (let i = 0; i < 9; i++) {
        used = [false, false, false, false, false, false, false, false, false, false];
        for (let j = 0; j < 9; j++) {
            if (soku[j][i] != 0) {
                if (used[soku[j][i]] == false)
                    used[soku[j][i]] = true;
                else {
                    valid = false;
                    for (let k = 0; k < 9; k++) {
                        if (soku[k][i] == soku[j][i]) {
                            document.querySelector(`table tr:nth-child(${k + 1}) th:nth-child(${i + 1})`).style.background = "red";
                        }
                    }
                    document.querySelector(`table tr:nth-child(${j + 1}) th:nth-child(${i + 1})`).style.background = "red";
                }
            }
        }
    }
    for (let i = 0; i < 9; i++) {
        used = [false, false, false, false, false, false, false, false, false, false];
        for (let j = 0; j < 9; j++) {
            if (soku[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + j % 3] != 0) {
                if (used[soku[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + j % 3]] == false)
                    used[soku[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + j % 3]] = true;
                else {
                    valid = false;
                    for (let k = 0; k < 9; k++) {
                        if (soku[Math.floor(i / 3) * 3 + Math.floor(k / 3)][(i % 3) * 3 + k % 3] == soku[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + j % 3]) {
                            document.querySelector(`table tr:nth-child(${Math.floor(i / 3) * 3 + Math.floor(k / 3) + 1}) th:nth-child(${(i % 3) * 3 + k % 3 + 1})`).style.background = "red";
                        }
                    }
                    document.querySelector(`table tr:nth-child(${Math.floor(i / 3) * 3 + Math.floor(j / 3) + 1}) th:nth-child(${(i % 3) * 3 + j % 3 + 1})`).style.background = "red";
                }
            }
        }
    }
    return valid;
}
function InputSoku() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            document.getElementById(`r${i}c${j}`).value = document.getElementById(`r${i}c${j}`).value.replace(/[^1-9]/g, '');
            soku[i][j] = document.getElementById(`r${i}c${j}`).value == '' ? 0 : Number(document.getElementById(`r${i}c${j}`).value);
        }
    }
    Check();
}
function Solve() {
    InputSoku(); //你永远不会知道用户会通过什么方式逃脱输入检查
    //各种检查
    if (Check() == false) {
        alert("数独不合法，请修改后再试");
        return;
    }
    { //检查输入个数为0的情况
        let sum = 0;
        soku.forEach(i => {
            i.forEach(j => {
                sum += j;
            });
        });
        if (sum == 0) {
            alert("啥都不输解个p呢");
            return;
        }
    }
    { //FIXME 还没判断完所有情况
        let sum = 0; //数字数小于17一定多解
        soku.forEach(i => {
            i.forEach(j => {
                if (j != 0) {
                    sum++;
                }
            });
        });
        if (sum < 17) {
            alert("这个数独肯定没有唯一解啦（虽然目前有些有多个解的数独也不一定能判断的出来）");
            return;
        }
        for (let i = 0; i < 9; i++) {
            if (i % 3 == 0) {
                sum = 0;
            }
            for (let j = 0; j < 9; j++) {
                if (soku[i][j] != 0)
                    break;
                if (j == 8)
                    sum++;
            }
            if (sum == 2) {
                alert("这个数独肯定没有唯一解啦（虽然目前有些有多个解的数独也不一定能判断的出来）");
                return;
            }
        }
        for (let i = 0; i < 9; i++) {
            if (i % 3 == 0) {
                sum = 0;
            }
            for (let j = 0; j < 9; j++) {
                if (soku[j][i] != 0)
                    break;
                if (j == 8)
                    sum++;
            }
            if (sum == 2) {
                alert("这个数独肯定没有唯一解啦（虽然目前有些有多个解的数独也不一定能判断的出来）");
                return;
            }
        }
    }
    //原来的
    // for(let i=0;i<9;i){
    //     for(let j=0;j<9;j++){
    //         let currentNum=soku[i][j]
    //         if(currentNum!=0){
    //             numLeft[i][j]=0;//被占用了
    //             for(let k=0;k<9;k++){//做笔记
    //                 if(numLeft[k][j]!=0&&notes[k][j][currentNum-1]==1){
    //                     notes[k][j][currentNum-1]=0;
    //                     numLeft[k][j]--;
    //                 }
    //                 if(numLeft[i][k]!=0&&notes[i][k][currentNum-1]==1){
    //                     notes[i][k][currentNum-1]=0;
    //                     numLeft[i][k]--;
    //                 }
    //                 if(numLeft[parseInt(i/3)*3+parseInt(k/3)][parseInt(j/3)*3+(k%3)]!=0&&notes[parseInt(i/3)*3+parseInt(k/3)][parseInt(j/3)*3+(k%3)][currentNum-1]==1){
    //                     notes[parseInt(i/3)*3+parseInt(k/3)][parseInt(j/3)*3+(k%3)][currentNum-1]=0;
    //                     numLeft[parseInt(i/3)*3+parseInt(k/3)][parseInt(j/3)*3+(k%3)][currentNum-1]--;
    //                 }
    //             }
    //         }
    //     }
    // }
    { //解数独，抄的 FIXME 无解的时候会卡住
        //press "show answer" button and show answer then
        function get_answer() {
            var bool = check_input();
            if (bool) {
                var grid = readAPuzzle();
                if (!isValidGrid(grid)) {
                    alert("Invalid input, please try again!");
                }
                else {
                    if (search(grid)) {
                        output_ans();
                    }
                    else {
                        alert("Found no solution!");
                    }
                }
            }
        }
        //check if the input are valid
        function check_input() {
            return true;
        }
        //read a puzzle from the web page
        function readAPuzzle() {
            var arr = new Array();
            for (var i = 0; i < 81; i++) {
                arr[i] = soku[Math.floor(i / 9)][i % 9];
            }
            var grid = new Array();
            for (var i = 0; i < 9; i++) {
                grid[i] = new Array();
                for (var j = 0; j < 9; j++) {
                    grid[i][j] = 0;
                }
            }
            for (var i = 0; i < 81; i++) {
                grid[Math.floor(i / 9)][i % 9] = arr[i];
            }
            return grid;
        }
        //Obtain a list of free cells from the puzzle
        function getFreeCellList(grid) {
            var freeCellList = new Array();
            var index = 0;
            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    if (grid[i][j] == 0) {
                        freeCellList[index] = new Array(i, j);
                        index++;
                    }
                }
            }
            return freeCellList;
        }
        //Check whether grid[i][j] is valid in the grid
        function isValid(i, j, grid) {
            //Check whether grid[i][j] is valid at the i's row
            for (var column = 0; column < 9; column++) {
                if ((column != j) && (grid[i][column] == grid[i][j])) {
                    return false;
                }
            }
            //Check whether grid[i][j] is valid at the j's column
            for (var row = 0; row < 9; row++) {
                if ((row != i) && (grid[row][j] == grid[i][j])) {
                    return false;
                }
            }
            //Check whether grid[i][j] is valid at the 3-by-3 box
            for (var row = Math.floor(i / 3) * 3; row < Math.floor(i / 3) * 3 + 3; row++) {
                for (var col = Math.floor(j / 3) * 3; col < Math.floor(j / 3) * 3 + 3; col++) {
                    if ((row != i) && (col != j) && (grid[row][col] == grid[i][j])) {
                        return false;
                    }
                }
            }
            return true; //The current value at grid[i][j] is valid
        }
        //Check whether the fixed cells are valid in the grid
        function isValidGrid(grid) {
            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    if ((grid[i][j] < 0) || (grid[i][j] > 9) || ((grid[i][j] != 0) && (!isValid(i, j, grid)))) {
                        return false;
                    }
                }
            }
            return true;
        }
        //Search for a solution
        function search(grid) {
            var freeCellList = getFreeCellList(grid);
            var numberOfFreeCells = freeCellList.length;
            if (numberOfFreeCells == 0) {
                return true;
            }
            var k = 0; //Start from the first free cell
            while (true) {
                var i = freeCellList[k][0];
                var j = freeCellList[k][1];
                if (grid[i][j] == 0) {
                    grid[i][j] = 1;
                }
                if (isValid(i, j, grid)) {
                    if (k + 1 == numberOfFreeCells) {
                        //no more free cells
                        return true; //A solution is found
                    }
                    else {
                        //Move to the next free cell
                        k++;
                    }
                }
                else {
                    if (grid[i][j] < 9) {
                        //Fill the free cell with the next possible value
                        grid[i][j]++;
                    }
                    else {
                        //grid[i][j] is 9,backtrack
                        while (grid[i][j] == 9) {
                            if (k == 0) {
                                return false; //No possible value
                            }
                            grid[i][j] = 0; //Reset to free cell
                            k--; //Backtrack to the preceding free cell
                            i = freeCellList[k][0];
                            j = freeCellList[k][1];
                        }
                        //Fill the free cell with the next possible value
                        //search continues from this free cell at k
                        grid[i][j]++;
                    }
                }
            }
            return true; //A solution is found
        }
        //output the answer on the web page
        function output_ans() {
            var grid = readAPuzzle();
            var grid_original = readAPuzzle();
            if (search(grid)) {
                for (var i = 0; i < 81; i++) {
                    if (grid[Math.floor(i / 9)][i % 9] != grid_original[Math.floor(i / 9)][i % 9]) {
                        document.getElementsByTagName("input")[i].value = grid[Math.floor(i / 9)][i % 9];
                    }
                }
            }
        }
        get_answer();
    }
}
function Clear() {
    for (let i = 0; i < 81; i++) {
        document.getElementsByTagName("input")[i].value = '';
    }
    InputSoku();
}
function InputExample() {
    for (let i = 0; i < 81; i++) {
        document.getElementsByTagName("input")[i].value = '';
    }
    document.getElementById("r0c4").value = '5';
    document.getElementById("r0c8").value = '6';
    document.getElementById("r1c2").value = '4';
    document.getElementById("r1c5").value = '8';
    document.getElementById("r1c8").value = '2';
    document.getElementById("r2c0").value = '6';
    document.getElementById("r2c1").value = '1';
    document.getElementById("r2c6").value = '8';
    document.getElementById("r2c7").value = '5';
    document.getElementById("r3c0").value = '3';
    document.getElementById("r3c2").value = '2';
    document.getElementById("r3c3").value = '5';
    document.getElementById("r3c5").value = '6';
    document.getElementById("r3c7").value = '1';
    document.getElementById("r5c1").value = '9';
    document.getElementById("r5c3").value = '2';
    document.getElementById("r5c5").value = '3';
    document.getElementById("r5c6").value = '6';
    document.getElementById("r5c8").value = '7';
    document.getElementById("r6c1").value = '6';
    document.getElementById("r6c2").value = '1';
    document.getElementById("r6c7").value = '2';
    document.getElementById("r6c8").value = '9';
    document.getElementById("r7c0").value = '7';
    document.getElementById("r7c3").value = '6';
    document.getElementById("r7c6").value = '5';
    document.getElementById("r8c0").value = '2';
    document.getElementById("r8c4").value = '4';
    InputSoku();
}
function KeyUp() {
    // event.target.value = event.target.value.replace(/[^1-9]/g,'');if(event.target.value != ''){event.target.blur();}
}
