var a = 0;
document.getElementById('more').onclick = function() {
    if (a === 0) {
        document.getElementById('more').innerHTML = `Show Less <i class="fas fa-angle-up"></i>`;
        document.getElementById('ct1').style.display = 'block';
        a = 1;
    } else if (a === 1) {
        document.getElementById('ct1').style.display = 'none';
        document.getElementById('more').innerHTML = `Show More <i class="fas fa-angle-up"></i>`;
        a = 0;
    }

}
var b = 0;
document.getElementById('more1').onclick = function() {
    if (b === 0) {
        document.getElementById('more1').innerHTML = `Show Less <i class="fas fa-angle-up"></i>`;
        document.getElementById('ct2').style.display = 'block';
        b = 1;
    } else if (b === 1) {
        document.getElementById('ct2').style.display = 'none';
        document.getElementById('more1').innerHTML = `Show More <i class="fas fa-angle-up"></i>`;
        b = 0;
    }
}
var c = 0;
document.getElementById('more2').onclick = function() {
    if (c === 0) {
        document.getElementById('more2').innerHTML = `Show Less <i class="fas fa-angle-up"></i>`;
        document.getElementById('ct3').style.display = 'block';
        c = 1;
    } else if (c === 1) {
        document.getElementById('ct3').style.display = 'none';
        document.getElementById('more2').innerHTML = `Show More <i class="fas fa-angle-up"></i>`;
        c = 0;
    }
}