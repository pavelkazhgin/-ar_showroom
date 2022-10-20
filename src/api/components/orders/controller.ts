
const db = new (require("./repository").OrderDatabase)();

export class OrderController {
  constructor() { }

  getReport(firsDate: string, secondDate: string): number  {
      let result: any[] = db.Report(firsDate, secondDate)
      let takings = 0;
      for (let i = 0; i < result.length; i++){
        takings = takings + result[i].price;
      } 
      return takings;
  }

   getAllOrders(){

      let result = db.getAllOrders()
      return result
  }

}


module.exports = {
  OrderController,
};
