
window.initCharts = function () {
    // Meta para el año
    new Chart(document.getElementById('graficoMetas'), {
        type: 'bar',
        data: {
            labels: ['Meta', 'Progreso'],
            datasets: [
                { label: 'Meta', data: [5000, null], backgroundColor: '#E8C239', stack: 'stack1' },
                { label: 'Faltante', data: [null, 2500], backgroundColor: '#AAB8F2', stack: 'stack1' },
                { label: 'Logrado', data: [null, 2500], backgroundColor: '#3956E8', stack: 'stack1' }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { x: { stacked: true }, y: { stacked: true, display: false } }
        }
    });

    // Ingresos vs Gastos
    new Chart(document.getElementById('graficoLineal'), {
        type: 'line',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
            datasets: [
                {
                    label: 'Ingresos',
                    data: [3200, 3300, 3100, 3400, 3500],
                    borderColor: '#3716B3',
                    backgroundColor: 'rgba(55, 22, 179, 0.1)',
                    fill: true, tension: 0.4
                },
                {
                    label: 'Gastos',
                    data: [2800, 2900, 2700, 3000, 3100],
                    borderColor: '#BA68C8',
                    backgroundColor: 'rgba(186, 104, 200, 0.1)',
                    fill: true, tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: '#64748B' }, grid: { display: false } },
                y: { beginAtZero: true, grid: { color: '#eee' } }
            }
        }
    });

    const donaOptions = {
        type: 'doughnut',
        options: { responsive: true, cutout: '60%', plugins: { legend: { display: false } } }
    };

    new Chart(document.getElementById('graficoDonaIngresos'), {
        ...donaOptions,
        data: {
            labels: ['Sueldo', 'Negocio', 'Inversiones', 'Otros'],
            datasets: [{ data: [4200, 1300, 900, 600], backgroundColor: ['#3956E8', '#7459D9', '#E8C239', '#AAB8F2'] }]
        }
    });

    new Chart(document.getElementById('graficoDonaGastos'), {
        ...donaOptions,
        data: {
            labels: ['Alimentación', 'Casa', 'Cuidado Personal', 'Deuda'],
            datasets: [{ data: [1200, 900, 400, 600], backgroundColor: ['#3956E8', '#7459D9', '#E8C239', '#BA68C8'] }]
        }
    });

    new Chart(document.getElementById('graficoSubcategoria'), {
        ...donaOptions,
        data: {
            labels: ['Supermercado', 'Comidas fuera', 'Café'],
            datasets: [{ data: [800, 300, 100], backgroundColor: ['#3956E8', '#7459D9', '#E8C239'] }]
        }
    });
};
