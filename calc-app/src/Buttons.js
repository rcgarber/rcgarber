import React from "react";


function Buttons() {
    let num1 = null;
    let num2 = null;
    let operator = "";

    const getValue = (value1) => {
        document.getElementById('box').value += value1;
    }

    const clearScreen = () => {
        document.getElementById('box').value = "";
    }

    const negate = (value1) => {
        let eq = Number(document.getElementById('box').value);
        let y = -eq
        document.getElementById('box').value = y;
    }

    const setPlus = () => {
        num1 = Number(document.getElementById('box').value);
        operator = "+";
        document.getElementById('box').value = "";
    }

    const setMinus = () => {
        num1 = Number(document.getElementById('box').value);
        operator = "-"
        document.getElementById('box').value = "";
    }

    const setTimes = () => {
        num1 = Number(document.getElementById('box').value);
        operator = "*"
        document.getElementById('box').value = "";
    }

    const setDivide = () => {
        num1 = Number(document.getElementById('box').value);
        operator = "/"
        document.getElementById('box').value = "";
    }

    const results = () => {
        if (operator === '+') {
            num2 = Number(document.getElementById('box').value);
            document.getElementById('box').value = num1 + num2;
        }
        else if (operator === '*') {
            num2 = Number(document.getElementById('box').value);
            document.getElementById('box').value = num1 * num2;
        }
        else if (operator === '-') {
            num2 = Number(document.getElementById('box').value);
            document.getElementById('box').value = num1 - num2;
        }
        else if (operator === '/') {
            num2 = Number(document.getElementById('box').value);
            document.getElementById('box').value = num1 / num2;
        }
    }

    return (
        <table class="center" data-testid="buttons">
            <tr>
                <td><input type="button" value="7" onClick={() => getValue('7')} /></td>
                <td><input type="button" value="8" onClick={() => getValue('8')} /></td>
                <td><input type="button" value="9" onClick={() => getValue('9')} /></td>
                <td><input type="button" value="/" onClick={() => setDivide()} /></td>
            </tr>
            <tr>
                <td><input type="button" value="4" onClick={() => getValue('4')} /></td>
                <td><input type="button" value="5" onClick={() => getValue('5')} /></td>
                <td><input type="button" value="6" onClick={() => getValue('6')} /></td>
                <td><input type="button" value="*" onClick={() => setTimes()} /></td>
            </tr>
            <tr>
                <td><input type="button" value="1" onClick={() => getValue('1')} /></td>
                <td><input type="button" value="2" onClick={() => getValue('2')} /></td>
                <td><input type="button" value="3" onClick={() => getValue('3')} /></td>
                <td><input type="button" value="+" onClick={() => setPlus()} /></td>
            </tr>
            <tr>
                <td><input type="button" value="Enter" onClick={() => results()} /></td>
                <td><input type="button" value="Clear" onClick={() => clearScreen()} /></td>
                <td><input type="button" value="+/-" onClick={() => negate()} /></td>
                <td><input type="button" value="-" onClick={() => setMinus()} /></td>
            </tr>
        </table>
    )
}

export default Buttons;