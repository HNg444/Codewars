//Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!






import java.util.*;

class Kata {
  public static List CreateList(int number)
  {
    List list = new ArrayList();
    
    for(int count = 1; count <= number; count++)
    {
      list.add(count);
    }
    
    return list;
  }
}


// BEFORE 

class Kata {
  public static List CreateList(int number)
  {
    List list = new ArrayList();
    
    for(int count = 1; count <= number;) //missing the incrementor
    {
      list.add(count);
    }
    
    return list;
  }
}