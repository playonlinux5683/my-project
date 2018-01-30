import mongoose = require("mongoose");

import { IUser } from './i-user';

export interface IUserModel extends IUser, mongoose.Document { }
