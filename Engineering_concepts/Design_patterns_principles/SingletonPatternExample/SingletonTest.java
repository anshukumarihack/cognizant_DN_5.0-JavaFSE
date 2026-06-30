class Logger {

    private static Logger instance;

    private Logger() {
        System.out.println("Logger instance created.");
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}

public class SingletonTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Application Started");
        logger2.log("User Login Successful");

        System.out.println("logger1 hashcode: " + logger1.hashCode());
        System.out.println("logger2 hashcode: " + logger2.hashCode());

        if (logger1 == logger2) {
            System.out.println("Only one Logger instance exists.");
        }
    }
}
