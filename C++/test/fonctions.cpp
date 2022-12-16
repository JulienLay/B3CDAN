#include <iostream>

using namespace std;

void decouperMinutes(int minu) {
    int heures = 0, minutes = 0;

    heures = minu/60;

    minutes = minu%60;

    cout << "Il y a " << heures << " heure(s) et " << minutes << " minute(s) dans " << minu << " minute(s) !"<< endl;

    return;
}
