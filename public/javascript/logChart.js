(async function () {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Available Memory",
        data: [],
      },
    ],
  };

  const data2 = {
    labels: [],
    datasets: [
      {
        label: "Load Avg. (60 Seconds)",
        data: [],
      },
      {
        label: "Load Avg. (5 Minutes)",
        data: [],
      },
      {
        label: "Load Avg. (15 Minutes)",
        data: [],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const chart = new Chart(document.getElementById("memory-chart"), {
    type: "line",
    data,
    options,
  });

  const chart2 = new Chart(document.getElementById("load-avg-chart"), {
    type: "line",
    data: data2,
    options,
  });

  setInterval(async () => {
    const res = await fetch("/stats");
    const json = await res.json();

    const currTime = new Date().toLocaleTimeString();

    chart.data.datasets[0].data.push(json.memFree);
    chart2.data.datasets[0].data.push(json.loadAvg[0]);
    chart2.data.datasets[1].data.push(json.loadAvg[1]);
    chart2.data.datasets[2].data.push(json.loadAvg[2]);
    chart.data.labels.push(currTime.toString());
    chart2.data.labels.push(currTime.toString());

    console.log(chart.data);
    chart.update();
    chart2.update();
  }, 1000);
})();
