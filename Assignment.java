import java.util.Random;
import java.util.Scanner;
import java.util.HashMap;

public class Assignment {
    public static void main(String[] args) {
        // A. Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.
        int[] array = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(array);

        System.out.print("Shuffled Array: ");
        for (int num : array) {
            System.out.print(num + " ");
        }
        System.out.println();

        // B. Enter a Roman Number as input and convert it to an integer.
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman Numeral (e.g., IX): ");
        String romanNumeral = scanner.nextLine();
        int integerEquivalent = romanToInteger(romanNumeral);
        System.out.println("Integer equivalent: " + integerEquivalent);

        // C. Check if the input is a pangram or not.
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();
        boolean isPangram = isPangram(sentence);
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }

        scanner.close();
    }

    // Function to shuffle an array without relying on built-in methods
    private static void shuffleArray(int[] array) {
        Random rand = new Random();
        for (int i = array.length - 1; i > 0; i--) {
            int j = rand.nextInt(i + 1);
            // Swap array[i] and array[j]
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    // Function to convert a Roman numeral to an integer
    private static int romanToInteger(String s) {
        // Dictionary for Roman numbers
        HashMap valueOf = new HashMap<Character, Integer>();
        valueOf.put('I', 1);
        valueOf.put('V', 5);
        valueOf.put('X', 10);
        valueOf.put('L', 50);
        valueOf.put('C', 100);
        valueOf.put('D', 500);
        valueOf.put('M', 1000);

        int value = 0;
        int i = 0;
        while (i < s.length()) {
            int valAti = (int)valueOf.get(s.charAt(i));
            if (i+1 < s.length()) {
                int valAtiPlusOne = (int)valueOf.get(s.charAt(i+1));
                if (valAti < valAtiPlusOne) {
                    value = value + valAtiPlusOne - valAti;
                    i = i + 1;
                }
                else {
                    value = value + valAti;
                }
            }
            else {
                value = value + valAti;
            }
            i = i + 1;
        }

        return value;
    }

    // Function to check if a sentence is a pangram
    private static boolean isPangram(String sentence) {
        sentence = sentence.toLowerCase();
        boolean[] alphabet = new boolean[26]; // 26 letters from 'a' to 'z'
        int alphabets = 0;  // Count of unique alphabets in the sentence
        for (int i = 0; i< sentence.length(); i++) {
            char character = sentence.charAt(i);
            if (character == ' ')
                continue;
            if (!alphabet[character - 'a'])
                alphabets++;  // Increment alphabets when a new alphabet is found in the sentence
            alphabet[character - 'a'] = true;
        }
        return alphabets == 26;
    }
}
