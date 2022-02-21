const battery = [
    {
      batteryName: "WKL-78",
      capacityAh: 2.3,
      voltage: 14.4,
      maxDraw: 3.2,
      endVoltage: 10,
    },
    {
      batteryName: "WKL-140",
      capacityAh: 4.5,
      voltage: 14.4,
      maxDraw: 9.2,
      endVoltage: 5,
    },
    {
      batteryName: "Wmacro-78",
      capacityAh: 2.5,
      voltage: 14.5,
      maxDraw: 10,
      endVoltage: 5,
    },
    {
      batteryName: "Wmacro-140",
      capacityAh: 3.6,
      voltage: 14.4,
      maxDraw: 14,
      endVoltage: 5,
    },
    {
      batteryName: "IOP-E78",
      capacityAh: 6.6,
      voltage: 14.4,
      maxDraw: 10.5,
      endVoltage: 8,
    },
    {
      batteryName: "IOP-E140",
      capacityAh: 9.9,
      voltage: 14.4,
      maxDraw: 14,
      endVoltage: 10,
    },
    {
      batteryName: "IOP-E188",
      capacityAh: 13.2,
      voltage: 14.4,
      maxDraw: 14,
      endVoltage: 11,
    },
    {
      batteryName: "RYN-C65",
      capacityAh: 4.9,
      voltage: 14.8,
      maxDraw: 4.9,
      endVoltage: 11,
    },
    {
      batteryName: "RYN-C85",
      capacityAh: 6.3,
      voltage: 14.4,
      maxDraw: 6.3,
      endVoltage: 12,
    },
    {
      batteryName: "RYN-C140",
      capacityAh: 9.8,
      voltage: 14.8,
      maxDraw: 10,
      endVoltage: 12,
    },
    {
      batteryName: "RYN-C290",
      capacityAh: 19.8,
      voltage: 14.4,
      maxDraw: 14,
      endVoltage: 12,
    },
  ];

  const camera = [
    {
      brand: "Cakon",
      model: "ABC 3000M",
      powerConsumptionWh: 35.5,
    },
    {
      brand: "Cakon",
      model: "ABC 5000M",
      powerConsumptionWh: 37.2,
    },
    {
      brand: "Cakon",
      model: "ABC 7000M",
      powerConsumptionWh: 39.7,
    },
    {
      brand: "Cakon",
      model: "ABC 9000M",
      powerConsumptionWh: 10.9,
    },
    {
      brand: "Cakon",
      model: "ABC 9900M",
      powerConsumptionWh: 15.7,
    },
    {
      brand: "Go MN",
      model: "UIK 110C",
      powerConsumptionWh: 62.3,
    },
    {
      brand: "Go MN",
      model: "UIK 210C",
      powerConsumptionWh: 64.3,
    },
    {
      brand: "Go MN",
      model: "UIK 230C",
      powerConsumptionWh: 26.3,
    },
    {
      brand: "Go MN",
      model: "UIK 250C",
      powerConsumptionWh: 15.3,
    },
    {
      brand: "Go MN",
      model: "UIK 270C",
      powerConsumptionWh: 20.3,
    },
    {
      brand: "VANY",
      model: "CEV 1100P",
      powerConsumptionWh: 22,
    },
    {
      brand: "VANY",
      model: "CEV 1300P",
      powerConsumptionWh: 23,
    },
    {
      brand: "VANY",
      model: "CEV 1500P",
      powerConsumptionWh: 24,
    },
    {
      brand: "VANY",
      model: "CEV 1700P",
      powerConsumptionWh: 25,
    },
    {
      brand: "VANY",
      model: "CEV 1900P",
      powerConsumptionWh: 26,
    },
  ];

class Layout {
    static battLayout() {
        let target = document.getElementById("target");
        let divParent = document.createElement("div");
        target.append(divParent);

        //ヘッダー部分
        let headerDiv = document.createElement("div");
        headerDiv.classList.add("d-flex","justify-content-center","mt-4");
        divParent.append(headerDiv);

        let header = document.createElement("div");
        header.classList.add("col-10", "col-xl-6", "d-flex","bg-primary","p-3","d-flex","justify-content-center");
        headerDiv.append(header);

        let titleDiv = document.createElement("div");
        titleDiv.innerHTML = "Battery Finder Program";
        titleDiv.style = "font-size: 25px; color:white"
        header.append(titleDiv);

        //ボディー部分
        let battBodyParent = document.createElement("div");
        battBodyParent.classList.add("d-flex","justify-content-center")
        divParent.append(battBodyParent);

        let battBody = document.createElement("div");
        battBody.classList.add("p-3","col-10","col-xl-6")
        battBody.style = "background-color:#f0f0f0";
        battBodyParent.append(battBody);

        //step1
        let step1H5= document.createElement("h5");
        step1H5.classList.add("p-2")
        step1H5.innerHTML = "step1: Select your brand";
        battBody.append(step1H5);

        let step1Select = document.createElement("select");
        step1Select.classList.add("col-xl-4","col-5","p-2")
        step1Select.id = "step1"
        step1Select.name = "step1"
        battBody.append(step1Select);

        //step2
        let step2H5 = document.createElement("h5");
        step2H5.classList.add("p-2")
        step2H5.innerHTML = "step2: Select your brand";
        battBody.append(step2H5);

        let step2Select = document.createElement("select");
        step2Select.classList.add("col-xl-4","col-5","p-2")
        step2Select.id = "step2"
        battBody.append(step2Select);

        //step3
        let step3H5 = document.createElement("h5");
        step3H5.classList.add("pt-3");
        step3H5.innerHTML = "step3: Input Accessory Power Consumption";
        battBody.append(step3H5);

        let powerDiv = document.createElement("div");
        powerDiv.classList.add("d-flex")
        battBody.append(powerDiv);

        let step3Input = document.createElement("input");
        step3Input.classList.add("pl-2")
        step3Input.style = "font-size: 20px;"
        step3Input.id = "step3"
        step3Input.type = "number";
        step3Input.value = "5";
        step3Input.min = "1";
        step3Input.max = "100";
        powerDiv.append(step3Input);

        let watt = document.createElement("h5");
        watt.classList.add("d-flex","ml-3","mt-3")
        watt.innerHTML = "W"
        powerDiv.append(watt);

        //step4
        let step4H5 = document.createElement("h5");
        step4H5.classList.add("pt-3");
        step4H5.innerHTML = "step4: Choose Your Battery";
        battBody.append(step4H5);

        let step4Result = document.createElement("div");
        step4Result.id = "step4";
        battBody.append(step4Result)
    }
}

class BatteryActioning {
    static select() {
        let hashmap = {};
        //step1
        for (let i=0; i<camera.length; i++) {
           if (hashmap[camera[i]["brand"]] == undefined) hashmap[camera[i]["brand"]] = 1;
        }

        let keys = Object.keys(hashmap);
        for (let i=0; i<keys.length; i++) {
            let op = document.createElement("option");
            op.innerHTML = keys[i]
            op.value = keys[i];
            document.getElementById("step1").append(op)
        }
    }

    static select2() {
        //step2
        document.getElementById("step1").addEventListener("change",function()  {
            let option;
            for (let i=0; i<camera.length; i++) {
                if (this.value == camera[i]["brand"]) {
                option +=
                `
                 <option value="${camera[i]["model"]}">
                  ${this.value + " " + camera[i]["model"]}
                 </option>
                `
                }
                document.getElementById("step2").innerHTML = option;
                document.getElementById("step2").append(option)
            }
        })
    }
    //step2 初期化
    static select2Intial() {
        let options;
        for (let i=0; i<camera.length; i++) {
            if (camera[i]["brand"] == "Cakon") {
            options +=
            `
            <option value="${camera[i]["model"]}">
                ${camera[i]["brand"] + " " +camera[i]["model"]}
            </option>
            `
            document.getElementById("step2").innerHTML = options
            document.getElementById("step2").append(options)
            }
        }
    }

    static result() {
        let selects = [
            document.getElementById("step1"),
            document.getElementById("step2"),
            document.getElementById("step3")
        ];

        // step3
        for (let i=0; i<selects.length; i++) {
            selects[i].addEventListener("input",function() {
            let power = Number(selects[2].value);
            for (let i=0; i<camera.length; i++) {
                if (camera[i]["model"] == selects[1].value) {
                    power += camera[i]["powerConsumptionWh"];
                }
            }

            // step4
            let resultsList = [];
            for (let i=0; i<battery.length; i++) {
                let endMaxPower = Math.floor(battery[i]["endVoltage"] * battery[i]["maxDraw"]);
                let maxCapcity = battery[i]["voltage"] * battery[i]["capacityAh"];
                let ableHours = (maxCapcity / power).toFixed(1);
                if (endMaxPower >= power && ableHours >= 1) {
                    resultsList.push(
                    `<div class="bg-light border-bottom w-100 d-flex justify-content-center">
                        <p class="mt-3 mr-5">${battery[i]["batteryName"]}</p>
                        <p class="mt-3">Estimated ${ableHours} hours on selected setup</p>
                    </div>
                    `)
                }
            }
            let results = resultsList.sort();
            let res = "";
            for (let i=0; i<results.length; i++) {
                res += results[i];
            }
            document.getElementById("step4").innerHTML = res;
            })
        }
    }
}

Layout.battLayout();
BatteryActioning.select();
BatteryActioning.select2Intial();
BatteryActioning.select2();
BatteryActioning.result();