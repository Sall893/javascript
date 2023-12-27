function validateInput() {
    // Contrôle de saisie pour éviter des caractères non numériques et la division par 0
    var number2Input = document.getElementById("number2");
    var isValid = /^\d+$/.test(number2Input.value) && number2Input.value != "0";
    number2Input.setCustomValidity(isValid ? "" : "Le nombre 2 doit être un nombre non nul.");
}

function calculate() {
    // Récupération des valeurs des champs
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    // Vérification que les valeurs sont des nombres valides
    if (isNaN(number1) || isNaN(number2)) {
        alert("Veuillez entrer des nombres valides.");
        return;
    }

    // Calcul des opérations
    var sum = number1 + number2;
    var multiplication = number1 * number2;
    var division = number1 / number2;
    var subtraction = number1 - number2;

    // Affichage des résultats
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "Somme : " + sum + "<br>" +
                            "Multiplication : " + multiplication + "<br>" +
                            "Division : " + division + "<br>" +
                            "Soustraction : " + subtraction;
}