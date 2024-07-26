import javax.swing.JOptionPane;

public class gui {
    public static void main(String[] args) {
        String name = JOptionPane.showInputDialog("Enter your name:");
        JOptionPane.showMessageDialog(null, name, "Your name is:", 0);
    }
}
