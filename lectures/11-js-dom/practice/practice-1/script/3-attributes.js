const tabButtons = document.querySelector('.tabs-buttons');

const tabButtonsClickHanlder = e => {
  const tab = e.target.dataset.tab;
  console.log(tab);
};

tabButtons.addEventListener('click', tabButtonsClickHanlder);
