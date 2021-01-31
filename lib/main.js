"use strict";

window.onload = function () {
    var data = JSON.parse(localStorage.getItem('info'));

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
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = devTechOptions1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    // dtOption1.parentElement.classList.remove("active");
                    // dtOption1.parentElement.parentElement.classList.remove("active");

                    dtOption1 = _step.value;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            ;
            this.parentElement.parentElement.classList.add("active");
        }
    });

    nativeOpt.addEventListener('change', function () {
        if (this.checked) {
            var devTechOptions2 = document.getElementsByName(this.name);
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = devTechOptions2[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var dtOption2 = _step2.value;

                    dtOption2.parentElement.classList.remove("active");
                    dtOption2.parentElement.parentElement.classList.remove("active");
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this.parentElement.parentElement.classList.add("active");
            reactNative.disabled = true;
            reactNative.checked = false;
            reactNative.parentElement.classList.remove('active');
            cordova.disabled = true;
            cordova.checked = false;
            cordova.parentElement.classList.remove('active');
        }
    });

    //to add style class 'active' to every radio/checkbox checked
    var inputs = document.getElementsByTagName("input");
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = inputs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var input = _step3.value;

            input.addEventListener('change', function () {
                if (this.name == "BackendAdmin") {
                    var BkEndOptions = document.getElementsByName(this.name);
                    var _iteratorNormalCompletion8 = true;
                    var _didIteratorError8 = false;
                    var _iteratorError8 = undefined;

                    try {
                        for (var _iterator8 = BkEndOptions[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                            var option = _step8.value;

                            option.parentElement.classList.remove("active");
                            option.parentElement.parentElement.classList.remove("active");
                        }
                    } catch (err) {
                        _didIteratorError8 = true;
                        _iteratorError8 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion8 && _iterator8.return) {
                                _iterator8.return();
                            }
                        } finally {
                            if (_didIteratorError8) {
                                throw _iteratorError8;
                            }
                        }
                    }

                    this.parentElement.parentElement.classList.add("active");
                }
                if (this.checked) {
                    if (this.type == "radio") {
                        var radioOptions = document.getElementsByName(this.name);
                        var _iteratorNormalCompletion9 = true;
                        var _didIteratorError9 = false;
                        var _iteratorError9 = undefined;

                        try {
                            for (var _iterator9 = radioOptions[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                                var rad = _step9.value;

                                rad.parentElement.classList.remove("active");
                            }
                        } catch (err) {
                            _didIteratorError9 = true;
                            _iteratorError9 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion9 && _iterator9.return) {
                                    _iterator9.return();
                                }
                            } finally {
                                if (_didIteratorError9) {
                                    throw _iteratorError9;
                                }
                            }
                        }
                    }
                    this.parentElement.classList.add("active");
                } else {
                    this.parentElement.classList.remove("active");
                }
            });
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    document.getElementById("myForm").addEventListener('submit', function (event) {
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

        Object.keys(data).forEach(function (key) {
            var selected = formData.getAll(key);
            console.log(selected);
            //to check if all inputs are checked
            if (key != "Effort" && key != "Rate") {
                if (selected.length == 0) {
                    counter++;
                    if (notSelected == undefined) {
                        notSelected = document.getElementById(key);
                        notSelected.parentElement.scrollIntoView();
                    }
                    document.getElementById(key).classList.add("errorMsg");
                }

                var change = document.querySelectorAll("input[name=" + key + "]");
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = change[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var ch = _step4.value;

                        ch.addEventListener('change', function () {
                            document.getElementById(key).classList.remove("errorMsg");
                        });
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }
            }

            //calculating values for each input selected
            switch (key) {
                case "Platform":
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = selected[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var sel1 = _step5.value;

                            apps += data[key][sel1];
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                _iterator5.return();
                            }
                        } finally {
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }

                    selected.className += "active";
                    break;

                case "DevTech":
                    if (selected == "Native") isNative = true;
                    devs += data[key][selected];
                    break;

                case "UIDesign":
                    uiDesign += data[key][selected];
                    break;

                case "AppSize":
                    mobDevEff += data[key][selected];
                    break;

                case "AppFeat":
                    var _iteratorNormalCompletion6 = true;
                    var _didIteratorError6 = false;
                    var _iteratorError6 = undefined;

                    try {
                        for (var _iterator6 = selected[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                            var sel2 = _step6.value;

                            mobDevEff += data[key][sel2]["FtEnd"];
                            backend += data[key][sel2]["BkEnd"];
                        }
                    } catch (err) {
                        _didIteratorError6 = true;
                        _iteratorError6 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                _iterator6.return();
                            }
                        } finally {
                            if (_didIteratorError6) {
                                throw _iteratorError6;
                            }
                        }
                    }

                    break;

                case "BackendAdmin":
                    var _iteratorNormalCompletion7 = true;
                    var _didIteratorError7 = false;
                    var _iteratorError7 = undefined;

                    try {
                        for (var _iterator7 = selected[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                            var sel3 = _step7.value;

                            backend += data[key][sel3];
                        }
                    } catch (err) {
                        _didIteratorError7 = true;
                        _iteratorError7 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                _iterator7.return();
                            }
                        } finally {
                            if (_didIteratorError7) {
                                throw _iteratorError7;
                            }
                        }
                    }

                    break;

                default:
                    break;
            }
        });

        if (counter == 0) {
            //checks if every input is checked by user
            if (!isNative) {
                apps = 1;
            }

            var total = apps * devs * mobDevEff + backend;
            var devEffort = apps * devs * mobDevEff;
            var backendEff = backend;
            var PM = total * data["Effort"]["PM"];
            var QA = total * data["Effort"]["QA"];
            var arch = total * data["Effort"]["Architect"];
            var uIEff = total * uiDesign / 100;

            var totalCost = devEffort * 8 * data["Rate"]["DevEffort"] + backendEff * 8 * data["Rate"]["BackendEffort"] + PM * 8 * data["Rate"]["PM"] + QA * 8 * data["Rate"]["QA"] + arch * 8 * data["Rate"]["Architect"] + uIEff * 8 * data["Rate"]["UI"];

            document.getElementById("firstPage").style.display = "none";
            document.getElementById("secondPage").style.display = "block";

            document.getElementById('back').addEventListener('click', function () {
                document.getElementById("firstPage").style.display = "block";
                document.getElementById("secondPage").style.display = "none";
            });

            var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            });

            document.getElementById("devCost").innerHTML = Math.round(devEffort) + " Days";
            document.getElementById("pmCost").innerHTML = Math.round(PM) + " Days";
            document.getElementById("qaCost").innerHTML = Math.round(QA) + " Days";
            document.getElementById("arCost").innerHTML = Math.round(arch) + " Days";
            document.getElementById("uiCost").innerHTML = Math.round(uIEff) + " Days";
            document.getElementById("efcost").innerHTML = Math.round(backendEff) + " Days";
            document.getElementById("tdCost").innerHTML = Math.round(devEffort + backendEff + PM + QA + arch + uIEff);
            document.getElementById("tccost").innerHTML = formatter.format(totalCost);

            $(document).ready(function () {

                //myvalidation.js
                console.log("submit");
                $("#myDetails").validate({
                    rules: {
                        name: { required: true },
                        email: { required: true, email: true },
                        contact: { required: true, number: true, minlength: 10 },
                        message: { maxlength: 400 }
                    },
                    messages: {
                        name: "Please enter your name",
                        email: "Please enter a valid email address"
                    },
                    submitHandler: function submitHandler() {
                        document.getElementById("resultSection").style.display = "none";
                        document.getElementById("enquirySection").style.display = "block";
                        //return true;
                    }
                });
            });
        }
    });
};