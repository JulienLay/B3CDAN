#include <iostream>

using namespace std;

int main() {
  int n;
  std::cout << "Entrez le nombre d'�l�ments de la suite de Fibonacci � afficher: ";
  std::cin >> n;

  int a = 0;
  int b = 1;
  int c;

  std::cout << "Voici les " << n << " premiers �l�ments de la suite de Fibonacci:" << std::endl;
  std::cout << a << " " << b << " ";

  for (int i = 2; i < n; i++) {
    c = a + b;
    std::cout << c << " ";
    a = b;
    b = c;
  }
  return 0;
}
