// Given an array arr[] consisting of N positive integers and a  positive integer K such that there are N countries, 
// each country has arr[i] players, the task is to find the maximum number of teams that can be formed by forming teams of 
// size K such that each player in the team is from a different country.

import java.util.Arrays;

class HelloWorld {
    public static void main(String[] args) {
         int k = 3;
        int[] arr = {4, 3, 5, 3};
        System.out.println(maxTeam(k, arr));
    }
    
    public static int maxTeam(int k, int[] arr) {
        
        int result =0;
        int array =0;
        for(int i = 0; i< arr.length; i++){
            if(array == 3 ) array =0;
            int j = i;
            while(array < 3 && j < arr.length){
                if(arr[j] <= 0){
                    j++;
                    if(j < arr.length){
                        break;
                    }
                }
                if(arr[j] > 0){
                    array++;
                    arr[j] = arr[j] - 1;
                    System.out.println(Arrays.toString(arr)+' '+ i);
                    //System.out.println(result);
                }
                if(array == 3){
                    result++;
                    System.out.println(result);
                }
                j++;
            }
            if(arr[i] > 0) i--;
        }
        return result;

    }

}