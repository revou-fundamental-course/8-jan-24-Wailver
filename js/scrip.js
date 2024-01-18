function square( )
{
var side,area;
side = parseInt(document.getElementById("first").value);
area = luas*luas; //Equation for Area of a square
document.getElementById("num").innerHTML="Luas Persegi adalah : "+area;
}

function keliling( )
{
var sisi,perimeter;
sisi = parseInt(document.getElementById("second").value);
perimeter = 4*sisi; //Equation for Perimeter of a squaredocument.getElementById("num1").innerHTML="Keliling Persegi adalah : "+perimeter;
document.getElementById("num1").innerHTML="Keliling Persegi adalah : "+perimeter;
}

function fun() {
    const first = document.querySelector('#first')
    first.value = null;
}



const inputLuas = document.getElementById('luas');
const inputKeliling = document.getElementById('keliling');
const buttonHitungLuas = document.getElementById('HLuas');
const buttonHitungKeliling = document.getElementById('HKeliling');
const buttonResetLuas = document.getElementById('resetLuas');
const buttonResetKeliling = document.getElementById('resetKeliling');
const resultLuas = document.getElementById('resultLuas');
const resultKeliling = document.getElementById('resultKeliling');

function hitungLuas() {
    const sisi = parseFloat(inputLuas.value);
    if (!isNaN(sisi)) {
        const luas = sisi * sisi;
        resultLuas.textContent = `Luas Persegi: ${luas}`;
    } else {
        resultLuas.textContent = 'Masukkan nilai sisi yang valid.';
    }
}

function hitungKeliling() {
    const sisi = parseFloat(inputKeliling.value);
    if (!isNaN(sisi)) {
        const keliling = 4 * sisi;
        resultKeliling.textContent = `Keliling Persegi: ${keliling}`;
    } else {
        resultKeliling.textContent = 'Masukkan nilai sisi yang valid.';
    }
}


function resetInputAndResult() {
    inputLuas.value = '';
    resultLuas.textContent = '';
    
    inputKeliling.value = '';
    resultKeliling.textContent = '';
}


buttonHitungLuas.addEventListener('click', hitungLuas);


buttonHitungKeliling.addEventListener('click', hitungKeliling);


buttonResetLuas.addEventListener('click', resetInputAndResult);


buttonResetKeliling.addEventListener('click', resetInputAndResult);
