function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let td = calendar.getElementsByTagName('td')[parseInt(days) + 2];
     
    if (days <= 0 || days > 31) {
        alert("é necessario que digite um número entre 1 e 31.");
        return;
      }
     
      td.style.backgroundColor = color;
    }
