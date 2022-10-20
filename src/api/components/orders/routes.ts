import {Request, Response} from 'express';


const express = require('express');
const router = express.Router();
const controller = new (require('./controller').OrderController)();

router.get(
  '/begin/:first/:second',
   async(req: Request, res: Response) => {
    try {
      const firstDate: string = req.params.first;
      const secondDate: string = req.params.second;

      console.log("this is firsr", firstDate, secondDate);
      

      const result = await controller.getReport(firstDate, secondDate);
      console.log(result);
      
      return res.send({takings: result})
    } catch (error) {
      return res.status(500).send({
        success: false,
        content: {},
        message: `Internal server error`,
        code: 500
      })
    }
  })

.get(
  '/', 
   async (req: Request, res: Response) => {
    try {
      const result = await controller.getAllOrders();
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send({
        success: false,
        content: {},
        message: `Internal server error`,
        code: 500,
      });
    }
  })


export = router;
