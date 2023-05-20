
document.getElementById("myButton").addEventListener("click", calculateDays);
function calculateDays(){
    inputDate = document.getElementById("input-date").value
    let d = new Date(inputDate);
    let today=new Date();
    var cmas=new Date(today.getFullYear(), d.getMonth(), d.getDate());
    if (today.getMonth()==d.getMonth() && today.getDate()>d.getDate()) 
    {
      cmas.setFullYear(cmas.getFullYear()+1); 
    }  
    var one_day=1000*60*60*24;
    var one_week=7*1000*60*60*24;
    var one_month=30*1000*60*60*24;
    days_left = Math.ceil((cmas.getTime()-today.getTime())/(one_day));
    weeks_left = Math.floor((cmas.getTime()-today.getTime())/(one_week));
    months_left = Math.floor((cmas.getTime()-today.getTime())/(one_month));

    console.log(d);
    console.log(cmas);

    document.getElementById("days_left").innerHTML = days_left;
    document.getElementById("weeks_left").innerHTML = weeks_left;

    // chrome.storage.local.set({days: days_left}).then(async () => {
    //   console.log('Stored' + await chrome.storage.local.get('days'));
    // })

    // import('./background.js').then((module) => {
    //   console.log(module);
    //   module.update(days_left);
    // });
  }

  function setFromStorage() {

  }


  const datePicker = document.getElementById('input-date');
  datePicker.min = new Date().toISOString().split('T')[0].split(',')[0];
