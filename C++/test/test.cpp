#include <iostream>
#include <time.h>
#include <ctime>

using namespace std;

void Time(int &heures,int &minutes)
{
    time_t timer1; // variable de type time_t qui vien de la library time.h
    time(&timer1); // Obtenir l'heure actuelle du calendrier sous la forme d'une valeur de type temps_t
    //int secondes;
    struct tm* newTime1;
    newTime1 = localtime(&timer1); // Utilise la valeur pointée par la minuterie pour remplir un tm structure avec les valeurs qui représentent l'heure correspondante, exprimée pour le fuseau horaire local.
    heures = newTime1->tm_hour;        // Les heures sont dans "heures"
    minutes = newTime1->tm_min;        // Les minutes sont dans "minutes"
    //secondes = newTime1->tm_sec;        // Les secondes sont dans "secondes"
}

int main()
{
   int heure, minute;

   Time(heure, minute);

    cout << "Il est : " << heure << "h " << minute;

    return 0;
}
