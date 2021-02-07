var myArray = [
    {    
        "GRANT_ID":"54561",               
        "GRANT_SUBJECT":"SCHOLAR",        
        "REQUIRED_AMOUNT":"75000" 
    } ,
    {
        "GRANT_ID":"67845",
        "GRANT_SUBJECT":"BUILDING & MAINTAINANCE",
        "REQUIRED_AMOUNT":"100000"
     } ,
    {
        "GRANT_ID":"56784",
        "GRANT_SUBJECT":"SCHOLAR",
        "REQUIRED_AMOUNT":"55000"
     } ,
    {
        "GRANT_ID":"384216",
        "GRANT_SUBJECT":"BUILDING & MAINTAINANCE",
        "REQUIRED_AMOUNT":"175000"
     } ,
    {
        "GRANT_ID":"45873",
        "GRANT_SUBJECT":"NATIONAL_DAY",
        "REQUIRED_AMOUNT":"55000"
     } ,
    {
        "GRANT_ID":"23186",
        "GRANT_SUBJECT":"MIDDAY_MEAL",
        "REQUIRED_AMOUNT":"90000"
    } ,
    {
        "GRANT_ID":"941203",
        "GRANT_SUBJECT":"ACHIEVERS",
        "REQUIRED_AMOUNT":"25000"
    } ,
    {
        "GRANT_ID":"548756",
        "GRANT_SUBJECT":"SCHOLAR",
        "REQUIRED_AMOUNT":"7500"
         } ,
    {
        "GRANT_ID":"86436",
        "GRANT_SUBJECT":"TEACHING_AIDS",
        "REQUIRED_AMOUNT":"65000"
    } ,
    {
        "GRANT_ID":"493206",
        "GRANT_SUBJECT":"NATIONAL_DAY",
        "REQUIRED_AMOUNT":"75000"
    } ,
    {
        "GRANT_ID":"320056",
        "GRANT_SUBJECT":"BUILDING & MAINTAINANCE",
        "REQUIRED_AMOUNT":"58000"
    } ,
    {
        "GRANT_ID":"110051",
        "GRANT_SUBJECT":"INFO_TECH",
        "REQUIRED_AMOUNT":"275000"
    } ,
    {
        "GRANT_ID":"63956",
        "GRANT_SUBJECT":"ACHIEVERS",
        "REQUIRED_AMOUNT":"5000"
     } 
]

buildTable(myArray)

function buildTable(data) {
    var table = document.getElementById('verification') 
    
   for(var i=0; i<data.length; i++){
       var row =  
                    `<tr>
                    <td> ${data[i].GRANT_ID}</td>
                    <td> ${data[i].GRANT_SUBJECT}</td>
                    <td> ${data[i].REQUIRED_AMOUNT}</td>
                    <td><a href="#" class="btn btn-sm manage">Verify</a></td>
                    <td><a href="#" class="btn btn-danger">Reject</a></td>
                     </tr>`
                

        table.innerHTML += row      
         
    } 
}