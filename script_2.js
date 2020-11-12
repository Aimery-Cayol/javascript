nbr = prompt("De quel nombre veux-tu calculer la factorielle ?");

function factorisation(nbr) {
    var number = nbr;

    if (nbr === 0 || nbr === 1)
        return 1;
    while (nbr > 1) {
    nbr--;
    number *= nbr;
    }
    return number;
}

console.log(`Le résultat est : ${factorisation(nbr)}`);

















