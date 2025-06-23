
window.initCharts = function () {
  // Meta del año
  new Chart(document.getElementById('graficoMetas').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Meta', 'Progreso'],
      datasets: [
        {
          label: 'Meta',
          data: [5000, null],
          backgroundColor: '#E8C239',
          borderRadius: 10,
          barThickness: 50,
          categoryPercentage: 0.6,
          stack: 'progreso'
        },
        {
          label: 'Faltante',
          data: [null, 2500],
          backgroundColor: '#AAB8F2',
          borderRadius: { bottomLeft: 10, bottomRight: 10 },
          barThickness: 50,
          categoryPercentage: 0.6,
          stack: 'progreso'
        },
        {
          label: 'Logrado',
          data: [null, 2500],
          backgroundColor: '#3956E8',
          borderRadius: { topLeft: 10, topRight: 10 },
          barThickness: 50,
          categoryPercentage: 0.6,
          stack: 'progreso'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          backgroundColor: '#fff',
          titleColor: '#000',
          bodyColor: '#000',
          borderColor: '#ccc',
          borderWidth: 1,
          callbacks: {
            label: ctx => `${ctx.dataset.label}: $${ctx.parsed.y.toLocaleString()}`
          }
        },
        legend: { display: false }
      },
      scales: {
        x: {
          stacked: true,
          grid: { display: false },
          ticks: { color: '#64748B' }
        },
        y: {
          stacked: true,
          display: false,
          grid: { display: false }
        }
      }
    }
  });

    // Ingresos vs Gastos
    new Chart(document.getElementById('graficoIngresosGastos').getContext('2d'), {
 type: 'line',
    data: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
      datasets: [
        {
          label: 'Ingresos',
          data: [3200, 3300, 3100, 3400, 3500],
          borderColor: '#3716B3',
          backgroundColor: 'rgba(55, 22, 179, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Gastos',
          data: [2800, 2900, 2700, 3000, 3100],
          borderColor: '#BA68C8',
          backgroundColor: 'rgba(186, 104, 200, 0.1)',
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          backgroundColor: '#fff',
          titleColor: '#000',
          bodyColor: '#000',
          borderColor: '#ccc',
          borderWidth: 1,
          displayColors: false,
          callbacks: {
            label: ctx => `${ctx.dataset.label}: $${ctx.formattedValue}`
          }
        },
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#64748B' }
        },
        y: {
          beginAtZero: true,
          grid: { color: '#eee' },
          ticks: { color: '#64748B' }
        }
      }
    }
  });

  // Plugin texto centro para donas
  const centerTextPlugin = {
    id: 'centerText',
    beforeDraw(chart) {
      const { width, height } = chart;
      const ctx = chart.ctx;
      const total = chart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);

      ctx.save();
      ctx.font = 'bold 14px sans-serif';
      ctx.fillStyle = '#64748B';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Total', width / 2, height / 2 - 12);

      ctx.font = 'bold 20px sans-serif';
      ctx.fillStyle = '#000';
      ctx.fillText(`$${total.toLocaleString()}`, width / 2, height / 2 + 12);
      ctx.restore();
    }
  };

  // Ingresos Totales (dona)
    new Chart(document.getElementById('graficoIngresosTotales').getContext('2d'), {
type: 'doughnut',
    data: {
      labels: ['Sueldo', 'Negocio', 'Inversiones', 'Otros'],
      datasets: [{
        data: [4200, 1300, 900, 600],
        backgroundColor: ['#3956E8', '#7459D9', '#E8C239', '#AAB8F2']
      }]
    },
    options: {
      responsive: true,
      cutout: '60%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#fff',
          titleColor: '#000',
          bodyColor: '#000',
          borderColor: '#ccc',
          borderWidth: 1,
          callbacks: {
            label: ctx => `${ctx.label}: $${ctx.formattedValue}`
          }
        }
      }
    },
    plugins: [centerTextPlugin]
  });

  // Gastos Totales y subcategorías

    const colores = ['#3956E8', '#7459D9', '#E8C239', '#BA68C8', '#AAB8F2', '#64748B'];

  const categoriasGasto = {
    labels: ['Alimentación', 'Casa', 'Cuidado Personal', 'Deuda', 'Entretenimiento', 'Impuestos'],
    data: [1200, 900, 400, 600, 350, 450]
  };

  const subcategorias = {
    alimentacion: { labels: ['Supermercado', 'Comidas fuera', 'Café'], data: [800, 300, 100] },
    casa: { labels: ['Hipoteca', 'Servicios', 'Mantenimiento'], data: [500, 250, 150] },
    cuidado: { labels: ['Higiene', 'Peluquería'], data: [250, 150] },
    dependientes: { labels: ['Escuela', 'Ropa', 'Cuidado niños'], data: [400, 200, 150] },
    deuda: { labels: ['Tarjetas', 'Préstamos'], data: [350, 250] },
    entretenimiento: { labels: ['Cine', 'Streaming'], data: [200, 150] },
    medicos: { labels: ['Seguro', 'Copagos'], data: [300, 150] },
    impuestos: { labels: ['Federal', 'Propiedad'], data: [300, 150] },
    donaciones: { labels: ['ONG', 'Familia'], data: [200, 150] },
    seguros: { labels: ['Auto', 'Vida'], data: [250, 150] },
    telecom: { labels: ['Internet', 'Celular'], data: [100, 80] },
    transporte: { labels: ['Gasolina', 'Mantenimiento'], data: [200, 100] }
  };
    new Chart(document.getElementById('graficoGastosTotales').getContext('2d'), {
   type: 'doughnut',
    data: {
      labels: subcategorias['alimentacion'].labels,
      datasets: [{
        data: subcategorias['alimentacion'].data,
        backgroundColor: colores
      }]
    },
    options: {
      responsive: true,
      cutout: '60%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#fff',
          titleColor: '#000',
          bodyColor: '#000',
          borderColor: '#ccc',
          borderWidth: 1,
          callbacks: {
            label: ctx => `${ctx.label}: $${ctx.formattedValue}`
          }
        }
      }
    },
    plugins: [centerTextPlugin]
  });

  document.getElementById('selectorCategoria').addEventListener('change', function () {
    const seleccion = this.value;
    const nuevaData = subcategorias[seleccion];
    chartSub.data.labels = nuevaData.labels;
    chartSub.data.datasets[0].data = nuevaData.data;
    chartSub.update();
  });
