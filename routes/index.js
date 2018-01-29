//import homepageRouter from './routers/users';
//import listingRouter from './routers/listings';
import listingsRouter from './routers/listings';
import employeesRouter from './routers/employees';
export default (app) => {
  //app.use('/', homepageRouter);
  //app.use('/listings', listingRouter);
  app.use('/listings',listingsRouter);
  app.use('/employees',employeesRouter);
}