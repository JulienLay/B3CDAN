#include <iostream>

using namespace std;

double additionner(double, double);

int main(int argc, char * argv[])
{
    double valeur1, valeur2, resultat;

    valeur1 = 105.45;
    valeur2 = 103.55;

    resultat = 0;

    resultat = additionner(valeur1, valeur2);

    cout<<"Le résultat est : "<<resultat<<endl;

    return 0;
}

double additionner(double val1, double val2) {
    return val1 + val2;
}
