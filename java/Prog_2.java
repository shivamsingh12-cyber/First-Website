import java.io.*;
import java.lang.*;

class Prog_2
{
        public static void main(String args[])
       {
        Arithmatic a1 = new Arithmatic();
        a1.addition();
        a1.subtraction();
        a1.multiplication();
        a1.division();
        }
}

class Arithmatic{

    int no1,no2,add,mul,sub;
    Float n1,n2,div;

    void addition(){
        no1=12;
        no2=10;
        add=no1+no2;
        System.out.println("\nThe Addition of number1 and number2: "+add);
    }

    void multiplication(){
        no1=13;
        no2=23;
        mul=no1*no2;
        System.out.println("The Multiplication of number1 and number2: "+mul);
    }

     void subtraction(){
        no1=56;
        no2=34;
        sub=no1-no2;
        System.out.println("The subtraction of number1 and number2: "+sub);
    }

        void division(){
        n1=12F;
        n2=2F;
        div=n1/n2;
        System.out.println("The division of number1 and number2: "+ div);
    }
}

