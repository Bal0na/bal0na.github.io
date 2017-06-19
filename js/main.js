const setPackBtn = document.getElementById("setpack");
const resetPackBtn = document.getElementById("resetpack");
const resetCycleBtn = document.getElementById("resetcycle");

const allGb = document.querySelectorAll("select");

const gb1 = document.getElementById("gb1");
const gb2 = document.getElementById("gb2");
const gb3 = document.getElementById("gb3");
const gb4 = document.getElementById("gb4");
const gb5 = document.getElementById("gb5");

if (localStorage.getItem("pack") !== null) {
    console.log("Pack de gobbles détecter")
    let gbStore1 = localStorage.getItem("g1");
    let gbStore2 = localStorage.getItem("g2");
    let gbStore3 = localStorage.getItem("g3");
    let gbStore4 = localStorage.getItem("g4");
    let gbStore5 = localStorage.getItem("g5");

    allGb.forEach((select) => {
        select.options.length = 0;
    })

    allGb.forEach((select) => {
        select.options.length = 0;
        select.options[select.options.length] = new Option(gbStore1);
        select.options[select.options.length] = new Option(gbStore2);
        select.options[select.options.length] = new Option(gbStore3);
        select.options[select.options.length] = new Option(gbStore4);
        select.options[select.options.length] = new Option(gbStore5);
    })

} 
function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

setPackBtn.addEventListener("click", () => {

    let arrGb = [];

    let gb1Value = gb1.options[gb1.selectedIndex].text;
    let gb2Value = gb2.options[gb2.selectedIndex].text;
    let gb3Value = gb3.options[gb3.selectedIndex].text;
    let gb4Value = gb4.options[gb4.selectedIndex].text;
    let gb5Value = gb5.options[gb5.selectedIndex].text;

    arrGb.push(gb1Value, gb2Value, gb3Value, gb4Value, gb5Value);

    if (localStorage.getItem("pack") === null)  {
        if (!arrGb.includes("Choose gobblegum")) {
            if (!hasDuplicates(arrGb)) {
                localStorage.setItem("pack", true);
                localStorage.setItem("g1", gb1Value);
                localStorage.setItem("g2", gb2Value);
                localStorage.setItem("g3", gb3Value);
                localStorage.setItem("g4", gb4Value);
                localStorage.setItem("g5", gb5Value);

                let gb1Store = localStorage.getItem("g1");
                let gb2Store = localStorage.getItem("g2");
                let gb3Store = localStorage.getItem("g3");
                let gb4Store = localStorage.getItem("g4");
                let gb5Store = localStorage.getItem("g5");

                location.reload();
                console.log("localstorage crée")
            } else {
                bootbox.alert({
                    title: "BO3 Tools",
                    message: "You have two times the same gobblegums !",
                    size: "small"
                });
            }
        } else {
            bootbox.alert({
                title: "BO3 Tools",
                message: "You didn't selected all gobblegums !",
                size: "small"
            });
        }
    } else {
        bootbox.alert({
            title: "BO3 Tools",
            message: "You already have a pack set!",
            size: "small"
        });
    }
})

resetPackBtn.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});

resetCycleBtn.addEventListener("click", () => {
        $('.selectpicker').selectpicker('val', 'Choose gobblegum');
});

//    localStorage.setItem("pack1",)
// console.log(gb1.options[gb1.selectedIndex].text); // Return la bonne valeur