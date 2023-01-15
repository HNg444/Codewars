// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

public class Kata {
  public static String shortcut(String input) {
    return input.replaceAll("[aeiou]", "");
  }
}