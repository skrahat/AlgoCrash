//Given an integer, convert it to a roman numeral.

class Solution {
    public String intToRoman(int num) {
        // Define the mappings from numeral to value
        int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        String[] numerals = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};

        StringBuilder sb = new StringBuilder();

        // Iterate over each mapping, from largest value to smallest
        for (int i = 0; i < values.length; i++) {
            // While the current value can be subtracted from num, do so and append the corresponding numeral
            while (num >= values[i]) {
                num -= values[i];
                sb.append(numerals[i]);
            }
        }

        return sb.toString();
    }
}
