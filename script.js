document.getElementById("myForm1").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get values from input fields and perform validation:
    const millage = parseFloat(document.getElementById("millage").value);
    const km = parseFloat(document.getElementById("km").value);
    const fuelType = document.getElementById("fuel_type").value;
    let e_value=0;
  
    if (isNaN(millage) || millage <= 0) {
      alert("Please enter a valid millage (positive number).");
      return;
    }
  
    if (isNaN(km) || km <= 0) {
      alert("Please enter a valid distance traveled (positive number).");
      return;
    }
  
    if (fuelType === "") {
      alert("Please select a fuel type.");
      return;
    }
    if(fuelType==="petrol"){
      e_value=2.3
    }
    if(fuelType==="diesel"){
      e_value=2.7
    }
    if(fuelType==="biodiesel"){
      e_value=3.8
    }
    if(fuelType==="gasoline"){
      e_value=2.6
    }
  
    // Calculate based on user-specified formula:
    // Replace following calculation with your actual formula
    let calculatedValue = (km*e_value)/millage; // Example calculation (update as needed)
  
    // Add clear formatting and units to the result:
    const formattedResult = `${calculatedValue.toFixed(2)} ${getUnitsBasedOnCalculation(fuelType)}`;
  
    // Display the result in the designated element:
    document.getElementById("result").innerHTML = `**Result:** ${formattedResult}`;
  });
  
  // Determine units based on the selected fuel type (you might need to adjust this function):
  function getUnitsBasedOnCalculation(fuelType) {
    switch (fuelType) {
      case "Petrol":
      case "diesel":
      case "biodiesel":
        return "liters";
      case "gasoline":
        return "gallons";
      default:
        return "units"; // Adjust default unit if needed
    }
  }
  
  function openVehicle(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

  document.getElementById("myForm2").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get values from input fields and perform validation:
    const fly_dist = parseFloat(document.getElementById("fly_dist").value);
    const classType = document.getElementById("class_type").value;
    let e_value=0;

    if (isNaN(fly_dist) || fly_dist <= 0) {
      alert("Please enter a valid distance (positive number).");
      return;
    }

    if(classType==="ecsh"){
      e_value=0.2
    }
    if(classType==="eclh"){
      e_value=0.25
    }
    if(classType==="bc"){
      e_value=0.4
    }
    if(classType==="fc"){
      e_value=0.56
    }

    // Calculate based on user-specified formula:
    // Replace following calculation with your actual formula
    let calculatedValue1 = e_value*fly_dist; // Example calculation (update as needed)

    // Add clear formatting and units to the result:
    const formattedResult1 = `${calculatedValue1.toFixed(2)}`;
    //  {getUnitsBasedOnCalculation(fuelType)}`;
    document.getElementById("result2").innerHTML = `**Result:** ${formattedResult1}`;
  });

  