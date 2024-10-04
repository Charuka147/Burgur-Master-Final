//------CashierLogin.html file js---------------- 
const correctUsername = "Cashier";
const correctPassword = "Cashier12345";

function cashiersignin(event) {
    event.preventDefault();
    console.log("Button clicked"); 

    const username = document.getElementById("UserName").value;
    const password = document.getElementById("Password").value;

    const cashiers = JSON.parse(localStorage.getItem('cashiers')) || [];

    const isCashier = cashiers.some(cashier => cashier.username === username && cashier.password === password);

    if (username === correctUsername && password === correctPassword) {
        localStorage.setItem('Username', username);
        localStorage.setItem('password', password);
        window.location.href = "homepage.html";
    } else if (isCashier) {
        console.log("Cashier credentials match.");
        window.location.href = "homepage.html";
    } else {
        let errorMessage = document.getElementById('error-message');
        errorMessage.style.display = "block";
    }
}
//---------adminLogin.html file js----------------- 
const adminUsername = "Admin";
const adminPassword = "Admin12345";

function adminSignin(event) {
    event.preventDefault();
    console.log("Button clicked"); 

    const username = document.getElementById("AdminName").value;
    const password = document.getElementById("AdminPassword").value;

    const Admins = JSON.parse(localStorage.getItem('Admins')) || [];

    const isAdmin = Admins.some(cashier => cashier.username === username && cashier.password === password);

    if (username === adminUsername && password === adminPassword) {
        localStorage.setItem('Username', username);
        localStorage.setItem('password', password);
        window.location.href = "adminPortal.html";
    } else if (isAdmin) {
        console.log("Admin credentials match.");
        window.location.href = "adminPortal.html";
    } else {
        let errorMessage = document.getElementById('error-message');
        errorMessage.style.display = "block";
    }
}
// -------order.html file js----------------------
const initialBurgerData = [
    { itemCode: "B1001", itemName: "Classic Burger (Large)", price: "750.00", discount: 0,Qty:50 },
    { itemCode: "B1002", itemName: "Classic Burger (Regular)", price: "1500.00", discount: "15%" ,Qty:50},
    { itemCode: "B1003", itemName: "Turkey Burger", price: "1600.00", discount: 0 ,Qty:50},
    { itemCode: "B1004", itemName: "Chicken Burger (Large)", price: "1400.00", discount: 0,Qty:50 },
    { itemCode: "B1005", itemName: "Chicken Burger (Regular)", price: "800.00", discount: "20%",Qty:50 },
    { itemCode: "B1006", itemName: "Cheese Burger (Large)", price: "1000.00", discount: 0,Qty:50 },
    { itemCode: "B1007", itemName: "Cheese Burger (Regular)", price: "600.00", discount:0 ,Qty:50},
    { itemCode: "B1008", itemName: "Bacon Burger", price: "650.00", discount: "15%",Qty:50 },
    { itemCode: "B1009", itemName: "Shawarma Burger", price: "800.00", discount: 0,Qty:50 },
    { itemCode: "B1010", itemName: "Olive Burger", price: "1800.00", discount: 0,Qty:50 },
    { itemCode: "B1012", itemName: "Double-Cheese Burger", price: "1250.00", discount: "20%",Qty:50 },
    { itemCode: "B1013", itemName: "Crispy Chicken Burger (Regular)", price: "1200.00", discount: 0,Qty:50 },
    { itemCode: "B1014", itemName: "Crispy Chicken Burger (Large)", price: "1600.00", discount: 10,Qty:50 },
    { itemCode: "B1015", itemName: "Paneer Burger ", price: "900.00", discount: 0,Qty:50 }
];

const initialSubmarineData = [
    { itemCode: "B1016", itemName: "Crispy Chicken Submarine (Large)", price: "2000.00", discount: 0,Qty:50  },
    { itemCode: "B1017", itemName: "Crispy Chicken Submarine (Regular)", price: "1500.00", discount: 0,Qty:50  },
    { itemCode: "B1018", itemName: "Chicken Submarine (Large)", price: "1800.00", discount: "3%",Qty:50  },
    { itemCode: "B1019", itemName: "Chicken Submarine (Regular)", price: "1400.00", discount: 0,Qty:50  },
    { itemCode: "B1020", itemName: "Grinder Submarine", price: "2300.00", discount: 0,Qty:50  },
    { itemCode: "B1021", itemName: "Cheese Submarine", price: "2200.00", discount: 0,Qty:50  },
    { itemCode: "B1022", itemName: "Double Cheese n Chicken Submarine", price: "1900.00", discount:"16%",Qty:50  },
    { itemCode: "B1023", itemName: "Special Horgie Submarine", price: "2800.00", discount: 0 ,Qty:50 },
    { itemCode: "B1024", itemName: "MOS Special Submarine", price: "3000.00", discount: 0,Qty:50  },
  
];
const initialFriesData = [
    { itemCode: "B1025", itemName: "Steak Fries (Large)", price: "1200.00", discount: 0 ,Qty:50 },
    { itemCode: "B1026", itemName: "Steak Fries (Medium)", price: "600.00", discount: 0 ,Qty:50 },
    { itemCode: "B1027", itemName: "French Fries (Large)", price: "800.00", discount: 0,Qty:50  },
    { itemCode: "B1028", itemName: "French Fries (Medium)", price: "650.00", discount: 0 ,Qty:50 },
    { itemCode: "B1029", itemName: "French Fries (Small)", price: "450.00", discount: 0 ,Qty:50 },
    { itemCode: "B1030", itemName: "Sweet Potato Fries (Large)", price: "600.00", discount: 0,Qty:50  }
   
  
];
const initialPastaData = [
    { itemCode: "B1031", itemName: "Chicken n Cheese Pasta", price: "1600.00", discount:"15%",Qty:50 },
    { itemCode: "B1032", itemName: "Chicken Penne Pasta", price: "1700.00", discount: 0 ,Qty:50 },
    { itemCode: "B1033", itemName: "Ground Turkey Pasta Bake", price: "2900.00", discount:"10%" ,Qty:50  },
    { itemCode: "B1034", itemName: "Creamy Shrimp Pasta", price: "2000.00", discount: 0 ,Qty:50 },
    { itemCode: "B1035", itemName: "Lemon Butter Pasta", price: "1950.00", discount: 0 ,Qty:50 },
    { itemCode: "B1036", itemName: "Tagliatelle Pasta", price: "2400.00", discount:"1%",Qty:50  },
    { itemCode: "B1037", itemName: "Baked Ravioli", price: "2000.00", discount: "1%",Qty:50  },
   
  
];

const initialChickenData = [
    { itemCode: "B1038", itemName: "Fried Chicken (Small)", price: "1200.00", discount:0,Qty:50 },
    { itemCode: "B1039", itemName: "Fried Chicken (Regular)", price: "2300.00", discount:"10%" ,Qty:50 },
    { itemCode: "B1040", itemName: "Fried Chicken (Large)", price: "3100.00", discount:"5%" ,Qty:50  },
    { itemCode: "B1041", itemName: "Hot Wings (Large)", price: "2400.00", discount: 0 ,Qty:50 },
    { itemCode: "B1042", itemName: "Devilled Chicken (Large)", price: "900.00", discount: 0 ,Qty:50 },
    { itemCode: "B1043", itemName: "BBQ Chicken (Regular)", price: "2100.00", discount:0,Qty:50  },
     
  
];
const initialBeverages = [
    { itemCode: "B1044", itemName: "Pepsi (330ml)", price: "990.00", discount:"5%",Qty:50 },
    { itemCode: "B1045", itemName: "Coca-Cola (330ml)", price: "1230.00", discount:0 ,Qty:50 },
    { itemCode: "B1046", itemName: "Sprite (330ml)", price: "1500.00", discount:"3%" ,Qty:50  },
   
];

//--------Search Food Function-----------------------
function SearchFoods(){
    const query = document.getElementById('SearchFoodTxt').value.toLowerCase();
    const rows = document.querySelectorAll('#burgerTableBody tr');
    const rowsSub = document.querySelectorAll('#SubmarineTableBody tr');
    const rowsFry = document.querySelectorAll('#FriesTableBody tr');
    const rowsPasta = document.querySelectorAll('#PastaTableBody tr');
    const rowsChicken = document.querySelectorAll('#ChickenTableBody tr');
    const rowsBevarage = document.querySelectorAll('#BeveragesTableBody tr');
    rows.forEach(row => {
        const itemName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (itemName.includes(query)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
    rowsSub.forEach(rowSub => {
        const itemName = rowSub.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (itemName.includes(query)) {
            rowSub.style.display = '';
        } else {
            rowSub.style.display = 'none';
        }
    });
    rowsFry.forEach(rowFry => {
        const itemName = rowFry.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (itemName.includes(query)) {
            rowFry.style.display = '';
        } else {
            rowFry.style.display = 'none';
        }
    });

    rowsPasta.forEach(rowPasta => {
        const itemName = rowPasta.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (itemName.includes(query)) {
            rowPasta.style.display = '';
        } else {
            rowPasta.style.display = 'none';
        }
    });
    rowsChicken.forEach(rowChicken => {
        const itemName = rowChicken.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (itemName.includes(query)) {
            rowChicken.style.display = '';
        } else {
            rowChicken.style.display = 'none';
        }
    });
    rowsBevarage.forEach(rowBevarage => {
        const itemName = rowBevarage .querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (itemName.includes(query)) {
            rowBevarage .style.display = '';
        } else {
            rowBevarage .style.display = 'none';
        }
    });
}

if (!localStorage.getItem('Beverages')) {
    localStorage.setItem('Beverages', JSON.stringify(initialBeverages));
}

if (!localStorage.getItem('ChickenData')) {
    localStorage.setItem('ChickenData', JSON.stringify(initialChickenData));
}

if (!localStorage.getItem('PastaData')) {
    localStorage.setItem('PastaData', JSON.stringify(initialPastaData));
}

if (!localStorage.getItem('FriesData')) {
    localStorage.setItem('FriesData', JSON.stringify(initialFriesData));
}

if (!localStorage.getItem('SubmarineData')) {
    localStorage.setItem('SubmarineData', JSON.stringify(initialSubmarineData));
}

if (!localStorage.getItem('burgerData')) {
    localStorage.setItem('burgerData', JSON.stringify(initialBurgerData));
}
function displayBeveragesData(){
    const beveragesData = JSON.parse(localStorage.getItem('Beverages')) || [];
    const beveragesTableBody = document.getElementById("BeveragesTableBody");

   beveragesTableBody.innerHTML = "";
   beveragesData.forEach(( beverage, index) => {
        const row =    beveragesTableBody.insertRow();
        row.insertCell(0).textContent = beverage.itemCode;
        row.insertCell(1).textContent = beverage.itemName;
        row.insertCell(2).textContent = beverage.price;
        row.insertCell(3).textContent = beverage.Qty;
        if( beverage.discount==0){
            row.insertCell(4).textContent = '-';
        }else{
            row.insertCell(4).textContent =  beverage.discount;
        }
       
        const editCell = row.insertCell(5);
        editCell.innerHTML = `<button class="edit-button" onclick="editBeverage(${index})">Edit</button>`;
        const buyCell = row.insertCell(6);
        buyCell.innerHTML = `<button class="buy-button" onclick="buyItem('${beverage.itemCode}', '${beverage.price}', '${beverage.discount}')">Buy Now</button>`;
        const deleteCell = row.insertCell(7);
        deleteCell.innerHTML = `<button class="delete-button" onclick="deleteBeverage(${index})">Delete</button>`;
    });

}
if(document.getElementById("BeveragesTableBody") !=null){displayBeveragesData();}

function displayChickenData(){
    const chickenData = JSON.parse(localStorage.getItem('ChickenData')) || [];
    const chickenTableBody = document.getElementById("ChickenTableBody");

   chickenTableBody.innerHTML = "";
    chickenData.forEach((chicken, index) => {
        const row =   chickenTableBody.insertRow();
        row.insertCell(0).textContent =chicken.itemCode;
        row.insertCell(1).textContent =chicken.itemName;
        row.insertCell(2).textContent =chicken.price;
        row.insertCell(3).textContent =chicken.Qty;
        if(chicken.discount==0){
            row.insertCell(4).textContent = '-';
        }else{
            row.insertCell(4).textContent = chicken.discount;
        }
       
        const editCell = row.insertCell(5);
        editCell.innerHTML = `<button class="edit-button" onclick="editChicken(${index})">Edit</button>`;
        const buyCell = row.insertCell(6);
        buyCell.innerHTML = `<button class="buy-button" onclick="buyItem('${chicken.itemCode}', '${chicken.price}', '${chicken.discount}')">Buy Now</button>`;
        const deleteCell = row.insertCell(7);
        deleteCell.innerHTML = `<button class="delete-button" onclick=" deleteChicken(${index})">Delete</button>`;
    });

}
if(document.getElementById("ChickenTableBody") !=null){displayChickenData();}

function displayPastaData(){
    const pastaData = JSON.parse(localStorage.getItem('PastaData')) || [];
    const pastaTableBody = document.getElementById("PastaTableBody");

    pastaTableBody.innerHTML = "";
    pastaData.forEach((pasta, index) => {
        const row =   pastaTableBody.insertRow();
        row.insertCell(0).textContent =pasta.itemCode;
        row.insertCell(1).textContent =pasta.itemName;
        row.insertCell(2).textContent =pasta.price;
        row.insertCell(3).textContent =pasta.Qty;
        if(pasta.discount==0){
            row.insertCell(4).textContent = '-';
        }else{
            row.insertCell(4).textContent = pasta.discount;
        }
       
        const editCell = row.insertCell(5);
        editCell.innerHTML = `<button class="edit-button" onclick="editPasta(${index})">Edit</button>`;
        const buyCell = row.insertCell(6);
        buyCell.innerHTML = `<button class="buy-button" onclick="buyItem('${pasta.itemCode}', '${pasta.price}', '${pasta.discount}')">Buy Now</button>`;
        const deleteCell = row.insertCell(7);
        deleteCell.innerHTML = `<button class="delete-button" onclick=" deletePasta(${index})">Delete</button>`;
    });

}
if(document.getElementById("PastaTableBody") !=null){displayPastaData();}

function displayFriesData(){
    const friesData = JSON.parse(localStorage.getItem('FriesData')) || [];
    const friesTableBody = document.getElementById("FriesTableBody");

     friesTableBody.innerHTML = "";
    friesData.forEach((fry, index) => {
        const row =  friesTableBody.insertRow();
        row.insertCell(0).textContent = fry.itemCode;
        row.insertCell(1).textContent = fry.itemName;
        row.insertCell(2).textContent = fry.price;
        row.insertCell(3).textContent = fry.Qty;
        if(fry.discount==0){
            row.insertCell(4).textContent = '-';
        }else{
            row.insertCell(4).textContent = fry.discount;
        }
       
        const editCell = row.insertCell(5);
        editCell.innerHTML = `<button class="edit-button" onclick="editFry(${index})">Edit</button>`;
        const buyCell = row.insertCell(6);
        buyCell.innerHTML = `<button class="buy-button" onclick="buyItem('${fry.itemCode}', '${fry.price}', '${fry.discount}')">Buy Now</button>`;
        const deleteCell = row.insertCell(7);
        deleteCell.innerHTML = `<button class="delete-button" onclick=" deleteFry(${index})">Delete</button>`;
    });

}
if(document.getElementById("FriesTableBody") !=null){displayFriesData();}

function displaySubmarineData(){
    const submarineData = JSON.parse(localStorage.getItem('SubmarineData')) || [];
    const submarineTableBody = document.getElementById("SubmarineTableBody");

    submarineTableBody.innerHTML = "";
    submarineData.forEach((submarine, index) => {
        const row = submarineTableBody.insertRow();
        row.insertCell(0).textContent = submarine.itemCode;
        row.insertCell(1).textContent = submarine.itemName;
        row.insertCell(2).textContent = submarine.price;
        row.insertCell(3).textContent = submarine.Qty;
        if(submarine.discount==0){
            row.insertCell(4).textContent = '-';
        }else{
            row.insertCell(4).textContent = submarine.discount;
        }
       
        const editCell = row.insertCell(5);
        editCell.innerHTML = `<button class="edit-button" onclick="editSubmarine(${index})">Edit</button>`;
        const buyCell = row.insertCell(6);
        buyCell.innerHTML = `<button class="buy-button" onclick="buyItem('${submarine.itemCode}', '${submarine.price}', '${submarine.discount}')">BuyNow</button>`;
        const deleteCell = row.insertCell(7);
        deleteCell.innerHTML = `<button class="delete-button" onclick=" deleteSubmarine(${index})">Delete</button>`;
    });

}
if(document.getElementById("SubmarineTableBody") !=null){displaySubmarineData();}

function editBeverage(index) {
    const beverageData = JSON.parse(localStorage.getItem('Beverages')) || [];
    const item = beverageData [index];
    window.location.href = `updateitem.html?itemCode=${encodeURIComponent(item.itemCode)}&price=${encodeURIComponent(item.price)}&discount=${encodeURIComponent(item.discount)}`;
}
function editChicken(index) {
    const chickenData = JSON.parse(localStorage.getItem('ChickenData')) || [];
    const item = chickenData [index];
    window.location.href = `updateitem.html?itemCode=${encodeURIComponent(item.itemCode)}&price=${encodeURIComponent(item.price)}&discount=${encodeURIComponent(item.discount)}`;
}
function editPasta(index) {
    const pastaData = JSON.parse(localStorage.getItem('PastaData')) || [];
    const item = pastaData [index];
    window.location.href = `updateitem.html?itemCode=${encodeURIComponent(item.itemCode)}&price=${encodeURIComponent(item.price)}&discount=${encodeURIComponent(item.discount)}`;
}
function editFry(index) {
    const friesData = JSON.parse(localStorage.getItem('FriesData')) || [];
    const item = friesData[index];
    window.location.href = `updateitem.html?itemCode=${encodeURIComponent(item.itemCode)}&price=${encodeURIComponent(item.price)}&discount=${encodeURIComponent(item.discount)}`;
}
function editSubmarine(index) {
    const submarineData = JSON.parse(localStorage.getItem('SubmarineData')) || [];
    const item = submarineData[index];
    window.location.href = `updateitem.html?itemCode=${encodeURIComponent(item.itemCode)}&price=${encodeURIComponent(item.price)}&discount=${encodeURIComponent(item.discount)}`;
}
function deleteBeverage(index) {
    const   BeverageData= JSON.parse(localStorage.getItem('Beverages')) || [];
     
     if (index > -1 && index <  BeverageData.length) {
          BeverageData.splice(index, 1); 
         localStorage.setItem('Beverages', JSON.stringify(BeverageData));
         displayBeveragesData();
         alert("Item deleted successfully.");
     } else {
         alert("Invalid item index.");
     }
 }
function deleteChicken(index) {
    const chickenData= JSON.parse(localStorage.getItem('ChickenData')) || [];
     
     if (index > -1 && index < chickenData.length) {
         chickenData.splice(index, 1); 
         localStorage.setItem('ChickenData', JSON.stringify(pastaData));
         displayChickenData(); 
         alert("Item deleted successfully.");
     } else {
         alert("Invalid item index.");
     }
 }
function deleteSubmarine(index) {
    const submarineData = JSON.parse(localStorage.getItem('SubmarineData')) || [];
    
    if (index > -1 && index < submarineData.length) {
        submarineData.splice(index, 1); 
        localStorage.setItem('SubmarineData', JSON.stringify(submarineData));
        displaySubmarineData(); 
        alert("Item deleted successfully.");
    } else {
        alert("Invalid item index.");
    }
}

function deleteChicken(index) {
    const chickenData= JSON.parse(localStorage.getItem('ChickenData')) || [];
     
     if (index > -1 && index < chickenData.length) {
         chickenData.splice(index, 1);
         localStorage.setItem('ChickenData', JSON.stringify(chickenData));
         displayChickenData(); 
         alert("Item deleted successfully.");
     } else {
         alert("Invalid item index.");
     }
 }
function deleteFry(index) {
    const friesData= JSON.parse(localStorage.getItem('FriesData')) || [];
     
     if (index > -1 && index < friesData.length) {
         friesData.splice(index, 1); 
         localStorage.setItem('FriesData', JSON.stringify(friesData));
         displayFriesData(); 
         alert("Item deleted successfully.");
     } else {
         alert("Invalid item index.");
     }
 }
 function deletePasta(index) {
    const pastaData= JSON.parse(localStorage.getItem('PastaData')) || [];
     
     if (index > -1 && index < pastaData.length) {
         pastaData.splice(index, 1); 
         localStorage.setItem('PastaData', JSON.stringify(pastaData));
         displayPastaData(); 
         alert("Item deleted successfully.");
     } else {
         alert("Invalid item index.");
     }
 }
function displayBurgerData() {
    const burgerData = JSON.parse(localStorage.getItem('burgerData')) || [];
    const tableBody = document.getElementById("burgerTableBody");

    tableBody.innerHTML = "";
    burgerData.forEach((burger, index) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = burger.itemCode;
        row.insertCell(1).textContent = burger.itemName;
        row.insertCell(2).textContent = burger.price;
        row.insertCell(3).textContent = burger.Qty;
        if(burger.discount==0){
            row.insertCell(4).textContent = '-';
        }else{
            row.insertCell(4).textContent = burger.discount;
        }
       
        const editCell = row.insertCell(5);
        editCell.innerHTML = `<button class="edit-button" onclick="editItem(${index})">Edit</button>`;
        const buyCell = row.insertCell(6);
        buyCell.innerHTML = `<button class="buy-button" onclick="buyItem('${burger.itemCode}', '${burger.price}', '${burger.discount}')">Buy Now</button>`;
        const deleteCell = row.insertCell(7);
        deleteCell.innerHTML = `<button class="delete-button" onclick="deleteItem(${index})">Delete</button>`;
    });
}
if(document.getElementById("burgerTableBody") !=null){displayBurgerData();}

//------------------- Edit button funtion-------------
function updateItem() {
    const itemCode = document.getElementById("updateItemCode").value;
    const newPrice = document.getElementById("updatePrice").value;
    const newDiscount = document.getElementById("updateDiscount").value;

    const burgerData = JSON.parse(localStorage.getItem('burgerData')) || [];
    const itemIndex = burgerData.findIndex(burger => burger.itemCode === itemCode);
   
    const submarineData=JSON.parse(localStorage.getItem('SubmarineData')) || [];
    const SubIndex = submarineData.findIndex(submarine => submarine.itemCode === itemCode);

    const friesDta =JSON.parse(localStorage.getItem('FriesData')) || [];
    const FryIndex= friesDta.findIndex(fry => fry.itemCode === itemCode);

    const pastaData =JSON.parse(localStorage.getItem('PastaData')) || [];
    const PastaIndex= pastaData.findIndex(pasta => pasta.itemCode === itemCode);
    
    
    
    const chickenData =JSON.parse(localStorage.getItem('ChickenData')) || [];
    const ChickenIndex= chickenData.findIndex(chicken => chicken.itemCode === itemCode);
   
    const  BeverageData =JSON.parse(localStorage.getItem('Beverages')) || [];
    const  BeverageIndex= BeverageData.findIndex(Beverage => Beverage.itemCode === itemCode);
   
    if (itemIndex !== -1) {
        burgerData[itemIndex].price = newPrice;
        burgerData[itemIndex].discount = newDiscount || "-";
        localStorage.setItem('burgerData', JSON.stringify(burgerData));
        alert("Item Edit Succesfully!!");  
    }else if (SubIndex !== -1) {
        submarineData[SubIndex].price = newPrice;
        submarineData[SubIndex].discount = newDiscount || "-";
        localStorage.setItem('SubmarineData', JSON.stringify(submarineData));
        alert("Item Edit Succesfully!!");
    }else if (FryIndex !== -1) {
        friesDta[FryIndex].price = newPrice;
        friesDta[FryIndex].discount = newDiscount || "-";
        localStorage.setItem('FriesData', JSON.stringify(friesDta));
        alert("Item Edit Succesfully!!"); 
    } else if (PastaIndex !== -1) {
        pastaData[PastaIndex].price = newPrice;
        pastaData[PastaIndex].discount = newDiscount || "-";
        localStorage.setItem('PastaData', JSON.stringify(pastaData));
        alert("Item Edit Succesfully!!");  
    } else if (ChickenIndex !== -1) {
        chickenData[ChickenIndex].price = newPrice;
        chickenData[ChickenIndex].discount = newDiscount || "-";
        localStorage.setItem('ChickenData', JSON.stringify(chickenData));
        alert("Wade hri");
    } else if (BeverageIndex !== -1) {
        BeverageData[BeverageIndex].price = newPrice;
        BeverageData[BeverageIndex].discount = newDiscount || "-";
        localStorage.setItem('Beverages', JSON.stringify(BeverageData));
        alert("Item Edit Succesfully!!");   
    }else {
        alert("Item not found");
    }
}

