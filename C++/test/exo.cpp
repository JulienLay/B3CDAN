#include <iostream>

using namespace std;

void decouperMinutes(int);

/* Cr?er une fonction qui d?coupe un nombre de minutes pass?es en param?tre en heures et minutes
90 minutes --> 1h30
125 minutes --> 2h05
*/

// 1?re version : affichage dans la fonction

void decouperMinutes(int minu) {
    int heures = 0, minutes = 0;

    heures = minu/60;

    minutes = minu%60;

    cout << "Il y a " << heures << " heure(s) et " << minutes << " minute(s) dans " << minu << " minute(s) !";
}

int main(int argc, char * argv[])
{
    decouperMinutes(90);
    return 0;
}


// 2?me version : on cr?e 2 variables (pour heures et minutes) dans le code appelant (main) et on les met ? jour dans la fonction et on les affiches dans le main
//void decouperMinutes(int minutes) {


//}

int decouperMinutes(int heures, int minutes) {
    int minu = 0;

    minu = heures*60 + minutes;

    return minu;
}

int main(int argc, char * argv[])
{
    int heures = 1, minutes = 30;
    int minu = decouperMinutes(heures, minutes);
    cout << "Il y a " << minu << " minute(s) dans " << heures << " heure(s) et " << minutes << " minute(s) !";
    return 0;
}
