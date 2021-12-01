import java.io.*;
import java.lang.*;



class series{
    int a,c;
    int f=1;
    String w;

    void getdata() throws IOException {
        DataInputStream n = new DataInputStream(System.in);
         System.out.print("Enter any number:: ");
        c = Integer.parseInt(n.readLine());
    }

    void data(){
        for(int i=1;i<c;i++){
            if(i%2==0){
                System.out.print("1/"+i+"!+ ");
            }
            else{
                if(i==1){
                     System.out.print("It is in series:: ");
                }
                a=i;
                  System.out.print("1/"+a+"!- ");
            }

        }
        // System.out.println("1/"+a+"! - 1/"+b+"! + 1/"+c+"! - 1/"+d+"! + 1/"+e+"!..");
    }
}

class Prog_4{
    public static void main(String[] args) throws IOException{
        series s = new series();
        s.getdata();
        s.data();
    }
}