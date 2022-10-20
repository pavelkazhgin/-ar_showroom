import { Console } from "console";

require('dotenv').config();

const { Pool } = require("pg");

const USER = process.env.PG_USER;
const PG_HOST = process.env.PG_HOST;
const PG_DATABASE = process.env.PG_DATABASE;
const PG_PASS = process.env.PG_PASS;
const PG_PORT = process.env.PG_PORT;

class PoolPg { 
  
  private static instance: Promise<typeof Pool | null> =  new PoolPg().connect();
  constructor() { }
  static async getInstance() {
      if (!PoolPg.instance) {
          PoolPg.instance = await new PoolPg().connect();
      }
      return PoolPg.instance;
  }
   async connect(): Promise<typeof Pool | null> {
    try {
        const pool = new Pool({
          user: USER,
          host: PG_HOST,
          database: PG_DATABASE,
          password: PG_PASS,
          port: PG_PORT,
          max: 50,
          idleTimeoutMillis: 30000,
          connectionTimeoutMillis: 10000,
        });
        const client = await pool.connect();
        console.log(
            `Connected to ${PG_DATABASE} database`
        );
        return client;
    } catch (err: any) {
        console.error(err);
        return null;
    }
}
}

class PostgresORM {
    constructor() { }
    async request(query: string) {
        try {
            const connection = await PoolPg.getInstance();
            if (!connection) {
                return null;
            }
            const result = await connection.query(query);
            console.log(
                `Requested to ${PG_DATABASE} database`
            );
            return result;
        } catch (err: any) {
            console.error(err.message);
            return null;
        }
    }
}

module.exports = { PostgresORM };
