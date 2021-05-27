// Bài 1: tính tiền lương nhân viên
document.getElementById("btnClick1").onclick = function(){
    var luongMotNgay= 100000;
    var ngayCong = document.getElementById("soNgayCong").value;
    var tienLuong = ngayCong * luongMotNgay;
    document.getElementById("show_1").innerHTML = "Tiền lương ngày hôm nay của bạn là: " + tienLuong +"đ";
    document.getElementById("show_1").classList.add("showInfo");
};

// Bài 2:
document.getElementById("btnClick2").onclick = function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    var tong = parseInt(num1) + parseInt(num2) +parseInt(num3) +parseInt(num4) + parseInt(num5);
    var trungBinh = tong / 5;
    document.getElementById("show_2")
        .innerHTML = "Giá trị trung bình của 5 số bạn đã nhập là: " + trungBinh;
    document.getElementById("show_2").classList.add("showInfo");
};

// Bài 3:
document.getElementById("btnClick3").onclick = function(){
    var triGiaUSD= 23500;
    var soTienUSD = document.getElementById("soTien").value;
    var tienVND = triGiaUSD * soTienUSD;
    document.getElementById("show_3").innerHTML = "Tiền USD đổi ra VND là: " + tienVND +" VND";
    document.getElementById("show_3").classList.add("showInfo");
};

// bài 4:
document.getElementById("btnClick4").onclick = function(){
    var dai = document.getElementById("chieuDai").value;
    var rong = document.getElementById("chieuRong").value;
    var P = (parseInt(dai) + parseInt(rong)) * 2;
    var S = dai * rong;
    var info = "<div>Chu vi HCN là: " + P + "</div>";
    info += "<div>Diện tích HCN là: " + S + "</div>";
    document.getElementById("show_4").innerHTML = info;
    document.getElementById("show_4").classList.add("showInfo");
};

// bài 5:
document.getElementById("btnClick5").onclick = function(){
    var so2ChuSo = document.getElementById("giaTri").value;
    var soDau = Math.floor(so2ChuSo / 10);
    var soSau = Math.floor(so2ChuSo % 10);
    var tong2KySo = parseInt(soDau) + parseInt(soSau);
    document.getElementById("show_5").innerHTML = "Tổng 2 ký số của số vừa nhập là: " + tong2KySo;
    document.getElementById("show_5").classList.add("showInfo");
};


