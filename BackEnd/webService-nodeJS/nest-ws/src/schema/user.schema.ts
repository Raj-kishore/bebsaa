import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
  import {
    Document
  } from 'mongoose';
  import { IsString, IsNumber, IsOptional, IsUUID, Min, Max } from 'class-validator';
  
  export type UserDocument = User & Document;
  
  @Schema()
  export class User {
    // @Prop()
    // FirstName: string;
  
    // @Prop()
    // SurName: string;

    // @Prop()
    // Gender: string;
  
    @Prop({
      required: true
    })
    Email: string;

    @Prop({
      required: true
    })
    Password: string;

    // @Prop()
    // isVerified: boolean; // isVerified is false until the user verifies account through OTP in mail or message
  
    // @Prop()
    // Address: string;

    // @Prop()
    // Age: string;
  
  }
  
  export const UserSchema = SchemaFactory.createForClass(User);