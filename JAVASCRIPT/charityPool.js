function showDetails(stepNumber) {
    let steps = document.querySelectorAll(".step");
    steps.forEach((step, index) => {
        if (index === stepNumber - 1) {
            step.classList.toggle("active");
            let detail = step.querySelector(".step-detail");
            detail.style.display = detail.style.display === "block" ? "none" : "block";
        } else {
            step.classList.remove("active");
            step.querySelector(".step-detail").style.display = "none";
        }
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const statsSection = document.querySelector(".stats");
    const statsNumbers = document.querySelectorAll(".stat-box span");


    function animateNumbers() {
        statsNumbers.forEach(stat => {
            let targetValue = parseFloat(stat.dataset.value);
            let startValue = 0;
            let increment = targetValue / 100;
           
            let counter = setInterval(() => {
                startValue += increment;
                if (startValue >= targetValue) {
                    startValue = targetValue;
                    clearInterval(counter);
                }
                stat.innerText = stat.id === "apy" ? Math.floor(startValue) + "%" : "$" + Math.floor(startValue);
            }, 20);
        });
    }


    function handleScroll() {
        let sectionPosition = statsSection.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;


        if (sectionPosition < screenPosition) {
            statsSection.classList.add("show");
            animateNumbers();
            window.removeEventListener("scroll", handleScroll);
        }
    }


    window.addEventListener("scroll", handleScroll);
});

function goToPhase2() {
    if (
        !document.getElementById("cryptoAmount").value ||
        !document.getElementById("investmentType").value
    ) {
        alert("Please fill all required fields.");
        return;
    }
    document.getElementById("phase1").classList.add("hidden");
    document.getElementById("phase2").classList.remove("hidden");
}

function goToPhase1() {
    document.getElementById("phase2").classList.add("hidden");
    document.getElementById("phase1").classList.remove("hidden");
}


function convertCryptoToFiat() {
    let cryptoAmount = document.getElementById("cryptoAmount").value;
    let fiatCurrency = document.getElementById("fiatCurrency").value;
    let conversionRate = { USD: 1, EUR: 0.92, GBP: 0.78, MYR: 4.43 };
    document.getElementById("fiatAmount").value = (
        cryptoAmount * conversionRate[fiatCurrency]
    ).toFixed(2);
    document.getElementById("currencySymbol").innerText =
        fiatCurrency === "USD" ? "$"
            : fiatCurrency === "EUR" ? "€"
                : fiatCurrency === "GBP" ? "£"
                    : fiatCurrency === "MYR" ? "RM"
                        : "$";
}

function submitDonation() {
    document.getElementById("phase2").classList.add("hidden");
    document.getElementById("successMessage").classList.remove("hidden");
}

function allocateFull() {
    let fullCheckbox = document.getElementById("fullAllocation");
    let poolCheckbox = document.getElementById("poolBased");
    let fiatAmount = parseFloat(document.getElementById("fiatAmount").value) || 0;
    let rows = document.querySelectorAll("#fundTable tbody tr"); // MODIFIED: Get all table rows

    if (fullCheckbox.checked) {
        poolCheckbox.checked = false; // Uncheck the other option

        // Clear the fields first
        rows.forEach((row) => {
            let grantAllocationCell = row.children[3]; // 4th column (Grant Allocation %)
            let amountInput = row.querySelector(".allocation-amount"); // 5th column (Amount)

            if (grantAllocationCell) {
                grantAllocationCell.textContent = ""; // Clear Grant Allocation %
            }
            if (amountInput) {
                amountInput.value = ""; // Clear Amount
            }
        });

        if (rows.length > 0) { // Ensure there's at least one row
            let firstRow = rows[0]; // Select only the first row
            let grantAllocationCell = firstRow.children[3]; // Get 4th column (Grant Allocation %)
            let amountInput = firstRow.querySelector(".allocation-amount"); // Get 5th column (Amount)

            if (grantAllocationCell) {
                grantAllocationCell.textContent = "100"; // Allocate 100% to first row only
            }
            if (amountInput) {
                amountInput.value = `${fiatAmount.toFixed(2)}`; // Assign full fiat amount
            }
        }
    } else {
        // Clear values when "Full Allocation" is unticked
        rows.forEach((row) => {
            let grantAllocationCell = row.children[3]; // 4th column (Grant Allocation %)
            let amountInput = row.querySelector(".allocation-amount"); // 5th column (Amount)

            if (grantAllocationCell) {
                grantAllocationCell.textContent = ""; // Clear Grant Allocation %
            }
            if (amountInput) {
                amountInput.value = ""; // Clear Amount
            }
        });

        console.log("Full Allocation unchecked, values cleared."); // Debugging Log
    }
}


function allocatePool() {
    let fullCheckbox = document.getElementById("fullAllocation");
    let poolCheckbox = document.getElementById("poolBased");
    let rows = document.querySelectorAll("#fundTable tbody tr");

    let fiatAmount = parseFloat(document.getElementById("fiatAmount").value) || 0;

    if (poolCheckbox.checked) {
        fullCheckbox.checked = false; // Uncheck the other option

        let allocationValues = [];

        // Get Grant Allocation (%) & Assign Values
        document.querySelectorAll("#fundTable tbody tr").forEach((row) => {
            let poolAllocationCell = row.children[2]; // Get the 3th column (Grant Allocation %)
            let fillInGrantAllocationCell = row.children[3];
            
            if (poolAllocationCell) {
                let grantText = poolAllocationCell.textContent.trim(); // Get text and remove spaces
                let numericValue = grantText.replace("%", ""); // Remove "%" symbol

                console.log(`Original: ${grantText}, Converted: ${numericValue}`); // Log results

                fillInGrantAllocationCell.textContent = numericValue; // Update the cell with numeric value
                allocationValues.push({numericValue, row,});
            }
        });

         // Log the allocationValues array to check if it's correct
        console.log("allocationValues:", allocationValues);


        // Assign calculated values
        allocationValues.forEach(({ numericValue, row }) => { // Use numericValue instead of grantAllocation
            let amountInput = row.querySelector(".allocation-amount");

            let grantAllocation = parseFloat(numericValue) || 0; // Ensure numeric value

            let calculatedAmount = ((fiatAmount * grantAllocation) / 100).toFixed(2); // Corrected calculation

            console.log(`Grant %: ${grantAllocation}, Fiat Amount: ${fiatAmount}, Calculated: $${calculatedAmount}`);

            if (amountInput) { // null check for safety
                amountInput.value = calculatedAmount;
            } else {
                console.warn("No allocation-amount input found in row:", row);
            }
        });
    } else if (poolCheckbox.checked == false){
        // Clear values when donor unticks the checkbox
        rows.forEach((row) => {
            let fillInGrantAllocationCell = row.children[3]; // 4th column
            let amountInput = row.querySelector(".allocation-amount"); // 5th column

            if (fillInGrantAllocationCell) {
                fillInGrantAllocationCell.textContent = ""; // Clear Grant Allocation %
            }
            if (amountInput) {
                amountInput.value = ""; // Clear Amount
            }
        });

        console.log("Checkbox unchecked, values cleared."); // Debugging log
    }
}
