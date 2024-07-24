#include <stdio.h>
#include <string.h>

int balik(int operation){


 while (operation >= 5)
 {
  printf(" Enter the operation you want to use. \n 1 = Addition \n 2 = Subtraction \n 3 = Multiplication \n 4 = Divide \nOperation: ");
  scanf("%d", &operation);
 }

  return 0;

}

int main() {

 int num1;
 int num2;
 int operation;
 int total;
 char taka[25];

 printf("Enter your first number: ");
 scanf("%d", &num1);

 printf("Enter your second number: ");
 scanf("%d", &num2);

 printf("Enter the operation you want to use. \n 1 = Addition \n 2 = Subtraction \n 3 = Multiplication \n 4 = Divide \nOperation: ");
 scanf("%d", &operation);

 switch (operation)
 {
 case 1:
  total = num1 + num2;
  printf("Answer: %d", total);
  break;
 case 2:
  total = num1 - num2;
  printf("Answer: %d", total);
  break;
 case 3:
  total = num1 * num2;
  printf("Answer: %d", total);
  break;
 case 4:
  total = num1 / num2;
  printf("Answer: %d", total);
  break;
 default:
  printf("Please only select on whats given in the choices. Thank you!");
  balik(operation);
  break;
 }

  return 0;
}
