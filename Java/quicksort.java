//quicksort practice
public class quicksort{
    public static void main(String[] args){
        System.out.println("hello world");

        int arr[] = {3, 2, 5, 0, 1, 8, 7, 6, 9, 4};
        int start = 0;
        int end = arr.length - 1;

        for(int i : arr){
            System.out.print(i + " ");
        }

        quickSort(arr, start, end);
        System.out.println("");

        for(int i : arr){
            //System.out.print(i + " ");
            System.out.print(String.format("%s ", i)); // string interpolation.
        }
    }

    private static void quickSort(int[] arr, int start, int end){
        if(end <= start) return; //base case

        int pivotIndex = partition(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }

    private static int partition(int[] arr, int start, int end){
        int pivot = arr[end];
        int i = start - 1;
        int temp;
        
        for(int j = start; j < end; j++){
            if(arr[j] < pivot){
                i++;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        i++;
        temp = arr[i];
        arr[i] = arr[end];
        arr[end] = temp;
        return i;
    }
}