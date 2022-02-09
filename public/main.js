async function getDados(){
    let url =  'https://temperatura-api.herokuapp.com/dados' //

    var myInit = { method: 'GET',
             headers: {"Content-Type":"application/json"},
             mode: 'cors',
             cache: 'default' };

  var myRequest = new Request(url, myInit);

   
  let dados = await fetch(myRequest);

  dados = await dados.json()
  return dados
}
async function createChartsTemperatura(dados){
    
  let labels = dados.map(x => {return new Date(x.data).toLocaleString() } )
  let temperatura = dados.map(x => {return  x.temperatura1 })
  let temperatura2 = dados.map(x => {return x.temperatura2})
  
  const ctx = document.getElementById('temperatura').getContext('2d');

  
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: '# Temperatura 1',
              data: temperatura,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1
          },
          {
              label: '# Temperatura 2',
              data: temperatura2,
              
              backgroundColor: [
                  'rgba(255, 138, 4, 0.5)',
              ],
              borderColor: [
                  'rgba(255, 138, 4, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          plugins:{align:"center",color:'red',display:true,text:"aaaaaaa "},
          scales:{parsing: false},
          layout:{autoPadding:true},
          interaction: {
          mode: 'index'
      },
      scales: {
      }
      }
  });
  }

  async function createChartsHumidade(dados){

  let labels = dados.map(x => {return new Date(x.data).toLocaleString() } )
  let humidade= dados.map(x => {return  x.humidade })
  const ctx = document.getElementById('humidade').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: '# humidade',
              data: humidade,
              backgroundColor: [
                  'rgba(58, 4, 255, 0.5)',
              ],
              borderColor: [
                  'rgba(58, 4, 255, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
        scales:{parsing: false},
        layout:{autoPadding:true},
        interaction: {
        mode: 'index'
      },
      scales: {
      }
      }
  });
  }
  async function main(){
      let dados = await getDados()
    createChartsTemperatura(dados)
    createChartsHumidade(dados)
  }

main()