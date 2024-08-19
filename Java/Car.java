public class Car{
    private String brand;
    private String model;
    private int year;

    //CONSTRUCTORS
    public Car(String brand, String model, int year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    public Car(Car x){
        this.copy(x);
    }

    //GETTERS
    public String getBrand(){
        return brand;
    }
    public String getModel(){
        return model;
    }
    public int getYear(){
        return year;
    }
    //SETTERS
    public void setBrand(String brand){
        this.brand = brand;
    }
    public void setModel(String model){
        this.model = model;
    }
    public void setYear(int year){
        this.year = year;
    }

    //METHODS
    public void copy(Car x){
        this.brand = x.getBrand();
        this.model = x.getModel();
        this.year = x.getYear();
    }
}
