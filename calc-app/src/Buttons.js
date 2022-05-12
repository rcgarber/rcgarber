import React from "react";


function Buttons() {
    let num1 = null;
    let num2 = null;
    let operator = "";

    return (
        <table class="center">
            <tr>
                <td><input type="button" value="7" onclick="getvalue('7')" /></td>
                <td><input type="button" value="8" onclick="getvalue('8')" /></td>
                <td><input type="button" value="9" onclick="getvalue('9')" /></td>
                <td><input type="button" value="/" onclick="setDivide()" /></td>
            </tr>
            <tr>
                <td><input type="button" value="4" onclick="getvalue('4')" /></td>
                <td><input type="button" value="5" onclick="getvalue('5')" /></td>
                <td><input type="button" value="6" onclick="getvalue('6')" /></td>
                <td><input type="button" value="*" onclick="setTimes()" /></td>
            </tr>
            <tr>
                <td><input type="button" value="1" onclick="getvalue('1')" /></td>
                <td><input type="button" value="2" onclick="getvalue('2')" /></td>
                <td><input type="button" value="3" onclick="getvalue('3')" /></td>
                <td><input type="button" value="+" onclick="setPlus()" /></td>
            </tr>
            <tr>
                <td><input type="button" value="Enter" onclick="results()" /></td>
                <td><input type="button" value="Clear" onclick="clearscreen()" /></td>
                <td><input type="button" value="+/-" onclick="negate()" /></td>
                <td><input type="button" value="-" onclick="setMinus()" /></td>
            </tr>
        </table>
    )
}

export default Buttons;