#include <iostream>

#include <string>

#include <math.h>

using namespace std;


// Constantes et variables globales

int oui(10);

const int NOMBRE_NIVEAUX(10);

const double PI(3.14155789562589);




int main(int argc, char * argv[])
{

    cout << "Mon PI : " << PI << endl;
    cout << "M_PI de math.h : " << M_PI << endl; // grâce à math.h

    auto varIncertaine = 145.45; //peut initialiser à double, float, long double, en faite on ne sait pas donc vaut mieux ne pas l'utiliser

    //commentaire

    /*commentaire sur
    plusieurs lignes*/

    int varTest = 3;
    int varTest2, varTest3;

    int test (3);

    // int a(2), b(4), c(-1); fait la même chose que ce qu'il y a à la ligne dessous
    int a = 2, b = 4, c = -1;

    string chaine = "a";
    //char * chaine = "a";//revient au meme que la chaine avec string

    char car = 'a';
    char car2 = 97; // correspondance du 'a' dans la table ASCII
    int car3 = 98 ;

    cout << "varTest vaut : " << varTest << endl;

    cout << "varTest2 et varTest3 valent : " << varTest2 << " et " << varTest3 << endl;

    cout << "valeur de test : "<< test << endl;

    cout << "car2 vaut : " << car2 << endl;
    cout << "car2 vaut en traduction en int : " << int(car2) << endl;
    cout << "car3 vaut : " << char(car3) << endl;



    int ageUtilisateur(16); //Déclaration d'une variable.
    int& maReference(ageUtilisateur); //Déclaration d'une référence nommée maVariable qui est accrochée à la variable ageUtilisateur
    int* pt_ageUtilisateur = &ageUtilisateur; // si il n'y a pas ageUtilisateur qui existe, le pointeur vaut nullpointer


    cout << "Vous avez " << ageUtilisateur << " ans. (via variable)" << endl;
    //On affiche, de la manière habituelle
    cout << "Vous avez " << maReference << " ans. (via reference)" << endl;
    //Et on affiche en utilisant la référence
    cout << "Vous avez " << *pt_ageUtilisateur << " ans. (via pointeur)" << endl;
    cout << "ageUtilisateur est a l'adresse : " << pt_ageUtilisateur << endl;
    cout << "ageUtilisateur est a l'adresse : " << &ageUtilisateur << endl;


    cout << "Quel age avez-vous ?" << endl;
    cin >> ageUtilisateur; //On fait entrer un nombre dans cette case
    cout << "Vous avez " << ageUtilisateur << " ans !" << endl;
    //Et on l'affiche

    return 0;
}
