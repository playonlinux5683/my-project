const mongoose = require('./../database/connection');
import { IUserModel } from './../interfaces/i-user-model';

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  displayName: String
});

const User = mongoose.model<IUserModel>('User', userSchema);

export = User;