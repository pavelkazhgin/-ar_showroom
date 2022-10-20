
const db = new (require("./repository").OrderDatabase)();

export class OrderController {
  constructor() { }

 async getReport(firsDate: string, secondDate: string) {
      let result: any[] = await db.Report(firsDate, secondDate)
      let takings = 0;
      for (let i = 0; i < result.length; i++){
        takings = takings + result[i].price;
      } 
      return takings;
  }

   async getAllOrders(){
      
      let result = await db.getAllOrders();
      return result
  }

}


module.exports = {
  OrderController,
};
