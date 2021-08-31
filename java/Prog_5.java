import java.io.*;
import java.lang.*;

class fibonacci{

   int m = 0,n=1;

        int s,count;

    void getdata() throws IOException{
          System.out.print("Enter the number:: ");
        DataInputStream num = new DataInputStream(System.in);
        count = Integer.parseInt(num.readLine());
    }
    void calc(){
        for(int i=2;i<count;i++){
            s= m+n;
            System.out.print(" "+s);
            m=n;
            n=s;
            // System.out.print(s+" ");
        }
    }
}

class Prog_5{
    public static void main(String arg[]) throws IOException{
        fibonacci f = new fibonacci();
        f.getdata();
        f.calc();
    }
}