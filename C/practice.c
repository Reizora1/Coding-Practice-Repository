#include <stdio.h>
#include <stdbool.h>

bool chckArr(short nums[], short nums1[]){
    for(int i = 0; i < sizeof(nums)/sizeof(nums[0]); i++){
        if(nums[i] == nums1[i]){
            return 1;
        }
        else{
            return 0;
        }
    }
}

int main(){

    //bool = 1byte
    //char = 1byte
    //short = 2bytes
    //int = 4bytes
    //float = 4bytes, 32bit precission, 6-7 decimals.
    //double = 8bytes, 64bit precission, 15-16 decimals.
    //long = 8bytes
    /*float num = 3.141592665445445;
    double num2 = 3.141592665445445;
    printf("Item 1: $%53.15f", num);
    printf("\nItem 2: $%53.15lf", num2);*/

    //char name[50];
    //printf("\nEnter your name: ");
    //fgets(name, 25, stdin);
    //printf("\nYour name is: %s ", name);

    short nums[] = {2, 10, 4, 1, 3, 9, 5, 6, 8, 7};
    short nums1[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int temp = 0;

    printf("\nArray size is %lld bytes", sizeof(nums));
    printf("\nUnsorted nums:\n");
    
    for(int i = 0; i < sizeof(nums)/sizeof(nums[0]); i++)
    {
        printf("%d ", nums[i]);
    }
    printf("\n");

    for(int i = 0; i < sizeof(nums)/sizeof(nums[0]) - 1; i++)
    {
        printf("\nLoop #: %d\n", i);
        for (int j = 0; j < sizeof(nums)/sizeof(nums[0]) - 1; j++)
        {
            if(nums[j] > nums[j+1]){
                temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
            printf("\n");
            for(int i = 0; i < sizeof(nums)/sizeof(nums[0]); i++)
            {
                printf("%d ", nums[i]);
            }
        }
        printf("\n");

        if(chckArr(nums, nums1))
        {
            printf("Is the array sorted? Yes.\n");
            break;
        }
        else{
            printf("Is the array sorted? No.\n");
        }
    }
    return 0;
}