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

  const options = {
    responsive: true,
  };

  const chart = new Chart(document.getElementById("statistics-chart"), {
    type: "line",
    data,
    options,
  });

  setInterval(async () => {
    const res = await fetch("/stats/memfree");
    const json = await res.json();

    const currTime = new Date().toLocaleTimeString();

    chart.data.datasets[0].data.push(json.memFree);
    chart.data.labels.push(currTime.toString());

    console.log(chart.data);
    chart.update();
  }, 1000);
})();
