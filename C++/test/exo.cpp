#include <iostream>

using namespace std;

void decouperMinutes(int);

/* Créer une fonction qui découpe un nombre de minutes passées en paramètre en heures et minutes
90 minutes --> 1h30
125 minutes --> 2h05
*/

// 1ère version : affichage dans la fonction
void decouperMinutes(int minu) {
    int heures = 0, minutes = 0;

    heures = minu/60;

    minutes = minu%60;

    cout << "Il y a " << heures << " heure(s) et " << minutes << " minute(s) dans " << minu << " minute(s) !";
}

// 2ème version : on crée 2 variables (pour heures et minutes) dans le code appelant (main) et on les met à jour dans la fonction et on les affiches dans le main
//void decouperMinutes(int minutes) {


//}

int main(int argc, char * argv[])
{
    decouperMinutes(90);
    return 0;
}
