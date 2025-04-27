let radioYes = document.getElementById(`leaveradio1`);
let radioNo = document.getElementById(`leaveradio2`);


function calculate(){
   
    let months = document.getElementById(`monthlabel1`).value;
    let totalDisplay = document.getElementById(`totalDisplay`);
    let taxlabel = document.getElementById(`taxlabel`).value;

    
    let z = calBasic()
    let y = calTransport()
    let v = calHousing()
    let wt = overtime()
    let x = calmeal()
    let xy = calmedical()
    let xx = calleave()
    let b;
    let e;
    let h;
    let k;
    let n;
    let q;
    let t;
    let tA;
    let sum;
    let sum1;
    let percent;
    let totalSum;
    
    function calBasic(){
            
        let percent = document.getElementById(`percent`).value;
        let basicInput = document.getElementById(`basicInput`).value;
        let basicDisplay = document.getElementById(`basicDisplay`);
        
        halfPercenetbasic = basicInput * percent / 100;
        let a = basicInput;
        let b = halfPercenetbasic
        c = parseInt(a) + parseInt(b);
        basicDisplay.textContent = `New Basic: ₦${c.toFixed(2,0)}`;
        
    }
    
    function calTransport(){
        let percent = document.getElementById(`percent`).value;
        let transDisplay = document.getElementById(`transDisplay`);
        let transInput = document.getElementById(`Transport`).value; 
    
        halfPercenettransport = transInput * percent / 100;
        let d = transInput;
        let e = halfPercenettransport
        f = parseInt(d) + parseInt(e);
        transDisplay.textContent = `New Transport: ₦${f.toFixed(2,0)}`;
    
    
    }
    
    function calHousing(){
        let percent = document.getElementById(`percent`).value;
        let housingInput = document.getElementById(`Housing`).value;
        let housingDisplay = document.getElementById(`houseDisplay`)
    
        halfPercenethousing = housingInput * percent / 100;
        let g = housingInput;
        let h = halfPercenethousing
        i = parseInt(g) + parseInt(h);
        housingDisplay.textContent = `New Housing: ₦${i.toFixed(2,0)}`;
    
    
    
    }
    
    function overtime(){
        let percent = document.getElementById(`percent`).value;
        let overTimeinput = document.getElementById(`overtime`).value;
        let overtimeDisplay = document.getElementById(`overtimeDisplay`)

        halfPercenetovertime = overTimeinput * percent / 100;
        let j = overTimeinput;
        let k = halfPercenetovertime
        l = parseInt(j) + parseInt(k);
        overtimeDisplay.textContent = `New Overtime: ₦${l.toFixed(2,0)}`;
    
    }
    
    function calmeal(){
        let percent = document.getElementById(`percent`).value;
        let mealInput = document.getElementById(`mealInput`).value;
        let mealDisplay = document.getElementById(`mealDisplay`);
        let transInput = document.getElementById(`Transport`).value; 
    
        halfPercenetmeal = mealInput * percent / 100;
        let m = mealInput;
        let n = halfPercenetmeal
        o = parseInt(m) + parseInt(n);
        mealDisplay.textContent = `New Meal: ₦${o.toFixed(2,0)}`;
    
    }
    
    function calmedical(){
     
        let percent = document.getElementById(`percent`).value;
        let medicalInput = document.getElementById(`medicalInput`).value;
        let medicalDisplay = document.getElementById(`medicalDisplay`);
       
        halfPercenetmedical = medicalInput * percent / 100;
        let p = medicalInput;
        let q = halfPercenetmedical
        r = parseInt(p) + parseInt(q);
        medicalDisplay.textContent = `New Medical: ₦${r.toFixed(2,0)}`;
    
    }
    
    function calleave(){
    
         
        let percent = document.getElementById(`percent`).value;
        let leaveInput = document.getElementById(`leaveInput`).value;
        let leaveDisplay = document.getElementById(`leaveDisplay`);
      
        halfPercenetleave = leaveInput * percent / 100;
        let s = leaveInput;
        let t = halfPercenetleave
        u = parseInt(s) + parseInt(t);
        leaveDisplay.textContent = `New Leave allowance: ₦${u.toFixed(2,0)}`;
    }

    if(radioNo.checked == "" && radioYes.checked == ""){
        totalDisplay.textContent = `Please, select annual leave above👆`;
    
    }

    if(radioYes.checked == true){
        sum = (halfPercenetbasic * months) + (halfPercenettransport * months) + (halfPercenethousing * 11) +
             (halfPercenetovertime * months) + (halfPercenetmeal * months) + 
             halfPercenetleave;
        percent = taxlabel * 0.01 * sum;
        totalSum = sum - percent
        

        totalDisplay.textContent = (`Total Arrears is ₦${(totalSum.toFixed(2,0))}`);    
         }
    if(radioNo.checked == true){
        sum1 = (halfPercenetbasic * months) + (halfPercenettransport * months) + (halfPercenethousing * 11) +
        (halfPercenetovertime * months) + (halfPercenetmeal * months);
        percent = taxlabel * 0.01 * sum1;
        totalSum = sum1 - percent;
        totalDisplay.textContent = (`Total Arrears is ₦${((totalSum).toFixed(2,0))}`);    


     }
    
}



    

       



