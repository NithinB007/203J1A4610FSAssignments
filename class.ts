class Car {
    // Define Car properties with optional initial values
    make: string = "";
    model: string = "";
    year: number = 0;
  
    // Method to display car information
    displayInfo(): void {
      console.log(`Car Details:`);
      console.log(`  Make: ${this.make}`);
      console.log(`  Model: ${this.model}`);
      console.log(`  Year: ${this.year}`);
    }
  }
  
  // Create a new Car object (properties initialized directly)
  const myCar1 = new Car();
  myCar1.make = "Honda";
  myCar1.model = "Civic";
  myCar1.year = 2023;
  
  myCar1.displayInfo();
  