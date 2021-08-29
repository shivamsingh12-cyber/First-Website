import java.io.*;
import java.lang.*;

 class palindrome
 {
     int n;
 
    void getdata() throws IOException
    {    
        DataInputStream p1 = new DataInputStream(System.in);
            // System.out.println("\n Enter any number: ");
        n = Integer.parseInt(p1.readLine()); 
        // System.out.println("\n the number::"+n);
    }

    void palin()
    {
        //  System.out.println("\n"+n);
        for(int i=1;i<=n;i++){
            int m,n1,rev=0;
            int cnt=0; 
            for(int j=2;j<i;j++){
                if(i%j==0){
                    cnt++;
                }
            }
            if(cnt==0){
                n1=i;
                while(n1>0){
                    m=n1%10;
                    n1=n1/10;
                    rev=rev*10+m;
                }
                if(rev==i){
                    System.out.println(" "+i);
                }
            }
        }
    }
}

class Prog_3{
    public static void main(String args[]) throws IOException
     {
        palindrome p =new palindrome();
        System.out.print("\n Enter Number: ");
        p.getdata();
        p.palin();
        // System.out.println("\n\n");
    }
}