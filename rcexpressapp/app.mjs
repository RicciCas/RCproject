import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.mjs';
import usersRouter from './routes/users.mjs';

// Create the express app
const app = express();

// Set up the view engine
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'pug');

// Serve Bootstrap and jQuery files
app.use('/css', express.static(path.join(process.cwd(), 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(process.cwd(), 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(process.cwd(), 'node_modules/jquery/dist')));

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'public')));
// Route handlers
app.use('/', indexRouter);
app.use('/users', usersRouter);
// Catch 404 and forward to error handler
app.use((req, res, next) => {
next(createError(404));
});
// Error handler
app.use((err, req, res, next) => {
// Set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};
// Render the error page
res.status(err.status || 500);
res.render('error');
});
export default app;
