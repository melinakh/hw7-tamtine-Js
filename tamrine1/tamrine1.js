function NetworkClass(className, classUnit, classCapacity, project) {
  this.className = className;
  this.classUnit = classUnit;
  this.classCapacity = classCapacity;
  this.project = project;
}
const netWork = new NetworkClass("network", 3, 30, true);
console.log(netWork);

function SoftEngineeringClass(className, classUnit, classCapacity, book) {
  this.className = className;
  this.classUnit = classUnit;
  this.classCapacity = classCapacity;
  this.book = book;
}
const softEngineering = new SoftEngineeringClass(
  "softEngineering",
  3,
  50,
  "HarryPatter"
);
console.log(softEngineering);
