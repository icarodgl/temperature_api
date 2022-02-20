const TIPO = { "temperatura": "temperatura1", "humidade": "humidade" }
var DADOS = []
var ctx = document.getElementById('humidade').getContext('2d');
var chartHumidade = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '# humidade',
            data: [],
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
        scales: { parsing: false },
        layout: { autoPadding: true },
        interaction: {
            mode: 'index'
        },
        scales: {
        }
    }
});
var ctx = document.getElementById('temperatura').getContext('2d');
var chartTemperatura = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '# Temperatura',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        },
        ]
    },
    options: {
        plugins: { align: "center", color: 'red', display: true, text: "aaaaaaa " },
        scales: { parsing: false },
        layout: { autoPadding: true },
        interaction: {
            mode: 'index'
        },
        scales: {
        }
    }
})


async function getDados() {
    let url = 'https://temperatura-api.herokuapp.com/dados' //

    var myInit = {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
        mode: 'cors',
        cache: 'default'
    };

    var myRequest = new Request(url, myInit);


    let dados = await fetch(myRequest);

    dados = await dados.json()
    return dados
}
async function createChart(chart,dados) {
    //chart.clear()
    chart.data.labels = dados.labels
    chart.data.datasets.forEach(dataset => {
        dataset.data = dados.dados
    });
    chart.update()
}


function filtraDados(dados, tipo, inicio, fim) {
    let resp = {
        "dados": [],
        "labels": []
    }
    if ( inicio !== "" && fim !== "") {
        inicio = moment.parseZone(inicio) //new Date(inicio)   
        fim = moment.parseZone(fim) //new Date(fim)
        dados.forEach(x => {
            let data =moment.parseZone(x.data)
            if (inicio < (data) && (data) <= fim) {
                resp.labels.push(data.format("H")+'H')
                resp.dados.push(x[tipo])
            }
        })
    } else {
        dados.forEach(x => {
            let data = moment(x.data).format("DD/M-H")
            resp.labels.push(data+'H')
            resp.dados.push(x[tipo])
        })
    }
    console.log("RESP>>",resp);
    return resp
}

function updateFiltro(inicio = "", fim = "") {
    let temp = filtraDados(DADOS, TIPO.temperatura, inicio, fim)
    let humi = filtraDados(DADOS, TIPO.humidade, inicio, fim)
    createChart(chartTemperatura,temp)
    createChart(chartHumidade,humi)
}
async function main() {
    DADOS = await getDados()
    updateFiltro()
}

main()