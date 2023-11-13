const MS_PER_SECONDS = 1000;
const SECONDES_PER_MIN = 60;
const MINUTES_PER_HOUR = 60;
const HOUR_PER_DAY = 24;
const DAYS_PER_WEEK = 7;
const WEEK_IN_MS =
  MS_PER_SECONDS *
  SECONDES_PER_MIN *
  MINUTES_PER_HOUR *
  HOUR_PER_DAY *
  DAYS_PER_WEEK;

new Date().getDate + WEEK_IN_MS;

function addDays(days) {
  const currentDate = new Date();
  const numericDate = currentDate.getTime();
  const amountToSum =
    MS_PER_SECONDS * SECONDES_PER_MIN * MINUTES_PER_HOUR * HOUR_PER_DAY + days;
  const newNumericDate = numericDate + amountToSum;
  return new Date(newNumericDate);
}

const workers = ["Pedro", "Ana", "Rute"];
//workers.push('Thiago')
workers = [...workers, "Thiago"];

const workersString = workers.join(", ");

//const isAnaHere = workers.includes('Ana')
//console.log(workers);

function isWorkerHere(worker) {
  return workers.includes(worker);
}
console.log(isWorkerHere("Ana"), isWorkerHere("Pedro"), isWorkerHere("Zé"));

//workers(1) = undefined

workers.splice(1, 1);
