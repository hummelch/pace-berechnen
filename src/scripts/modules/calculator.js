export function initCalculator() {
  setDefaultValues();
  recalculate();

  console.log(document.querySelector('#distance'));
  document.querySelector('#distance').addEventListener('input', function() {
    recalculate('distance');
  });

  //recalculate('distance');
}

function setDefaultValues() {
  document.querySelector('#distance').value = 10;
  document.querySelector('#inTime_h').value = 0;
  document.querySelector('#inTime_m').value = 40;
  document.querySelector('#inTime_s').value = 0;
}

function recalculate(updatedValue) {
  let distance = parseInt(document.querySelector('#distance').value);
  let inTime_h = parseInt(document.querySelector('#inTime_h').value);
  let inTime_m = parseInt(document.querySelector('#inTime_m').value);
  let inTime_s = parseInt(document.querySelector('#inTime_s').value);
  let speed = parseInt(document.querySelector('#speed').value);
  let pace_m = parseInt(document.querySelector('#pace_m').value);
  let pace_s = parseInt(document.querySelector('#pace_s').value);

  if (updatedValue === 'distance') {
    const inTime = (inTime_h * 60 * 60 + inTime_m * 60 + inTime_s) / 60 / 60;

    document.querySelector('#speed').value = distance / inTime;
    const pace = (1 / ((distance / inTime) * 0.0166666667).toFixed(3)) * 60;
    const paceM = (parseInt(pace.toFixed(0)) / 60).toFixed(0);
    document.querySelector('#pace_m').value = paceM;
    document.querySelector('#pace_s').value = (parseInt(paceM) * 60 - pace).toFixed(0);
  }
}
