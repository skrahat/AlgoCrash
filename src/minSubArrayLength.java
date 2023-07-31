class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        

        // sliding window 
        int left = 0;
        int minLength = Integer.MAX_VALUE;
        int total = 0;

        for(int i = 0; i< nums.length; i++){
            total += nums[i];
            while (total >= target) {
                minLength = Math.min(minLength, i - left + 1); 
                total -= nums[left++];
            }
            
        }
        if(minLength == Integer.MAX_VALUE) return 0;
        return minLength;

    }
}