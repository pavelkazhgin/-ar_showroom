
const {PostgresORM} = require('../../services/Database');
const pg = new PostgresORM();

export class OrderDatabase {
  constructor() { }
  
 async Report(firsDate: string, secondDate: string){
    const {rows} = await pg.request(`SELECT price FROM orders WHERE created_at BETWEEN '${firsDate}' AND  '${secondDate}'`)
    if (!rows || rows.length === 0){
      return null;
    }else{
      return rows;
    }
  }

  async getAllOrders(){
    const {rows} = await pg.request(`SELECT 
    (SELECT name FROM clients  WHERE clients.id = orders.client_id ) AS clients_name,
    (SELECT number FROM clients  WHERE clients.id = orders.client_id) AS clients_number,
    price, created_at,
    (SELECT model FROM car_models WHERE id = orders.car_id), amount 
    FROM orders ORDER BY orders.created_at, clients_name DESC,  orders.price `);    
    if ( rows.length === 0 || !rows[0]){
      return null;
    }else{
      return rows;
    }
  }

  

}

module.exports = {OrderDatabase};
