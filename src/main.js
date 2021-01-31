
window.onload = function() {
    const data = JSON.parse(localStorage.getItem('info'));

    // document.getElementById("secondPage").style.display = "none";

    //to make the sub-option of cross-platform active after cross-platform is selected
    var crossPlatform = document.getElementById("option4");
    var nativeOpt = document.getElementById("option3");
    var cordova = document.getElementById('option61');
    var reactNative = document.getElementById('option60');

    crossPlatform.addEventListener('change', function () {
        if (this.checked) {
            reactNative.disabled = false;
            cordova.disabled = false;
            var devTechOptions1 = document.getElementsByName(this.name);
            for (var i = 0; i < 10; i++) {
            	console.log(i);
            };
            for(dtOption1 of devTechOptions1) {
                // dtOption1.parentElement.classList.remove("active");
                // dtOption1.parentElement.parentElement.classList.remove("active");
            };
            this.parentElement.parentElement.classList.add("active");
        }
    });
    
    nativeOpt.addEventListener('change', function () {
        if (this.checked) {
            var devTechOptions2 = document.getElementsByName(this.name)
            for (var dtOption2 of devTechOptions2) {
                dtOption2.parentElement.classList.remove("active");
                dtOption2.parentElement.parentElement.classList.remove("active");
            }
            this.parentElement.parentElement.classList.add("active")
            reactNative.disabled = true;
            reactNative.checked = false;
            reactNative.parentElement.classList.remove('active')
            cordova.disabled = true
            cordova.checked = false
            cordova.parentElement.classList.remove('active')
        }
    })

    //to add style class 'active' to every radio/checkbox checked
    var inputs = document.getElementsByTagName("input");
    for (var input of inputs) {
        input.addEventListener('change', function () {
            if (this.name == "BackendAdmin") {
                var BkEndOptions = document.getElementsByName(this.name)
                for (var option of BkEndOptions) {
                    option.parentElement.classList.remove("active")
                    option.parentElement.parentElement.classList.remove("active")
                }
                this.parentElement.parentElement.classList.add("active")
            }
            if (this.checked) {
                if (this.type == "radio") {
                    var radioOptions = document.getElementsByName(this.name)
                    for (var rad of radioOptions) {
                        rad.parentElement.classList.remove("active")
                    }
                }
                this.parentElement.classList.add("active")
            } else {
                this.parentElement.classList.remove("active")
            }
        });
    }


    document.getElementById("myForm").addEventListener('submit', (event) => {
        event.preventDefault();

        var form = document.getElementById("myForm");
        var formData = new FormData(form);

        var counter = 0;
        var devs = 0;
        var mobDevEff = 0;
        var apps = 0;
        var uiDesign = 0;
        var backend = 0;
        var isNative = false;
        var notSelected;

        Object.keys(data).forEach((key) => {
            var selected = formData.getAll(key)
            console.log(selected)
            //to check if all inputs are checked
            if (key != "Effort" && key != "Rate") {
                if (selected.length == 0) {
                    counter++;
                    if (notSelected == undefined) {
                        notSelected = document.getElementById(key);
                        notSelected.parentElement.scrollIntoView();
                    }
                    document.getElementById(key).classList.add("errorMsg")
                }

                var change = document.querySelectorAll(`input[name=${key}]`)
                for (var ch of change) {
                    ch.addEventListener('change', () => {
                        document.getElementById(key).classList.remove("errorMsg")
                    })
                }
            }

            //calculating values for each input selected
            switch (key) {
                case "Platform":
                    for (var sel1 of selected)
                        apps += data[key][sel1]
                    selected.className += "active";
                    break;

                case "DevTech":
                    if (selected == "Native")
                        isNative = true;
                    devs += data[key][selected];
                    break;

                case "UIDesign":
                    uiDesign += data[key][selected]
                    break;

                case "AppSize":
                    mobDevEff += data[key][selected];
                    break;

                case "AppFeat":
                    for (var sel2 of selected) {
                        mobDevEff += data[key][sel2]["FtEnd"]
                        backend += data[key][sel2]["BkEnd"]
                    }
                    break;

                case "BackendAdmin":
                    for (var sel3 of selected)
                        backend += data[key][sel3];
                    break;

                default:
                    break;
            }
        })

        if (counter == 0) {   //checks if every input is checked by user
            if (!isNative) {
                apps = 1;
            }

            var total = (apps * devs * mobDevEff) + backend;
            var devEffort = apps * devs * mobDevEff;
            var backendEff = backend;
            var PM = total * data["Effort"]["PM"];
            var QA = total * data["Effort"]["QA"];
            var arch = total * data["Effort"]["Architect"];
            var uIEff = total * uiDesign / 100;

            var totalCost = devEffort * 8 * data["Rate"]["DevEffort"] + backendEff * 8 * data["Rate"]["BackendEffort"] + PM * 8 * data["Rate"]["PM"] +
                QA * 8 * data["Rate"]["QA"] + arch * 8 * data["Rate"]["Architect"] + uIEff * 8 * data["Rate"]["UI"]


            document.getElementById("firstPage").style.display = "none";
            document.getElementById("secondPage").style.display = "block";

            document.getElementById('back').addEventListener('click', () => {
                document.getElementById("firstPage").style.display = "block";
                document.getElementById("secondPage").style.display = "none";
            })

            var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });


            document.getElementById("devCost").innerHTML = Math.round(devEffort) + " Days";
            document.getElementById("pmCost").innerHTML = Math.round(PM) + " Days";
            document.getElementById("qaCost").innerHTML = Math.round(QA) + " Days";
            document.getElementById("arCost").innerHTML = Math.round(arch) + " Days";
            document.getElementById("uiCost").innerHTML = Math.round(uIEff) + " Days";
            document.getElementById("efcost").innerHTML = Math.round(backendEff) + " Days";
            document.getElementById("tdCost").innerHTML = Math.round(devEffort + backendEff + PM + QA + arch + uIEff);
            document.getElementById("tccost").innerHTML = formatter.format(totalCost);

            $(document).ready( () => {
                
                //myvalidation.js
                    console.log("submit");
                    $("#myDetails").validate(
                        {
                            rules:
                            {
                                name: { required: true, },
                                email: { required: true, email: true },
                                contact: { required:true, number:true, minlength: 10 },
                                message: { maxlength: 400 }
                            },
                            messages: {
                                name: "Please enter your name",
                                email: "Please enter a valid email address",
                            },
                            submitHandler: function () {
                                document.getElementById("resultSection").style.display = "none";
                                document.getElementById("enquirySection").style.display = "block";
                                //return true;
                            }
                        });
                 
            });

        }

    });
}
