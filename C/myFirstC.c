// Online C compiler to run C program online
#include <stdio.h>

int main() {
    // Write C code here
    int i = 1;
    int j = 1;
    
    while(i <= 3){//outer loop
        printf("The start of iteration %d of the outer loop\n", i);
        
        do{//inner loop
            printf("Iteration %d of the inner loop\n", j);
            j++;
        }while(j <= 4);
        
        printf("The end of iteration %d of the outer loop\n\n", i);
        i++;
        j = 1;
    }

    return 0;
}