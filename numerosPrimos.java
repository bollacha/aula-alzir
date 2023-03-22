public class numerosPrimos {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Digite um número inteiro positivo: ");
        int num = sc.nextInt();
        boolean ehPrimo = true;

        for (int i = 2; i <= num/2; i++) {
            if (num % i == 0) {
                ehPrimo = false;
                break;
            }
        }
        
        if (num <= 1) {
            ehPrimo = false;
        }
        
        if (ehPrimo) {
            System.out.println(num + " é um número primo.");
        } else {
            System.out.println(num + " não é um número primo.");
        }
        
        sc.close();
    }

}
