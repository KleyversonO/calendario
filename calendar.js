function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let td = calendar.getElementsByTagName('td')[parseInt(days) + 2];
     
    if (days <= 0 || days > 31) {
        alert("é necessario que digite um número entre 1 e 31.");
        return;
      }
     
      days = Math.max(1, parseInt(days));
     
      let colorCounts = {};
      if (localStorage.getItem('colorCounts')) {
        colorCounts = JSON.parse(localStorage.getItem('colorCounts'));
      }
     
      if (colorCounts[color] && colorCounts[color] >= 3) {
        alert(`A cor "${color}" já foi usada 3 vezes. Escolha outra cor.`);
        return;
      }
     
      colorCounts[color] = (colorCounts[color] || 0) + 1;
      localStorage.setItem('colorCounts', JSON.stringify(colorCounts));
     
      td.style.backgroundColor = color;
    }
