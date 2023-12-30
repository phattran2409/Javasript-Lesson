let display = document.querySelector("p"); 
let select = document.querySelector("select"); 



select.addEventListener("change",setWeather);

function setWeather() {
    // 
    const choice = select.value; 

    if (choice == "sunny") { 
        display.textContent = 
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    }
    else if (choice == "rainy") {
        display.textContent = 
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
    }
    else if (choice == "snowing") { 
        display.textContent = 
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
    }
    else if (choice == "overcast") {
        display.textContent = 
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    }
    else { 
        display.textContent = "";
    }

}    


// vehicle option

let selectVehicle = document.getElementById("vehicle-name");
let para_infor = document.getElementById("para"); 
let cardbmw  = `
<div class="content" id="content">
        <img src="https://www.shutterstock.com/image-vector/valencia-spain-march-29-2023-260nw-2282038799.jpg" alt="">
        <div class="detail">
            <h1>BMW</h1>
            <p>day published : 7 tháng 3, 1916</p>
            <p>icome : 142,6 tỷ EUR (2022)</p>
        </div>
    </div>
`
let cardaudi = `
    <div class="content" id="content">
        <img src="https://www.freepnglogos.com/uploads/audi-logo-0.gif" alt="">
        <div class="detail">
            <h1>Audi</h1>
            <p>day published : 16-07-1909</p>
            <p>icome : € 33.617 tỉ (2007)</p>
        </div>
    </div>
`
const result = document.getElementById("result-Nselect");
// selectVehicle.addEventListener("change",getInforVehicle); 

// function getInforVehicle() { 
//     const choice = selectVehicle.value; 
    
//     if (choice == "bmw") { 
//         para_infor.textContent = 
//         "Tiền thân của BMW là Rapp Motorenwerke. Tháng 4 năm 1917 công ty đổi tên thành BMW GmbH (Công ty TNHH BMW) và một năm sau đó là BMW AG (Công ty cổ phần BMW), giám đốc đầu tiên cho đến năm 1942 là Franz Josef Popp (1886-1954). ";
       
//     }
//     else if (choice == "audi") { 
//         para_infor.textContent = 
//         "AUDI AG là một công ty của Đức chuyên sản xuất ô tô hạng sang dưới nhãn hiệu Audi. Công ty này là thành viên của tập đoàn ô tô lớn nhất thế giới Volkswagen AG. Cái tên Audi bản dịch tiếng La tinh là tên của nhà sáng lập August Horch.";    
//     }
// }

selectVehicle.addEventListener("change", () => {
    console.log(selectVehicle.value); 
    const choice = selectVehicle.value;
    if(choice === "bmw") { 
        console.log(1);
        result.innerHTML = cardbmw;
        para_infor.textContent = 
        "Tiền thân của BMW là Rapp Motorenwerke. Tháng 4 năm 1917 công ty đổi tên thành BMW GmbH (Công ty TNHH BMW) và một năm sau đó là BMW AG (Công ty cổ phần BMW), giám đốc đầu tiên cho đến năm 1942 là Franz Josef Popp (1886-1954)."
    }
    else if (choice === "audi") { 
        result.innerHTML = cardaudi;
        para_infor.textContent = 
        "AUDI AG là một công ty của Đức chuyên sản xuất ô tô hạng sang dưới nhãn hiệu Audi. Công ty này là thành viên của tập đoàn ô tô lớn nhất thế giới Volkswagen AG. Cái tên Audi bản dịch tiếng La tinh là tên của nhà sáng lập August Horch."
    }   
    
})

