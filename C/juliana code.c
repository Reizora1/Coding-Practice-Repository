//Juliana G. Tumulak & Michelle D. Lopez

#include <stdio.h>

void space(){
    printf("\n");
}

int sum_all(int ary[], int limit);
void sum_even(int ary[], int limit);
int sum_odd(int ary[], int limit);
void even_as(int ary[], int limit);
void odd_as(int ary[], int limit);

int main(){
    int limit, choice;
    int i;
    int totalsum, totaleven, sumodd;

    printf("Enter n elements: ");
    scanf("%d", &limit);

    int ary[limit];

    printf("Enter the Elements: \n");
    for(i = 0; i <= limit - 1; i++){
    scanf("%d", &ary[i]);}

    while(1){

        printf("Menu: \n");
        printf("1. Find the sum\n");
        printf("2. Find the sum of all even numbers\n");
        printf("3. Find the sum of all odd numbers\n");
        printf("4. Re-enter array elements\n");
        printf("5. EXIT\n\n");
        space();

        printf("Enter Choice: ");
        scanf("%d", &choice);

        switch(choice){
        case 1:
            totalsum = sum_all(ary, limit);
            printf("Sum is %d\n", totalsum);
            break;

        case 2:
            sum_even(ary, limit);
            even_as(ary, limit);
           //printf("Sum of all even is %d\n", totaleven);
            break;

        case 3:
            odd_as(ary, limit);
            sum_odd(ary, limit);
            printf("Sum of all odd is %d\n", sumodd);
            break;

        case 4:
            printf("Enter n elements: ");
            scanf("%d", &limit);
            printf("Enter the Elements: \n");
            for(i = 0; i <= limit - 1; i++){
            scanf("%d", &ary[i]);}

        case 5:
            printf("Exit");
            break;

        }

    }
}

int sum_all(int ary[], int limit){
    int sum = 0;
    for(int i = 0; i <= limit - 1; i++){
            sum += ary[i];}
    return sum;

}

void sum_even(int ary[], int limit){
    int sum = 0;
    int sumeven = 0;
    for(int i = 0; i <= limit - 1; i++){
        if(ary[i] % 2 == 0){
        sumeven += ary[i];
        // return sumeven;
        }
    }
    printf("Sum of all even is %d\n", sumeven);
}
        
int sum_odd(int ary[], int limit)
{
     int sum = 0, i;
     int sumodd = 0;
     int countodd;
    for(int i = 0; i <= limit - 1; i++){
            sum += ary[i];
     }
        if(ary[i] % 2 != 0){
           countodd++;
           sumodd += countodd;
           // return sumeven;
        }

}

void even_as(int ary[], int limit){
    int temp = 0;
    int evenCnt = limit / 2;
    int evenArr[evenCnt];
    int j = 0;
    printf("All even in ascending order:\n");
    for(int i = 0; i <= limit - 1; i++){
        if(ary[i] % 2 == 0){
            evenArr[j] = ary[i];
            j++;
            /*temp = ary[i];
            ary[i] = ary[i + 1];
            ary[i] = temp;*/
        }
    }
    for(int i = 0; i <= limit - 1; i++){
        for(int k = 0; k < limit - 1; k++){
            if(evenArr[k] > evenArr[k+1]){
                temp = evenArr[k];
                evenArr[k] = evenArr[k+1];
                evenArr[k+1] = temp;
            }
        }
    }
    for(int j = 0; j <= limit - 1; j++){
        if(evenArr[j] % 2 != 0){
            break;
        }
        else{
            printf("%d\n", evenArr[j]);
        }
    }
}


void odd_as(int ary[], int limit){
int temp = 0;
int j;
printf("All odd in ascending order:\n");
    for(int i = 0; i <= limit - 1; i++){
            temp = ary[i];
            ary[i] = ary[j];
            ary[j] = temp;}
    for(int j = 0; j <= limit - 1; j++)
    
            printf("%d \n", ary[j]);}