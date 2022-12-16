#include <iostream>

using namespace std;

int main() {
  int n;
  std::cout << "Entrez le nombre d'éléments de la suite de Fibonacci à afficher: ";
  std::cin >> n;

  int a = 0;
  int b = 1;
  int c;

  std::cout << "Voici les " << n << " premiers éléments de la suite de Fibonacci:" << std::endl;
  std::cout << a << " " << b << " ";

  for (int i = 2; i < n; i++) {
    c = a + b;
    std::cout << c << " ";
    a = b;
    b = c;
  }
  return 0;
}
