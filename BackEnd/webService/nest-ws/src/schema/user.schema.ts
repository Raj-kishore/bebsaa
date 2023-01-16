import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
  import {
    Document
  } from 'mongoose';
  
  export type UserDocument = User & Document;
  
  @Schema()
  export class User {
    @Prop()
    FirstName: string;
  
    @Prop()
    SurName: string;

    @Prop()
    Gender: string;
  
    @Prop()
    Email: string;


  
    @Prop()
    Address: string;

    @Prop()
    Age: string;
  
  }
  
  export const UserSchema = SchemaFactory.createForClass(User);